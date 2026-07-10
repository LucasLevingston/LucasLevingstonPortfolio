'use client'

import { FolderOpen } from 'lucide-react'
import { useSearchParams } from 'next/navigation'
import type React from 'react'
import { useEffect } from 'react'
import { useTranslation } from 'react-i18next'
import Container from '@/components/custom/container'
import Sidebar from '@/components/custom/custom-sidebar'
import Header from '@/components/custom/header'
import { ProjectFilterBar } from '@/components/custom/projects/project-filter-bar'
import { ProjectList } from '@/components/custom/projects/project-list'
import Section from '@/components/custom/section'
import { useUser } from '@/hooks/use-user'
import { useProjectFilters } from '@/hooks/use-project-filters'

export const Projects: React.FC = () => {
  const { t } = useTranslation()
  const searchParams = useSearchParams()
  const { user } = useUser()
  const filters = useProjectFilters(user.projects)

  useEffect(() => {
    const search = searchParams.toString()
    if (!search) {
      window.scrollTo(0, 0)
      return
    }
    const element = document.getElementById(search)
    element?.scrollIntoView({ behavior: 'smooth' })
  }, [searchParams])

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
              <ProjectFilterBar
                filters={filters}
                totalCount={user.projects.length}
              />
              <ProjectList
                allProjects={user.projects}
                onClearFilters={filters.clearAllFilters}
                projects={filters.filteredProjects}
              />
            </div>
          </Section.Content>
        </Section.Root>
      </Container>
    </div>
  )
}
