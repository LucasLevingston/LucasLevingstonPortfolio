import { JSX } from 'react'
import { cn } from '@/lib/utils/cn'
import type {
  SectionContentProps,
  SectionProps,
  SectionRootProps,
  SectionTitleProps,
  SectionVariant,
} from './section.types'

const SECTION_VARIANT_CLASS_NAME: Record<SectionVariant, string> = {
  primary: 'rounded-xl border border-borderColor bg-card p-6',
  secondary: 'rounded-xl border border-border bg-muted/40 p-6',
  ghost: 'py-3',
}

function SectionRoot({
  children,
  id,
  className,
  variant = 'ghost',
}: SectionRootProps): JSX.Element {
  return (
    <div
      className={cn(
        'space-y-3',
        SECTION_VARIANT_CLASS_NAME[variant],
        className
      )}
      id={id}
    >
      {children}
    </div>
  )
}

function SectionTitle({ children, className }: SectionTitleProps): JSX.Element {
  return <div className={cn('text-xl font-bold', className)}>{children}</div>
}

function SectionContent({
  children,
  className,
}: SectionContentProps): JSX.Element {
  return <div className={className}>{children}</div>
}

function Section({
  children,
  title,
  className,
  id,
  variant,
}: SectionProps): JSX.Element {
  return (
    <SectionRoot id={id} variant={variant}>
      {title && <SectionTitle>{title}</SectionTitle>}
      <SectionContent className={className}>{children}</SectionContent>
    </SectionRoot>
  )
}

Section.Root = SectionRoot
Section.Title = SectionTitle
Section.Content = SectionContent

export default Section
