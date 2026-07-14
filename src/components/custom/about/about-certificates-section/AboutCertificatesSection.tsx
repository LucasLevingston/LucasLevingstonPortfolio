'use client'

import { Award, Code, Trophy } from 'lucide-react'
import Image from 'next/image'
import { useTranslation } from 'react-i18next'
import CarouselPagination from '@/components/custom/carousel-pagination'
import { ImageViewer } from '@/components/custom/image-viewer'
import Section from '@/components/custom/section'
import TechnologiesSection from '@/components/custom/technology-section'
import InstitutionIcon from '@/components/Icon/InstitutionIcon'
import { Card, CardContent, CardHeader } from '@/components/ui/card'
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel'
import { cn } from '@/lib/utils/cn'
import type { AboutCertificatesSectionProps } from './about-certificates-section.types'
import { useAboutCertificatesSection } from './use-about-certificates-section'

export function AboutCertificatesSection({
  certificates,
}: AboutCertificatesSectionProps) {
  const { t } = useTranslation()
  const {
    currentCertificate,
    setCurrentCertificate,
    api,
    setApi,
    certificate,
  } = useAboutCertificatesSection(certificates)

  return (
    <Section.Root id={t('about.certificatesTitle')}>
      <Section.Title className="flex items-center gap-3 text-xl font-semibold text-foreground">
        <Award className="h-5 w-5 !text-mainColor" />
        {t('about.certificatesTitle')}
      </Section.Title>
      <Section.Content>
        <Card
          className={cn(
            'flex flex-col gap-2 p-6 transition-[transform,box-shadow] duration-200 ease-out',
            'hover:-translate-y-1 hover:shadow-lg'
          )}
        >
          <CardHeader className="p-0">
            <div className="flex items-center justify-between gap-3">
              <div className="flex items-center gap-3">
                <div className="rounded-lg">
                  <Trophy className="h-4 w-4 !text-mainColor" />
                </div>
                <h3 className="text-lg font-semibold text-foreground">
                  {certificate.title}
                </h3>
              </div>
              <div className="flex shrink-0 items-center gap-2">
                <InstitutionIcon
                  institution={certificate.institution}
                  institutionKey={certificate.institutionKey}
                />
                <span className="text-sm font-medium text-foreground">
                  {certificate.institution}
                </span>
              </div>
            </div>
          </CardHeader>
          <CardContent className="p-0">
            <div className="space-y-4">
              <div className="rounded-lg">
                {certificate.description.map(description => (
                  <p
                    className="text-base leading-relaxed text-foreground"
                    key={description}
                  >
                    {description}
                  </p>
                ))}
              </div>
              <div className="flex items-center gap-2">
                <Code className="h-4 w-4 !text-mainColor" />
                <p className="text-base font-semibold text-foreground">
                  {t('about.usedTechnologies')}:
                </p>
              </div>
              <div className="flex w-full flex-wrap">
                <TechnologiesSection technologies={certificate.technologies} />
              </div>
              {certificate.image && (
                <Carousel className="mx-auto w-full max-w-md" setApi={setApi}>
                  <CarouselContent>
                    {certificates.map(cert => (
                      <CarouselItem key={cert.title}>
                        <ImageViewer alt={cert.title} src={cert.image}>
                          <div
                            className={cn(
                              'relative aspect-[4/3] w-full overflow-hidden',
                              'rounded-xl border border-borderColor bg-muted/20'
                            )}
                          >
                            <Image
                              alt={cert.title}
                              className="object-contain"
                              fill
                              sizes="(max-width: 640px) 100vw, 448px"
                              src={cert.image}
                            />
                          </div>
                        </ImageViewer>
                      </CarouselItem>
                    ))}
                  </CarouselContent>
                  {certificates.length > 1 && (
                    <>
                      <CarouselPrevious className="left-2" />
                      <CarouselNext className="right-2" />
                    </>
                  )}
                </Carousel>
              )}
              <div className="py-2 text-center text-base !text-mainColor dark:!text-mainColor">
                <CarouselPagination
                  api={api}
                  currentImage={currentCertificate}
                  images={certificates.map(cert => cert.image)}
                  setCurrentImage={setCurrentCertificate}
                />
              </div>
            </div>
          </CardContent>
        </Card>
      </Section.Content>
    </Section.Root>
  )
}
