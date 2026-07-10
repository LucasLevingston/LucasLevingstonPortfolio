const EASE_OUT = [0.16, 1, 0.3, 1] as const

const delayFor = (index: number) => Math.min(index * 0.06, 0.3)

export function scrollReveal(index: number) {
  return {
    initial: { opacity: 0, y: 20 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, amount: 0.2 },
    transition: { duration: 0.5, delay: delayFor(index), ease: EASE_OUT },
  }
}

export function mountReveal(index: number) {
  return {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.4, delay: delayFor(index), ease: EASE_OUT },
  }
}

export function riseIn(delay: number) {
  return {
    initial: { opacity: 0, y: 16 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.5, delay, ease: EASE_OUT },
  }
}

export function pageEnter() {
  return {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.5, ease: EASE_OUT },
  }
}
