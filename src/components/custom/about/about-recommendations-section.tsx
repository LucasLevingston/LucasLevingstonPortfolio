import { motion } from 'framer-motion'
import { Building2, Calendar, ExternalLink, MessageSquare } from 'lucide-react'
import { useTranslation } from 'react-i18next'
import Section from '@/components/custom/section'
import SectionItem from '@/components/custom/section-item'
import { Card, CardContent, CardHeader } from '@/components/ui/card'
import { scrollReveal } from '@/lib/utils/motion-reveal'
import type { RecommendationType } from '@/types/RecommendationType'

interface AboutRecommendationsSectionProps {
  recommendations: RecommendationType[]
}

export function AboutRecommendationsSection({
  recommendations,
}: AboutRecommendationsSectionProps) {
  const { t } = useTranslation()

  return (
    <Section.Root id={t('about.recommendationsTitle')}>
      <Section.Title className="flex items-center gap-3 text-xl font-semibold text-foreground">
        <MessageSquare className="h-5 w-5 !text-mainColor" />
        {t('about.recommendationsTitle')}
      </Section.Title>
      <Section.Content className="space-y-4">
        {recommendations.map((recomendation, index) => (
          <motion.div key={recomendation.date} {...scrollReveal(index)}>
            <Card className="flex flex-col gap-2 p-6 transition-[transform,box-shadow] duration-200 ease-out hover:-translate-y-1 hover:shadow-lg">
              <CardHeader className="p-0">
                <div className="flex items-center gap-4">
                  <SectionItem.Avatar
                    imageUrl={recomendation.linkedinImageUrl}
                  />
                  <div className="flex-1">
                    <h3 className="text-lg font-semibold text-foreground">
                      {recomendation.name}
                    </h3>
                    <p className="text-base !text-mainColor dark:!text-mainColor">
                      {recomendation.position}
                    </p>
                  </div>
                  <div className="flex items-center gap-2">
                    <ExternalLink className="h-4 w-4 !text-mainColor" />
                    <SectionItem.LinkedIn recommendation={recomendation} />
                  </div>
                </div>
              </CardHeader>
              <CardContent className="p-0">
                <div className="space-y-3">
                  <div className="flex items-center gap-2">
                    <Building2 className="h-4 w-4 !text-mainColor" />
                    <p className="text-base font-medium text-foreground">
                      {recomendation.company}
                    </p>
                  </div>
                  <div className="rounded-lg border-l-4 border-mainColor p-4">
                    <div className="mb-2 flex items-center gap-2">
                      <Calendar className="h-4 w-4 !text-mainColor" />
                      <p className="text-base font-medium tracking-wide !text-mainColor dark:!text-mainColor">
                        {recomendation.date}
                      </p>
                    </div>
                    <div className="flex gap-2">
                      <MessageSquare className="mt-1 h-4 w-4 flex-shrink-0 !text-mainColor" />
                      <p className="text-base italic leading-relaxed text-foreground">
                        "{recomendation.comments}"
                      </p>
                    </div>
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
