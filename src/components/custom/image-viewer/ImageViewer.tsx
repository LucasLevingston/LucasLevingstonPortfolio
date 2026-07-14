import { Download, RotateCw, ZoomIn, ZoomOut } from 'lucide-react'
import Image from 'next/image'
import { TransformComponent, TransformWrapper } from 'react-zoom-pan-pinch'
import { CustomButton } from '@/components/custom/custom-button'
import { Dialog, DialogContent, DialogTrigger } from '@/components/ui/dialog'
import { cn } from '@/lib/utils/cn'
import type { ImageViewerProps } from './image-viewer.types'
import { useImageViewer } from './use-image-viewer'

export function ImageViewer({ src, alt, children }: ImageViewerProps) {
  const {
    rotation,
    isOpen,
    setIsOpen,
    handleRotate,
    handleDownload,
    resetRotation,
  } = useImageViewer(src, alt)

  return (
    <Dialog onOpenChange={setIsOpen} open={isOpen}>
      <DialogTrigger asChild>
        <div className="relative h-full w-full cursor-pointer transition-opacity hover:opacity-80">
          {children}
        </div>
      </DialogTrigger>
      <DialogContent
        className={cn(
          'h-[85vh] w-[85vw] border-mainBorder bg-white p-0',
          'dark:border-main-border-dark dark:bg-black/95'
        )}
      >
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
                      resetRotation()
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
                    width: '100%',
                    height: '100%',
                  }}
                  wrapperStyle={{
                    width: '100%',
                    height: '100%',
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                  }}
                >
                  <Image
                    alt={alt}
                    draggable={false}
                    fill
                    sizes="85vw"
                    src={src || '/placeholder.svg'}
                    style={{
                      transform: `rotate(${rotation}deg)`,
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
