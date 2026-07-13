import { useMemo } from 'react'
import { sortTechnologiesByFrequency } from '@/lib/utils/technology-utils'
import type { ProjectType } from '@/types/ProjectType'

export function useProjectDetails(
  project: ProjectType,
  allProjects: ProjectType[]
) {
  const { technologies, showEvolution, versions } = project

  const sortedTechnologies = useMemo(
    () => sortTechnologiesByFrequency(technologies, allProjects),
    [technologies, allProjects]
  )
  const hasVersions = Boolean(showEvolution && versions && versions.length > 0)

  return { sortedTechnologies, hasVersions }
}
