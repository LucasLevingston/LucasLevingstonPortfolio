'use client'

import { X } from 'lucide-react'
import { useTranslation } from 'react-i18next'
import TechnologyIcon from '@/components/Icon/TechnologyIcon'
import { CustomBadge } from '@/components/custom/custom-badge'
import { Button } from '@/components/ui/button'
import type { ProjectActiveFilterBadge } from '@/hooks/use-project-filters'

interface ProjectActiveFilterBadgesProps {
  badges: ProjectActiveFilterBadge[]
}

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
            <p className="capitalize">
              {badge.kind === 'technology'
                ? badge.label
                : badge.toggle.labelKey.startsWith('projects.')
                  ? t(badge.toggle.labelKey)
                  : badge.toggle.labelKey}
            </p>
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
