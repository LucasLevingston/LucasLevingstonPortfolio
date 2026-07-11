import { useEffect, useState } from 'react'
import type { CarouselApi } from '@/components/ui/carousel'
import type { CertificatesType } from '@/types/CertificatesType'

export function useAboutCertificatesSection(certificates: CertificatesType[]) {
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

  return { currentCertificate, setCurrentCertificate, api, setApi, certificate }
}
