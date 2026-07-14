import { act, render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest'
import { userBr } from '@/data/user-data'
import i18n from '@/i18n'
import { useStorage } from '@/storage/use-storage'
import { TestQueryClientProvider } from '@/test/test-query-client'
import LanguageToggle from './LanguageToggle'

async function flushFetch() {
  await act(async () => {
    await Promise.resolve()
    await Promise.resolve()
    await Promise.resolve()
    await Promise.resolve()
    await Promise.resolve()
  })
}

describe('LanguageToggle', () => {
  beforeEach(() => {
    useStorage.setState({ user: userBr })
    i18n.changeLanguage('br')
    vi.stubGlobal(
      'fetch',
      vi.fn().mockResolvedValue({
        json: () => Promise.resolve({ totalCommits: 42 }),
      })
    )
  })

  afterEach(() => {
    i18n.changeLanguage('br')
    vi.unstubAllGlobals()
  })

  it('renders checked when the current language is Portuguese', async () => {
    render(
      <TestQueryClientProvider>
        <LanguageToggle />
      </TestQueryClientProvider>
    )
    await flushFetch()

    expect(screen.getByRole('switch')).toBeChecked()
  })

  it('renders unchecked when the current language is English', async () => {
    i18n.changeLanguage('en')

    render(
      <TestQueryClientProvider>
        <LanguageToggle />
      </TestQueryClientProvider>
    )
    await flushFetch()

    expect(screen.getByRole('switch')).not.toBeChecked()
  })

  it('toggles the language when clicked', async () => {
    i18n.changeLanguage('en')
    const user = userEvent.setup()

    render(
      <TestQueryClientProvider>
        <LanguageToggle />
      </TestQueryClientProvider>
    )
    await flushFetch()

    const toggle = screen.getByRole('switch')
    expect(toggle).not.toBeChecked()

    await user.click(toggle)

    expect(toggle).toBeChecked()
    expect(i18n.language).toBe('br')
  })
})
