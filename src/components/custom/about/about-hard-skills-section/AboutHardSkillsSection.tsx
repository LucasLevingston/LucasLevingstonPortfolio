import { Code } from 'lucide-react'
import { useTranslation } from 'react-i18next'
import { HardSkillsSection } from '@/components/custom/hard-skills-section'
import Section from '@/components/custom/section'
import type { AboutHardSkillsSectionProps } from './about-hard-skills-section.types'

export function AboutHardSkillsSection({
  skills,
}: AboutHardSkillsSectionProps) {
  const { t } = useTranslation()

  return (
    <Section.Root id={t('about.technologiesTitle')}>
      <Section.Title className="flex items-center gap-3 text-xl font-semibold text-foreground">
        <Code className="h-5 w-5 !text-mainColor" />
        {t('about.technologiesTitle')}
      </Section.Title>
      <Section.Content>
        <HardSkillsSection skills={skills} />
      </Section.Content>
    </Section.Root>
  )
}
