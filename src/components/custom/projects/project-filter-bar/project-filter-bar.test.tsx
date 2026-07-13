import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { describe, expect, it, vi } from 'vitest'
import type {
  ProjectFilterState,
  UseProjectFiltersResult,
} from '@/hooks/use-project-filters'
import { ProjectFilterBar } from './ProjectFilterBar'

vi.mock('react-i18next', () => ({
  useTranslation: () => ({
    t: (key: string) => key,
    i18n: { language: 'br', changeLanguage: vi.fn() },
  }),
}))

const RESULTS_COUNT_PATTERN = /2/
const FILTERED_RESULTS_LABEL_PATTERN = /projects.filteredResults/

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

function buildFilters(
  overrides: Partial<UseProjectFiltersResult> = {}
): UseProjectFiltersResult {
  return {
    filter: BASE_FILTER,
    filteredProjects: [],
    uniqueTechnologies: [],
    activeFiltersCount: 0,
    activeFilterBadges: [],
    handleSearchChange: vi.fn(),
    clearSearch: vi.fn(),
    handleTechnologySearchChange: vi.fn(),
    clearTechnologySearch: vi.fn(),
    clearAllFilters: vi.fn(),
    toggleTechnology: vi.fn(),
    setBooleanFilter: vi.fn(),
    ...overrides,
  }
}

describe('ProjectFilterBar', () => {
  it('renders the search input and the filtered results count', () => {
    render(
      <ProjectFilterBar
        filters={buildFilters({ filteredProjects: [{} as never, {} as never] })}
        totalCount={2}
      />
    )

    expect(screen.getByPlaceholderText('projects.search')).toBeInTheDocument()
    expect(screen.getByText(RESULTS_COUNT_PATTERN)).toBeInTheDocument()
    expect(screen.getByText(FILTERED_RESULTS_LABEL_PATTERN)).toBeInTheDocument()
  })

  it('does not render the clear-search button when searchTerm is empty', () => {
    render(<ProjectFilterBar filters={buildFilters()} totalCount={0} />)

    expect(screen.queryByPlaceholderText('projects.search')).toHaveValue('')
  })

  it('calls handleSearchChange when typing in the search input', async () => {
    const user = userEvent.setup()
    const handleSearchChange = vi.fn()
    render(
      <ProjectFilterBar
        filters={buildFilters({ handleSearchChange })}
        totalCount={0}
      />
    )

    await user.type(screen.getByPlaceholderText('projects.search'), 'a')

    expect(handleSearchChange).toHaveBeenCalledWith('a')
  })

  it('does not show the "clear all" button when filteredProjects equals totalCount', () => {
    render(
      <ProjectFilterBar
        filters={buildFilters({ filteredProjects: [{} as never] })}
        totalCount={1}
      />
    )

    expect(screen.queryByText('projects.clear')).not.toBeInTheDocument()
  })

  it('shows the "clear all" button when filters have narrowed the results', () => {
    render(
      <ProjectFilterBar
        filters={buildFilters({ filteredProjects: [{} as never] })}
        totalCount={5}
      />
    )

    expect(screen.getByText('projects.clear')).toBeInTheDocument()
  })

  it('calls clearAllFilters when the "clear all" button is clicked', async () => {
    const user = userEvent.setup()
    const clearAllFilters = vi.fn()
    render(
      <ProjectFilterBar
        filters={buildFilters({
          filteredProjects: [{} as never],
          clearAllFilters,
        })}
        totalCount={5}
      />
    )

    await user.click(screen.getByText('projects.clear'))

    expect(clearAllFilters).toHaveBeenCalledTimes(1)
  })

  it('does not render active filter badges when activeFiltersCount is 0', () => {
    render(<ProjectFilterBar filters={buildFilters()} totalCount={0} />)

    expect(screen.queryByText('react')).not.toBeInTheDocument()
  })

  it('renders active filter badges when activeFiltersCount is greater than 0', () => {
    render(
      <ProjectFilterBar
        filters={buildFilters({
          activeFiltersCount: 1,
          activeFilterBadges: [
            {
              id: 'react',
              kind: 'technology',
              label: 'react',
              clearAction: vi.fn(),
            },
          ],
        })}
        totalCount={0}
      />
    )

    expect(screen.getByText('react')).toBeInTheDocument()
  })
})
