import type { ProjectFilterState } from '@/hooks/use-project-filters'
import type { PROJECT_FILTER_TOGGLES } from '@/lib/utils/constants/project-filter-toggles'

export interface ProjectTechnologyFilterPopoverProps {
  filter: ProjectFilterState
  uniqueTechnologies: string[]
  activeFiltersCount: number
  onTechnologySearchChange: (value: string) => void
  onClearTechnologySearch: () => void
  onToggleTechnology: (technology: string) => void
  onSetBooleanFilter: (
    filterKey: (typeof PROJECT_FILTER_TOGGLES)[number]['filterKey'],
    value: boolean
  ) => void
}
