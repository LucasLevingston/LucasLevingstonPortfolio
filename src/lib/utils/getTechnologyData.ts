import i18next from 'i18next'
import { technologiesDataBr, technologiesDataEn } from '@/data/technology-data'
import { TechnologyType } from '@/types/TechnologyType'

export function getTechnologyData(key: string): TechnologyType | undefined {
  const technologiesData =
    i18next.language === 'br' ? technologiesDataBr : technologiesDataEn

  const technology = technologiesData[key]

  if (!technology) {
    console.log(`Technology not found: ${key}`)
  }

  return technology
}
