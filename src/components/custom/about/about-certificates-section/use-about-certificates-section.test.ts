import { act, renderHook } from '@testing-library/react'
import { describe, expect, it, vi } from 'vitest'
import { useAboutCertificatesSection } from './use-about-certificates-section'

const certificates = [
  {
    title: 'Certificate A',
    image: 'https://example.com/a.png',
    description: ['Description A'],
    technologies: ['react'],
    hours: 10,
    startsDate: '2022-01-01',
    completionDate: '2022-02-01',
  },
  {
    title: 'Certificate B',
    image: 'https://example.com/b.png',
    description: ['Description B'],
    technologies: ['nextjs'],
    hours: 20,
    startsDate: '2022-03-01',
    completionDate: '2022-04-01',
  },
]

describe('useAboutCertificatesSection', () => {
  it('defaults to the first certificate', () => {
    const { result } = renderHook(() =>
      useAboutCertificatesSection(certificates)
    )

    expect(result.current.currentCertificate).toBe(0)
    expect(result.current.certificate).toBe(certificates[0])
    expect(result.current.api).toBeUndefined()
  })

  it('updates the current certificate when setCurrentCertificate is called', () => {
    const { result } = renderHook(() =>
      useAboutCertificatesSection(certificates)
    )

    act(() => {
      result.current.setCurrentCertificate(1)
    })

    expect(result.current.currentCertificate).toBe(1)
    expect(result.current.certificate).toBe(certificates[1])
  })

  it('syncs the current certificate to the carousel api selection on mount and on select', () => {
    const { result } = renderHook(() =>
      useAboutCertificatesSection(certificates)
    )

    const handlers: Record<string, () => void> = {}
    const fakeApi = {
      selectedScrollSnap: vi.fn(() => 1),
      on: vi.fn((event: string, handler: () => void) => {
        handlers[event] = handler
      }),
    }

    act(() => {
      // @ts-expect-error partial embla CarouselApi mock is sufficient for this hook
      result.current.setApi(fakeApi)
    })

    expect(result.current.currentCertificate).toBe(1)
    expect(fakeApi.on).toHaveBeenCalledWith('select', expect.any(Function))

    fakeApi.selectedScrollSnap.mockReturnValue(0)
    act(() => {
      handlers.select()
    })

    expect(result.current.currentCertificate).toBe(0)
  })
})
