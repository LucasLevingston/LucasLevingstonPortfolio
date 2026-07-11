'use client'

import Particles from 'react-tsparticles'
import { useParticlesBackground } from './use-particles-background'

export function ParticlesBackground() {
  const { init, options } = useParticlesBackground()

  return (
    <Particles
      className="pointer-events-none fixed inset-0 z-0"
      init={init}
      options={options}
    />
  )
}
