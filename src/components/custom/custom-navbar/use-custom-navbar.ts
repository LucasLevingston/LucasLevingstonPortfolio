'use client'

import { usePathname } from 'next/navigation'
import { useEffect, useState } from 'react'
import { useTranslation } from 'react-i18next'
import { useUser } from '@/hooks/use-user'

interface NavSection {
  title: string
  description: string
  id: string
}

export function useCustomNavbar() {
  const { t, i18n } = useTranslation()
  const pathname = usePathname()
  const [activeButton, setActiveButton] = useState<string>('/')
  const { user } = useUser()

  useEffect(() => {
    setActiveButton(pathname)
  }, [pathname, i18n.language])

  const projects: NavSection[] = [
    {
      title: user.projects[0].title,
      description: user.projects[0].description,
      id: user.projects[0].title,
    },
    {
      title: user.projects[1].title,
      description: user.projects[1].description,
      id: user.projects[1].title,
    },
    {
      title: user.projects[2].title,
      description: user.projects[2].description,
      id: user.projects[2].title,
    },
    {
      title: user.projects[3].title,
      description: user.projects[3].description,
      id: user.projects[3].title,
    },
  ]

  const aboutSections: NavSection[] = [
    {
      title: t('about.experiencesTitle'),
      description: t('about.experiencesDescription'),
      id: t('about.experiencesTitle'),
    },
    {
      title: t('about.educationTitle'),
      description: t('about.educationDescription'),
      id: t('about.educationTitle'),
    },
    {
      title: t('about.certificatesTitle'),
      description: t('about.certificatesDescription'),
      id: t('about.certificatesTitle'),
    },
  ]

  const isActive = (path: string) => activeButton === path

  return { t, user, projects, aboutSections, isActive }
}
