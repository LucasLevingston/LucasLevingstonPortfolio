import { describe, expect, it } from 'vitest'
import type { ProjectType } from '@/types/ProjectType'
import { certificatesDataBr, certificatesDataEn } from './certificates-data'
import { projectsDataBr, projectsDataEn } from './projects-data'
import { technologiesDataBr, technologiesDataEn } from './technology-data'

function collectProjectTechnologyKeys(projects: ProjectType[]): string[] {
  const keys: string[] = []
  for (const project of projects) {
    keys.push(...project.technologies)
    for (const version of project.versions ?? []) {
      keys.push(...version.technologies)
    }
  }
  return keys
}

function collectCertificateTechnologyKeys(
  certificates: { technologies?: string[] }[]
): string[] {
  return certificates.flatMap(certificate => certificate.technologies ?? [])
}

const referencedTechnologyKeys = Array.from(
  new Set([
    ...collectProjectTechnologyKeys(projectsDataBr),
    ...collectProjectTechnologyKeys(projectsDataEn),
    ...collectCertificateTechnologyKeys(certificatesDataBr),
    ...collectCertificateTechnologyKeys(certificatesDataEn),
  ])
).sort()

describe('technology data integrity', () => {
  it('references at least one technology (sanity check for the collector)', () => {
    expect(referencedTechnologyKeys.length).toBeGreaterThan(0)
  })

  it.each(referencedTechnologyKeys)(
    'has a technologiesDataBr entry for "%s"',
    key => {
      expect(technologiesDataBr[key]).toBeDefined()
    }
  )

  it.each(referencedTechnologyKeys)(
    'has a technologiesDataEn entry for "%s"',
    key => {
      expect(technologiesDataEn[key]).toBeDefined()
    }
  )
})
