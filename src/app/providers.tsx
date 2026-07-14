'use client'

import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { AnimatePresence, MotionConfig } from 'framer-motion'
import dynamic from 'next/dynamic'
import { useState } from 'react'
import { I18nextProvider } from 'react-i18next'
import { ThemeProvider } from '@/components/providers/ThemeProvider'
import i18n from '@/i18n'
import { cn } from '@/lib/utils/cn'

const ParticlesBackground = dynamic(
  () =>
    import('@/components/custom/particles-background').then(
      mod => mod.ParticlesBackground
    ),
  { ssr: false }
)

export function Providers({ children }: { children: React.ReactNode }) {
  const [queryClient] = useState(() => new QueryClient())

  return (
    <QueryClientProvider client={queryClient}>
      <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
        <I18nextProvider defaultNS={'translation'} i18n={i18n}>
          <MotionConfig reducedMotion="user">
            <AnimatePresence mode="wait">
              <div className="relative min-h-screen overflow-x-hidden leading-5">
                <div
                  aria-hidden
                  className={cn(
                    'pointer-events-none fixed -top-40 -right-40 z-0',
                    'h-[36rem] w-[36rem] rounded-full bg-mainColor/25',
                    'blur-[120px] dark:bg-mainColor/20'
                  )}
                />
                <div
                  aria-hidden
                  className={cn(
                    'pointer-events-none fixed -bottom-40 -left-40 z-0',
                    'h-[36rem] w-[36rem] rounded-full bg-lightMainColor/20',
                    'blur-[120px] dark:bg-lightMainColor/15'
                  )}
                />
                <ParticlesBackground />
                {children}
              </div>
            </AnimatePresence>
          </MotionConfig>
        </I18nextProvider>
      </ThemeProvider>
    </QueryClientProvider>
  )
}
