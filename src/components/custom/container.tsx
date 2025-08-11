import { ComponentProps } from 'react'
import { twMerge } from 'tailwind-merge'

interface ContainerProps extends ComponentProps<'div'> {}

export default function Container({ children, ...props }: ContainerProps) {
  return (
    <div
      {...props}
      className={twMerge(
        'z-0 ml-auto h-full p-6 text-bioBgColor dark:bg-aboutBgColor dark:text-bioBorderColor sm:max-w-[80%] sm:px-8 sm:py-4'
      )}
    >
      <div className="min-h-screen">{children}</div>
    </div>
  )
}
