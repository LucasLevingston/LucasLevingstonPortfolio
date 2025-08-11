import type React from 'react'
import { JSX } from 'react'

interface SectionRootProps {
  children: React.ReactNode
  id?: string
  className?: string
}

function SectionRoot({
  children,
  id,
  className = '',
}: SectionRootProps): JSX.Element {
  return (
    <div
      className={`space-y-3 border-solid border-borderColor py-3 ${className}`}
      id={id}
    >
      {children}
    </div>
  )
}

interface SectionTitleProps {
  children: React.ReactNode
  className?: string
}

function SectionTitle({
  children,
  className = '',
}: SectionTitleProps): JSX.Element {
  return <div className={`text-xl font-bold ${className}`}>{children}</div>
}

interface SectionContentProps {
  children: React.ReactNode
  className?: string
}

function SectionContent({
  children,
  className = '',
}: SectionContentProps): JSX.Element {
  return <div className={`space-y-2 pl-3 ${className}`}>{children}</div>
}

interface SectionProps {
  children: React.ReactNode
  title?: string
  className?: string
  id?: string
}

function Section({
  children,
  title,
  className,
  id,
}: SectionProps): JSX.Element {
  return (
    <SectionRoot className="bg-black" id={id}>
      {title && <SectionTitle>{title}</SectionTitle>}
      <SectionContent className={className}>{children}</SectionContent>
    </SectionRoot>
  )
}

Section.Root = SectionRoot
Section.Title = SectionTitle
Section.Content = SectionContent

export default Section
