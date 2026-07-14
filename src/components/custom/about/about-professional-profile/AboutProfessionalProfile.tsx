import parse from 'html-react-parser'
import { User } from 'lucide-react'
import { useTranslation } from 'react-i18next'
import Section from '@/components/custom/section'
import { Card, CardContent } from '@/components/ui/card'

interface AboutProfessionalProfileProps {
  profile: string
}

export function AboutProfessionalProfile({
  profile,
}: AboutProfessionalProfileProps) {
  const { t } = useTranslation()

  return (
    <Section.Root>
      <Section.Title className="flex items-center gap-3 text-xl font-semibold text-foreground">
        <User className="h-5 w-5 !text-mainColor" />
        {t('about.professionalProfile')}
      </Section.Title>
      <Section.Content>
        <Card>
          <CardContent>
            <p className="text-base leading-relaxed text-foreground">
              {parse(profile)}
            </p>
          </CardContent>
        </Card>
      </Section.Content>
    </Section.Root>
  )
}
