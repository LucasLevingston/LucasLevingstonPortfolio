import { useTranslation } from 'react-i18next'
import { AiFillPhone, AiOutlineMail } from 'react-icons/ai'
import Typewriter from 'typewriter-effect'
import useUserStore from '@/hooks/user-hooks'
import { formatPhoneNumber } from '@/lib/constants/format-number'
import LanguageToggle from '../toggles/LanguageToggle'
import { ModeToggle } from '../toggles/ModeToggle'
import Photo from './photo'
import { ResumeButton } from './resume-button'
import SocialBar from './social-bar'

export default function Sidebar() {
  const { t } = useTranslation()
  const { user } = useUserStore()

  return (
    <div className="hidden dark:bg-bioBgColor h-full w-full flex-col items-center justify-center gap-8 overflow-y-auto border p-[20px_12px] text-center text-bioBgColor no-underline scrollbar no-scrollbar hover:no-underline dark:text-bioBorderColor md:fixed md:flex md:min-h-screen md:w-1/5 md:border-r-[5px]">
      <h1 className="text-[32px] font-bold">{user.name}</h1>

      <Photo />

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
          <a className="text-none flex gap-2" href={`mailto:${user.email}`}>
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
  )
}
