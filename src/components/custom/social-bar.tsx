import { t } from 'i18next'
import { Link } from 'lucide-react'
import { JSX } from 'react'
import { BsGithub, BsInstagram } from 'react-icons/bs'
import { FaLinkedin, FaWhatsapp } from 'react-icons/fa'
import { twMerge } from 'tailwind-merge'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from '@/components/ui/hover-card'
import { useUser } from '@/hooks/use-user'
import { CustomButton } from './custom-button'

interface SocialLink {
  icon: JSX.Element
  url: keyof User
  avatarUrl: (user: User) => string
  username: string
  role: string
  name: string
  className?: string
}

interface User {
  gitHub: string
  linkedin: string
  whatsapp: string
  instagram: string
  linkedinImageUrl: string
  whatsappImageUrl: string
  instagramImageUrl: string
}

const socialLinks: SocialLink[] = [
  {
    icon: <BsGithub />,
    url: 'gitHub',
    avatarUrl: user => `${user.gitHub}.png`,
    username: '@LucasLevingston',
    role: 'social.github.role',
    name: 'social.github.name',
  },
  {
    icon: <FaLinkedin />,
    url: 'linkedin',
    avatarUrl: user => user.linkedinImageUrl,
    username: '@lucas-levingston',
    role: 'social.linkedin.role',
    name: 'social.linkedin.name',
  },
  {
    icon: <FaWhatsapp />,
    url: 'whatsapp',
    avatarUrl: user => user.whatsappImageUrl,
    username: 'Lucas Levingston',
    role: 'social.whatsapp.message',
    name: 'social.whatsapp.label',
  },
  {
    icon: <BsInstagram />,
    url: 'instagram',
    avatarUrl: user => user.instagramImageUrl,
    username: '@lucaolevingston',
    role: 'social.instagram.role',
    name: 'social.instagram.name',
  },
]

interface SocialBarProps {
  className?: string
}

export default function SocialBar({ className }: SocialBarProps) {
  const { user } = useUser()

  return (
    <section
      className={twMerge('flex items-center justify-center gap-3', className)}
    >
      {socialLinks.map((link, index) => (
        <div className="max-w-[60px]" key={index}>
          <HoverCard>
            <CustomButton
              asChild
              className="rounded-full h-8 w-8 p-5"
              href={user[link.url]}
            >
              <HoverCardTrigger>
                <CustomButton.Icon className="text-2xl text-black dark:text-white">
                  {link.icon}
                </CustomButton.Icon>
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
