import { act, renderHook } from '@testing-library/react'
import { beforeEach, describe, expect, it, vi } from 'vitest'
import type { ProjectType } from '@/types/ProjectType'
import { useProjectFilters } from './use-project-filters'

vi.mock('@/lib/utils/getTechnologyData', () => ({
  getTechnologyData: (key: string) => ({ key, label: key }),
}))

const projects: ProjectType[] = [
  {
    title: 'Alpha',
    description: 'alpha project',
    technologies: ['react', 'typescript'],
    images: ['alpha.png'],
    repositoryUrl: 'https://github.com/x/alpha',
    link: 'https://alpha.dev',
    isMobile: false,
    frontEndRepositoryUrl: 'https://github.com/x/alpha-front',
  },
  {
    title: 'Beta Mobile',
    description: 'beta project',
    technologies: ['reactnative', 'typescript'],
    isMobile: true,
    backEndRepositoryUrl: 'https://github.com/x/beta-back',
  },
  {
    title: 'Gamma',
    description: 'gamma project',
    technologies: ['vue'],
    isMobile: false,
  },
]

describe('useProjectFilters', () => {
  beforeEach(() => {
    window.history.pushState({}, '', '/')
  })

  it('returns every project and technology by default', () => {
    const { result } = renderHook(() => useProjectFilters(projects))

    expect(result.current.filteredProjects).toHaveLength(3)
    expect(result.current.uniqueTechnologies).toEqual(
      expect.arrayContaining(['react', 'typescript', 'reactnative', 'vue'])
    )
    expect(result.current.activeFiltersCount).toBe(0)
  })

  it('filters by hasImage', () => {
    const { result } = renderHook(() => useProjectFilters(projects))

    act(() => {
      result.current.setBooleanFilter('hasImage', true)
    })

    expect(result.current.filteredProjects.map(p => p.title)).toEqual(['Alpha'])
  })

  it('filters by hasGitHub', () => {
    const { result } = renderHook(() => useProjectFilters(projects))

    act(() => {
      result.current.setBooleanFilter('hasGitHub', true)
    })

    expect(result.current.filteredProjects.map(p => p.title)).toEqual(['Alpha'])
  })

  it('filters by hasDeploy', () => {
    const { result } = renderHook(() => useProjectFilters(projects))

    act(() => {
      result.current.setBooleanFilter('hasDeploy', true)
    })

    expect(result.current.filteredProjects.map(p => p.title)).toEqual(['Alpha'])
  })

  it('filters by isMobile', () => {
    const { result } = renderHook(() => useProjectFilters(projects))

    act(() => {
      result.current.setBooleanFilter('isMobile', true)
    })

    expect(result.current.filteredProjects.map(p => p.title)).toEqual([
      'Beta Mobile',
    ])
  })

  it('filters by isFrontEnd', () => {
    const { result } = renderHook(() => useProjectFilters(projects))

    act(() => {
      result.current.setBooleanFilter('isFrontEnd', true)
    })

    expect(result.current.filteredProjects.map(p => p.title)).toEqual(['Alpha'])
  })

  it('filters by isBackEnd', () => {
    const { result } = renderHook(() => useProjectFilters(projects))

    act(() => {
      result.current.setBooleanFilter('isBackEnd', true)
    })

    expect(result.current.filteredProjects.map(p => p.title)).toEqual([
      'Beta Mobile',
    ])
  })

  it('filters by selected technologies (every selected technology must match)', () => {
    const { result } = renderHook(() => useProjectFilters(projects))

    act(() => {
      result.current.toggleTechnology('typescript')
    })
    expect(result.current.filteredProjects).toHaveLength(2)

    act(() => {
      result.current.toggleTechnology('react')
    })
    expect(result.current.filteredProjects.map(p => p.title)).toEqual(['Alpha'])
  })

  it('toggleTechnology removes a technology that is already selected', () => {
    const { result } = renderHook(() => useProjectFilters(projects))

    act(() => {
      result.current.toggleTechnology('vue')
    })
    expect(result.current.filter.selectedTechnologies).toEqual(['vue'])

    act(() => {
      result.current.toggleTechnology('vue')
    })
    expect(result.current.filter.selectedTechnologies).toEqual([])
  })

  it('filters by search term matching the project title, case-insensitively', () => {
    const { result } = renderHook(() => useProjectFilters(projects))

    act(() => {
      result.current.handleSearchChange('gamma')
    })

    expect(result.current.filteredProjects.map(p => p.title)).toEqual(['Gamma'])
    expect(window.location.search).toContain('search=gamma')
  })

  it('clearSearch resets the search term and the URL param', () => {
    const { result } = renderHook(() => useProjectFilters(projects))

    act(() => {
      result.current.handleSearchChange('gamma')
    })
    act(() => {
      result.current.clearSearch()
    })

    expect(result.current.filter.searchTerm).toBe('')
    expect(result.current.filteredProjects).toHaveLength(3)
    expect(window.location.search).toBe('')
  })

  it('combines multiple filters (isMobile + technology)', () => {
    const { result } = renderHook(() => useProjectFilters(projects))

    act(() => {
      result.current.setBooleanFilter('isMobile', true)
      result.current.toggleTechnology('typescript')
    })

    expect(result.current.filteredProjects.map(p => p.title)).toEqual([
      'Beta Mobile',
    ])
  })

  it('filters the technology list by technologySearchTerm', () => {
    const { result } = renderHook(() => useProjectFilters(projects))

    act(() => {
      result.current.handleTechnologySearchChange('react')
    })

    expect(result.current.uniqueTechnologies).toEqual(
      expect.arrayContaining(['react', 'reactnative'])
    )
    expect(result.current.uniqueTechnologies).not.toContain('vue')

    act(() => {
      result.current.clearTechnologySearch()
    })
    expect(result.current.filter.technologySearchTerm).toBe('')
  })

  it('computes activeFiltersCount and activeFilterBadges', () => {
    const { result } = renderHook(() => useProjectFilters(projects))

    act(() => {
      result.current.setBooleanFilter('hasImage', true)
      result.current.toggleTechnology('vue')
    })

    expect(result.current.activeFiltersCount).toBe(2)
    expect(result.current.activeFilterBadges).toHaveLength(2)
    expect(
      result.current.activeFilterBadges.some(
        badge => badge.kind === 'technology'
      )
    ).toBe(true)
    expect(
      result.current.activeFilterBadges.some(badge => badge.kind === 'toggle')
    ).toBe(true)
  })

  it('clearAllFilters resets everything back to the initial state', () => {
    const { result } = renderHook(() => useProjectFilters(projects))

    act(() => {
      result.current.setBooleanFilter('hasImage', true)
      result.current.toggleTechnology('vue')
      result.current.handleSearchChange('gamma')
    })

    act(() => {
      result.current.clearAllFilters()
    })

    expect(result.current.activeFiltersCount).toBe(0)
    expect(result.current.filteredProjects).toHaveLength(3)
    expect(window.location.search).toBe('')
  })
})
