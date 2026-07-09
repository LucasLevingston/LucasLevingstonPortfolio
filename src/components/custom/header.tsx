import { useEffect } from 'react'
import 'flag-icons/css/flag-icons.min.css'
import { useTranslation } from 'react-i18next'
import { Navbar } from './custom-navbar'

export default function Header() {
  const { i18n } = useTranslation()

  useEffect(() => {
    i18n.changeLanguage(i18n.language)
  }, [i18n.language])

  return (
    <div className="py-4 xl:py-6">
      <div className="container mx-auto flex h-14 items-center justify-between">
        <h1 className="text-2xl font-bold tracking-tight">
          Lucas
          <span className="!text-mainColor">.dev</span>
        </h1>

        <Navbar />
      </div>
    </div>
  )
}
