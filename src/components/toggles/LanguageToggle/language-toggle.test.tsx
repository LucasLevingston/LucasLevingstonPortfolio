import { act, render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest'
import { userBr, userEn } from '@/data/user-data'
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

function renderToggle() {
  return render(
    <TestQueryClientProvider>
      <LanguageToggle />
    </TestQueryClientProvider>
  )
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

  it('renders a labelled radio group with one option per language', async () => {
    renderToggle()
    await flushFetch()

    expect(screen.getByRole('group', { name: 'Idioma' })).toBeInTheDocument()
    expect(screen.getAllByRole('radio')).toHaveLength(2)
  })

  it('checks Portuguese when the current language is "br"', async () => {
    renderToggle()
    await flushFetch()

    expect(screen.getByRole('radio', { name: 'Português' })).toBeChecked()
    expect(screen.getByRole('radio', { name: 'English' })).not.toBeChecked()
  })

  it('checks English when the current language is "en"', async () => {
    i18n.changeLanguage('en')

    renderToggle()
    await flushFetch()

    expect(screen.getByRole('radio', { name: 'English' })).toBeChecked()
    expect(screen.getByRole('radio', { name: 'Português' })).not.toBeChecked()
  })

  it('switches the language when another option is clicked', async () => {
    const user = userEvent.setup()

    renderToggle()
    await flushFetch()

    await user.click(screen.getByText('EN'))

    expect(screen.getByRole('radio', { name: 'English' })).toBeChecked()
    expect(i18n.language).toBe('en')
    expect(useStorage.getState().user).toBe(userEn)
  })

  it('switches the language with the arrow keys', async () => {
    const user = userEvent.setup()

    renderToggle()
    await flushFetch()

    screen.getByRole('radio', { name: 'Português' }).focus()
    await user.keyboard('{ArrowRight}')

    expect(i18n.language).toBe('en')
    expect(screen.getByRole('radio', { name: 'English' })).toBeChecked()
  })
})
