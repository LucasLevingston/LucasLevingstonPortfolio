import { act, render, screen } from '@testing-library/react'
import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest'
import '@/i18n'
import Stats from './Stats'

beforeEach(() => {
  vi.stubGlobal(
    'fetch',
    vi.fn(() =>
      Promise.resolve({
        json: () => Promise.resolve({ totalCommits: 42 }),
      })
    ) as unknown as typeof fetch
  )
})

afterEach(() => {
  vi.unstubAllGlobals()
})

describe('Stats', () => {
  it('renders a label for each stat', async () => {
    await act(() => {
      render(<Stats />)
    })

    expect(screen.getByText('Anos de experiência')).toBeInTheDocument()
    expect(screen.getByText('Projetos feitos')).toBeInTheDocument()
    expect(screen.getByText('Tecnologias dominadas')).toBeInTheDocument()
    expect(screen.getByText('Commits de códigos')).toBeInTheDocument()
  })

  it('renders a CountUp number next to each label', async () => {
    const { container } = await act(async () => render(<Stats />))

    const counters = container.querySelectorAll('.text-4xl')
    expect(counters).toHaveLength(4)
  })
})
