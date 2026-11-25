import type { ProjectType } from '@/types/ProjectType'

export interface ProjectListProps {
  allProjects: ProjectType[]
  onClearFilters: () => void
  projects: ProjectType[]
}
