import { Menu } from 'lucide-react'
import Link from 'next/link'
import { AiFillPhone, AiOutlineMail } from 'react-icons/ai'
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
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet'
import { formatPhoneNumber } from '@/lib/constants/format-number'
import { cn } from '@/lib/utils/cn'
import { getProjectSlug } from '@/lib/utils/project-slug'
import { useCustomNavbar } from './use-custom-navbar'
import { ListItem } from './list-item'

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
                  className="flex h-full w-full select-none flex-col border-2 border-mainColor justify-end rounded-md bg-gradient-to-b from-muted/50 to-muted p-6 no-underline outline-none focus:shadow-md"
                  href={`/about?${t('about.technologiesTitle')}`}
                >
                  <img
                    alt=""
                    className="rounded-full"
                    decoding="async"
                    loading="lazy"
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
                className="border-2 border-mainColor hover:bg-transparent hover:text-aboutBgColor dark:hover:text-mainTextColor"
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
            className="w-[80%] dark:bg-bioBgColor sm:w-[350px]"
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
                    <RoleTypewriter />
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
