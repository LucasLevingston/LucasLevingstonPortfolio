#!/usr/bin/env node
/**
 * Vitest launcher that canonicalizes the working directory first.
 *
 * On Windows, a terminal opened on `d:\...` (lowercase drive letter, which is
 * what VS Code uses when the folder was opened that way) makes Node load the
 * Vitest CLI through `d:/...` while Vite resolves test-file imports of
 * `vitest` through the canonical `D:/...` path. Vitest 5 then ends up with two
 * module instances and every suite fails with
 * "Cannot read properties of undefined (reading 'config')".
 *
 * Normalizing cwd and loading the CLI from its canonical path keeps a single
 * instance. On macOS/Linux this is a no-op.
 */
import { realpathSync } from 'node:fs'
import path from 'node:path'
import { pathToFileURL } from 'node:url'

process.chdir(realpathSync.native(process.cwd()))

// `vitest/vitest.mjs` is the package bin, which is not listed in "exports",
// so it is located on disk instead of through require.resolve.
const cliPath = realpathSync.native(
  path.join(process.cwd(), 'node_modules', 'vitest', 'vitest.mjs')
)

await import(pathToFileURL(cliPath).href)
