'use client'

import { motion } from 'framer-motion'
import parse from 'html-react-parser'
import { useTranslation } from 'react-i18next'
import Typewriter from 'typewriter-effect'
import Header from '@/components/custom/header'
import Photo from '@/components/custom/photo'
import { ResumeButton } from '@/components/custom/resume-button'
import SocialBar from '@/components/custom/social-bar'
import Stats from '@/components/custom/stats'
import LanguageToggle from '@/components/toggles/LanguageToggle'
import { ModeToggle } from '@/components/toggles/ModeToggle'
import { useUser } from '@/hooks/use-user'

const EASE_OUT = [0.16, 1, 0.3, 1] as const

export function Home() {
  const { user } = useUser()
  const { t } = useTranslation()

  const rise = (delay: number) => ({
    initial: { opacity: 0, y: 16 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.5, delay, ease: EASE_OUT },
  })

  return (
    <div className="min-h-screen p-4">
      <Header />
      <div className="container mx-auto px-4 py-10 md:py-12 lg:py-16">
        <div className="flex flex-col items-center gap-10 lg:flex-row lg:items-center lg:gap-16">
          <motion.div {...rise(0)}>
            <Photo className="h-[200px] w-[200px] sm:h-[280px] sm:w-[280px] lg:h-[360px] lg:w-[360px]" />
          </motion.div>
          <div className="max-w-2xl text-center lg:text-left">
            <motion.span
              {...rise(0.1)}
              className="mb-2 inline-block font-mono text-base text-mainColor sm:text-lg"
            >
              <Typewriter
                onInit={typewriter => {
                  typewriter
                    .typeString('Full-Stack Developer')
                    .pauseFor(5000)
                    .deleteChars(20)
                    .typeString('Front-End Developer')
                    .pauseFor(5000)
                    .deleteChars(19)
                    .typeString('Back-End Developer')
                    .pauseFor(5000)
                    .deleteChars(18)
                    .typeString('Full-Stack Developer')
                    .start()
                }}
              />
            </motion.span>
            <motion.h1
              {...rise(0.18)}
              className="mb-4 text-3xl font-bold tracking-tight sm:mb-6 sm:text-4xl md:text-5xl lg:text-6xl"
            >
              {t('home.greeting')} <br className="hidden sm:inline" />{' '}
              <span className="!text-mainColor">{user.name}</span>
            </motion.h1>

            <motion.p
              {...rise(0.26)}
              className="mb-6 max-w-xl text-sm leading-relaxed text-foreground/85 sm:mb-9 sm:text-base"
            >
              {parse(user.description)}
            </motion.p>
            <motion.div
              {...rise(0.34)}
              className="flex flex-col items-center justify-center gap-4 sm:flex-row sm:gap-6 lg:justify-start"
            >
              <ResumeButton />
              <SocialBar />
              <div className="mt-2 flex gap-2 sm:mt-0 sm:gap-1">
                <ModeToggle />
                <LanguageToggle />
              </div>
            </motion.div>
          </div>
        </div>
      </div>
      <Stats />
    </div>
  )
}
