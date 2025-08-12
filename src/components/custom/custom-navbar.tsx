import { Menu } from 'lucide-react'
import React, { useEffect, useState } from 'react'
import { useTranslation } from 'react-i18next'
import { AiFillPhone, AiOutlineMail } from 'react-icons/ai'
import { Link, useLocation } from 'react-router-dom'
import Typewriter from 'typewriter-effect'
import { generalImages } from '@/assets/images'
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from '@/components/ui/navigation-menu'
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet'
import { useUser } from '@/hooks/use-user'
import { formatPhoneNumber } from '@/lib/constants/format-number'
import { cn } from '@/lib/utils/cn'
import LanguageToggle from '../toggles/LanguageToggle'
import { ModeToggle } from '../toggles/ModeToggle'
import { CustomButton } from './custom-button'
import Photo from './photo'
import { ResumeButton } from './resume-button'
import SocialBar from './social-bar'

export function Navbar() {
  const { t, i18n } = useTranslation()
  const location = useLocation()
  const [activeButton, setActiveButton] = useState<string>('/')
  const { user } = useUser()

  useEffect(() => {
    setActiveButton(location.pathname)
  }, [location.pathname, i18n.language])

  const project: {
    title: string
    description: string
    id: string
  }[] = [
    {
      title: user.projects[0].title,
      description: user.projects[0].description,
      id: user.projects[0].title,
    },
    {
      title: user.projects[1].title,
      description: user.projects[1].description,
      id: user.projects[1].title,
    },
    {
      title: user.projects[2].title,
      description: user.projects[2].description,
      id: user.projects[2].title,
    },
    {
      title: user.projects[3].title,
      description: user.projects[3].description,
      id: user.projects[3].title,
    },
  ]

  const aboutSections: {
    title: string
    description: string
    id: string
  }[] = [
    {
      title: t('about.experiencesTitle'),
      description: t('about.experiencesDescription'),
      id: t('about.experiencesTitle'),
    },
    {
      title: t('about.educationTitle'),
      description: t('about.educationDescription'),
      id: t('about.educationTitle'),
    },
    {
      title: t('about.certificatesTitle'),
      description: t('about.certificatesDescription'),
      id: t('about.certificatesTitle'),
    },
  ]

  const isActive = (path: string) => activeButton === path

  const navigationContent = (
    <NavigationMenuList className="flex flex-row gap-2">
      <NavigationMenuItem>
        <CustomButton
          asChild
          className={cn(
            'transition-colors',
            isActive('/about') && 'bg-mainColor text-white border-mainColor'
          )}
          href="/about"
          target="_self"
        >
          <NavigationMenuTrigger>{t('navbar.about')}</NavigationMenuTrigger>
        </CustomButton>
        <NavigationMenuContent className="dark:bg-biobg-Color">
          <ul className="grid gap-2 p-4 md:w-[400px] lg:w-[300px] lg:grid-cols-[.75fr_1fr]">
            <li className="row-span-3">
              <NavigationMenuLink asChild>
                <Link
                  className="flex h-full w-full select-none flex-col border-2 border-mainColor justify-end rounded-md bg-gradient-to-b from-muted/50 to-muted p-6 no-underline outline-none focus:shadow-md"
                  to={`/about?${t('about.technologiesTitle')}`}
                >
                  <img
                    alt=""
                    className="rounded-full"
                    src={generalImages.logo || '/placeholder.svg'}
                  />
                  <div className="mb-2 mt-4 text-lg font-medium">
                    {t('about.technologiesTitle')}
                  </div>
                  <p className="text-sm leading-tight text-muted-foreground">
                    {t('about.technologiesDescription')}
                  </p>
                </Link>
              </NavigationMenuLink>
            </li>
            {aboutSections.map(section => (
              <ListItem
                className="bg-main border-[2px] border-mainColor bgmainColor hover:bg-transparent hover:text-aboutbg-Color dark:hover:text-mainTextColor"
                href="/about?"
                key={section.title}
                title={section.title}
              >
                {section.description}
              </ListItem>
            ))}
          </ul>
        </NavigationMenuContent>
      </NavigationMenuItem>

      <NavigationMenuItem>
        <CustomButton
          asChild
          className={cn(
            'transition-colors',
            isActive('/') && 'bg-mainColor text-white border-mainColor'
          )}
          href="/"
          target="_self"
        >
          <NavigationMenuLink>{t('navbar.home')}</NavigationMenuLink>
        </CustomButton>
      </NavigationMenuItem>

      <NavigationMenuItem>
        <CustomButton
          asChild
          className={cn(
            'transition-colors',
            isActive('/projects') && 'bg-mainColor text-white border-mainColor'
          )}
          href="/projects"
          target="_self"
        >
          <NavigationMenuTrigger>{t('navbar.projects')}</NavigationMenuTrigger>
        </CustomButton>
        <NavigationMenuContent className="dark:bg-biobg-Color">
          <ul className="grid w-[400px] gap-1 p-4 md:w-[500px] md:grid-cols-2 lg:w-[300px]">
            {project.map(({ title, description }) => {
              return (
                <ListItem href="/projects?search=" key={title} title={title}>
                  {description}
                </ListItem>
              )
            })}
          </ul>
        </NavigationMenuContent>
      </NavigationMenuItem>
    </NavigationMenuList>
  )

  return (
    <>
      <div className="hidden md:block">
        <NavigationMenu>{navigationContent}</NavigationMenu>
      </div>
      <div className="md:hidden">
        <Sheet>
          <SheetTrigger asChild>
            <CustomButton className="h-10 w-10">
              <CustomButton.Icon>
                <Menu />
              </CustomButton.Icon>
            </CustomButton>
          </SheetTrigger>
          <SheetContent
            className="w-[80%] dark:bg-biobg-Color sm:w-[350px]"
            side="right"
          >
            <div className="">
              <div className="flex flex-col justify-center items-center gap-8">
                <h1 className="text-[32px] font-bold">{user.name}</h1>

                <Photo />
                <NavigationMenu className="w-full">
                  {navigationContent}
                </NavigationMenu>
                <div className="mx-auto max-w-[100%] text-center font-bold">
                  {t('sidebar.greeting')} {user.name} {t('sidebar.am')}
                  <span className="!text-mainColor">
                    <Typewriter
                      onInit={typewriter => {
                        typewriter
                          .typeString('Full-Stack Developer')
                          .pauseFor(5000)
                          .deleteChars(20)
                          .typeString('Front-End Developer')
                          .pauseFor(5000)
                          .deleteChars(19)
                          .typeString('Back-End Developer')
                          .pauseFor(5000)
                          .deleteChars(18)
                          .typeString('Full-Stack Developer')
                          .start()
                      }}
                    />
                  </span>
                </div>
                <div className="items-center justify-center space-y-2 font-bold">
                  <p>{t('sidebar.welcome')}</p>
                </div>

                <div className="space-y-2">
                  <ModeToggle />
                  <LanguageToggle />
                </div>

                <SocialBar className="border-b-[2px] border-solid border-black pb-3" />
                <div>
                  <div className="flex w-[100%] justify-center">
                    <a
                      className="text-none flex gap-2"
                      href={`mailto:${user.email}`}
                    >
                      <AiOutlineMail className="max-w-[20px] text-[25px] !text-mainColor" />
                      <span className="transition-[1s] hover:!text-mainColor">
                        {user.email}
                      </span>
                    </a>
                  </div>
                  <div className="flex w-full justify-center gap-2">
                    <AiFillPhone className="mr-[5px] max-w-[20px] text-[25px] !text-mainColor" />
                    <p className="text-none hover:max-w-[225px]">
                      {formatPhoneNumber(user.phone)}
                    </p>
                  </div>
                </div>
                <ResumeButton />
              </div>
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </>
  )
}

const ListItem = React.forwardRef<
  React.ElementRef<'a'>,
  React.ComponentPropsWithoutRef<'a'>
>(({ className, title, children, href }) => {
  return (
    <li>
      <CustomButton
        className={cn(
          'max-w-[130px] justify-start text-left h-auto p-3 flex-col items-start',
          'border-[2px] border-mainColor bgmainColor',
          'hover:bg-transparent hover:text-accent-foreground',
          'focus:bg-accent focus:text-accent-foreground',
          className
        )}
        href={`${href}${title}`}
      >
        <div className="w-full space-y-1">
          <div className="text-sm font-bold leading-none">{title}</div>
          <p className="text-xs leading-relaxed text-black dark:text-white break-words whitespace-normal">
            {children}
          </p>{' '}
        </div>
      </CustomButton>
    </li>
  )
})
ListItem.displayName = 'ListItem'
