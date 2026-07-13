import { renderHook } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import type { ProjectType } from '@/types/ProjectType'
import { useProjectCard } from './use-project-card'

function makeProject(overrides: Partial<ProjectType> = {}): ProjectType {
  return {
    title: 'My Cool Project',
    description: 'A project',
    technologies: ['react', 'typescript'],
    ...overrides,
  }
}

describe('useProjectCard', () => {
  it('builds a slug-based href from the project title', () => {
    const project = makeProject({ title: 'My Cool Project' })
    const { result } = renderHook(() => useProjectCard(project, [project]))

    expect(result.current.href).toBe('/projects/my-cool-project')
  })

  it('prefers the thumbnail over the first image for the preview image', () => {
    const project = makeProject({
      thumbnail: '/thumb.png',
      images: ['/first.png', '/second.png'],
    })
    const { result } = renderHook(() => useProjectCard(project, [project]))

    expect(result.current.previewImage).toBe('/thumb.png')
  })

  it('falls back to the first image when there is no thumbnail', () => {
    const project = makeProject({
      images: ['/first.png', '/second.png'],
    })
    const { result } = renderHook(() => useProjectCard(project, [project]))

    expect(result.current.previewImage).toBe('/first.png')
  })

  it('returns an undefined preview image when there is no thumbnail or images', () => {
    const project = makeProject()
    const { result } = renderHook(() => useProjectCard(project, [project]))

    expect(result.current.previewImage).toBeUndefined()
  })

  it('sorts technologies by frequency across all projects, most used first', () => {
    const project = makeProject({ technologies: ['nodejs', 'react'] })
    const allProjects: ProjectType[] = [
      project,
      makeProject({ title: 'Other', technologies: ['react'] }),
      makeProject({ title: 'Another', technologies: ['react'] }),
    ]
    const { result } = renderHook(() => useProjectCard(project, allProjects))

    expect(result.current.sortedTechnologies).toEqual(['react', 'nodejs'])
  })
})
