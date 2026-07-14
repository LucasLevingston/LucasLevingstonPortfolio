import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { ListItem } from './list-item'

describe('ListItem', () => {
  it('renders the title and children as a link', () => {
    render(
      <ul>
        <ListItem href="/projects/" title="My Project">
          A short description
        </ListItem>
      </ul>
    )
    expect(screen.getByText('My Project')).toBeInTheDocument()
    expect(screen.getByText('A short description')).toBeInTheDocument()
  })

  it('builds the href from href + title', () => {
    render(
      <ul>
        <ListItem href="/projects/" title="My Project">
          A short description
        </ListItem>
      </ul>
    )
    expect(screen.getByRole('link')).toHaveAttribute(
      'href',
      '/projects/My Project'
    )
  })

  it('merges a custom className onto the inner button', () => {
    render(
      <ul>
        <ListItem className="custom-class" href="/projects/" title="Proj">
          desc
        </ListItem>
      </ul>
    )
    expect(screen.getByRole('button')).toHaveClass('custom-class')
  })

  it('renders as a list item wrapping the link', () => {
    const { container } = render(
      <ul>
        <ListItem href="/projects/" title="Proj">
          desc
        </ListItem>
      </ul>
    )
    const li = container.querySelector('li')
    expect(li).toBeInTheDocument()
    expect(li?.querySelector('a')).toBeInTheDocument()
  })
})
