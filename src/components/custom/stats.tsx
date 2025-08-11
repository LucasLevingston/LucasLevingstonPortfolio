import { useEffect, useState } from 'react'
import CountUp from 'react-countup'
import { useTranslation } from 'react-i18next'
import { technologiesDataBr } from '@/data/technology-data'
import { useUser } from '@/hooks/user-hooks'

const Stats = () => {
  const user = useUser()
  const { t } = useTranslation()
  const [commitCount, setCommitCount] = useState(0)

  const token = import.meta.env.VITE_GITHUB_TOKEN
  const username = import.meta.env.VITE_GITHUB_USER

  const fetchCommitCount = async () => {
    try {
      const response = await fetch(
        `https://api.github.com/users/${username}/repos`,
        {
          headers: {
            Authorization: `token ${token}`,
          },
        }
      )

      const repos = await response.json()
      let totalCommits = 0

      for (const repo of repos) {
        const commitsResponse = await fetch(
          `https://api.github.com/repos/${username}/${repo.name}/commits`,
          {
            headers: {
              Authorization: `token ${token}`,
            },
          }
        )
        const commits = await commitsResponse.json()
        totalCommits += commits.length
      }

      setCommitCount(totalCommits)
    } catch (error) {
      console.error('Erro ao buscar commits:', error)
    }
  }

  useEffect(() => {
    fetchCommitCount()
  }, [])

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
      num: commitCount,
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
                  delay={2}
                  duration={5}
                  end={stat.num}
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
