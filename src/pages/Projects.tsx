import {
  ExternalLink,
  Filter,
  FolderOpen,
  Github,
  ImageIcon,
  Monitor,
  RotateCcw,
  Search,
  Server,
  Smartphone,
  X,
} from 'lucide-react'
import type React from 'react'
import { useEffect, useMemo, useState } from 'react'
import { useTranslation } from 'react-i18next'
import { useLocation } from 'react-router-dom'
import Container from '@/components/custom/Container'
import { CustomBadge } from '@/components/custom/custom-badge'
import { CustomButton } from '@/components/custom/custom-button'
import Sidebar from '@/components/custom/custom-sidebar'
import { CustomToggle } from '@/components/custom/custom-toggle'
import Header from '@/components/custom/Header'
import ProjectCard from '@/components/custom/project-card'
import Section from '@/components/custom/section'
import TechnologyIcon from '@/components/Icon/TechnologyIcon'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '@/components/ui/popover'
import useUserStore from '@/hooks/user-hooks'
import { getTechnologyData } from '@/lib/utils/getTechnologyData'
import type { ProjectType } from '@/types/ProjectType'

export const Projects: React.FC = () => {
  const { t, i18n } = useTranslation()
  const location = useLocation()
  const [filteredProjects, setFilteredProjects] = useState<ProjectType[]>([])
  const [filter, setFilter] = useState({
    selectedTechnologies: [] as string[],
    hasImage: false,
    hasGitHub: false,
    hasDeploy: false,
    searchTerm: '',
    technologySearchTerm: '',
    isFrontEnd: false,
    isBackEnd: false,
    isMobile: false,
  })
  const { user } = useUserStore()
  const filterToggles = [
    {
      key: 'hasImage',
      icon: ImageIcon,
      labelKey: 'projects.hasImage',
      filterKey: 'hasImage',
    },
    {
      key: 'hasGitHub',
      icon: Github,
      labelKey: 'GitHub',
      filterKey: 'hasGitHub',
    },
    {
      key: 'hasDeploy',
      icon: ExternalLink,
      labelKey: 'Deploy',
      filterKey: 'hasDeploy',
    },
    {
      key: 'isMobile',
      icon: Smartphone,
      labelKey: 'Mobile',
      filterKey: 'isMobile',
    },
    {
      key: 'isFrontEnd',
      icon: Monitor,
      labelKey: 'Front-End',
      filterKey: 'isFrontEnd',
    },
    {
      key: 'isBackEnd',
      icon: Server,
      labelKey: 'Back-End',
      filterKey: 'isBackEnd',
    },
  ]
  useEffect(() => {
    setFilteredProjects(user.projects)
  }, [i18n.language, user.projects])

  useEffect(() => {
    const search = location.search
    if (!search) {
      window.scrollTo(0, 0)
    }
    if (search) {
      const element = document.getElementById(search.substring(1))
      element?.scrollIntoView({ behavior: 'smooth' })
    }
  }, [location.search])

  useEffect(() => {
    const filtered = user.projects.filter(project => {
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
    setFilteredProjects(filtered)
  }, [filter, user.projects])

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const searchValue = e.target.value
    setFilter(prev => ({ ...prev, searchTerm: searchValue }))
    const url = new URL(window.location.toString())
    url.searchParams.set('search', searchValue)
    window.history.pushState({}, '', url.toString())
  }

  const clearSearch = () => {
    setFilter(prev => ({ ...prev, searchTerm: '' }))
    const url = new URL(window.location.toString())
    url.searchParams.delete('search')
    window.history.pushState({}, '', url.toString())
  }

  const handleTechnologySearchChange = (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    const searchValue = e.target.value
    setFilter(prev => ({ ...prev, technologySearchTerm: searchValue }))
  }

  const clearTechnologySearch = () => {
    setFilter(prev => ({ ...prev, technologySearchTerm: '' }))
  }

  const clearAllFilters = () => {
    setFilter({
      selectedTechnologies: [],
      hasImage: false,
      hasGitHub: false,
      hasDeploy: false,
      searchTerm: '',
      technologySearchTerm: '',
      isFrontEnd: false,
      isBackEnd: false,
      isMobile: false,
    })
    const url = new URL(window.location.toString())
    url.searchParams.delete('search')
    window.history.pushState({}, '', url.toString())
  }

  const uniqueTechnologies = useMemo(() => {
    const allTechnologies = Array.from(
      new Set(user.projects.flatMap(project => project.technologies))
    )
    const searchTermLower = filter.technologySearchTerm.toLowerCase()
    return allTechnologies.filter(tech => {
      const techData = getTechnologyData(tech)
      return techData?.label.toLowerCase().includes(searchTermLower)
    })
  }, [user.projects, filter.technologySearchTerm])

  const handleToggleChange = (technology: string) => {
    setFilter(prev => ({
      ...prev,
      selectedTechnologies: prev.selectedTechnologies.includes(technology)
        ? prev.selectedTechnologies.filter(tech => tech !== technology)
        : [...prev.selectedTechnologies, technology],
    }))
  }

  const getActiveFiltersCount = () => {
    return (
      filter.selectedTechnologies.length +
      (filter.hasImage ? 1 : 0) +
      (filter.hasGitHub ? 1 : 0) +
      (filter.hasDeploy ? 1 : 0) +
      (filter.isFrontEnd ? 1 : 0) +
      (filter.isBackEnd ? 1 : 0) +
      (filter.isMobile ? 1 : 0)
    )
  }
  const handleBooleanFilterClear = (filterKey: keyof typeof filter) => {
    setFilter(prev => ({
      ...prev,
      [filterKey]: false,
    }))
  }
  const activeFilterBadges = [
    ...filter.selectedTechnologies.map(tech => ({
      id: tech,
      icon: <TechnologyIcon technology={tech} />,
      label: tech,
      clearAction: () => handleToggleChange(tech),
    })),
    ...filterToggles
      .filter(toggle => filter[toggle.filterKey as keyof typeof filter])
      .map(toggle => ({
        id: toggle.key,
        icon: <toggle.icon className="h-3 w-3" />,
        label: toggle.labelKey.startsWith('projects.')
          ? t(toggle.labelKey)
          : toggle.labelKey,
        clearAction: () =>
          handleBooleanFilterClear(toggle.filterKey as keyof typeof filter),
      })),
  ]

  return (
    <div className="min-h-screen text-foreground">
      <Sidebar />
      <Container>
        <Header />
        <Section.Root>
          <Section.Title className="flex items-center gap-3 text-xl font-semibold text-foreground">
            <FolderOpen className="h-5 w-5 !text-mainColor" />
            {t('projects.title')}
          </Section.Title>
          <Section.Content>
            <div className="space-y-6">
              <Card>
                <CardContent className="pt-6">
                  <div className="flex flex-col gap-4 md:flex-row md:items-center">
                    <Popover>
                      <CustomButton asChild>
                        <PopoverTrigger>
                          <Filter className="mr-2 h-4 w-4 text-mainColor" />
                          {t('projects.filterByTechnology')}
                          {getActiveFiltersCount() > 0 && (
                            <CustomBadge className="rounded-full">
                              {getActiveFiltersCount()}
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
                              <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 transform !text-mainColor" />
                              <Input
                                className="border-mainBorder pl-10 pr-10 text-sm "
                                onChange={handleTechnologySearchChange}
                                placeholder={t('projects.search')}
                                type="text"
                                value={filter.technologySearchTerm}
                              />
                              {filter.technologySearchTerm && (
                                <CustomButton
                                  className="absolute right-1 top-1/2 h-6 w-6 -translate-y-1/2 transform p-0 hover:bg-lightMainColor "
                                  onClick={clearTechnologySearch}
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
                                    onPressedChange={() =>
                                      handleToggleChange(tech)
                                    }
                                    pressed={filter.selectedTechnologies.includes(
                                      tech
                                    )}
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
                              {filterToggles.map(toggle => (
                                <CustomToggle
                                  key={toggle.key}
                                  onPressedChange={value =>
                                    setFilter(prev => ({
                                      ...prev,
                                      [toggle.filterKey]: value,
                                    }))
                                  }
                                  pressed={
                                    filter[
                                      toggle.filterKey as keyof typeof filter
                                    ] as boolean
                                  }
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
                    <div className="relative max-w-md flex-1">
                      <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 transform !text-mainColor" />
                      <Input
                        className="border-mainBorder pl-10 pr-10 text-sm focus:border-red-500 dark:border-main-border-dark"
                        onChange={handleSearchChange}
                        placeholder={t('projects.search')}
                        type="text"
                        value={filter.searchTerm}
                      />
                      {filter.searchTerm && (
                        <Button
                          className="absolute right-1 top-1/2 h-6 w-6 -translate-y-1/2 transform p-0 hover:bg-lightMainColor dark:hover:bg-light-main-color-dark"
                          onClick={clearSearch}
                          size="sm"
                          variant="ghost"
                        >
                          <X className="h-3 w-3 !text-mainColor" />
                        </Button>
                      )}
                    </div>
                    {filteredProjects.length !== user.projects.length && (
                      <CustomButton onClick={clearAllFilters}>
                        <CustomButton.Icon>
                          <RotateCcw />
                        </CustomButton.Icon>
                        <CustomButton.Label>
                          {t('projects.clear')}
                        </CustomButton.Label>
                      </CustomButton>
                    )}
                    <div className="flex items-center gap-2">
                      <CustomBadge className="rounded-4xl" variant="outline">
                        {filteredProjects.length}{' '}
                        {t('projects.filteredResults')}
                      </CustomBadge>
                    </div>
                  </div>
                  {getActiveFiltersCount() > 0 && (
                    <div className="mt-4 border-t border-mainBorder pt-4 dark:border-main-border-dark">
                      <div className="flex flex-wrap gap-2">
                        {activeFilterBadges?.map(badge => (
                          <CustomBadge
                            className="gap-2 text-xs  items-center p-2 flex"
                            key={badge.id}
                            variant="outline"
                          >
                            {badge.icon}
                            <p className="capitalize ">{badge.label}</p>
                            <Button
                              className="ml-1 h-3 w-3 p-0 k"
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
                  )}
                </CardContent>
              </Card>
              <div className="space-y-4">
                {filteredProjects.length > 0 ? (
                  filteredProjects.map(project => (
                    <ProjectCard
                      id={project.title}
                      key={project.title}
                      project={project}
                    />
                  ))
                ) : (
                  <Card className="border-mainBorder dark:border-main-border-dark">
                    <CardContent className="pt-6">
                      <div className="py-8 text-center">
                        <FolderOpen className="mx-auto mb-4 h-12 w-12 !text-mainColor" />
                        <h3 className="mb-2 text-lg font-medium text-foreground">
                          Nenhum projeto encontrado
                        </h3>
                        <p className="mb-4 text-sm !text-mainColor dark:!text-mainColor">
                          Tente ajustar os filtros ou termos de busca
                        </p>
                        <Button
                          className="border-mainBorder bg-transparent text-sm hover:bg-lightMainColor dark:border-main-border-dark dark:hover:bg-light-main-color-dark"
                          onClick={clearAllFilters}
                          variant="outline"
                        >
                          <RotateCcw className="mr-2 h-4 w-4 !text-mainColor" />
                          {t('projects.clear')}
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                )}
              </div>
            </div>
          </Section.Content>
        </Section.Root>
      </Container>
    </div>
  )
}
