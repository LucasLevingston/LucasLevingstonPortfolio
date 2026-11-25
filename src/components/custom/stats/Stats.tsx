import CountUp from 'react-countup'
import { cn } from '@/lib/utils/cn'
import { useStats } from './use-stats'

const LABEL_CLASS_NAME = 'font-semibold leading-snug'

const Stats = () => {
  const stats = useStats()

  return (
    <section className="pb-12 pt-4 xl:pb-0 xl:pt-0">
      <div className="container mx-auto">
        <div className="mx-auto grid max-w-[80vw] grid-cols-2 gap-6 md:flex xl:max-w-none">
          {stats.map((stat, index) => (
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
                className={cn(
                  stat.text.length < 15 ? 'max-w-[100px]' : 'max-w-[150px]',
                  LABEL_CLASS_NAME
                )}
              >
                {stat.text}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Stats
