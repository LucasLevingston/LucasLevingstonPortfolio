import type React from 'react'
import Container from './container'
import Sidebar from './custom-sidebar'
import Header from './header'

interface PageShellProps {
  children: React.ReactNode
}

export function PageShell({ children }: PageShellProps) {
  return (
    <div className="min-h-screen text-foreground">
      <Sidebar />
      <Container>
        <Header />
        {children}
      </Container>
    </div>
  )
}
