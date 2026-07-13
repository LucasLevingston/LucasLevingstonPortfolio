import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import '@/i18n'
import SectionItem from './SectionItem'

const recommendation = {
  name: 'Jane Doe',
  position: 'Engineering Manager',
  linkedinUrl: 'https://linkedin.com/in/janedoe',
  linkedinImageUrl: '/jane.png',
  company: 'Acme',
  date: '2024',
  comments: 'Great work',
}

describe('SectionItem', () => {
  it('renders the title and children content', () => {
    render(<SectionItem title="My Title">Body text</SectionItem>)

    expect(screen.getByText('My Title')).toBeInTheDocument()
    expect(screen.getByText('Body text')).toBeInTheDocument()
  })

  it('does not render an avatar or LinkedIn link without a recommendation', () => {
    render(<SectionItem title="My Title">Body text</SectionItem>)

    expect(screen.queryByRole('link')).not.toBeInTheDocument()
  })

  it('renders an avatar and a LinkedIn link with the subtitle when a recommendation is provided', () => {
    render(
      <SectionItem recommendation={recommendation} title="My Title">
        Body text
      </SectionItem>
    )

    expect(screen.getByText('Engineering Manager')).toBeInTheDocument()
    const link = screen.getByRole('link')
    expect(link).toHaveAttribute('href', recommendation.linkedinUrl)
  })

  it('renders the composable subcomponents directly', () => {
    render(
      <SectionItem.Root className="root-class">
        <SectionItem.Header>
          <SectionItem.Title subtitle="Sub">Composed Title</SectionItem.Title>
        </SectionItem.Header>
        <SectionItem.Content>Composed content</SectionItem.Content>
      </SectionItem.Root>
    )

    expect(screen.getByText('Composed Title')).toBeInTheDocument()
    expect(screen.getByText('Sub')).toBeInTheDocument()
    expect(screen.getByText('Composed content')).toBeInTheDocument()
  })

  it('renders SectionItem.Avatar with a fallback', () => {
    render(<SectionItem.Avatar fallback="JD" />)

    expect(screen.getByText('JD')).toBeInTheDocument()
  })
})
