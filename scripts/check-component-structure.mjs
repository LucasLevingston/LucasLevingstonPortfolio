#!/usr/bin/env node
/**
 * Pre-commit structure gate for React components.
 *
 * For every staged .tsx file under src/components or src/views (excluding
 * the shadcn-generated src/components/ui):
 *   - flags lines >= 100 chars
 *   - flags more than one real top-level function (compound-component
 *     sub-parts assigned via `Foo.Bar = SubFn` are not counted separately)
 *   - flags an inline interface/type when no sibling *.types.ts exists
 *   - flags direct hook calls (useState/useEffect/...) when no sibling
 *     use-*.ts file exists
 *   - flags a missing sibling index.ts barrel export
 *
 * Runs against whatever file paths are passed as argv (lint-staged passes
 * the staged file list), so it only ever gates what's actually being
 * committed - it does not sweep the whole repo.
 */
import fs from 'node:fs'
import path from 'node:path'
import ts from 'typescript'

const MAX_LINE_LENGTH = 100
const HOOK_NAMES = new Set([
  'useState',
  'useEffect',
  'useLayoutEffect',
  'useMemo',
  'useCallback',
  'useRef',
  'useReducer',
])

const TS_FILE_PATTERN = /\.(ts|tsx)$/
const files = process.argv.slice(2).filter(f => TS_FILE_PATTERN.test(f))
const report = []

function toPosix(file) {
  return file.replace(/\\/g, '/')
}

function isExempt(file) {
  return toPosix(file).includes('/components/ui/')
}

function isComponentFile(file) {
  const normalized = toPosix(file)
  if (!normalized.endsWith('.tsx') || isExempt(normalized)) {
    return false
  }
  return normalized.includes('/components/') || normalized.includes('/views/')
}

// Reusable folder-components (components/**, excluding shadcn's ui/) get the
// full treatment: index.ts barrel + use-*.ts extraction for direct hooks.
// Views (views/**) are the composition root itself - they're expected to
// call hooks directly and aren't re-exported via a barrel, so those two
// checks don't apply to them.
function isFolderComponentFile(file) {
  const normalized = toPosix(file)
  return isComponentFile(normalized) && normalized.includes('/components/')
}

function topLevelFunctionNames(sourceFile) {
  const names = new Set()

  for (const stmt of sourceFile.statements) {
    if (ts.isFunctionDeclaration(stmt) && stmt.name) {
      names.add(stmt.name.text)
    } else if (ts.isVariableStatement(stmt)) {
      for (const decl of stmt.declarationList.declarations) {
        if (
          decl.initializer &&
          (ts.isArrowFunction(decl.initializer) ||
            ts.isFunctionExpression(decl.initializer)) &&
          ts.isIdentifier(decl.name)
        ) {
          names.add(decl.name.text)
        }
      }
    }
  }

  // Compound-component pattern (Foo.Bar = SubFn) absorbs the sub-part into
  // the main export - it's one cohesive component, not two responsibilities.
  for (const stmt of sourceFile.statements) {
    if (
      ts.isExpressionStatement(stmt) &&
      ts.isBinaryExpression(stmt.expression) &&
      stmt.expression.operatorToken.kind === ts.SyntaxKind.EqualsToken &&
      ts.isPropertyAccessExpression(stmt.expression.left) &&
      ts.isIdentifier(stmt.expression.right)
    ) {
      names.delete(stmt.expression.right.text)
    }
  }

  return [...names]
}

function hasTopLevelTypeOrInterface(sourceFile) {
  return sourceFile.statements.some(
    stmt => ts.isInterfaceDeclaration(stmt) || ts.isTypeAliasDeclaration(stmt)
  )
}

function usesHooksDirectly(sourceFile) {
  let found = false
  function visit(node) {
    if (found) {
      return
    }
    if (
      ts.isCallExpression(node) &&
      ts.isIdentifier(node.expression) &&
      HOOK_NAMES.has(node.expression.text)
    ) {
      found = true
      return
    }
    ts.forEachChild(node, visit)
  }
  visit(sourceFile)
  return found
}

function hasSibling(dir, pattern) {
  if (!fs.existsSync(dir)) {
    return false
  }
  return fs.readdirSync(dir).some(name => pattern.test(name))
}

for (const file of files) {
  if (!fs.existsSync(file) || isExempt(file)) {
    continue
  }

  const source = fs.readFileSync(file, 'utf8')
  const lines = source.split('\n')

  lines.forEach((line, i) => {
    if (line.length >= MAX_LINE_LENGTH) {
      report.push(
        `${file}:${i + 1} — line has ${line.length} chars (must be < ${MAX_LINE_LENGTH})`
      )
    }
  })

  if (!isComponentFile(file)) {
    continue
  }

  const sourceFile = ts.createSourceFile(
    file,
    source,
    ts.ScriptTarget.Latest,
    true,
    ts.ScriptKind.TSX
  )

  const dir = path.dirname(file)

  const fnNames = topLevelFunctionNames(sourceFile)
  if (fnNames.length > 1) {
    report.push(
      `${file} — has ${fnNames.length} top-level functions (${fnNames.join(', ')}); split into separate component files`
    )
  }

  if (
    hasTopLevelTypeOrInterface(sourceFile) &&
    !hasSibling(dir, /\.types\.ts$/)
  ) {
    report.push(
      `${file} — defines type/interface inline; move it to a sibling *.types.ts file`
    )
  }

  if (isFolderComponentFile(file)) {
    if (usesHooksDirectly(sourceFile) && !hasSibling(dir, /^use-.*\.ts$/)) {
      report.push(
        `${file} — calls React hooks directly; extract the logic into a sibling use-*.ts hook`
      )
    }

    if (!hasSibling(dir, /^index\.tsx?$/)) {
      report.push(`${file} — missing a sibling index.ts export file in ${dir}`)
    }
  }
}

if (report.length > 0) {
  console.error('\nComponent structure check failed:\n')
  for (const line of report) {
    console.error(`  ${line}`)
  }
  console.error(`\n${report.length} issue(s) found.\n`)
  process.exit(1)
}
