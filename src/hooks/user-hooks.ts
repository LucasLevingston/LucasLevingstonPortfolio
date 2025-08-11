import { useEffect } from 'react'
import { useTranslation } from 'react-i18next'
import { create } from 'zustand'
import { userBr, userEn } from '@/data/user-data'
import { UserType } from '@/types/UserType'

interface useUserStoreProps {
  user: UserType
  setUser: (language: string) => void
}

const useUserStore = create<useUserStoreProps>(set => ({
  user: userBr,
  setUser: language => {
    const user = language === 'en' ? userEn : userBr
    set({ user })
  },
}))

export const useUser = () => {
  const { i18n } = useTranslation()
  const user = useUserStore(state => state.user)
  const setUser = useUserStore(state => state.setUser)

  useEffect(() => {
    setUser(i18n.language)
  }, [i18n.language, setUser])

  return user
}

export default useUserStore
