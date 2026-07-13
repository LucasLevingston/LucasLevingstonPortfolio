import { render, screen } from '@testing-library/react'
import type React from 'react'
import { describe, expect, it, vi } from 'vitest'
import { PageShell } from './PageShell'

vi.mock('@/components/custom/container', () => ({
  default: ({ children }: { children: React.ReactNode }) => (
    <div data-testid="container">{children}</div>
  ),
}))

vi.mock('@/components/custom/custom-sidebar', () => ({
  default: () => <div data-testid="sidebar">Sidebar</div>,
}))

vi.mock('@/components/custom/header', () => ({
  default: () => <div data-testid="header">Header</div>,
}))

describe('PageShell', () => {
  it('renders the sidebar, header and children', () => {
    render(
      <PageShell>
        <p>Page content</p>
      </PageShell>
    )

    expect(screen.getByTestId('sidebar')).toBeInTheDocument()
    expect(screen.getByTestId('header')).toBeInTheDocument()
    expect(screen.getByText('Page content')).toBeInTheDocument()
  })

  it('renders the header and children inside the container', () => {
    render(
      <PageShell>
        <p>Page content</p>
      </PageShell>
    )

    const container = screen.getByTestId('container')
    expect(container).toContainElement(screen.getByTestId('header'))
    expect(container).toContainElement(screen.getByText('Page content'))
  })

  it('renders the sidebar as a sibling of the container, not inside it', () => {
    render(
      <PageShell>
        <p>Page content</p>
      </PageShell>
    )

    const container = screen.getByTestId('container')
    expect(container).not.toContainElement(screen.getByTestId('sidebar'))
  })
})
