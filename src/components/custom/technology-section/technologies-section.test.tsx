import { render } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import '@/i18n'
import TechnologiesSection from './TechnologiesSection'

describe('TechnologiesSection', () => {
  it('renders one icon per technology', () => {
    const { container } = render(
      <TechnologiesSection technologies={['react', 'typescript', 'nodejs']} />
    )

    expect(container.querySelectorAll('a[data-state]')).toHaveLength(3)
  })

  it('renders nothing when the technologies list is empty', () => {
    const { container } = render(<TechnologiesSection technologies={[]} />)

    expect(container.firstElementChild?.children).toHaveLength(0)
  })
})
