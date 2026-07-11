import { Globe } from 'lucide-react'
import { useTranslation } from 'react-i18next'
import Section from '@/components/custom/section'
import { Badge } from '@/components/ui/badge'

interface AboutLanguagesSectionProps {
  languages?: { language: string; type: string }[]
}

export function AboutLanguagesSection({
  languages,
}: AboutLanguagesSectionProps) {
  const { t } = useTranslation()

  if (!languages) {
    return null
  }

  return (
    <Section.Root id={t('about.languagesTitle')}>
      <Section.Title className="flex items-center gap-3 text-xl font-semibold text-foreground">
        <Globe className="h-5 w-5 !text-mainColor" />
        {t('about.languagesTitle')}
      </Section.Title>
      <Section.Content>
        <div className="flex flex-wrap gap-x-6 gap-y-3">
          {languages.map(lang => (
            <div className="flex items-center gap-3" key={lang.language}>
              <Badge className="border-mainColor bg-mainColor/10 text-base text-foreground">
                {lang.language}
              </Badge>
              <p className="text-base text-foreground">{lang.type}</p>
            </div>
          ))}
        </div>
      </Section.Content>
    </Section.Root>
  )
}
