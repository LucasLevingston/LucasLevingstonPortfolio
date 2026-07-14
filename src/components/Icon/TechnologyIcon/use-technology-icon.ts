import { getIconByTechnology } from '@/lib/utils/get-icon-by-technology'

export function useTechnologyIcon(technology: string, hover?: boolean) {
  const svgSizeClassName = hover ? 'w-[72px]' : 'w-[30px]'
  const iconSizeClassName = hover ? 'text-7xl' : 'text-3xl'
  const { iconClassName, svg, element } = getIconByTechnology(technology)

  return { svgSizeClassName, iconSizeClassName, iconClassName, svg, element }
}
