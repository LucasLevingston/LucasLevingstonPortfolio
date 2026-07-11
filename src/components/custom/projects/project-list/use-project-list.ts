import { useInfiniteReveal } from '@/hooks/use-infinite-reveal'
import type { ProjectType } from '@/types/ProjectType'

const INITIAL_VISIBLE = 6
const LOAD_STEP = 6

export function useProjectList(projects: ProjectType[]) {
  const { visibleItems, hasMore, sentinelRef } = useInfiniteReveal(
    projects,
    INITIAL_VISIBLE,
    LOAD_STEP
  )

  return { visibleItems, hasMore, sentinelRef, isEmpty: projects.length === 0 }
}
