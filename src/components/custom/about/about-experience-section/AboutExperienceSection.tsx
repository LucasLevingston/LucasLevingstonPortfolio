import { motion } from 'framer-motion'
import parse from 'html-react-parser'
import { Briefcase, Building2, Calendar, MapPin } from 'lucide-react'
import Image from 'next/image'
import { useTranslation } from 'react-i18next'
import Section from '@/components/custom/section'
import { Card, CardContent, CardHeader } from '@/components/ui/card'
import { cn } from '@/lib/utils/cn'
import { scrollReveal } from '@/lib/utils/motion-reveal'
import type { AboutExperienceSectionProps } from './about-experience-section.types'
import { CurrentJobBadge } from './CurrentJobBadge'
import { isCurrentJob } from './is-current-job'

export function AboutExperienceSection({
  experiences,
}: AboutExperienceSectionProps) {
  const { t } = useTranslation()

  return (
    <Section.Root id={t('about.experiencesTitle')}>
      <Section.Title className="flex items-center gap-3 text-xl font-semibold text-foreground">
        <Briefcase className="h-5 w-5 !text-mainColor" />
        {t('about.experiencesTitle')}
      </Section.Title>

      <Section.Content className="flex flex-col gap-2">
        {experiences.map((experience, index) => (
          <motion.div key={experience.enterprise} {...scrollReveal(index)}>
            <Card className="p-6">
              <CardHeader className="flex flex-col gap-4 p-0">
                <div className="flex items-center justify-between">
                  <Section.Title className="flex items-center gap-2">
                    <Briefcase className="h-4 w-4 !text-mainColor" />
                    <h3 className="text-lg font-semibold text-foreground">
                      {experience.role}
                    </h3>
                    <CurrentJobBadge endsDate={experience.endsDate} />
                  </Section.Title>
                  {experience.logo && (
                    <Image
                      alt={`${experience.enterprise} logo`}
                      className="rounded-md"
                      height={64}
                      src={experience.logo}
                      width={64}
                    />
                  )}
                </div>
              </CardHeader>
              <CardContent className="p-0">
                <div className="space-y-3">
                  <div
                    className={cn(
                      'flex items-center gap-4 text-base',
                      '!text-mainColor dark:!text-mainColor'
                    )}
                  >
                    <div className="flex items-center gap-1">
                      <Calendar className="h-3 w-3" />
                      <span>
                        {isCurrentJob(experience.endsDate) ? (
                          <>
                            {experience.startsDate} {t('about.untilNow')}
                          </>
                        ) : (
                          <>
                            {t('about.start')}: {experience.startsDate} -{' '}
                            {t('about.end')}: {experience.endsDate}
                          </>
                        )}
                      </span>
                    </div>
                    <div className="flex items-center gap-1">
                      <MapPin className="h-3 w-3" />
                      <span>{experience.location}</span>
                    </div>
                  </div>

                  <div className="flex items-center gap-2">
                    <Building2 className="h-4 w-4 !text-mainColor" />
                    <span className="text-base text-foreground">
                      {t('about.enterprise')}:{' '}
                      <span className="font-medium !text-mainColor dark:!text-mainColor">
                        {experience.enterprise}
                      </span>
                    </span>
                  </div>

                  <div className="rounded-lg border-l-4 border-mainColor p-4">
                    <ul className="ml-5 list-disc space-y-1">
                      {experience.features.map((feature, idx) => (
                        <li
                          className="text-base leading-relaxed text-foreground"
                          key={idx}
                        >
                          {parse(feature)}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </Section.Content>
    </Section.Root>
  )
}
