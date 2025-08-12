import { create } from 'zustand'
import { userBr, userEn } from '@/data/user-data'
import { UserType } from '@/types/UserType'

interface useStorageProps {
  user: UserType
  setLanguage: (language: string) => void
  setUser: (user: UserType) => void
}

export const useStorage = create<useStorageProps>(set => ({
  user: userBr,

  setLanguage: language => {
    const user = language === 'en' ? userEn : userBr
    set({ user })
  },

  setUser: user => set({ user }),
}))
