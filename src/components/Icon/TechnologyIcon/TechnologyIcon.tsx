import { memo } from 'react'
import { twMerge } from 'tailwind-merge'
import type { TechnologyIconProps } from './technology-icon.types'
import { useTechnologyIcon } from './use-technology-icon'

function TechnologyIconComponent({
  technology,
  className,
  hover,
}: TechnologyIconProps) {
  const { svgSizeClassName, iconSizeClassName, iconClassName, svg, element } =
    useTechnologyIcon(technology, hover)

  return (
    <>
      {svg && (
        <img
          alt=""
          className={twMerge(svgSizeClassName, iconClassName, className)}
          decoding="async"
          loading="lazy"
          src={svg}
        />
      )}

      {iconClassName && (
        <i className={twMerge(iconSizeClassName, iconClassName, className)} />
      )}

      {element}
    </>
  )
}

const TechnologyIcon = memo(TechnologyIconComponent)

export default TechnologyIcon
