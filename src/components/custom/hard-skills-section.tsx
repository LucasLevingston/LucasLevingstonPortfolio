import React from 'react'
import { HardSkillsType } from '@/types/HardSkillsType'
import SectionItem from './section-item'
import TechnologiesSection from './technology-section'

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
