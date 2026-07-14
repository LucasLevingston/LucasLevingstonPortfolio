import type React from 'react'
import Container from '@/components/custom/container'
import Sidebar from '@/components/custom/custom-sidebar'
import Header from '@/components/custom/header'

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
