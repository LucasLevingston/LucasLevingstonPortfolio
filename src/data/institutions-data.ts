export type InstitutionKey =
  | 'udemy'
  | 'rocketseat'
  | 'dio'
  | 'uepb'
  | 'faculeste'
  | 'unifip'
  | 'santander'

export interface InstitutionMeta {
  initials: string
  colorClassName: string
  logo?: string
}

export const INSTITUTIONS: Record<InstitutionKey, InstitutionMeta> = {
  udemy: { initials: 'UD', colorClassName: 'bg-[#A435F0]' },
  rocketseat: { initials: 'RS', colorClassName: 'bg-[#8257E5]' },
  dio: { initials: 'DIO', colorClassName: 'bg-[#2E1C4D]' },
  uepb: { initials: 'UEPB', colorClassName: 'bg-[#0B3D91]' },
  faculeste: { initials: 'FCL', colorClassName: 'bg-emerald-700' },
  unifip: { initials: 'FIP', colorClassName: 'bg-amber-700' },
  santander: { initials: 'SAN', colorClassName: 'bg-[#EC0000]' },
}
