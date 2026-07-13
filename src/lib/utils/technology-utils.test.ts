import { describe, expect, it } from 'vitest'
import type { ProjectType } from '@/types/ProjectType'
import {
  countTechnologyFrequency,
  getMostUsedTechnologies,
  sortTechnologiesByFrequency,
} from './technology-utils'

function project(technologies: string[]): ProjectType {
  return {
    title: 'test',
    description: 'test',
    technologies,
  }
}

const projects: ProjectType[] = [
  project(['react', 'typescript']),
  project(['react', 'nodejs']),
  project(['react', 'typescript', 'nodejs']),
]

describe('countTechnologyFrequency', () => {
  it('counts how many projects use each technology', () => {
    expect(countTechnologyFrequency(projects)).toEqual({
      react: 3,
      typescript: 2,
      nodejs: 2,
    })
  })

  it('returns an empty object for an empty project list', () => {
    expect(countTechnologyFrequency([])).toEqual({})
  })
})

describe('sortTechnologiesByFrequency', () => {
  it('sorts technologies from most to least frequent, breaking ties alphabetically', () => {
    const result = sortTechnologiesByFrequency(
      ['nodejs', 'typescript', 'react'],
      projects
    )
    expect(result).toEqual(['react', 'nodejs', 'typescript'])
  })

  it('breaks ties alphabetically', () => {
    const result = sortTechnologiesByFrequency(
      ['zustand', 'axios'],
      [project(['zustand']), project(['axios'])]
    )
    expect(result).toEqual(['axios', 'zustand'])
  })

  it('treats technologies absent from any project as zero frequency', () => {
    const result = sortTechnologiesByFrequency(['docker', 'react'], projects)
    expect(result).toEqual(['react', 'docker'])
  })

  it('does not mutate the input array', () => {
    const input = ['nodejs', 'typescript', 'react']
    sortTechnologiesByFrequency(input, projects)
    expect(input).toEqual(['nodejs', 'typescript', 'react'])
  })
})

describe('getMostUsedTechnologies', () => {
  it('returns technologies sorted by descending count', () => {
    expect(getMostUsedTechnologies(projects)).toEqual([
      { technology: 'react', count: 3 },
      { technology: 'typescript', count: 2 },
      { technology: 'nodejs', count: 2 },
    ])
  })

  it('respects the limit parameter', () => {
    expect(getMostUsedTechnologies(projects, 1)).toEqual([
      { technology: 'react', count: 3 },
    ])
  })

  it('returns everything when no limit is given', () => {
    expect(getMostUsedTechnologies(projects)).toHaveLength(3)
  })

  it('returns an empty array for an empty project list', () => {
    expect(getMostUsedTechnologies([])).toEqual([])
  })
})
