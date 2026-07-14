import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { describe, expect, it, vi } from 'vitest'
import { ProjectEmptyState } from './ProjectEmptyState'

vi.mock('react-i18next', () => ({
  useTranslation: () => ({
    t: (key: string) => key,
    i18n: { language: 'br', changeLanguage: vi.fn() },
  }),
}))

describe('ProjectEmptyState', () => {
  it('renders the empty state message', () => {
    render(<ProjectEmptyState onClearFilters={vi.fn()} />)

    expect(screen.getByText('Nenhum projeto encontrado')).toBeInTheDocument()
    expect(
      screen.getByText('Tente ajustar os filtros ou termos de busca')
    ).toBeInTheDocument()
  })

  it('renders a clear filters button with the translated label', () => {
    render(<ProjectEmptyState onClearFilters={vi.fn()} />)

    expect(
      screen.getByRole('button', { name: 'projects.clear' })
    ).toBeInTheDocument()
  })

  it('calls onClearFilters when the button is clicked', async () => {
    const user = userEvent.setup()
    const onClearFilters = vi.fn()
    render(<ProjectEmptyState onClearFilters={onClearFilters} />)

    await user.click(screen.getByRole('button', { name: 'projects.clear' }))

    expect(onClearFilters).toHaveBeenCalledTimes(1)
  })
})
