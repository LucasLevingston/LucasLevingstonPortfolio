import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { describe, expect, it, vi } from 'vitest'
import { ThemeProvider } from '@/components/providers/ThemeProvider'
import { ModeToggle } from './ModeToggle'

function mockMatchMedia(matches = false) {
  Object.defineProperty(window, 'matchMedia', {
    writable: true,
    value: vi.fn().mockImplementation(query => ({
      matches,
      media: query,
      addEventListener: vi.fn(),
      removeEventListener: vi.fn(),
      addListener: vi.fn(),
      removeListener: vi.fn(),
      dispatchEvent: vi.fn(),
    })),
  })
}

mockMatchMedia(false)

describe('ModeToggle', () => {
  it('renders unchecked (sun) when the theme is light', () => {
    render(
      <ThemeProvider defaultTheme="light">
        <ModeToggle />
      </ThemeProvider>
    )

    expect(screen.getByRole('switch')).not.toBeChecked()
  })

  it('renders checked (moon) when the theme is dark', () => {
    render(
      <ThemeProvider defaultTheme="dark">
        <ModeToggle />
      </ThemeProvider>
    )

    expect(screen.getByRole('switch')).toBeChecked()
  })

  it('toggles the theme when clicked', async () => {
    const user = userEvent.setup()

    render(
      <ThemeProvider defaultTheme="light">
        <ModeToggle />
      </ThemeProvider>
    )

    const toggle = screen.getByRole('switch')
    expect(toggle).not.toBeChecked()

    await user.click(toggle)

    expect(toggle).toBeChecked()
  })
})
