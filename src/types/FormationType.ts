import type { InstitutionKey } from '@/data/institutions-data'

export interface FormationType {
  currentStatus?: formationStatus
  duration: string
  endsDate: string
  graduated?: boolean
  institution: string
  institutionKey?: InstitutionKey
  startsDate: string
  title: string
}

export enum formationStatus {
  COMPLETED = 'COMPLETED',
  IN_PROGRESS = 'IN_PROGRESS',
  DEFERRED = 'DEFERRED',
}
