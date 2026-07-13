import { beforeEach, describe, expect, it } from 'vitest'
import { userBr, userEn } from '@/data/user-data'
import { useStorage } from './use-storage'

describe('useStorage', () => {
  beforeEach(() => {
    useStorage.setState({ user: userBr })
  })

  it('defaults to the Portuguese user', () => {
    expect(useStorage.getState().user).toBe(userBr)
  })

  it('setUser replaces the current user', () => {
    useStorage.getState().setUser(userEn)

    expect(useStorage.getState().user).toBe(userEn)
  })

  it('setLanguage("en") switches to the English user', () => {
    useStorage.getState().setLanguage('en')

    expect(useStorage.getState().user).toBe(userEn)
  })

  it('setLanguage("br") switches to the Portuguese user', () => {
    useStorage.getState().setUser(userEn)

    useStorage.getState().setLanguage('br')

    expect(useStorage.getState().user).toBe(userBr)
  })

  it('setLanguage with any other value falls back to the Portuguese user', () => {
    useStorage.getState().setLanguage('fr')

    expect(useStorage.getState().user).toBe(userBr)
  })
})
