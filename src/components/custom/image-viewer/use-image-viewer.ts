import { useCallback, useRef, useState } from 'react'
import type { ReactZoomPanPinchContentRef } from 'react-zoom-pan-pinch'

export function useImageViewer(src: string, alt: string) {
  const [rotation, setRotation] = useState(0)
  const [isOpen, setIsOpen] = useState(false)
  const transformRef = useRef<ReactZoomPanPinchContentRef | null>(null)

  const handleRotate = useCallback(() => {
    setRotation(prev => (prev + 90) % 360)
  }, [])

  const handleDownload = useCallback(() => {
    const link = document.createElement('a')
    link.href = src
    link.download = alt || 'image'
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)
  }, [src, alt])

  const resetRotation = useCallback(() => setRotation(0), [])

  // Zoom controls go through the wrapper ref so the buttons get stable
  // handlers instead of inline closures over the render-prop helpers.
  const handleZoomIn = useCallback(() => {
    transformRef.current?.zoomIn()
  }, [])

  const handleZoomOut = useCallback(() => {
    transformRef.current?.zoomOut()
  }, [])

  const handleReset = useCallback(() => {
    transformRef.current?.resetTransform()
    setRotation(0)
  }, [])

  return {
    rotation,
    isOpen,
    setIsOpen,
    transformRef,
    handleRotate,
    handleDownload,
    resetRotation,
    handleZoomIn,
    handleZoomOut,
    handleReset,
  }
}
