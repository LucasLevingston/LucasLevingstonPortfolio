'use client'
import parse from 'html-react-parser'

import {
  ArrowRight,
  Check,
  Code,
  ExternalLink,
  GitBranch,
  Github,
  ImageIcon,
  Monitor,
  Settings,
  Smartphone,
  Star,
} from 'lucide-react'
import { useEffect, useState } from 'react'
import { useTranslation } from 'react-i18next'
import Typewriter from 'typewriter-effect'
import TechnologyIcon from '@/components/Icon/TechnologyIcon'
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion'
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'
import {
  Carousel,
  type CarouselApi,
  CarouselContent,
  CarouselItem,
} from '@/components/ui/carousel'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { sortTechnologiesByFrequency } from '@/lib/utils/technology-utils'
import type { ProjectType } from '@/types/ProjectType'
import { Badge } from '../ui/badge'
import CarouselPagination from './carousel-pagination'
import { CustomBadge } from './custom-badge'
import { CustomButton } from './custom-button'
import { DesktopFrame } from './desktop-frame'
import { ImageViewer } from './image-viewer'
import PhoneFrame from './phone-frame'
import Section from './section'
import TechnologiesSection from './technology-section'

interface ProjectCardProps {
  project: ProjectType
  allProjects: ProjectType[]
}

export default function ProjectCard({
  project: {
    about,
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
    endsDate,
    isDeveloping,
    startsDate,
    showEvolution,
    features,
  },
  allProjects,
}: ProjectCardProps) {
  const { t } = useTranslation()
  const [currentImage, setCurrentImage] = useState(0)
  const [api, setApi] = useState<CarouselApi>()
  const [openAccordion, setOpenAccordion] = useState<string | undefined>(
    undefined
  )
  const [selectedVersion, setSelectedVersion] = useState<string>(
    versions ? String(versions?.length - 1) : '0'
  )

  const sortedTechnologies = sortTechnologiesByFrequency(
    technologies,
    allProjects
  )

  useEffect(() => {
    const urlParams = new URLSearchParams(location.search)
    const searchParam = urlParams.get('search') || ''
    setOpenAccordion(searchParam)
  }, [location.search])

  useEffect(() => {
    if (!api) return
    setCurrentImage(api.selectedScrollSnap())
    api.on('select', () => {
      setCurrentImage(api.selectedScrollSnap())
    })
  }, [api])

  const previewImage =
    images && images.length > 0 ? images[0] : '/placeholder.svg'

  return (
    <Card className="transition-shadow hover:shadow-md">
      <Section.Root id={title}>
        <Accordion
          className="w-full"
          collapsible
          onValueChange={setOpenAccordion}
          type="single"
          value={openAccordion}
        >
          <AccordionItem className="border-none" value={title}>
            <CardHeader className="pb-3">
              <AccordionTrigger className="w-full p-0 hover:no-underline">
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
                          <Typewriter
                            onInit={typewriter => {
                              typewriter.typeString(title).start()
                            }}
                          />
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

                      {openAccordion !== title && (
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
                      )}
                    </div>
                  </div>

                  {openAccordion !== title && images && images.length > 0 && (
                    <div className="w-full px-6 pb-4 sm:w-auto sm:px-0 sm:pb-0">
                      <div className="relative flex h-48 w-full items-center justify-center overflow-hidden rounded-md">
                        {isMobile ? (
                          <PhoneFrame className="h-full max-h-[180px]">
                            <img
                              alt={`Preview of ${title}`}
                              className="h-full w-full object-cover"
                              src={previewImage || '/placeholder.svg'}
                            />
                          </PhoneFrame>
                        ) : (
                          <DesktopFrame className="h-full max-h-[180px]">
                            <img
                              alt={`Preview of ${title}`}
                              className="h-full w-full object-contain"
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
                    {link && (
                      <ExternalLink className="h-4 w-4 !text-mainColor" />
                    )}
                  </div>
                </div>
              </AccordionTrigger>
            </CardHeader>
            <AccordionContent>
              <CardContent>
                <div className="space-y-6">
                  <div className="rounded-lg space-y-2">
                    <p className="text-foreground text-sm leading-relaxed">
                      {about}
                    </p>
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
                      <Tabs
                        onValueChange={setSelectedVersion}
                        value={selectedVersion}
                      >
                        <TabsList
                          className={`grid w-full grid-cols-${versions.length}`}
                        >
                          {versions
                            .map((version, index) => (
                              <TabsTrigger
                                key={version.startsDate}
                                value={String(index)}
                              >
                                {t('projectCard.currentVersion')}{' '}
                              </TabsTrigger>
                            ))
                            .reverse()}
                        </TabsList>

                        {versions
                          .map((version, index) => (
                            <TabsContent
                              className="mt-4"
                              key={version.startsDate}
                              value={String(index)}
                            >
                              <div className="space-y-4">
                                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                                  <ArrowRight className="h-4 w-4" />
                                  <span>
                                    {version.description ||
                                      `${version.name} do projeto`}
                                  </span>
                                </div>
                                <TechnologiesSection
                                  technologies={version.technologies}
                                />
                                {version.images &&
                                  version.images.length > 0 && (
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
                                                  src={
                                                    image || '/placeholder.svg'
                                                  }
                                                >
                                                  <PhoneFrame>
                                                    <img
                                                      alt={`Screenshot ${i + 1}`}
                                                      className="h-full w-full object-cover"
                                                      src={
                                                        image ||
                                                        '/placeholder.svg'
                                                      }
                                                    />
                                                  </PhoneFrame>
                                                </ImageViewer>
                                              </CarouselItem>
                                            ) : (
                                              <CarouselItem key={i}>
                                                <DesktopFrame>
                                                  <ImageViewer
                                                    alt={`Screenshot ${i + 1}`}
                                                    src={
                                                      image ||
                                                      '/placeholder.svg'
                                                    }
                                                  >
                                                    <img
                                                      alt={`Screenshot ${i + 1}`}
                                                      className="h-full w-full rounded-lg object-contain"
                                                      src={
                                                        image ||
                                                        '/placeholder.svg'
                                                      }
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

                  {(!showEvolution || !versions || versions.length === 0) &&
                  images ? (
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
                              <CarouselItem
                                className="flex justify-center"
                                key={index}
                              >
                                <ImageViewer
                                  alt={`Screenshot ${index + 1}`}
                                  src={image || '/placeholder.svg'}
                                >
                                  <PhoneFrame>
                                    <img
                                      alt={`Screenshot ${index + 1}`}
                                      className="h-full w-full object-cover"
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
                    {!(frontEndRepositoryUrl || backEndRepositoryUrl) &&
                      repositoryUrl && (
                        <CustomButton href={repositoryUrl}>
                          <CustomButton.Icon>
                            <Github />
                          </CustomButton.Icon>
                          <CustomButton.Label>
                            {t('projectCard.viewGitHub')}
                          </CustomButton.Label>
                        </CustomButton>
                      )}
                    {link && (
                      <CustomButton href={link}>
                        <CustomButton.Icon>
                          <ExternalLink />
                        </CustomButton.Icon>
                        <CustomButton.Label>
                          {t('projectCard.visitSite')}
                        </CustomButton.Label>
                      </CustomButton>
                    )}
                  </div>
                </div>
              </CardContent>
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </Section.Root>
    </Card>
  )
}
