'use client'

import { Award, Code, Trophy } from 'lucide-react'
import { useEffect, useState } from 'react'
import { useTranslation } from 'react-i18next'
import CarouselPagination from '@/components/custom/carousel-pagination'
import Section from '@/components/custom/section'
import TechnologiesSection from '@/components/custom/technology-section'
import { Card, CardContent, CardHeader } from '@/components/ui/card'
import {
  Carousel,
  type CarouselApi,
  CarouselContent,
  CarouselItem,
} from '@/components/ui/carousel'
import { ImageViewer } from '@/components/custom/image-viewer'
import type { CertificatesType } from '@/types/CertificatesType'

interface AboutCertificatesSectionProps {
  certificates: CertificatesType[]
}

export function AboutCertificatesSection({
  certificates,
}: AboutCertificatesSectionProps) {
  const { t } = useTranslation()
  const [currentCertificate, setCurrentCertificate] = useState(0)
  const [api, setApi] = useState<CarouselApi>()

  useEffect(() => {
    if (!api) {
      return
    }
    setCurrentCertificate(api.selectedScrollSnap())
    api.on('select', () => {
      setCurrentCertificate(api.selectedScrollSnap())
    })
  }, [api])

  const certificate = certificates[currentCertificate]

  return (
    <Section.Root id={t('about.certificatesTitle')}>
      <Section.Title className="flex items-center gap-3 text-xl font-semibold text-foreground">
        <Award className="h-5 w-5 !text-mainColor" />
        {t('about.certificatesTitle')}
      </Section.Title>
      <Section.Content>
        <Card className="flex flex-col gap-2 p-6 transition-[transform,box-shadow] duration-200 ease-out hover:-translate-y-1 hover:shadow-lg">
          <CardHeader className="p-0">
            <div className="flex items-center gap-3">
              <div className="rounded-lg">
                <Trophy className="h-4 w-4 !text-mainColor" />
              </div>
              <h3 className="text-lg font-semibold text-foreground">
                {certificate.title}
              </h3>
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
                <Carousel setApi={setApi}>
                  <CarouselContent className="h-full w-[500px]">
                    {certificates.map(cert => (
                      <CarouselItem className="h-full w-full" key={cert.title}>
                        <ImageViewer alt={cert.title} src={cert.image}>
                          <div className="h-full w-full rounded-lg">
                            <img
                              alt={cert.title}
                              className="h-full w-full rounded-lg object-contain"
                              decoding="async"
                              loading="lazy"
                              src={cert.image}
                            />
                          </div>
                        </ImageViewer>
                      </CarouselItem>
                    ))}
                  </CarouselContent>
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
