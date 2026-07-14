import { render } from '@testing-library/react'
import { describe, expect, it, vi } from 'vitest'
import { RoleTypewriter } from './RoleTypewriter'

let capturedOnInit: ((typewriter: unknown) => void) | undefined

vi.mock('typewriter-effect', () => ({
  default: (props: { onInit?: (typewriter: unknown) => void }) => {
    capturedOnInit = props.onInit
    return null
  },
}))

describe('RoleTypewriter', () => {
  it('renders without crashing', () => {
    const { container } = render(<RoleTypewriter />)
    expect(container).toBeDefined()
  })

  it('types and deletes each role in the expected order, looping back to Full-Stack Developer', () => {
    render(<RoleTypewriter />)
    expect(capturedOnInit).toBeInstanceOf(Function)

    const calls: string[] = []
    const fakeTypewriter = {
      typeString(value: string) {
        calls.push(`type:${value}`)
        return fakeTypewriter
      },
      pauseFor(ms: number) {
        calls.push(`pause:${ms}`)
        return fakeTypewriter
      },
      deleteChars(amount: number) {
        calls.push(`delete:${amount}`)
        return fakeTypewriter
      },
      start() {
        calls.push('start')
        return fakeTypewriter
      },
    }

    capturedOnInit?.(fakeTypewriter)

    expect(calls).toEqual([
      'type:Full-Stack Developer',
      'pause:5000',
      'delete:20',
      'type:Front-End Developer',
      'pause:5000',
      'delete:19',
      'type:Back-End Developer',
      'pause:5000',
      'delete:18',
      'type:Full-Stack Developer',
      'start',
    ])
  })
})
