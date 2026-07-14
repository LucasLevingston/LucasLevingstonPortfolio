'use client'

import { useCallback, useMemo, useState } from 'react'
import { PROJECT_FILTER_TOGGLES } from '@/lib/utils/constants/project-filter-toggles'
import { getTechnologyData } from '@/lib/utils/getTechnologyData'
import type { ProjectType } from '@/types/ProjectType'

export interface ProjectFilterState {
  selectedTechnologies: string[]
  hasImage: boolean
  hasGitHub: boolean
  hasDeploy: boolean
  searchTerm: string
  technologySearchTerm: string
  isFrontEnd: boolean
  isBackEnd: boolean
  isMobile: boolean
}

export type ProjectActiveFilterBadge =
  | { id: string; kind: 'technology'; label: string; clearAction: () => void }
  | {
      id: string
      kind: 'toggle'
      toggle: (typeof PROJECT_FILTER_TOGGLES)[number]
      clearAction: () => void
    }

const INITIAL_FILTER: ProjectFilterState = {
  selectedTechnologies: [],
  hasImage: false,
  hasGitHub: false,
  hasDeploy: false,
  searchTerm: '',
  technologySearchTerm: '',
  isFrontEnd: false,
  isBackEnd: false,
  isMobile: false,
}

function updateUrlSearchParam(searchTerm: string | null) {
  const url = new URL(window.location.toString())
  if (searchTerm) {
    url.searchParams.set('search', searchTerm)
  } else {
    url.searchParams.delete('search')
  }
  window.history.pushState({}, '', url.toString())
}

export function useProjectFilters(projects: ProjectType[]) {
  const [filter, setFilter] = useState<ProjectFilterState>(INITIAL_FILTER)

  const filteredProjects = useMemo(() => {
    return projects.filter(project => {
      const techMatch = filter.selectedTechnologies.length
        ? filter.selectedTechnologies.every(tech =>
            project.technologies.includes(tech)
          )
        : true
      const imageMatch = filter.hasImage
        ? (project.images?.length ?? 0) > 0
        : true
      const githubMatch = filter.hasGitHub ? !!project.repositoryUrl : true
      const deployMatch = filter.hasDeploy ? !!project.link : true
      const nameMatch = project.title
        .toLowerCase()
        .includes(filter.searchTerm.toLowerCase())
      const mobileMatch = filter.isMobile ? project.isMobile : true
      const frontEndMatch = filter.isFrontEnd
        ? project.frontEndRepositoryUrl
        : true
      const backEndMatch = filter.isBackEnd
        ? project.backEndRepositoryUrl
        : true

      return (
        techMatch &&
        imageMatch &&
        githubMatch &&
        deployMatch &&
        nameMatch &&
        mobileMatch &&
        frontEndMatch &&
        backEndMatch
      )
    })
  }, [projects, filter])

  const uniqueTechnologies = useMemo(() => {
    const allTechnologies = Array.from(
      new Set(projects.flatMap(project => project.technologies))
    )
    const searchTermLower = filter.technologySearchTerm.toLowerCase()
    return allTechnologies.filter(tech => {
      const techData = getTechnologyData(tech)
      return techData?.label.toLowerCase().includes(searchTermLower)
    })
  }, [projects, filter.technologySearchTerm])

  const handleSearchChange = useCallback((value: string) => {
    setFilter(prev => ({ ...prev, searchTerm: value }))
    updateUrlSearchParam(value)
  }, [])

  const clearSearch = useCallback(() => {
    setFilter(prev => ({ ...prev, searchTerm: '' }))
    updateUrlSearchParam(null)
  }, [])

  const handleTechnologySearchChange = useCallback((value: string) => {
    setFilter(prev => ({ ...prev, technologySearchTerm: value }))
  }, [])

  const clearTechnologySearch = useCallback(() => {
    setFilter(prev => ({ ...prev, technologySearchTerm: '' }))
  }, [])

  const clearAllFilters = useCallback(() => {
    setFilter(INITIAL_FILTER)
    updateUrlSearchParam(null)
  }, [])

  const toggleTechnology = useCallback((technology: string) => {
    setFilter(prev => ({
      ...prev,
      selectedTechnologies: prev.selectedTechnologies.includes(technology)
        ? prev.selectedTechnologies.filter(tech => tech !== technology)
        : [...prev.selectedTechnologies, technology],
    }))
  }, [])

  const setBooleanFilter = useCallback(
    (
      filterKey: (typeof PROJECT_FILTER_TOGGLES)[number]['filterKey'],
      value: boolean
    ) => {
      setFilter(prev => ({ ...prev, [filterKey]: value }))
    },
    []
  )

  const activeFiltersCount =
    filter.selectedTechnologies.length +
    (filter.hasImage ? 1 : 0) +
    (filter.hasGitHub ? 1 : 0) +
    (filter.hasDeploy ? 1 : 0) +
    (filter.isFrontEnd ? 1 : 0) +
    (filter.isBackEnd ? 1 : 0) +
    (filter.isMobile ? 1 : 0)

  const activeFilterBadges: ProjectActiveFilterBadge[] = useMemo(
    () => [
      ...filter.selectedTechnologies.map(
        (tech): ProjectActiveFilterBadge => ({
          id: tech,
          kind: 'technology',
          label: tech,
          clearAction: () => toggleTechnology(tech),
        })
      ),
      ...PROJECT_FILTER_TOGGLES.filter(toggle => filter[toggle.filterKey]).map(
        (toggle): ProjectActiveFilterBadge => ({
          id: toggle.key,
          kind: 'toggle',
          toggle,
          clearAction: () => setBooleanFilter(toggle.filterKey, false),
        })
      ),
    ],
    [filter, toggleTechnology, setBooleanFilter]
  )

  return {
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
  }
}

export type UseProjectFiltersResult = ReturnType<typeof useProjectFilters>
