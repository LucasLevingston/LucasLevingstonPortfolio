import { renderHook } from '@testing-library/react'
import { describe, expect, it, vi } from 'vitest'
import { useAboutPersonalInfo } from './use-about-personal-info'

vi.mock('react-i18next', () => ({
  useTranslation: () => ({
    t: (key: string) => key,
    i18n: { language: 'br', changeLanguage: vi.fn() },
  }),
}))

describe('useAboutPersonalInfo', () => {
  const props = {
    location: 'Sao Paulo, Brazil',
    address: 'Some street, 123',
    email: 'test@example.com',
    phone: '+55 11 99999-9999',
  }

  it('exposes the translation function', () => {
    const { result } = renderHook(() => useAboutPersonalInfo(props))

    expect(typeof result.current.t).toBe('function')
    expect(result.current.t('about.location')).toBe('about.location')
  })

  it('builds an items list with a label/value pair for each field', () => {
    const { result } = renderHook(() => useAboutPersonalInfo(props))

    expect(result.current.items).toHaveLength(4)
    expect(result.current.items.map(item => item.value)).toEqual([
      props.location,
      props.address,
      props.email,
      props.phone,
    ])
    expect(result.current.items.map(item => item.label)).toEqual([
      'about.location',
      'about.address',
      'about.email',
      'about.phone',
    ])
  })

  it('assigns an icon component to every item', () => {
    const { result } = renderHook(() => useAboutPersonalInfo(props))

    for (const item of result.current.items) {
      expect(item.icon).toBeDefined()
    }
  })
})
