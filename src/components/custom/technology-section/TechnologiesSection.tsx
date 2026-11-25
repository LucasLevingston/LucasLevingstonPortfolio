import React from 'react'
import TechnologyHoverIcon from '@/components/Icon/TechnologyHoverIcon'
import type { TechnologiesSectionProps } from './technology-section.types'

const TechnologiesSection: React.FC<TechnologiesSectionProps> = ({
  technologies,
}) => (
  <div className={'flex flex-wrap gap-x-3'}>
    {technologies.map(technology => (
      <TechnologyHoverIcon key={technology} technology={technology} />
    ))}
  </div>
)

export default TechnologiesSection
