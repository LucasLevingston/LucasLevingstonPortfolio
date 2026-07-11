import type { IconType } from 'react-icons'
import { BsGithub, BsInstagram } from 'react-icons/bs'
import { FaLinkedin, FaWhatsapp } from 'react-icons/fa'

export interface SocialUser {
  gitHub: string
  linkedin: string
  whatsapp: string
  instagram: string
  linkedinImageUrl: string
  whatsappImageUrl: string
  instagramImageUrl: string
}

export interface SocialLink {
  Icon: IconType
  url: keyof SocialUser
  avatarUrl: (user: SocialUser) => string
  username: string
  role: string
  name: string
}

export const SOCIAL_LINKS: SocialLink[] = [
  {
    Icon: BsGithub,
    url: 'gitHub',
    avatarUrl: user => `${user.gitHub}.png`,
    username: '@LucasLevingston',
    role: 'social.github.role',
    name: 'social.github.name',
  },
  {
    Icon: FaLinkedin,
    url: 'linkedin',
    avatarUrl: user => user.linkedinImageUrl,
    username: '@lucas-levingston',
    role: 'social.linkedin.role',
    name: 'social.linkedin.name',
  },
  {
    Icon: FaWhatsapp,
    url: 'whatsapp',
    avatarUrl: user => user.whatsappImageUrl,
    username: 'Lucas Levingston',
    role: 'social.whatsapp.message',
    name: 'social.whatsapp.label',
  },
  {
    Icon: BsInstagram,
    url: 'instagram',
    avatarUrl: user => user.instagramImageUrl,
    username: '@lucaolevingston',
    role: 'social.instagram.role',
    name: 'social.instagram.name',
  },
]
