import CountUp from 'react-countup'
import { useTranslation } from 'react-i18next'
import { technologiesDataBr } from '@/data/technology-data'
import { useUser } from '@/hooks/use-user'

const Stats = () => {
  const { user } = useUser()
  const { t } = useTranslation()

  const stats = [
    {
      num: 2,
      text: t('stats.years'),
    },
    {
      num: user.projects.length + 1,
      text: t('stats.projectsCompleted'),
    },
    {
      num: Object.keys(technologiesDataBr).length,
      text: t('stats.technologiesMastered'),
    },
    {
      num: user.totalCommits,
      text: t('stats.codeCommits'),
    },
  ]

  return (
    <section className="pb-12 pt-4 xl:pb-0 xl:pt-0">
      <div className="container mx-auto">
        <div className="mx-auto grid max-w-[80vw] grid-cols-2 gap-6 md:flex xl:max-w-none">
          {stats.map((stat, index) => {
            return (
              <div
                className="flex flex-1 items-center justify-center gap-4 xl:justify-start"
                key={index}
              >
                <CountUp
                  className="text-4xl font-extrabold !text-mainColor xl:text-6xl"
                  delay={1}
                  duration={5}
                  end={stat.num || 0}
                />
                <p
                  className={`${stat.text.length < 15 ? 'max-w-[100px]' : 'max-w-[150px]'} font-semibold leading-snug`}
                >
                  {stat.text}
                </p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

export default Stats
