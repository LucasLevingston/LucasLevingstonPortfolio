import type { InstitutionKey } from '@/data/institutions-data'
import { INSTITUTIONS } from '@/data/institutions-data'

const FALLBACK_COLOR_CLASS_NAME = 'bg-mainColor'
const WHITESPACE_PATTERN = /\s+/

function fallbackInitials(institution: string) {
  const words = institution.trim().split(WHITESPACE_PATTERN).filter(Boolean)
  if (words.length === 1) {
    return words[0].slice(0, 2).toUpperCase()
  }
  return words
    .slice(0, 2)
    .map(word => word[0])
    .join('')
    .toUpperCase()
}

export function useInstitutionIcon(
  institution: string,
  institutionKey?: InstitutionKey
) {
  const meta = institutionKey ? INSTITUTIONS[institutionKey] : undefined

  return {
    logo: meta?.logo,
    initials: meta?.initials ?? fallbackInitials(institution),
    colorClassName: meta?.colorClassName ?? FALLBACK_COLOR_CLASS_NAME,
  }
}
