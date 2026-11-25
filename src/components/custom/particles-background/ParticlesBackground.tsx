'use client'

import { Particles, ParticlesProvider } from '@tsparticles/react'
import {
  loadParticlesEngine,
  useParticlesBackground,
} from './use-particles-background'

export function ParticlesBackground() {
  const { options } = useParticlesBackground()

  return (
    <ParticlesProvider init={loadParticlesEngine}>
      <Particles
        className="pointer-events-none fixed inset-0 z-0"
        id="particles-background"
        options={options}
      />
    </ParticlesProvider>
  )
}
