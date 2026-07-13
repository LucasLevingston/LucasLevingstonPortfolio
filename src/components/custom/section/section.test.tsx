import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import Section from './Section'

describe('Section', () => {
  it('renders children and an id on the root element', () => {
    const { container } = render(
      <Section id="my-section">
        <p>Body content</p>
      </Section>
    )

    expect(screen.getByText('Body content')).toBeInTheDocument()
    expect(container.querySelector('#my-section')).toBeInTheDocument()
  })

  it('renders a title when provided', () => {
    render(
      <Section title="My Title">
        <p>Body content</p>
      </Section>
    )

    expect(screen.getByText('My Title')).toBeInTheDocument()
  })

  it('does not render a title element when title is omitted', () => {
    const { container } = render(
      <Section>
        <p>Body content</p>
      </Section>
    )

    expect(
      container.querySelector('.text-xl.font-bold')
    ).not.toBeInTheDocument()
  })

  it('applies a custom className to the content wrapper', () => {
    render(
      <Section className="custom-content">
        <p>Body content</p>
      </Section>
    )

    expect(screen.getByText('Body content').parentElement).toHaveClass(
      'custom-content'
    )
  })

  it('exposes Root, Title and Content as composable subcomponents', () => {
    render(
      <Section.Root id="composed">
        <Section.Title>Composed Title</Section.Title>
        <Section.Content className="composed-content">
          Composed body
        </Section.Content>
      </Section.Root>
    )

    expect(screen.getByText('Composed Title')).toBeInTheDocument()
    const content = screen.getByText('Composed body')
    expect(content).toHaveClass('composed-content')
    expect(content.closest('#composed')).toBeInTheDocument()
  })
})
