import { twMerge } from 'tailwind-merge'
import { getIconByTechnology } from '@/lib/utils/get-icon-by-technology'

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
  const defaultClassNameSVG = hover ? 'w-[72px]' : 'w-[30px]'
  const defaultClassNameIcon = hover ? 'text-7xl' : 'text-3xl'

  const { iconClassName, svg, element } = getIconByTechnology(technology)

  return (
    <>
      {svg && (
        <img
          alt=""
          className={twMerge(defaultClassNameSVG, iconClassName, className)}
          src={svg}
        />
      )}

      {iconClassName && (
        <i
          className={twMerge(defaultClassNameIcon, iconClassName, className)}
        />
      )}

      {element}
    </>
  )
}
