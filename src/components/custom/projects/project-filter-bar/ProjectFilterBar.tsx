'use client'

import { RotateCcw, Search, X } from 'lucide-react'
import { useTranslation } from 'react-i18next'
import { CustomBadge } from '@/components/custom/custom-badge'
import { CustomButton } from '@/components/custom/custom-button'
import { ProjectActiveFilterBadges } from '@/components/custom/projects/project-active-filter-badges'
import { ProjectTechnologyFilterPopover } from '@/components/custom/projects/project-technology-filter-popover'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { cn } from '@/lib/utils/cn'
import type { ProjectFilterBarProps } from './project-filter-bar.types'
import { useProjectFilterBar } from './use-project-filter-bar'

const SEARCH_ICON_CLASS_NAME =
  'absolute top-1/2 left-3 h-4 w-4 -translate-y-1/2 transform !text-mainColor'

const CLEAR_SEARCH_CLASS_NAME = cn(
  'absolute top-1/2 right-1 h-6 w-6 -translate-y-1/2 transform p-0',
  'hover:bg-lightMainColor'
)

export function ProjectFilterBar({
  filters,
  totalCount,
}: ProjectFilterBarProps) {
  const { t } = useTranslation()
  const {
    filter,
    filteredProjects,
    uniqueTechnologies,
    activeFiltersCount,
    activeFilterBadges,
    handleSearchChange,
    clearSearch,
    handleTechnologySearchChange,
    clearTechnologySearch,
    clearAllFilters,
    toggleTechnology,
    setBooleanFilter,
  } = filters
  const { handleSearchInputChange } = useProjectFilterBar(handleSearchChange)

  return (
    <Card>
      <CardContent className="pt-6">
        <div className="flex flex-col gap-4 md:flex-row md:items-center">
          <ProjectTechnologyFilterPopover
            activeFiltersCount={activeFiltersCount}
            filter={filter}
            onClearTechnologySearch={clearTechnologySearch}
            onSetBooleanFilter={setBooleanFilter}
            onTechnologySearchChange={handleTechnologySearchChange}
            onToggleTechnology={toggleTechnology}
            uniqueTechnologies={uniqueTechnologies}
          />
          <div className="relative max-w-md flex-1">
            <Search className={SEARCH_ICON_CLASS_NAME} />
            <Input
              className="border-mainBorder pr-10 pl-10 text-sm focus:border-mainColor"
              onChange={handleSearchInputChange}
              placeholder={t('projects.search')}
              type="text"
              value={filter.searchTerm}
            />
            {filter.searchTerm ? (
              <Button
                className={CLEAR_SEARCH_CLASS_NAME}
                onClick={clearSearch}
                size="sm"
                variant="ghost"
              >
                <X className="h-3 w-3 !text-mainColor" />
              </Button>
            ) : null}
          </div>
          {filteredProjects.length !== totalCount && (
            <CustomButton onClick={clearAllFilters}>
              <CustomButton.Icon>
                <RotateCcw />
              </CustomButton.Icon>
              <CustomButton.Text>{t('projects.clear')}</CustomButton.Text>
            </CustomButton>
          )}
          <div className="flex items-center gap-2">
            <CustomBadge className="rounded-4xl" variant="outline">
              {filteredProjects.length} {t('projects.filteredResults')}
            </CustomBadge>
          </div>
        </div>
        {activeFiltersCount > 0 && (
          <ProjectActiveFilterBadges badges={activeFilterBadges} />
        )}
      </CardContent>
    </Card>
  )
}
