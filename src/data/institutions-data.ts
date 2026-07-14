import { enterpriseLogos } from '@/assets/images'

export type InstitutionKey =
  | 'udemy'
  | 'rocketseat'
  | 'dio'
  | 'uepb'
  | 'faculeste'
  | 'unifip'

export interface InstitutionMeta {
  initials: string
  colorClassName: string
  logo?: string
}

export const INSTITUTIONS: Record<InstitutionKey, InstitutionMeta> = {
  udemy: {
    logo: enterpriseLogos.udemy,
    initials: 'UD',
    colorClassName: 'bg-[#A435F0]',
  },
  rocketseat: {
    logo: enterpriseLogos.rocketseat,
    initials: 'RS',
    colorClassName: 'bg-[#8257E5]',
  },
  dio: {
    logo: enterpriseLogos.dio,
    initials: 'DIO',
    colorClassName: 'bg-[#2E1C4D]',
  },
  uepb: {
    logo: enterpriseLogos.uepb,
    initials: 'UEPB',
    colorClassName: 'bg-[#0B3D91]',
  },
  faculeste: {
    logo: enterpriseLogos.faculeste,
    initials: 'FCL',
    colorClassName: 'bg-emerald-700',
  },
  unifip: {
    logo: enterpriseLogos.fip,
    initials: 'FIP',
    colorClassName: 'bg-amber-700',
  },
}
