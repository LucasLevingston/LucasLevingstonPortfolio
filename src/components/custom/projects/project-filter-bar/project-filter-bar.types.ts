import type { UseProjectFiltersResult } from '@/hooks/use-project-filters'

export interface ProjectFilterBarProps {
  filters: UseProjectFiltersResult
  totalCount: number
}
