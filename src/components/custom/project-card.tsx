'use client'
import {
  ExternalLink,
  GitBranch,
  Github,
  ImageIcon,
  Monitor,
  Settings,
  Smartphone,
  Star,
} from 'lucide-react'
import Link from 'next/link'
import { useTranslation } from 'react-i18next'
import TechnologyIcon from '@/components/Icon/TechnologyIcon'
import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'
import { getProjectSlug } from '@/lib/utils/project-slug'
import { sortTechnologiesByFrequency } from '@/lib/utils/technology-utils'
import type { ProjectType } from '@/types/ProjectType'
import { Badge } from '../ui/badge'
import { CustomBadge } from './custom-badge'
import { DesktopFrame } from './desktop-frame'
import PhoneFrame from './phone-frame'
import Section from './section'

interface ProjectCardProps {
  project: ProjectType
  allProjects: ProjectType[]
}

export default function ProjectCard({
  project: {
    description,
    technologies,
    title,
    backEndRepositoryUrl,
    favorite,
    frontEndRepositoryUrl,
    images,
    isMobile,
    link,
    repositoryUrl,
    versions,
    isDeveloping,
    showEvolution,
    thumbnail,
  },
  allProjects,
}: ProjectCardProps) {
  const { t } = useTranslation()

  const sortedTechnologies = sortTechnologiesByFrequency(
    technologies,
    allProjects
  )

  const previewImage = thumbnail || images?.[0]

  return (
    <Link href={`/projects/${getProjectSlug(title)}`}>
      <Card className="cursor-pointer transition-[transform,box-shadow] duration-200 ease-out hover:-translate-y-1 hover:shadow-lg">
        <Section.Root id={title}>
          <CardHeader className="pb-3">
            <div className="flex w-full flex-col items-start justify-between gap-4 sm:flex-row sm:items-center">
              <div className="flex items-center gap-3">
                <div className="rounded-lg p-2">
                  {isMobile ? (
                    <Smartphone className="h-4 w-4 !text-mainColor" />
                  ) : (
                    <Monitor className="h-4 w-4 !text-mainColor" />
                  )}
                </div>
                <div className="text-left">
                  <div className="flex items-center gap-2">
                    <CardTitle className="font-semibold text-foreground text-lg">
                      {title}
                    </CardTitle>
                    {favorite && (
                      <Star className="h-4 w-4 fill-current text-yellow-400" />
                    )}
                    {showEvolution && versions && versions.length > 0 && (
                      <GitBranch className="h-4 w-4 !text-mainColor" />
                    )}
                  </div>
                  <div>
                    <CardDescription>{description}</CardDescription>
                  </div>

                  <div className="mt-2 flex flex-wrap gap-1">
                    {sortedTechnologies.slice(0, 6).map(tech => (
                      <div className="rounded p-1" key={tech}>
                        <TechnologyIcon technology={tech} />
                      </div>
                    ))}
                    {sortedTechnologies.length > 6 && (
                      <CustomBadge>
                        +{sortedTechnologies.length - 6}
                      </CustomBadge>
                    )}
                  </div>
                </div>
              </div>

              {previewImage && (
                <div className="w-full px-6 pb-4 sm:w-auto sm:px-0 sm:pb-0">
                  <div className="relative flex h-48 w-full items-center justify-center overflow-hidden rounded-md">
                    {isMobile ? (
                      <PhoneFrame className="h-full max-h-[180px]">
                        <img
                          alt={`Preview of ${title}`}
                          className="h-full w-full object-cover"
                          decoding="async"
                          loading="lazy"
                          src={previewImage || '/placeholder.svg'}
                        />
                      </PhoneFrame>
                    ) : (
                      <DesktopFrame className="h-full max-h-[180px]">
                        <img
                          alt={`Preview of ${title}`}
                          className="h-full w-full object-contain"
                          decoding="async"
                          loading="lazy"
                          src={previewImage || '/placeholder.svg'}
                        />
                      </DesktopFrame>
                    )}
                  </div>
                </div>
              )}
              <div className="flex items-center gap-2 sm:ml-auto">
                {isDeveloping && (
                  <Badge className="flex items-center gap-1 border-green-300 bg-green-100 text-sm text-green-800 hover:bg-green-100 dark:bg-green-900 dark:text-green-300">
                    <Settings className="h-4 w-4" />
                    {t('projectCard.inDevelopment')}
                  </Badge>
                )}
                {images && images.length > 0 && (
                  <ImageIcon className="h-4 w-4 !text-mainColor" />
                )}
                {(repositoryUrl ||
                  frontEndRepositoryUrl ||
                  backEndRepositoryUrl) && (
                  <Github className="h-4 w-4 !text-mainColor" />
                )}
                {link && <ExternalLink className="h-4 w-4 !text-mainColor" />}
              </div>
            </div>
          </CardHeader>
        </Section.Root>
      </Card>
    </Link>
  )
}
