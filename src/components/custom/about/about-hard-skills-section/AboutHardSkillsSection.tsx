import { Code } from 'lucide-react'
import { useTranslation } from 'react-i18next'
import { HardSkillsSection } from '@/components/custom/hard-skills-section'
import Section from '@/components/custom/section'
import { Card, CardContent } from '@/components/ui/card'
import type { HardSkillsType } from '@/types/HardSkillsType'

interface AboutHardSkillsSectionProps {
  skills: HardSkillsType[]
}

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
        <Card>
          <CardContent className="pt-6">
            <HardSkillsSection skills={skills} />
          </CardContent>
        </Card>
      </Section.Content>
    </Section.Root>
  )
}
