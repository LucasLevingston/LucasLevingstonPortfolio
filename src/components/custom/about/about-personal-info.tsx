import { Mail, MapPin, Phone, User } from 'lucide-react'
import { useTranslation } from 'react-i18next'
import Section from '@/components/custom/section'

interface AboutPersonalInfoProps {
  location: string
  address: string
  email: string
  phone: string
}

export function AboutPersonalInfo({
  location,
  address,
  email,
  phone,
}: AboutPersonalInfoProps) {
  const { t } = useTranslation()

  const items = [
    { icon: MapPin, label: t('about.location'), value: location },
    { icon: MapPin, label: t('about.address'), value: address },
    { icon: Mail, label: t('about.email'), value: email },
    { icon: Phone, label: t('about.phone'), value: phone },
  ]

  return (
    <Section.Root id={t('about.personalInfo')}>
      <Section.Title className="flex items-center gap-3 text-xl font-semibold text-foreground">
        <User className="h-5 w-5 !text-mainColor" />
        {t('about.personalInfo')}
      </Section.Title>
      <Section.Content className="grid gap-x-8 gap-y-5 divide-y divide-border sm:grid-cols-2 sm:divide-y-0">
        {items.map(item => (
          <div className="flex items-center gap-3" key={item.label}>
            <item.icon className="h-4 w-4 shrink-0 !text-mainColor" />
            <div>
              <p className="mb-1 text-sm font-medium tracking-wide text-muted-foreground">
                {item.label}
              </p>
              <p className="text-base text-foreground">{item.value}</p>
            </div>
          </div>
        ))}
      </Section.Content>
    </Section.Root>
  )
}
