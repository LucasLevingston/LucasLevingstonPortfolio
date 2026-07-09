import { projectsDataBr, projectsDataEn } from '@/data/projects-data'
import { slugify } from './slugify'

const slugsBr = projectsDataBr.map(project => slugify(project.title))
const slugsEn = projectsDataEn.map(project => slugify(project.title))

export function getProjectSlug(title: string): string {
  return slugify(title)
}

export function getProjectIndexBySlug(slug: string): number {
  const brIndex = slugsBr.indexOf(slug)
  if (brIndex !== -1) {
    return brIndex
  }
  return slugsEn.indexOf(slug)
}
