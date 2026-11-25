export type Language = 'br' | 'en'

export interface LanguageOption {
  /** Short code shown inside the segmented control. */
  code: string
  /** flag-icons country code (`fi-<flag>`). */
  flag: string
  /** Language autonym, used as the accessible name. */
  label: string
  /** BCP 47 tag so screen readers pronounce the autonym correctly. */
  lang: string
  value: Language
}
