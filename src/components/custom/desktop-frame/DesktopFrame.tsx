import type React from 'react'
import { cn } from '@/lib/utils/cn'

interface DesktopFrameProps {
  children: React.ReactNode
  className?: string
}

export function DesktopFrame({ children, className }: DesktopFrameProps) {
  return (
    <div
      className={cn(
        'relative mx-auto flex aspect-video w-full max-w-full flex-col overflow-hidden rounded-xl border border-mainBorder bg-card shadow-lg transition-shadow duration-300 hover:shadow-xl dark:border-main-border-dark',
        className
      )}
    >
      <div className="flex h-6 shrink-0 items-center gap-1.5 border-mainBorder border-b bg-muted/60 px-3 dark:border-main-border-dark">
        <span className="h-2 w-2 rounded-full bg-red-400/70" />
        <span className="h-2 w-2 rounded-full bg-yellow-400/70" />
        <span className="h-2 w-2 rounded-full bg-green-400/70" />
      </div>
      <div className="relative flex-1 overflow-hidden">{children}</div>
    </div>
  )
}
