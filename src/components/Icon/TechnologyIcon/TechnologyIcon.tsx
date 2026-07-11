import { twMerge } from 'tailwind-merge'
import { useTechnologyIcon } from './use-technology-icon'

interface TechnologyIconProps {
  technology: string
  className?: string
  hover?: boolean
}

export default function TechnologyIcon({
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
