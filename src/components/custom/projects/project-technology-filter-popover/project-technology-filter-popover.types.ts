import type { ProjectFilterState } from '@/hooks/use-project-filters'
import type { PROJECT_FILTER_TOGGLES } from '@/lib/utils/constants/project-filter-toggles'

export interface ProjectTechnologyFilterPopoverProps {
  activeFiltersCount: number
  filter: ProjectFilterState
  onClearTechnologySearch: () => void
  onSetBooleanFilter: (
    filterKey: (typeof PROJECT_FILTER_TOGGLES)[number]['filterKey'],
    value: boolean
  ) => void
  onTechnologySearchChange: (value: string) => void
  onToggleTechnology: (technology: string) => void
  uniqueTechnologies: string[]
}
