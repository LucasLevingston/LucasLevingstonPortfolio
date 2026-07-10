'use client'

import { motion } from 'framer-motion'
import ProjectCard from '@/components/custom/project-card'
import { useInfiniteReveal } from '@/hooks/use-infinite-reveal'
import { mountReveal } from '@/lib/utils/motion-reveal'
import type { ProjectType } from '@/types/ProjectType'
import { ProjectEmptyState } from './project-empty-state'

const INITIAL_VISIBLE = 6
const LOAD_STEP = 6

interface ProjectListProps {
  projects: ProjectType[]
  allProjects: ProjectType[]
  onClearFilters: () => void
}

export function ProjectList({
  projects,
  allProjects,
  onClearFilters,
}: ProjectListProps) {
  const { visibleItems, hasMore, sentinelRef } = useInfiniteReveal(
    projects,
    INITIAL_VISIBLE,
    LOAD_STEP
  )

  if (projects.length === 0) {
    return <ProjectEmptyState onClearFilters={onClearFilters} />
  }

  return (
    <div className="space-y-4">
      {visibleItems.map((project, index) => (
        <motion.div key={project.title} {...mountReveal(index)}>
          <ProjectCard allProjects={allProjects} project={project} />
        </motion.div>
      ))}
      {hasMore && <div className="h-1 w-full" ref={sentinelRef} />}
    </div>
  )
}
