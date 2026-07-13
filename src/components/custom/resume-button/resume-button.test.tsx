import { act, render, screen } from '@testing-library/react'
import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest'
import '@/i18n'
import { ResumeButton } from './ResumeButton'

const RESUME_LINK_LABEL_PATTERN = /Ver CV/i

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

describe('ResumeButton', () => {
  it('renders a link to the resume URL with the translated label', async () => {
    await act(() => {
      render(<ResumeButton />)
    })

    const link = screen.getByRole('link', { name: RESUME_LINK_LABEL_PATTERN })
    expect(link).toHaveAttribute(
      'href',
      'https://docs.google.com/document/d/1qI_1p0rpyBPJPNHA6MpwM5gGlmV-kN0X2CtzfsdtzyM/edit?usp=sharing'
    )
  })

  it('renders the eye icon alongside the label', async () => {
    const { container } = await act(() => render(<ResumeButton />))

    expect(container.querySelector('.lucide-eye')).toBeInTheDocument()
    expect(screen.getByText('Ver CV')).toBeInTheDocument()
  })
})
