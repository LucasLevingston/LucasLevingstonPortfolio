import Image from 'next/image'
import { memo } from 'react'
import { cn } from '@/lib/utils/cn'
import type { InstitutionIconProps } from './institution-icon.types'
import { useInstitutionIcon } from './use-institution-icon'

function InstitutionIconComponent({
  institution,
  institutionKey,
  className,
}: InstitutionIconProps) {
  const { logo, initials, colorClassName } = useInstitutionIcon(
    institution,
    institutionKey
  )

  if (logo) {
    return (
      <Image
        alt={institution}
        className={cn('rounded-full object-contain', className)}
        height={24}
        src={logo}
        width={24}
      />
    )
  }

  return (
    <span
      className={cn(
        'inline-flex h-6 min-w-6 items-center justify-center rounded-full px-1',
        'text-[10px] font-bold text-white',
        colorClassName,
        className
      )}
      title={institution}
    >
      {initials}
    </span>
  )
}

const InstitutionIcon = memo(InstitutionIconComponent)

export default InstitutionIcon
