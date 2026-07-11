import { t } from 'i18next'
import { Link } from 'lucide-react'
import { twMerge } from 'tailwind-merge'
import { CustomButton } from '@/components/custom/custom-button'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from '@/components/ui/hover-card'
import { useUser } from '@/hooks/use-user'
import { SOCIAL_LINKS } from '@/lib/utils/constants/social-links'

interface SocialBarProps {
  className?: string
}

export default function SocialBar({ className }: SocialBarProps) {
  const { user } = useUser()

  return (
    <section
      className={twMerge('flex items-center justify-center gap-3', className)}
    >
      {SOCIAL_LINKS.map(link => (
        <div className="max-w-[60px]" key={link.url}>
          <HoverCard>
            <CustomButton
              asChild
              className="rounded-full h-8 w-8 p-5"
              href={user[link.url]}
            >
              <HoverCardTrigger asChild>
                <span>
                  <CustomButton.Icon className="text-2xl text-black dark:text-white">
                    <link.Icon />
                  </CustomButton.Icon>
                </span>
              </HoverCardTrigger>
            </CustomButton>
            <HoverCardContent className="w-80">
              <div className="flex items-center space-x-4">
                <Avatar className="h-1/3 w-1/3">
                  <AvatarImage src={link.avatarUrl(user)} />
                  <AvatarFallback>LL</AvatarFallback>
                </Avatar>
                <div className="flex flex-col justify-start text-left">
                  <div className="flex flex-col">
                    <h4 className="text-md font-semibold">{link.username}</h4>
                    <p className="text-sm">{t(link.role)}</p>
                  </div>
                  <a
                    className="flex items-center gap-2 pt-3 text-sm font-semibold text-lightBlue hover:underline"
                    href={user[link.url]}
                    rel="noopener noreferrer"
                    target="_blank"
                  >
                    <Link />
                    <span>{t(link.name)}</span>
                  </a>
                </div>
              </div>
            </HoverCardContent>
          </HoverCard>
        </div>
      ))}
    </section>
  )
}
