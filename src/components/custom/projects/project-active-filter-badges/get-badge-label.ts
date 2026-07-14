import type { ProjectActiveFilterBadge } from '@/hooks/use-project-filters'

export function getBadgeLabel(
  badge: ProjectActiveFilterBadge,
  t: (key: string) => string
) {
  if (badge.kind === 'technology') {
    return badge.label
  }
  if (badge.toggle.labelKey.startsWith('projects.')) {
    return t(badge.toggle.labelKey)
  }
  return badge.toggle.labelKey
}
