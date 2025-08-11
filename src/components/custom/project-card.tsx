import {
  Code,
  ExternalLink,
  Github,
  ImageIcon,
  Monitor,
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
import { Card, CardContent, CardHeader } from '@/components/ui/card'
import {
  Carousel,
  type CarouselApi,
  CarouselContent,
  CarouselItem,
} from '@/components/ui/carousel'
import type { ProjectType } from '@/types/ProjectType'
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
  id: string
}

export default function ProjectCard({
  project: {
    title,
    description,
    technologies,
    images,
    repositoryUrl,
    frontEndRepositoryUrl,
    backEndRepositoryUrl,
    link,
    favorite,
    isMobile,
  },
  id,
}: ProjectCardProps) {
  useTranslation()
  const [currentImage, setCurrentImage] = useState(0)
  const [api, setApi] = useState<CarouselApi>()
  const [openAccordion, setOpenAccordion] = useState<string | undefined>(
    undefined
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
      <Section.Root id={id}>
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
                        <h3 className="font-semibold text-foreground text-lg">
                          <Typewriter
                            onInit={typewriter => {
                              typewriter.typeString(title).start()
                            }}
                          />
                        </h3>
                        {favorite && (
                          <Star className="h-4 w-4 fill-current !text-mainColor" />
                        )}
                      </div>
                      {openAccordion !== title && (
                        <div className="mt-2 flex flex-wrap gap-1">
                          {technologies.slice(0, 6).map(tech => (
                            <div className="rounded p-1" key={tech}>
                              <TechnologyIcon technology={tech} />
                            </div>
                          ))}
                          {technologies.length > 6 && (
                            <CustomBadge>
                              +{technologies.length - 6}
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
              <CardContent className="pt-0">
                <div className="space-y-6">
                  <div className="rounded-lg p-4">
                    <p className="text-foreground text-sm leading-relaxed">
                      {description}
                    </p>
                  </div>
                  <div>
                    <div className="mb-3 flex items-center gap-2">
                      <Code className="h-4 w-4 !text-mainColor" />
                      <h4 className="font-semibold text-foreground text-sm">
                        Tecnologias utilizadas
                      </h4>
                    </div>
                    <TechnologiesSection technologies={technologies} />
                  </div>
                  {images && images.length > 0 && (
                    <div>
                      <div className="mb-3 flex items-center gap-2">
                        <ImageIcon className="h-4 w-4 !text-mainColor" />
                        <h4 className="font-semibold text-foreground text-sm">
                          Screenshots
                        </h4>
                      </div>
                      <Carousel setApi={setApi}>
                        <CarouselContent className="h-full w-[500px]">
                          {images.map((image, index) =>
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
                          <CarouselPagination
                            api={api}
                            currentImage={currentImage}
                            images={images}
                            setCurrentImage={setCurrentImage}
                          />
                        </div>
                      </Carousel>
                    </div>
                  )}
                  <div className="flex flex-wrap items-center justify-center gap-3 border-mainBorder pt-4 dark:border-main-border-dark">
                    {frontEndRepositoryUrl && (
                      <CustomButton href={frontEndRepositoryUrl}>
                        <CustomButton.Icon>
                          <Github />
                        </CustomButton.Icon>
                        <CustomButton.Label>Ver Front-End</CustomButton.Label>
                      </CustomButton>
                    )}
                    {backEndRepositoryUrl && (
                      <CustomButton href={backEndRepositoryUrl}>
                        <CustomButton.Icon>
                          <Github />
                        </CustomButton.Icon>
                        <CustomButton.Label>Ver Back-End</CustomButton.Label>
                      </CustomButton>
                    )}
                    {!(frontEndRepositoryUrl || backEndRepositoryUrl) &&
                      repositoryUrl && (
                        <CustomButton href={repositoryUrl}>
                          <CustomButton.Icon>
                            <Github />
                          </CustomButton.Icon>
                          <CustomButton.Label>Ver GitHub</CustomButton.Label>
                        </CustomButton>
                      )}
                    {link && (
                      <CustomButton href={link}>
                        <CustomButton.Icon>
                          <ExternalLink />
                        </CustomButton.Icon>
                        <CustomButton.Label>Visitar site</CustomButton.Label>
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
