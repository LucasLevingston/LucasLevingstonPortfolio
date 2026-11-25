import type { ProjectVersion } from '@/types/ProjectType'

export interface ProjectVersionTabsProps {
  isMobile?: boolean
  paginationImages?: string[]
  versions: ProjectVersion[]
}
