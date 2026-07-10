'use client'

import { notFound } from 'next/navigation'
import { getProjectIndexBySlug } from '@/lib/utils/project-slug'
import type { ProjectType } from '@/types/ProjectType'
import { useUser } from './use-user'

export function useProjectBySlug(slug: string): ProjectType {
  const { user } = useUser()
  const index = getProjectIndexBySlug(slug)

  if (index === -1) {
    notFound()
  }

  return user.projects[index]
}
