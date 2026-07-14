'use client'

import { motion } from 'framer-motion'
import ProjectCard from '@/components/custom/project-card'
import { ProjectEmptyState } from '@/components/custom/projects/project-empty-state'
import { mountReveal } from '@/lib/utils/motion-reveal'
import type { ProjectType } from '@/types/ProjectType'
import { useProjectList } from './use-project-list'

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
  const { visibleItems, hasMore, sentinelRef, isEmpty } =
    useProjectList(projects)

  if (isEmpty) {
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
