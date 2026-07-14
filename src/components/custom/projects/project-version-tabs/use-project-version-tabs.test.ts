import { act, renderHook } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import type { ProjectVersion } from '@/types/ProjectType'
import { useProjectVersionTabs } from './use-project-version-tabs'

function buildVersions(count: number): ProjectVersion[] {
  return Array.from({ length: count }, (_, index) => ({
    name: `v${index + 1}`,
    technologies: ['react'],
  }))
}

describe('useProjectVersionTabs', () => {
  it('selects the last version by default', () => {
    const { result } = renderHook(() => useProjectVersionTabs(buildVersions(3)))

    expect(result.current.selectedVersion).toBe('2')
  })

  it('selects index 0 by default when there is a single version', () => {
    const { result } = renderHook(() => useProjectVersionTabs(buildVersions(1)))

    expect(result.current.selectedVersion).toBe('0')
  })

  it('updates the selected version via setSelectedVersion', () => {
    const { result } = renderHook(() => useProjectVersionTabs(buildVersions(3)))

    act(() => {
      result.current.setSelectedVersion('0')
    })

    expect(result.current.selectedVersion).toBe('0')
  })
})
