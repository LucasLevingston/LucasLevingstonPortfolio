import { getTechnologyData } from '@/lib/utils/getTechnologyData'

export function useTechnologyHoverIcon(technology: string) {
  return getTechnologyData(technology)
}
