'use client'
import parse from 'html-react-parser'

import {
  ArrowRight,
  Check,
  Code,
  ExternalLink,
  Github,
  GitBranch,
  ImageIcon,
} from 'lucide-react'
import { useEffect, useState } from 'react'
import { useTranslation } from 'react-i18next'
import {
  Carousel,
  type CarouselApi,
  CarouselContent,
  CarouselItem,
} from '@/components/ui/carousel'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { sortTechnologiesByFrequency } from '@/lib/utils/technology-utils'
import type { ProjectType } from '@/types/ProjectType'
import CarouselPagination from './carousel-pagination'
import { CustomButton } from './custom-button'
import { DesktopFrame } from './desktop-frame'
import { ImageViewer } from './image-viewer'
import PhoneFrame from './phone-frame'
import TechnologiesSection from './technology-section'

interface ProjectDetailsProps {
  project: ProjectType
  allProjects: ProjectType[]
}

export function ProjectDetails({ project, allProjects }: ProjectDetailsProps) {
  const {
    about,
    technologies,
    backEndRepositoryUrl,
    frontEndRepositoryUrl,
    images,
    isMobile,
    link,
    repositoryUrl,
    versions,
    endsDate,
    startsDate,
    showEvolution,
    features,
  } = project

  const { t } = useTranslation()
  const [currentImage, setCurrentImage] = useState(0)
  const [api, setApi] = useState<CarouselApi>()
  const [selectedVersion, setSelectedVersion] = useState<string>(
    versions ? String(versions.length - 1) : '0'
  )

  const sortedTechnologies = sortTechnologiesByFrequency(
    technologies,
    allProjects
  )

  useEffect(() => {
    if (!api) return
    setCurrentImage(api.selectedScrollSnap())
    api.on('select', () => {
      setCurrentImage(api.selectedScrollSnap())
    })
  }, [api])

  return (
    <div className="space-y-6">
      <div className="rounded-lg space-y-2">
        <p className="text-foreground text-sm leading-relaxed">{about}</p>
        <div className="text-sm space-y-1">
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

      {showEvolution && versions && versions.length > 0 && (
        <div>
          <div className="mb-3 flex items-center gap-2">
            <GitBranch className="h-4 w-4 !text-mainColor" />
            <h4 className="font-semibold text-foreground text-sm">
              {t('projectEvolution')}
            </h4>
          </div>
          <Tabs onValueChange={setSelectedVersion} value={selectedVersion}>
            <TabsList
              className="grid w-full"
              style={{
                gridTemplateColumns: `repeat(${versions.length}, minmax(0, 1fr))`,
              }}
            >
              {versions
                .map((version, index) => (
                  <TabsTrigger key={index} value={String(index)}>
                    {version.name ?? `v${index + 1}`}
                  </TabsTrigger>
                ))
                .reverse()}
            </TabsList>

            {versions
              .map((version, index) => (
                <TabsContent className="mt-4" key={index} value={String(index)}>
                  <div className="space-y-4">
                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                      <ArrowRight className="h-4 w-4" />
                      <span>
                        {version.description || `${version.name} do projeto`}
                      </span>
                    </div>
                    <TechnologiesSection technologies={version.technologies} />
                    {version.images && version.images.length > 0 && (
                      <div>
                        <div className="mb-3 flex items-center gap-2">
                          <ImageIcon className="h-4 w-4 !text-mainColor" />
                          <h4 className="font-semibold text-foreground text-sm">
                            {t('projectCard.images')}
                          </h4>
                        </div>
                        <Carousel setApi={setApi}>
                          <CarouselContent className="h-full w-[500px]">
                            {version.images?.map((image, i) =>
                              isMobile ? (
                                <CarouselItem
                                  className="flex justify-center"
                                  key={i}
                                >
                                  <ImageViewer
                                    alt={`Screenshot ${i + 1}`}
                                    src={image || '/placeholder.svg'}
                                  >
                                    <PhoneFrame>
                                      <img
                                        alt={`Screenshot ${i + 1}`}
                                        className="h-full w-full object-cover"
                                        decoding="async"
                                        loading="lazy"
                                        src={image || '/placeholder.svg'}
                                      />
                                    </PhoneFrame>
                                  </ImageViewer>
                                </CarouselItem>
                              ) : (
                                <CarouselItem key={i}>
                                  <DesktopFrame>
                                    <ImageViewer
                                      alt={`Screenshot ${i + 1}`}
                                      src={image || '/placeholder.svg'}
                                    >
                                      <img
                                        alt={`Screenshot ${i + 1}`}
                                        className="h-full w-full rounded-lg object-contain"
                                        decoding="async"
                                        loading="lazy"
                                        src={image || '/placeholder.svg'}
                                      />
                                    </ImageViewer>
                                  </DesktopFrame>
                                </CarouselItem>
                              )
                            )}
                          </CarouselContent>
                          <div className="py-2 text-center !text-mainColor text-xs dark:!text-mainColor">
                            {images && (
                              <CarouselPagination
                                api={api}
                                currentImage={currentImage}
                                images={images}
                                setCurrentImage={setCurrentImage}
                              />
                            )}
                          </div>
                        </Carousel>
                      </div>
                    )}
                  </div>
                </TabsContent>
              ))
              .reverse()}
          </Tabs>
        </div>
      )}

      {!showEvolution || !versions || versions.length === 0 ? (
        <div>
          <div className="mb-3 flex items-center gap-2">
            <Code className="h-4 w-4 !text-mainColor" />
            <h4 className="font-semibold text-foreground text-sm">
              {t('projectCard.technologiesUsed')}
            </h4>
          </div>
          <TechnologiesSection technologies={sortedTechnologies} />
        </div>
      ) : null}

      {(!showEvolution || !versions || versions.length === 0) && images ? (
        <div>
          <div className="mb-3 flex items-center gap-2">
            <ImageIcon className="h-4 w-4 !text-mainColor" />
            <h4 className="font-semibold text-foreground text-sm">
              {t('projectCard.images')}
            </h4>
          </div>
          <Carousel setApi={setApi}>
            <CarouselContent className="h-full w-[500px]">
              {images?.map((image, index) =>
                isMobile ? (
                  <CarouselItem className="flex justify-center" key={index}>
                    <ImageViewer
                      alt={`Screenshot ${index + 1}`}
                      src={image || '/placeholder.svg'}
                    >
                      <PhoneFrame>
                        <img
                          alt={`Screenshot ${index + 1}`}
                          className="h-full w-full object-cover"
                          decoding="async"
                          loading="lazy"
                          src={image || '/placeholder.svg'}
                        />
                      </PhoneFrame>
                    </ImageViewer>
                  </CarouselItem>
                ) : (
                  <CarouselItem key={index}>
                    <DesktopFrame>
                      <ImageViewer
                        alt={`Screenshot ${index + 1}`}
                        src={image || '/placeholder.svg'}
                      >
                        <img
                          alt={`Screenshot ${index + 1}`}
                          className="h-full w-full rounded-lg object-contain"
                          decoding="async"
                          loading="lazy"
                          src={image || '/placeholder.svg'}
                        />
                      </ImageViewer>
                    </DesktopFrame>
                  </CarouselItem>
                )
              )}
            </CarouselContent>
            <div className="py-2 text-center !text-mainColor text-xs dark:!text-mainColor">
              {images && (
                <CarouselPagination
                  api={api}
                  currentImage={currentImage}
                  images={images}
                  setCurrentImage={setCurrentImage}
                />
              )}
            </div>
          </Carousel>
        </div>
      ) : null}

      <div className="flex flex-wrap items-center justify-center gap-3 border-mainBorder pt-4 dark:border-main-border-dark">
        {frontEndRepositoryUrl && (
          <CustomButton href={frontEndRepositoryUrl}>
            <CustomButton.Icon>
              <Github />
            </CustomButton.Icon>
            <CustomButton.Label>
              {' '}
              {t('projectCard.viewFrontEndRepo')}
            </CustomButton.Label>
          </CustomButton>
        )}
        {backEndRepositoryUrl && (
          <CustomButton href={backEndRepositoryUrl}>
            <CustomButton.Icon>
              <Github />
            </CustomButton.Icon>
            <CustomButton.Label>
              {t('projectCard.viewBackEndRepo')}
            </CustomButton.Label>
          </CustomButton>
        )}
        {!(frontEndRepositoryUrl || backEndRepositoryUrl) && repositoryUrl && (
          <CustomButton href={repositoryUrl}>
            <CustomButton.Icon>
              <Github />
            </CustomButton.Icon>
            <CustomButton.Label>{t('projectCard.viewGitHub')}</CustomButton.Label>
          </CustomButton>
        )}
        {link && (
          <CustomButton href={link}>
            <CustomButton.Icon>
              <ExternalLink />
            </CustomButton.Icon>
            <CustomButton.Label>{t('projectCard.visitSite')}</CustomButton.Label>
          </CustomButton>
        )}
      </div>
    </div>
  )
}
