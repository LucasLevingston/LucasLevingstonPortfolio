import { t } from 'i18next'
import React, { JSX } from 'react'
import { FaLinkedin } from 'react-icons/fa'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from '@/components/ui/hover-card'

interface RecommendationType {
  name: string
  position: string
  linkedinUrl: string
  linkedinImageUrl: string
  company: string
  date: string
  comments: string
}

interface SectionItemRootProps {
  children: React.ReactNode
  className?: string
}

function SectionItemRoot({
  children,
  className = '',
}: SectionItemRootProps): JSX.Element {
  return <div className={`flex flex-col gap-1 ${className}`}>{children}</div>
}

interface SectionItemHeaderProps {
  children: React.ReactNode
  className?: string
}

function SectionItemHeader({
  children,
  className = '',
}: SectionItemHeaderProps): JSX.Element {
  return (
    <div
      className={`flex items-center gap-3 border-l-[5px] border-mainColor pl-2 text-xl font-bold sm:border-l-[5px] xl:border-l-[5px] ${className}`}
    >
      {children}
    </div>
  )
}

interface SectionItemTitleProps {
  children: React.ReactNode
  subtitle?: string
  className?: string
}

function SectionItemTitle({
  children,
  subtitle,
  className = '',
}: SectionItemTitleProps): JSX.Element {
  return (
    <div className={`flex flex-col ${className}`}>
      <div>{children}</div>
      {subtitle && <p className="text-sm">{subtitle}</p>}
    </div>
  )
}

interface SectionItemAvatarProps {
  imageUrl?: string
  fallback?: string
  className?: string
}

function SectionItemAvatar({
  imageUrl,
  fallback = 'CN',
  className = '',
}: SectionItemAvatarProps): JSX.Element {
  return (
    <Avatar className={className}>
      <AvatarImage src={imageUrl} />
      <AvatarFallback>{fallback}</AvatarFallback>
    </Avatar>
  )
}

interface SectionItemLinkedInProps {
  recommendation: RecommendationType
  className?: string
}

function SectionItemLinkedIn({
  recommendation,
  className = '',
}: SectionItemLinkedInProps): JSX.Element {
  return (
    <HoverCard>
      <HoverCardTrigger asChild>
        <a
          className={`text-[30px] transition-[1s] hover:!text-mainColor ${className}`}
          href={recommendation.linkedinUrl}
          rel="noopener noreferrer"
          target="_blank"
        >
          <FaLinkedin className="w-8" />
        </a>
      </HoverCardTrigger>
      <HoverCardContent className="w-80">
        <div className="flex items-center space-x-4">
          <Avatar className="h-1/3 w-1/3">
            <AvatarImage src={recommendation.linkedinImageUrl} />
            <AvatarFallback>LI</AvatarFallback>
          </Avatar>
          <div className="flex flex-col justify-start text-left">
            <div className="flex flex-col">
              <h4 className="text-md font-semibold">{recommendation.name}</h4>
              <p className="text-sm">{t('social.linkedin.role')}</p>
            </div>
            <a
              className="text-azulBebe pt-3 text-sm font-semibold hover:underline"
              href={recommendation.linkedinUrl}
              rel="noopener noreferrer"
              target="_blank"
            >
              {t('social.linkedin.name')}
            </a>
          </div>
        </div>
      </HoverCardContent>
    </HoverCard>
  )
}

interface SectionItemContentProps {
  children: React.ReactNode
  className?: string
}

function SectionItemContent({
  children,
  className = '',
}: SectionItemContentProps): JSX.Element {
  return <div className={`pl-7 ${className}`}>{children}</div>
}

interface SectionItemProps {
  children: React.ReactNode
  title?: string | React.ReactNode
  className?: string
  recommendation?: RecommendationType
}

function SectionItem({
  children,
  title,
  className = '',
  recommendation,
}: SectionItemProps): JSX.Element {
  return (
    <SectionItemRoot className={className}>
      <SectionItemHeader>
        {recommendation && (
          <SectionItemAvatar imageUrl={recommendation.linkedinImageUrl} />
        )}
        <SectionItemTitle subtitle={recommendation?.position}>
          {title}
        </SectionItemTitle>
        {recommendation && (
          <SectionItemLinkedIn recommendation={recommendation} />
        )}
      </SectionItemHeader>
      <SectionItemContent>{children}</SectionItemContent>
    </SectionItemRoot>
  )
}

SectionItem.Root = SectionItemRoot
SectionItem.Header = SectionItemHeader
SectionItem.Title = SectionItemTitle
SectionItem.Avatar = SectionItemAvatar
SectionItem.LinkedIn = SectionItemLinkedIn
SectionItem.Content = SectionItemContent

export default SectionItem
