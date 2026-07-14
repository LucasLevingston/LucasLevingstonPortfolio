import Image from 'next/image'
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
  const size = hover ? 72 : 30

  return (
    <>
      {svg && (
        <Image
          alt=""
          className={twMerge(svgSizeClassName, iconClassName, className)}
          height={size}
          src={svg}
          unoptimized
          width={size}
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
