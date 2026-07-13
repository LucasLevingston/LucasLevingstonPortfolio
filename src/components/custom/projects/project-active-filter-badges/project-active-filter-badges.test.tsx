import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { ImageIcon } from 'lucide-react'
import { describe, expect, it, vi } from 'vitest'
import type { ProjectActiveFilterBadge } from '@/hooks/use-project-filters'
import { ProjectActiveFilterBadges } from './ProjectActiveFilterBadges'

vi.mock('react-i18next', () => ({
  useTranslation: () => ({
    t: (key: string) => key,
    i18n: { language: 'br', changeLanguage: vi.fn() },
  }),
}))

describe('ProjectActiveFilterBadges', () => {
  it('renders nothing when there are no badges', () => {
    const { container } = render(<ProjectActiveFilterBadges badges={[]} />)
    expect(container).toBeEmptyDOMElement()
  })

  it('renders a technology badge with its raw label', () => {
    const badges: ProjectActiveFilterBadge[] = [
      { id: 'react', kind: 'technology', label: 'react', clearAction: vi.fn() },
    ]

    render(<ProjectActiveFilterBadges badges={badges} />)

    expect(screen.getByText('react')).toBeInTheDocument()
  })

  it('renders a toggle badge with its translated label', () => {
    const badges: ProjectActiveFilterBadge[] = [
      {
        id: 'hasImage',
        kind: 'toggle',
        toggle: {
          key: 'hasImage',
          icon: ImageIcon,
          labelKey: 'projects.hasImage',
          filterKey: 'hasImage',
        },
        clearAction: vi.fn(),
      },
    ]

    render(<ProjectActiveFilterBadges badges={badges} />)

    expect(screen.getByText('projects.hasImage')).toBeInTheDocument()
  })

  it('calls clearAction when the badge close button is clicked', async () => {
    const user = userEvent.setup()
    const clearAction = vi.fn()
    const badges: ProjectActiveFilterBadge[] = [
      { id: 'react', kind: 'technology', label: 'react', clearAction },
    ]

    render(<ProjectActiveFilterBadges badges={badges} />)

    await user.click(screen.getByRole('button'))

    expect(clearAction).toHaveBeenCalledTimes(1)
  })

  it('renders one badge per entry', () => {
    const badges: ProjectActiveFilterBadge[] = [
      { id: 'react', kind: 'technology', label: 'react', clearAction: vi.fn() },
      {
        id: 'typescript',
        kind: 'technology',
        label: 'typescript',
        clearAction: vi.fn(),
      },
    ]

    render(<ProjectActiveFilterBadges badges={badges} />)

    expect(screen.getAllByRole('button')).toHaveLength(2)
  })
})
