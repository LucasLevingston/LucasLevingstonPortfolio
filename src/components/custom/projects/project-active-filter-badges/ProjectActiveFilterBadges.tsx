'use client'

import { X } from 'lucide-react'
import { useTranslation } from 'react-i18next'
import { CustomBadge } from '@/components/custom/custom-badge'
import TechnologyIcon from '@/components/Icon/TechnologyIcon'
import { Button } from '@/components/ui/button'
import { getBadgeLabel } from './get-badge-label'
import type { ProjectActiveFilterBadgesProps } from './project-active-filter-badges.types'

export function ProjectActiveFilterBadges({
  badges,
}: ProjectActiveFilterBadgesProps) {
  const { t } = useTranslation()

  if (badges.length === 0) {
    return null
  }

  return (
    <div className="mt-4 border-mainBorder border-t pt-4 dark:border-main-border-dark">
      <div className="flex flex-wrap gap-2">
        {badges.map(badge => (
          <CustomBadge
            className="flex items-center gap-2 p-2 text-xs"
            key={badge.id}
            variant="outline"
          >
            {badge.kind === 'technology' ? (
              <TechnologyIcon technology={badge.label} />
            ) : (
              <badge.toggle.icon className="h-3 w-3" />
            )}
            <p className="capitalize">{getBadgeLabel(badge, t)}</p>
            <Button
              className="ml-1 h-3 w-3 p-0"
              onClick={badge.clearAction}
              size="sm"
              variant="ghost"
            >
              <X className="h-4 w-4 !text-mainColor" />
            </Button>
          </CustomBadge>
        ))}
      </div>
    </div>
  )
}
