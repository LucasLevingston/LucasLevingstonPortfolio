'use client'

import { useSearchParams } from 'next/navigation'
import { useEffect } from 'react'
import { useTranslation } from 'react-i18next'
import { AboutCertificatesSection } from '@/components/custom/about/about-certificates-section'
import { AboutEducationSection } from '@/components/custom/about/about-education-section'
import { AboutExperienceSection } from '@/components/custom/about/about-experience-section'
import { AboutHardSkillsSection } from '@/components/custom/about/about-hard-skills-section'
import { AboutLanguagesSection } from '@/components/custom/about/about-languages-section'
import { AboutPersonalInfo } from '@/components/custom/about/about-personal-info'
import { AboutProfessionalProfile } from '@/components/custom/about/about-professional-profile'
import { AboutRecommendationsSection } from '@/components/custom/about/about-recommendations-section'
import { AboutSoftSkillsSection } from '@/components/custom/about/about-soft-skills-section'
import Container from '@/components/custom/container'
import Sidebar from '@/components/custom/custom-sidebar'
import Header from '@/components/custom/header'
import { useUser } from '@/hooks/use-user'

export function About() {
  const { i18n } = useTranslation()
  const { user } = useUser()
  const searchParams = useSearchParams()

  useEffect(() => {
    i18n.changeLanguage(i18n.language)
  }, [i18n, i18n.language])

  useEffect(() => {
    const search = searchParams.toString()
    if (!search) {
      window.scrollTo(0, 0)
      return
    }
    const element = document.getElementById(search)
    element?.scrollIntoView({ behavior: 'smooth' })
  }, [searchParams])

  return (
    <div className="text-foreground">
      <Sidebar />
      <Container>
        <Header />
        <div className="space-y-8">
          <AboutProfessionalProfile profile={user.professionalProfile} />
          <AboutPersonalInfo
            address={user.address}
            email={user.email}
            location={user.location}
            phone={user.phone}
          />
          <AboutHardSkillsSection skills={user.hardSkills} />
          <AboutExperienceSection experiences={user.experiences} />
          <AboutEducationSection formations={user.formations} />
          <AboutCertificatesSection certificates={user.certificates} />
          <AboutRecommendationsSection recommendations={user.recomendations} />
          <AboutLanguagesSection languages={user.languages} />
          <AboutSoftSkillsSection skills={user.softSkills} />
        </div>
      </Container>
    </div>
  )
}
