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
import type { UseProjectFiltersResult } from '@/hooks/use-project-filters'

interface ProjectFilterBarProps {
  filters: UseProjectFiltersResult
  totalCount: number
}

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
            <Search className="absolute top-1/2 left-3 h-4 w-4 -translate-y-1/2 transform !text-mainColor" />
            <Input
              className="border-mainBorder pr-10 pl-10 text-sm focus:border-red-500 dark:border-main-border-dark"
              onChange={e => handleSearchChange(e.target.value)}
              placeholder={t('projects.search')}
              type="text"
              value={filter.searchTerm}
            />
            {filter.searchTerm && (
              <Button
                className="absolute top-1/2 right-1 h-6 w-6 -translate-y-1/2 transform p-0 hover:bg-lightMainColor dark:hover:bg-light-main-color-dark"
                onClick={clearSearch}
                size="sm"
                variant="ghost"
              >
                <X className="h-3 w-3 !text-mainColor" />
              </Button>
            )}
          </div>
          {filteredProjects.length !== totalCount && (
            <CustomButton onClick={clearAllFilters}>
              <CustomButton.Icon>
                <RotateCcw />
              </CustomButton.Icon>
              <CustomButton.Label>{t('projects.clear')}</CustomButton.Label>
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
