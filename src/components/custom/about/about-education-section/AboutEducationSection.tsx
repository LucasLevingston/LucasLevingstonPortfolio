import { motion } from 'framer-motion'
import {
  Building2,
  Calendar,
  Clock,
  GraduationCap,
  PauseCircle,
  PlayCircle,
  Trophy,
  Zap,
} from 'lucide-react'
import { useTranslation } from 'react-i18next'
import Section from '@/components/custom/section'
import { Badge } from '@/components/ui/badge'
import { Card, CardContent, CardHeader } from '@/components/ui/card'
import { cn } from '@/lib/utils/cn'
import { scrollReveal } from '@/lib/utils/motion-reveal'
import { formationStatus, type FormationType } from '@/types/FormationType'

interface AboutEducationSectionProps {
  formations: FormationType[]
}

function EducationStatusBadge({ formation }: { formation: FormationType }) {
  const { t } = useTranslation()

  if (formation.graduated) {
    return (
      <Badge className="border-green-300 bg-green-100 text-base text-green-800 hover:bg-green-100 dark:bg-green-900 dark:text-green-300">
        <Trophy className="mr-1 h-3 w-3" />
        {t('about.graduated')}
      </Badge>
    )
  }

  if (
    formation.currentStatus?.toLowerCase().includes('trancado') ||
    formation.currentStatus?.toLowerCase().includes('deferred')
  ) {
    return (
      <Badge
        className="border-red-300 bg-red-50 text-base text-red-700 dark:bg-red-950 dark:text-red-300"
        variant="outline"
      >
        <PauseCircle className="mr-1 h-3 w-3" />
        {t('about.deferred')}
      </Badge>
    )
  }

  return (
    <Badge className="border-blue-300 bg-blue-100 text-base text-blue-800 hover:bg-blue-100 dark:bg-blue-900 dark:text-blue-300">
      <PlayCircle className="mr-1 h-3 w-3" />
      {t('about.inProgress')}
    </Badge>
  )
}

export function AboutEducationSection({
  formations,
}: AboutEducationSectionProps) {
  const { t } = useTranslation()

  return (
    <Section.Root id={t('about.educationTitle')}>
      <Section.Title className="flex items-center gap-3 text-xl font-semibold text-foreground">
        <GraduationCap className="h-5 w-5 !text-mainColor" />
        {t('about.educationTitle')}
      </Section.Title>
      <Section.Content className="space-y-4">
        {formations.map((formation, index) => (
          <motion.div key={formation.title} {...scrollReveal(index)}>
            <Card className="flex flex-col gap-2 p-6 transition-[transform,box-shadow] duration-200 ease-out hover:-translate-y-1 hover:shadow-lg">
              <CardHeader className="p-0">
                <div className="flex w-full items-start justify-between gap-4">
                  <div className="flex flex-1 items-center gap-3">
                    <div className="rounded-lg">
                      <GraduationCap className="h-4 w-4 text-mainColor" />
                    </div>
                    <h3 className="flex-1 text-lg font-semibold text-foreground">
                      {formation.title}
                    </h3>
                  </div>
                  <EducationStatusBadge formation={formation} />
                </div>
              </CardHeader>
              <CardContent className="p-0">
                <div className="space-y-2">
                  <div className="flex items-center gap-3 rounded-lg">
                    <Building2 className="h-4 w-4 !text-mainColor" />
                    <span className="text-base font-medium text-foreground">
                      {formation.institution}
                    </span>
                  </div>

                  <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                    <div className="flex items-center gap-3 rounded-lg">
                      <Calendar className="h-4 w-4 !text-mainColor" />
                      <div>
                        <span className="block text-base font-medium tracking-wide">
                          {t('about.period')}
                        </span>
                        <span className="text-base text-foreground">
                          {formation.startsDate} - {formation.endsDate}
                        </span>
                      </div>
                    </div>

                    {formation.duration && (
                      <div className="flex items-center gap-3 rounded-lg p-3">
                        <Clock className="h-4 w-4 !text-mainColor" />
                        <div>
                          <span className="block text-base font-medium tracking-wide">
                            {t('about.duration')}
                          </span>
                          <span className="text-base text-foreground">
                            {formation.duration}
                          </span>
                        </div>
                      </div>
                    )}
                  </div>

                  <div
                    className={cn(
                      'rounded-lg border-l-4 p-4',
                      formation.currentStatus === formationStatus.COMPLETED &&
                        'border-green-500',
                      formation.currentStatus === formationStatus.DEFERRED &&
                        'border-red-500',
                      formation.currentStatus === formationStatus.IN_PROGRESS &&
                        'border-blue-500'
                    )}
                  >
                    <div className="flex items-center gap-2">
                      <Zap className="h-4 w-4 !text-mainColor" />
                      <span className="text-base font-medium tracking-wide underline">
                        {t('about.currentStatus')}:
                      </span>
                    </div>
                    <span className="mt-1 block text-base">
                      {formation.currentStatus ===
                        formationStatus.COMPLETED && (
                        <span className="flex items-center gap-2 font-medium text-green-600">
                          <Trophy className="h-4 w-4" />
                          {t('about.completedSuccessfully')}
                        </span>
                      )}
                      {formation.currentStatus === formationStatus.DEFERRED && (
                        <span className="flex items-center gap-2 font-medium text-red-600">
                          <PauseCircle className="h-4 w-4" />
                          {t('about.deferred')}
                        </span>
                      )}
                      {formation.currentStatus ===
                        formationStatus.IN_PROGRESS && (
                        <span className="flex items-center gap-2 font-medium text-blue-600">
                          <PlayCircle className="h-4 w-4" />
                          {t('about.inProgress')}
                        </span>
                      )}
                    </span>
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
