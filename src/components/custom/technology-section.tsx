import React from 'react'
import TechnologyHoverIcon from '../Icon/TechnologyHoverIcon'

interface TechnologiesSectionProps {
  technologies: string[]
}

const TechnologiesSection: React.FC<TechnologiesSectionProps> = ({
  technologies,
}) => {
  return (
    <div className={'flex flex-wrap gap-x-3'}>
      {technologies.map(technology => (
        <TechnologyHoverIcon key={technology} technology={technology} />
      ))}
    </div>
  )
}

export default TechnologiesSection
