import { act, render, screen } from '@testing-library/react'
import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest'
import '@/i18n'
import { TestQueryClientProvider } from '@/test/test-query-client'
import SocialBar from './SocialBar'

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

describe('SocialBar', () => {
  it('renders a link for each social network with the correct href', async () => {
    await act(() => {
      render(
        <TestQueryClientProvider>
          <SocialBar />
        </TestQueryClientProvider>
      )
    })

    const links = screen.getAllByRole('link')
    expect(links).toHaveLength(4)

    const hrefs = links.map(link => link.getAttribute('href'))
    expect(hrefs).toContain('https://github.com/LucasLevingston')
    expect(hrefs).toContain(
      'https://www.linkedin.com/in/lucas-levingston-44b851231/'
    )
    expect(hrefs).toContain('https://wa.me/message/BL2FCNM72L7GJ1')
    expect(hrefs).toContain(
      'https://www.instagram.com/lucaolevingston/?hl=pt-br'
    )
  })

  it('applies a custom className to the wrapper section', async () => {
    const { container } = await act(async () =>
      render(
        <TestQueryClientProvider>
          <SocialBar className="custom-social" />
        </TestQueryClientProvider>
      )
    )

    expect(container.querySelector('section')).toHaveClass('custom-social')
  })
})
