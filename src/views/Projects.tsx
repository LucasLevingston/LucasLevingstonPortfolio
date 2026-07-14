'use client'

import { FolderOpen } from 'lucide-react'
import type React from 'react'
import { useTranslation } from 'react-i18next'
import { PageShell } from '@/components/custom/page-shell'
import { ProjectFilterBar } from '@/components/custom/projects/project-filter-bar'
import { ProjectList } from '@/components/custom/projects/project-list'
import Section from '@/components/custom/section'
import { useProjectFilters } from '@/hooks/use-project-filters'
import { useScrollToSearchAnchor } from '@/hooks/use-scroll-to-search-anchor'
import { useUser } from '@/hooks/use-user'

export const Projects: React.FC = () => {
  const { t } = useTranslation()
  const { user } = useUser()
  const filters = useProjectFilters(user.projects)
  useScrollToSearchAnchor()

  return (
    <PageShell>
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
    </PageShell>
  )
}
