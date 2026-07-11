import { getProjectSlug } from '@/lib/utils/project-slug'
import { sortTechnologiesByFrequency } from '@/lib/utils/technology-utils'
import type { ProjectType } from '@/types/ProjectType'

export function useProjectCard(
  project: ProjectType,
  allProjects: ProjectType[]
) {
  const sortedTechnologies = sortTechnologiesByFrequency(
    project.technologies,
    allProjects
  )
  const previewImage = project.thumbnail || project.images?.[0]
  const href = `/projects/${getProjectSlug(project.title)}`

  return { sortedTechnologies, previewImage, href }
}
