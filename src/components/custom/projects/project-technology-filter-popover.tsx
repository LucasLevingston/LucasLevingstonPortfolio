'use client'

import { Filter, Monitor, Search, X } from 'lucide-react'
import { useTranslation } from 'react-i18next'
import TechnologyIcon from '@/components/Icon/TechnologyIcon'
import { CustomBadge } from '@/components/custom/custom-badge'
import { CustomButton } from '@/components/custom/custom-button'
import { CustomToggle } from '@/components/custom/custom-toggle'
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '@/components/ui/popover'
import { Input } from '@/components/ui/input'
import type { ProjectFilterState } from '@/hooks/use-project-filters'
import { PROJECT_FILTER_TOGGLES } from '@/lib/constants/project-filter-toggles'
import { getTechnologyData } from '@/lib/utils/getTechnologyData'

interface ProjectTechnologyFilterPopoverProps {
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

export function ProjectTechnologyFilterPopover({
  filter,
  uniqueTechnologies,
  activeFiltersCount,
  onTechnologySearchChange,
  onClearTechnologySearch,
  onToggleTechnology,
  onSetBooleanFilter,
}: ProjectTechnologyFilterPopoverProps) {
  const { t } = useTranslation()

  return (
    <Popover>
      <CustomButton asChild>
        <PopoverTrigger>
          <Filter className="mr-2 h-4 w-4 text-mainColor" />
          {t('projects.filterByTechnology')}
          {activeFiltersCount > 0 && (
            <CustomBadge className="rounded-full">
              {activeFiltersCount}
            </CustomBadge>
          )}
        </PopoverTrigger>
      </CustomButton>
      <PopoverContent align="start" className="w-[400px]">
        <div className="space-y-4">
          <div>
            <h4 className="mb-3 flex items-center gap-2 text-sm font-medium text-foreground">
              <Monitor className="h-4 w-4 !text-mainColor" />
              {t('projects.technologies')}
            </h4>
            <div className="relative mb-4">
              <Search className="absolute top-1/2 left-3 h-4 w-4 -translate-y-1/2 transform !text-mainColor" />
              <Input
                className="border-mainBorder pr-10 pl-10 text-sm"
                onChange={e => onTechnologySearchChange(e.target.value)}
                placeholder={t('projects.search')}
                type="text"
                value={filter.technologySearchTerm}
              />
              {filter.technologySearchTerm && (
                <CustomButton
                  className="absolute top-1/2 right-1 h-6 w-6 -translate-y-1/2 transform p-0 hover:bg-lightMainColor"
                  onClick={onClearTechnologySearch}
                  size="sm"
                  variant="ghost"
                >
                  <X className="h-3 w-3 !text-mainColor" />
                </CustomButton>
              )}
            </div>
            <div className="grid grid-cols-3 gap-2">
              {uniqueTechnologies.length > 0 ? (
                uniqueTechnologies.map(tech => (
                  <CustomToggle
                    key={tech}
                    onPressedChange={() => onToggleTechnology(tech)}
                    pressed={filter.selectedTechnologies.includes(tech)}
                  >
                    <TechnologyIcon technology={tech} />
                    <CustomToggle.Label>
                      {getTechnologyData(tech)?.label}
                    </CustomToggle.Label>
                  </CustomToggle>
                ))
              ) : (
                <p className="col-span-3 text-center text-sm text-muted-foreground">
                  {t('projects.noTechnologiesFound')}
                </p>
              )}
            </div>
          </div>
          <div className="border-t pt-4">
            <h4 className="mb-3 flex items-center gap-2 text-sm font-medium text-foreground">
              <Filter className="h-4 w-4 !text-mainColor" />
              {t('projects.filterBy')}
            </h4>
            <div className="grid grid-cols-3 gap-2">
              {PROJECT_FILTER_TOGGLES.map(toggle => (
                <CustomToggle
                  key={toggle.key}
                  onPressedChange={value =>
                    onSetBooleanFilter(toggle.filterKey, value)
                  }
                  pressed={filter[toggle.filterKey]}
                >
                  <CustomToggle.Icon>
                    <toggle.icon className="h-4 w-4" />
                  </CustomToggle.Icon>
                  <CustomToggle.Label>
                    {toggle.labelKey.startsWith('projects.')
                      ? t(toggle.labelKey)
                      : toggle.labelKey}
                  </CustomToggle.Label>
                </CustomToggle>
              ))}
            </div>
          </div>
        </div>
      </PopoverContent>
    </Popover>
  )
}
