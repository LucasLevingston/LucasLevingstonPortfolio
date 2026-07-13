import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { describe, expect, it, vi } from 'vitest'
import type { ProjectFilterState } from '@/hooks/use-project-filters'
import { ProjectTechnologyFilterPopover } from './ProjectTechnologyFilterPopover'

vi.mock('react-i18next', () => ({
  useTranslation: () => ({
    t: (key: string) => key,
    i18n: { language: 'br', changeLanguage: vi.fn() },
  }),
}))

const FILTER_TRIGGER_PATTERN = /projects.filterByTechnology/

const BASE_FILTER: ProjectFilterState = {
  selectedTechnologies: [],
  hasImage: false,
  hasGitHub: false,
  hasDeploy: false,
  searchTerm: '',
  technologySearchTerm: '',
  isFrontEnd: false,
  isBackEnd: false,
  isMobile: false,
}

function renderPopover(overrides: Partial<ProjectFilterState> = {}) {
  const props = {
    filter: { ...BASE_FILTER, ...overrides },
    uniqueTechnologies: ['react', 'typescript'],
    activeFiltersCount: 0,
    onTechnologySearchChange: vi.fn(),
    onClearTechnologySearch: vi.fn(),
    onToggleTechnology: vi.fn(),
    onSetBooleanFilter: vi.fn(),
  }
  render(<ProjectTechnologyFilterPopover {...props} />)
  return props
}

describe('ProjectTechnologyFilterPopover', () => {
  it('renders the trigger with no count badge when there are no active filters', () => {
    renderPopover()

    expect(
      screen.getByRole('button', { name: FILTER_TRIGGER_PATTERN })
    ).toBeInTheDocument()
  })

  it('shows the active filters count on the trigger', () => {
    render(
      <ProjectTechnologyFilterPopover
        activeFiltersCount={3}
        filter={BASE_FILTER}
        onClearTechnologySearch={vi.fn()}
        onSetBooleanFilter={vi.fn()}
        onTechnologySearchChange={vi.fn()}
        onToggleTechnology={vi.fn()}
        uniqueTechnologies={[]}
      />
    )

    expect(screen.getByText('3')).toBeInTheDocument()
  })

  it('opens the popover and lists the unique technologies', async () => {
    const user = userEvent.setup()
    renderPopover()

    await user.click(
      screen.getByRole('button', { name: FILTER_TRIGGER_PATTERN })
    )

    expect(await screen.findByText('React')).toBeInTheDocument()
    expect(screen.getByText('TypeScript')).toBeInTheDocument()
  })

  it('shows a "no technologies found" message when the list is empty', async () => {
    const user = userEvent.setup()
    render(
      <ProjectTechnologyFilterPopover
        activeFiltersCount={0}
        filter={BASE_FILTER}
        onClearTechnologySearch={vi.fn()}
        onSetBooleanFilter={vi.fn()}
        onTechnologySearchChange={vi.fn()}
        onToggleTechnology={vi.fn()}
        uniqueTechnologies={[]}
      />
    )

    await user.click(
      screen.getByRole('button', { name: FILTER_TRIGGER_PATTERN })
    )

    expect(
      await screen.findByText('projects.noTechnologiesFound')
    ).toBeInTheDocument()
  })

  it('calls onToggleTechnology when a technology toggle is pressed', async () => {
    const user = userEvent.setup()
    const props = renderPopover()

    await user.click(
      screen.getByRole('button', { name: FILTER_TRIGGER_PATTERN })
    )
    await user.click(await screen.findByText('React'))

    expect(props.onToggleTechnology).toHaveBeenCalledWith('react')
  })

  it('calls onTechnologySearchChange when typing in the technology search input', async () => {
    const user = userEvent.setup()
    const props = renderPopover()

    await user.click(
      screen.getByRole('button', { name: FILTER_TRIGGER_PATTERN })
    )
    const input = await screen.findByPlaceholderText('projects.search')
    await user.type(input, 'r')

    expect(props.onTechnologySearchChange).toHaveBeenCalledWith('r')
  })

  it('calls onSetBooleanFilter when a built-in filter toggle is pressed', async () => {
    const user = userEvent.setup()
    const props = renderPopover()

    await user.click(
      screen.getByRole('button', { name: FILTER_TRIGGER_PATTERN })
    )
    await user.click(await screen.findByText('GitHub'))

    expect(props.onSetBooleanFilter).toHaveBeenCalledWith('hasGitHub', true)
  })
})
