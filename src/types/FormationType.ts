export interface FormationType {
  title: string
  institution: string
  duration: string
  currentStatus?: formationStatus
  startsDate: string
  endsDate: string
  graduated?: boolean
}

export enum formationStatus {
  COMPLETED = 'COMPLETED',
  IN_PROGRESS = 'IN_PROGRESS',
  DEFERRED = 'DEFERRED',
}
