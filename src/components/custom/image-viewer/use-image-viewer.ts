import { useState } from 'react'

export function useImageViewer(src: string, alt: string) {
  const [rotation, setRotation] = useState(0)
  const [isOpen, setIsOpen] = useState(false)

  const handleRotate = () => {
    setRotation(prev => (prev + 90) % 360)
  }

  const handleDownload = () => {
    const link = document.createElement('a')
    link.href = src
    link.download = alt || 'image'
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)
  }

  const resetRotation = () => setRotation(0)

  return {
    rotation,
    isOpen,
    setIsOpen,
    handleRotate,
    handleDownload,
    resetRotation,
  }
}
