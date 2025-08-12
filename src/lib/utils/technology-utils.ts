import type { ProjectType } from '@/types/ProjectType'

export function countTechnologyFrequency(
  projects: ProjectType[]
): Record<string, number> {
  const technologyCount: Record<string, number> = {}

  projects.map(project => {
    return project.technologies.map(tech => {
      technologyCount[tech] = (technologyCount[tech] || 0) + 1
    })
  })

  return technologyCount
}

export function sortTechnologiesByFrequency(
  technologies: string[],
  projects: ProjectType[]
): string[] {
  const frequencyMap = countTechnologyFrequency(projects)

  return technologies.sort((a, b) => {
    const freqA = frequencyMap[a] || 0
    const freqB = frequencyMap[b] || 0

    if (freqA !== freqB) {
      return freqB - freqA
    }
    return a.localeCompare(b)
  })
}

export function getMostUsedTechnologies(
  projects: ProjectType[],
  limit?: number
): Array<{ technology: string; count: number }> {
  const frequencyMap = countTechnologyFrequency(projects)

  const sortedTechnologies = Object.entries(frequencyMap)
    .sort(([, a], [, b]) => b - a)
    .map(([technology, count]) => ({ technology, count }))

  return limit ? sortedTechnologies.slice(0, limit) : sortedTechnologies
}
