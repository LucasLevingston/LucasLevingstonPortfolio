'use client'

import { AboutCertificatesSection } from '@/components/custom/about/about-certificates-section'
import { AboutEducationSection } from '@/components/custom/about/about-education-section'
import { AboutExperienceSection } from '@/components/custom/about/about-experience-section'
import { AboutHardSkillsSection } from '@/components/custom/about/about-hard-skills-section'
import { AboutLanguagesSection } from '@/components/custom/about/about-languages-section'
import { AboutPersonalInfo } from '@/components/custom/about/about-personal-info'
import { AboutProfessionalProfile } from '@/components/custom/about/about-professional-profile'
import { AboutSoftSkillsSection } from '@/components/custom/about/about-soft-skills-section'
import { PageShell } from '@/components/custom/page-shell'
import { useScrollToSearchAnchor } from '@/hooks/use-scroll-to-search-anchor'
import { useUser } from '@/hooks/use-user'

export function About() {
  const { user } = useUser()
  useScrollToSearchAnchor()

  return (
    <PageShell>
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
        {/* <AboutRecommendationsSection recommendations={user.recomendations} /> */}
        <AboutLanguagesSection languages={user.languages} />
        <AboutSoftSkillsSection skills={user.softSkills} />
      </div>
    </PageShell>
  )
}
