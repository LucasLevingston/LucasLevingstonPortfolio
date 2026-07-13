'use client'
import { GitBranch, Monitor, Smartphone, Star } from 'lucide-react'
import Link from 'next/link'
import { memo } from 'react'
import { CustomBadge } from '@/components/custom/custom-badge'
import { DesktopFrame } from '@/components/custom/desktop-frame'
import PhoneFrame from '@/components/custom/phone-frame'
import { ProjectStatusIcons } from '@/components/custom/projects/project-status-icons'
import Section from '@/components/custom/section'
import TechnologyIcon from '@/components/Icon/TechnologyIcon'
import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'
import { cn } from '@/lib/utils/cn'
import type { ProjectCardProps } from './project-card.types'
import { useProjectCard } from './use-project-card'

function ProjectCardComponent({ project, allProjects }: ProjectCardProps) {
  const {
    description,
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
  } = project

  const { sortedTechnologies, previewImage, href } = useProjectCard(
    project,
    allProjects
  )

  return (
    <Link href={href}>
      <Card
        className={cn(
          'cursor-pointer transition-[transform,box-shadow] duration-200 ease-out',
          'hover:-translate-y-1 hover:shadow-lg'
        )}
      >
        <Section.Root id={title}>
          <CardHeader className="pb-3">
            <div
              className={cn(
                'flex w-full flex-col items-start justify-between gap-4',
                'sm:flex-row sm:items-center'
              )}
            >
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
                  <div
                    className={cn(
                      'relative flex h-48 w-full items-center justify-center',
                      'overflow-hidden rounded-md'
                    )}
                  >
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
              <ProjectStatusIcons
                backEndRepositoryUrl={backEndRepositoryUrl}
                className="sm:ml-auto"
                frontEndRepositoryUrl={frontEndRepositoryUrl}
                images={images}
                isDeveloping={isDeveloping}
                link={link}
                repositoryUrl={repositoryUrl}
              />
            </div>
          </CardHeader>
        </Section.Root>
      </Card>
    </Link>
  )
}

const ProjectCard = memo(ProjectCardComponent)

export default ProjectCard
