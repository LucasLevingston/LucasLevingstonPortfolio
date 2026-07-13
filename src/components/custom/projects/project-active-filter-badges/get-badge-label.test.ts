import { describe, expect, it, vi } from 'vitest'
import type { ProjectActiveFilterBadge } from '@/hooks/use-project-filters'
import { PROJECT_FILTER_TOGGLES } from '@/lib/utils/constants/project-filter-toggles'
import { getBadgeLabel } from './get-badge-label'

describe('getBadgeLabel', () => {
  it('returns the raw label for a technology badge', () => {
    const badge: ProjectActiveFilterBadge = {
      id: 'react',
      kind: 'technology',
      label: 'react',
      clearAction: vi.fn(),
    }

    expect(getBadgeLabel(badge, key => key)).toBe('react')
  })

  it('translates a toggle badge whose labelKey is a projects.* key', () => {
    const toggle = PROJECT_FILTER_TOGGLES.find(
      entry => entry.key === 'hasImage'
    )
    if (!toggle) throw new Error('hasImage toggle not found')

    const badge: ProjectActiveFilterBadge = {
      id: toggle.key,
      kind: 'toggle',
      toggle,
      clearAction: vi.fn(),
    }
    const t = vi.fn((key: string) => `translated:${key}`)

    expect(getBadgeLabel(badge, t)).toBe('translated:projects.hasImage')
    expect(t).toHaveBeenCalledWith('projects.hasImage')
  })

  it('returns the raw labelKey for a toggle badge that is not a projects.* key', () => {
    const toggle = PROJECT_FILTER_TOGGLES.find(
      entry => entry.key === 'hasGitHub'
    )
    if (!toggle) throw new Error('hasGitHub toggle not found')

    const badge: ProjectActiveFilterBadge = {
      id: toggle.key,
      kind: 'toggle',
      toggle,
      clearAction: vi.fn(),
    }
    const t = vi.fn((key: string) => `translated:${key}`)

    expect(getBadgeLabel(badge, t)).toBe('GitHub')
    expect(t).not.toHaveBeenCalled()
  })
})
