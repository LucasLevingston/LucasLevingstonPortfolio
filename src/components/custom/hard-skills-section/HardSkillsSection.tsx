import React from 'react'
import SectionItem from '@/components/custom/section-item'
import TechnologiesSection from '@/components/custom/technology-section'
import { HardSkillsType } from '@/types/HardSkillsType'

export const HardSkillsSection: React.FC<{ skills: HardSkillsType[] }> = ({
  skills,
}) => {
  return (
    <div className="flex flex-wrap space-y-3">
      {skills.map((skill, index) => (
        <SectionItem
          className="w-full sm:w-1/3"
          key={index}
          title={skill.category}
        >
          <TechnologiesSection technologies={skill.technologies} />
        </SectionItem>
      ))}
    </div>
  )
}
