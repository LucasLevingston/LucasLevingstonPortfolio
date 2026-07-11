import type React from 'react'
import { cn } from '@/lib/utils/cn'

interface PhoneFrameProps {
  children: React.ReactNode
  className?: string
}

export default function PhoneFrame({ children, className }: PhoneFrameProps) {
  return (
    <div
      className={cn(
        'relative mx-auto flex aspect-[9/19] h-[560px] max-h-full flex-col overflow-hidden rounded-[2rem] border border-mainBorder bg-card p-1.5 shadow-lg transition-shadow duration-300 hover:shadow-xl dark:border-main-border-dark',
        className
      )}
    >
      <div className="relative flex-1 overflow-hidden rounded-[1.5rem] bg-background">
        <div className="absolute top-0 left-1/2 z-10 h-4 w-16 -translate-x-1/2 rounded-b-xl bg-card" />
        {children}
      </div>
      <div className="mx-auto mt-1.5 h-1 w-16 shrink-0 rounded-full bg-mainBorder dark:bg-main-border-dark" />
    </div>
  )
}
