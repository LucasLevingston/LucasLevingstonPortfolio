import { useReducedMotion } from 'framer-motion'
import { useCallback, useEffect, useState } from 'react'
import Particles from 'react-tsparticles'
import type { Engine } from 'tsparticles-engine'
import { loadSlim } from 'tsparticles-slim'

function useIsDark() {
  const [isDark, setIsDark] = useState(() =>
    document.documentElement.classList.contains('dark')
  )

  useEffect(() => {
    const root = document.documentElement
    const observer = new MutationObserver(() => {
      setIsDark(root.classList.contains('dark'))
    })
    observer.observe(root, { attributes: true, attributeFilter: ['class'] })
    return () => observer.disconnect()
  }, [])

  return isDark
}

export function ParticlesBackground() {
  const isDark = useIsDark()
  const reduceMotion = useReducedMotion()

  const init = useCallback(async (engine: Engine) => {
    await loadSlim(engine)
  }, [])

  const particleColor = isDark ? '#3b82f6' : '#2563eb'
  const linkOpacity = isDark ? 0.25 : 0.15
  const particleOpacity = isDark ? 0.5 : 0.35

  return (
    <Particles
      className="pointer-events-none fixed inset-0 z-0"
      init={init}
      options={{
        fullScreen: { enable: false },
        background: { color: { value: 'transparent' } },
        fpsLimit: 60,
        particles: {
          color: { value: particleColor },
          links: {
            color: particleColor,
            distance: 140,
            enable: true,
            opacity: linkOpacity,
            width: 1,
          },
          move: {
            enable: !reduceMotion,
            direction: 'none',
            outModes: { default: 'out' },
            random: false,
            speed: 0.4,
            straight: false,
          },
          number: {
            density: { enable: true, area: 900 },
            value: 55,
          },
          opacity: { value: particleOpacity },
          shape: { type: 'circle' },
          size: { value: { min: 1, max: 2.5 } },
        },
        interactivity: {
          events: {
            onHover: { enable: !reduceMotion, mode: 'grab' },
          },
          modes: {
            grab: {
              distance: 160,
              links: { opacity: isDark ? 0.5 : 0.35 },
            },
          },
        },
        detectRetina: true,
      }}
    />
  )
}
