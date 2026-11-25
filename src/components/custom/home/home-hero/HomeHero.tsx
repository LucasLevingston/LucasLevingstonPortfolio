'use client'

import { motion } from 'framer-motion'
import parse from 'html-react-parser'
import { useTranslation } from 'react-i18next'
import Photo from '@/components/custom/photo'
import { ResumeButton } from '@/components/custom/resume-button'
import { RoleTypewriter } from '@/components/custom/role-typewriter'
import SocialBar from '@/components/custom/social-bar'
import LanguageToggle from '@/components/toggles/LanguageToggle'
import { ModeToggle } from '@/components/toggles/ModeToggle'
import { riseIn } from '@/lib/utils/motion-reveal'
import type { HomeHeroProps } from './home-hero.types'

const LAYOUT_CLASS_NAME =
  'flex flex-col items-center justify-between gap-10 lg:flex-row lg:items-center lg:gap-16'
const PHOTO_CLASS_NAME =
  'h-[200px] w-[200px] sm:h-[280px] sm:w-[280px] lg:h-[360px] lg:w-[360px]'
const TITLE_CLASS_NAME =
  'mb-4 text-3xl font-bold tracking-tight sm:mb-6 sm:text-4xl md:text-5xl lg:text-6xl'
const DESCRIPTION_CLASS_NAME =
  'mb-6 max-w-xl text-sm leading-relaxed text-foreground/85 sm:mb-9 sm:text-base'
const ACTIONS_CLASS_NAME =
  'flex flex-col items-center justify-center gap-4 sm:flex-row sm:gap-6 lg:justify-start'

export function HomeHero({ name, description }: HomeHeroProps) {
  const { t } = useTranslation()

  return (
    <div className="container mx-auto px-4 py-10 md:py-12 lg:py-16">
      <div className={LAYOUT_CLASS_NAME}>
        <motion.div {...riseIn(0)}>
          <Photo className={PHOTO_CLASS_NAME} />
        </motion.div>
        <div className="max-w-5xl text-center lg:text-left">
          <motion.span
            {...riseIn(0.1)}
            className="mb-2 inline-block font-mono text-base text-mainColor sm:text-lg"
          >
            <RoleTypewriter />
          </motion.span>
          <motion.h1 {...riseIn(0.18)} className={TITLE_CLASS_NAME}>
            {t('home.greeting')} <br className="hidden sm:inline" />{' '}
            <span className="!text-mainColor">{name}</span>
          </motion.h1>

          <motion.p {...riseIn(0.26)} className={DESCRIPTION_CLASS_NAME}>
            {parse(description)}
          </motion.p>
          <motion.div {...riseIn(0.34)} className={ACTIONS_CLASS_NAME}>
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
  )
}
