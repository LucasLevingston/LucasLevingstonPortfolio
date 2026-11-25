import Image from 'next/image'
import { memo } from 'react'
import { twMerge } from 'tailwind-merge'
import type { TechnologyIconProps } from './technology-icon.types'
import { useTechnologyIcon } from './use-technology-icon'

// The size class only sets the width; a square box with object-contain keeps
// both rendered dimensions equal to width/height (no Next.js aspect warning)
// while wide logos stay undistorted inside it.
const SVG_BOX_CLASS_NAME = 'aspect-square object-contain'

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
      {svg ? (
        <Image
          alt=""
          className={twMerge(
            svgSizeClassName,
            SVG_BOX_CLASS_NAME,
            iconClassName,
            className
          )}
          height={size}
          src={svg}
          unoptimized
          width={size}
        />
      ) : null}

      {iconClassName ? (
        <i className={twMerge(iconSizeClassName, iconClassName, className)} />
      ) : null}

      {element}
    </>
  )
}

const TechnologyIcon = memo(TechnologyIconComponent)

export default TechnologyIcon
