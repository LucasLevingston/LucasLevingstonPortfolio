import { Mail, Menu, Phone } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import { generalImages } from '@/assets/images'
import { CustomButton } from '@/components/custom/custom-button'
import Photo from '@/components/custom/photo'
import { ResumeButton } from '@/components/custom/resume-button'
import { RoleTypewriter } from '@/components/custom/role-typewriter'
import SocialBar from '@/components/custom/social-bar'
import LanguageToggle from '@/components/toggles/LanguageToggle'
import { ModeToggle } from '@/components/toggles/ModeToggle'
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from '@/components/ui/navigation-menu'
import {
  Sheet,
  SheetContent,
  SheetTitle,
  SheetTrigger,
} from '@/components/ui/sheet'
import { formatPhoneNumber } from '@/lib/constants/format-number'
import { cn } from '@/lib/utils/cn'
import { getProjectSlug } from '@/lib/utils/project-slug'
import { ListItem } from './list-item'
import { useCustomNavbar } from './use-custom-navbar'

const FEATURED_LINK_CLASS_NAME = cn(
  'flex h-full w-full select-none flex-col justify-end',
  'border-2 border-mainColor rounded-md p-6 no-underline outline-none',
  'bg-gradient-to-b from-muted/50 to-muted focus:shadow-md'
)

const NAV_LIST_ITEM_CLASS_NAME = cn(
  'border-2 border-mainColor hover:bg-transparent',
  'hover:text-aboutBgColor dark:hover:text-mainTextColor'
)

export function Navbar() {
  const { t, user, projects, aboutSections, isActive } = useCustomNavbar()

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
        <NavigationMenuContent className="dark:bg-bioBgColor">
          <ul className="grid gap-2 p-4 md:w-[400px] lg:w-[300px] lg:grid-cols-[.75fr_1fr]">
            <li className="row-span-3">
              <NavigationMenuLink asChild>
                <Link
                  className={FEATURED_LINK_CLASS_NAME}
                  href={`/about?${t('about.technologiesTitle')}`}
                >
                  <Image
                    alt=""
                    className="rounded-full"
                    height={183}
                    src={generalImages.logo || '/placeholder.svg'}
                    width={275}
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
                className={NAV_LIST_ITEM_CLASS_NAME}
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
          <NavigationMenuLink asChild>
            <span>{t('navbar.home')}</span>
          </NavigationMenuLink>
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
        <NavigationMenuContent className="dark:bg-bioBgColor">
          <ul className="grid w-[400px] gap-1 p-4 md:w-[500px] md:grid-cols-2 lg:w-[300px]">
            {projects.map(({ title, description }) => {
              return (
                <ListItem
                  href={`/projects/${getProjectSlug(title)}`}
                  key={title}
                  title={title}
                >
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
            className={cn(
              'flex w-[85%] flex-col overflow-y-auto dark:bg-bioBgColor',
              'sm:w-[350px] landscape:w-[60%] landscape:sm:w-[350px]'
            )}
            side="right"
          >
            <SheetTitle className="sr-only">{user.name}</SheetTitle>
            <div className="flex flex-col items-center gap-6 py-2 text-center landscape:gap-3">
              <div className="flex flex-col items-center gap-2">
                <Photo className="h-20 w-20 landscape:h-14 landscape:w-14" />
                <h1 className="text-xl font-bold landscape:text-lg">
                  {user.name}
                </h1>
                <p className="font-semibold text-mainColor text-sm">
                  <RoleTypewriter />
                </p>
              </div>

              <NavigationMenu className="w-full">
                {navigationContent}
              </NavigationMenu>

              <p className="max-w-[100%] text-muted-foreground text-sm landscape:hidden">
                {t('sidebar.welcome')}
              </p>

              <div className="flex items-center gap-2">
                <ModeToggle />
                <LanguageToggle />
              </div>

              <div
                className={cn(
                  'flex w-full flex-col items-center gap-3 border-border border-t pt-4',
                  'landscape:gap-2 landscape:pt-2'
                )}
              >
                <SocialBar />
                <a
                  className={cn(
                    'flex items-center gap-2 text-sm transition-colors',
                    'hover:text-mainColor'
                  )}
                  href={`mailto:${user.email}`}
                >
                  <Mail className="h-4 w-4 shrink-0 !text-mainColor" />
                  {user.email}
                </a>
                <div className="flex items-center gap-2 text-sm">
                  <Phone className="h-4 w-4 shrink-0 !text-mainColor" />
                  {formatPhoneNumber(user.phone)}
                </div>
              </div>

              <ResumeButton />
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </>
  )
}
