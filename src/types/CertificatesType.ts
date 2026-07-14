import type { InstitutionKey } from '@/data/institutions-data'

export interface CertificatesType {
  title: string
  image: string
  description: string[]
  technologies: string[]
  hours: number
  startsDate: string
  completionDate: string
  institution: string
  institutionKey: InstitutionKey
}
