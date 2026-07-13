import { renderHook } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import type { ProjectType } from '@/types/ProjectType'
import { useProjectDetails } from './use-project-details'

function makeProject(overrides: Partial<ProjectType> = {}): ProjectType {
  return {
    title: 'My Cool Project',
    description: 'A project',
    technologies: ['react', 'typescript'],
    ...overrides,
  }
}

describe('useProjectDetails', () => {
  it('sorts technologies by frequency across all projects, most used first', () => {
    const project = makeProject({ technologies: ['nodejs', 'react'] })
    const allProjects: ProjectType[] = [
      project,
      makeProject({ title: 'Other', technologies: ['react'] }),
    ]
    const { result } = renderHook(() => useProjectDetails(project, allProjects))

    expect(result.current.sortedTechnologies).toEqual(['react', 'nodejs'])
  })

  it('reports hasVersions as false when showEvolution is not set', () => {
    const project = makeProject({
      versions: [{ technologies: ['react'] }],
    })
    const { result } = renderHook(() => useProjectDetails(project, [project]))

    expect(result.current.hasVersions).toBe(false)
  })

  it('reports hasVersions as false when there are no versions', () => {
    const project = makeProject({ showEvolution: true, versions: [] })
    const { result } = renderHook(() => useProjectDetails(project, [project]))

    expect(result.current.hasVersions).toBe(false)
  })

  it('reports hasVersions as true when showEvolution is set and versions exist', () => {
    const project = makeProject({
      showEvolution: true,
      versions: [{ technologies: ['react'] }],
    })
    const { result } = renderHook(() => useProjectDetails(project, [project]))

    expect(result.current.hasVersions).toBe(true)
  })
})
