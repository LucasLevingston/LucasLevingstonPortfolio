import type { InstitutionKey } from '@/data/institutions-data'

export interface CertificatesType {
  completionDate: string
  description: string[]
  hours: number
  image: string
  institution: string
  institutionKey: InstitutionKey
  startsDate: string
  technologies: string[]
  title: string
}
