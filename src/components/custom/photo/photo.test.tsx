import { act, render } from '@testing-library/react'
import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest'
import '@/i18n'
import { TestQueryClientProvider } from '@/test/test-query-client'
import Photo from './Photo'

beforeEach(() => {
  vi.stubGlobal(
    'fetch',
    vi.fn(() =>
      Promise.resolve({
        json: () => Promise.resolve({ totalCommits: 0 }),
      })
    ) as unknown as typeof fetch
  )
})

afterEach(() => {
  vi.unstubAllGlobals()
})

describe('Photo', () => {
  it('renders the user profile picture', async () => {
    await act(() => {
      render(
        <TestQueryClientProvider>
          <Photo />
        </TestQueryClientProvider>
      )
    })

    const image = document.querySelector('img') as HTMLImageElement
    expect(image).toBeInTheDocument()
    expect(image).toHaveAttribute('alt', '')
    expect(image).toHaveClass('rounded-full')
  })

  it('renders the decorative animated border svg', async () => {
    await act(() => {
      render(
        <TestQueryClientProvider>
          <Photo />
        </TestQueryClientProvider>
      )
    })

    const svg = document.querySelector('svg')
    expect(svg).toBeInTheDocument()
    expect(svg?.querySelector('circle')).toBeInTheDocument()
  })

  it('applies a custom className to the wrapper and image', async () => {
    const { container } = await act(async () =>
      render(
        <TestQueryClientProvider>
          <Photo className="custom-photo" />
        </TestQueryClientProvider>
      )
    )

    expect(container.firstElementChild).toHaveClass('custom-photo')
    const image = document.querySelector('img') as HTMLImageElement
    expect(image).toHaveClass('custom-photo')
  })
})
