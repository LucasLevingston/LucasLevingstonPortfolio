import { User } from 'lucide-react'
import Section from '@/components/custom/section'
import { cn } from '@/lib/utils/cn'
import type { AboutPersonalInfoProps } from './about-personal-info.types'
import { useAboutPersonalInfo } from './use-about-personal-info'

export function AboutPersonalInfo(props: AboutPersonalInfoProps) {
  const { t, items } = useAboutPersonalInfo(props)

  return (
    <Section.Root id={t('about.personalInfo')}>
      <Section.Title className="flex items-center gap-3 text-xl font-semibold text-foreground">
        <User className="h-5 w-5 !text-mainColor" />
        {t('about.personalInfo')}
      </Section.Title>
      <Section.Content
        className={cn(
          'grid gap-x-8 gap-y-5 p-6',
          'divide-y divide-border sm:grid-cols-2 sm:divide-y-0'
        )}
      >
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
