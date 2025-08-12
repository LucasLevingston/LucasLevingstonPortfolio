import { Download, RotateCw, ZoomIn, ZoomOut } from 'lucide-react'
import type React from 'react'
import { useState } from 'react'
import { TransformComponent, TransformWrapper } from 'react-zoom-pan-pinch'
import { Dialog, DialogContent, DialogTrigger } from '@/components/ui/dialog'
import { CustomButton } from './custom-button'

interface ImageViewerProps {
  src: string
  alt: string
  children: React.ReactNode
}

export function ImageViewer({ src, alt, children }: ImageViewerProps) {
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

  return (
    <Dialog onOpenChange={setIsOpen} open={isOpen}>
      <DialogTrigger asChild>
        <div className="cursor-pointer transition-opacity hover:opacity-80">
          {children}
        </div>
      </DialogTrigger>
      <DialogContent className="max-h-[85vh] max-w-[85vw] border-mainBorder dark:bg-black/95 bg-white p-0 dark:border-main-border-dark">
        <div className="relative flex h-full w-full items-center justify-center">
          <TransformWrapper initialScale={1} maxScale={3} minScale={0.5}>
            {({ zoomIn, zoomOut, resetTransform, instance }) => (
              <>
                <div className="absolute right-[40%] top-4 z-50 flex gap-2">
                  <CustomButton
                    disabled={instance.transformState.scale <= 0.5}
                    onClick={() => zoomOut()}
                    size="sm"
                  >
                    <CustomButton.Icon>
                      <ZoomOut />
                    </CustomButton.Icon>
                  </CustomButton>
                  <CustomButton
                    disabled={instance.transformState.scale >= 3}
                    onClick={() => zoomIn()}
                    size="sm"
                  >
                    <CustomButton.Icon>
                      <ZoomIn />
                    </CustomButton.Icon>
                  </CustomButton>
                  <CustomButton onClick={handleRotate} size="sm">
                    <CustomButton.Icon>
                      <RotateCw />
                    </CustomButton.Icon>
                  </CustomButton>
                  <CustomButton onClick={handleDownload} size="sm">
                    <CustomButton.Icon>
                      <Download />
                    </CustomButton.Icon>
                  </CustomButton>
                  <CustomButton
                    onClick={() => {
                      resetTransform()
                      setRotation(0)
                    }}
                    size="sm"
                  >
                    Reset
                  </CustomButton>
                </div>

                <div className="absolute left-4 top-4 z-50">
                  <div className="rounded-md bg-black/50 px-3 py-1 text-sm font-medium text-white">
                    {Math.round(instance.transformState.scale * 100)}%
                  </div>
                </div>

                <TransformComponent
                  contentStyle={{
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                  }}
                  wrapperStyle={{
                    width: '100%',
                    height: '100%',
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                  }}
                >
                  <img
                    alt={alt}
                    draggable={false}
                    src={src || '/placeholder.svg'}
                    style={{
                      transform: `rotate(${rotation}deg)`,
                      maxWidth: '100%',
                      maxHeight: '100%',
                      objectFit: 'contain',
                      userSelect: 'none',
                      pointerEvents: 'auto',
                    }}
                  />
                </TransformComponent>
              </>
            )}
          </TransformWrapper>
        </div>
      </DialogContent>
    </Dialog>
  )
}
