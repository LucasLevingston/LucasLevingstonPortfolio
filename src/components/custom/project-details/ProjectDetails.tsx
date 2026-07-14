'use client'

import parse from 'html-react-parser'
import { Check, Code, ImageIcon } from 'lucide-react'
import { useTranslation } from 'react-i18next'
import { ProjectImageCarousel } from '@/components/custom/projects/project-image-carousel'
import { ProjectLinks } from '@/components/custom/projects/project-links'
import { ProjectVersionTabs } from '@/components/custom/projects/project-version-tabs'
import TechnologiesSection from '@/components/custom/technology-section'
import type { ProjectType } from '@/types/ProjectType'
import { useProjectDetails } from './use-project-details'

interface ProjectDetailsProps {
  project: ProjectType
  allProjects: ProjectType[]
}

export function ProjectDetails({ project, allProjects }: ProjectDetailsProps) {
  const {
    about,
    backEndRepositoryUrl,
    frontEndRepositoryUrl,
    images,
    isMobile,
    link,
    repositoryUrl,
    versions,
    endsDate,
    startsDate,
    features,
  } = project

  const { t } = useTranslation()
  const { sortedTechnologies, hasVersions } = useProjectDetails(
    project,
    allProjects
  )

  return (
    <div className="space-y-6">
      <div className="space-y-2 rounded-lg">
        <p className="text-foreground text-sm leading-relaxed">{about}</p>
        <div className="space-y-1 text-sm">
          {startsDate && (
            <div>
              <span className="font-semibold text-mainColor">
                {t('about.start')}:
              </span>{' '}
              {startsDate}
            </div>
          )}
          {endsDate && (
            <div>
              <span className="font-semibold text-mainColor">
                {t('about.end')}:
              </span>{' '}
              {endsDate}
            </div>
          )}
        </div>
      </div>

      {features && features.length > 0 && (
        <div>
          <div className="flex items-center gap-2">
            <Check className="h-4 w-4 !text-mainColor" />
            <h4 className="font-semibold text-foreground text-sm">
              {t('projectCard.features') || 'Features Principais'}
            </h4>
          </div>
          <ul className="grid gap-2 sm:grid-cols-2">
            {features.map((feature, index) => (
              <li
                className="flex items-start gap-2 text-sm text-muted-foreground"
                key={index}
              >
                <Check className="mt-0.5 h-4 w-4 flex-shrink-0 !text-mainColor" />
                <span>{parse(feature)}</span>
              </li>
            ))}
          </ul>
        </div>
      )}

      {hasVersions && versions && (
        <ProjectVersionTabs
          isMobile={isMobile}
          paginationImages={images}
          versions={versions}
        />
      )}

      {!hasVersions && (
        <div>
          <div className="mb-3 flex items-center gap-2">
            <Code className="h-4 w-4 !text-mainColor" />
            <h4 className="font-semibold text-foreground text-sm">
              {t('projectCard.technologiesUsed')}
            </h4>
          </div>
          <TechnologiesSection technologies={sortedTechnologies} />
        </div>
      )}

      {!hasVersions && images && (
        <div>
          <div className="mb-3 flex items-center gap-2">
            <ImageIcon className="h-4 w-4 !text-mainColor" />
            <h4 className="font-semibold text-foreground text-sm">
              {t('projectCard.images')}
            </h4>
          </div>
          <ProjectImageCarousel images={images} isMobile={isMobile} />
        </div>
      )}

      <ProjectLinks
        backEndRepositoryUrl={backEndRepositoryUrl}
        frontEndRepositoryUrl={frontEndRepositoryUrl}
        link={link}
        repositoryUrl={repositoryUrl}
      />
    </div>
  )
}
