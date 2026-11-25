import type { Engine, ISourceOptions } from '@tsparticles/engine'
import { loadSlim } from '@tsparticles/slim'
import { useReducedMotion } from 'framer-motion'
import { useEffect, useMemo, useState } from 'react'

// ParticlesProvider requires an init callback that stays stable for the whole
// app lifecycle, so it lives at module scope instead of inside the hook.
export async function loadParticlesEngine(engine: Engine) {
  await loadSlim(engine)
}

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

export function useParticlesBackground() {
  const isDark = useIsDark()
  const reduceMotion = useReducedMotion()

  const particleColor = isDark ? '#4db5ff' : '#1e40af'
  const linkOpacity = isDark ? 0.25 : 0.15
  const particleOpacity = isDark ? 0.5 : 0.35

  const options = useMemo(
    () =>
      ({
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
            direction: 'none' as const,
            outModes: { default: 'out' as const },
            random: false,
            speed: 0.4,
            straight: false,
          },
          number: {
            // v4 measures density as a reference canvas (1200x750 = 900k px²),
            // equivalent to the old v2 `area: 900`.
            density: { enable: true, width: 1200, height: 750 },
            value: 55,
          },
          opacity: { value: particleOpacity },
          shape: { type: 'circle' as const },
          size: { value: { min: 1, max: 2.5 } },
        },
        interactivity: {
          events: {
            onHover: { enable: !reduceMotion, mode: 'grab' as const },
          },
          modes: {
            grab: {
              distance: 160,
              links: { opacity: isDark ? 0.5 : 0.35 },
            },
          },
        },
        detectRetina: true,
      }) satisfies ISourceOptions,
    [particleColor, linkOpacity, particleOpacity, reduceMotion, isDark]
  )

  return { options }
}
