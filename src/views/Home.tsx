'use client'

import Header from '@/components/custom/header'
import { HomeHero } from '@/components/custom/home/home-hero'
import Stats from '@/components/custom/stats'
import { useUser } from '@/hooks/use-user'

export function Home() {
  const { user } = useUser()

  return (
    <div className="min-h-screen p-4 flex flex-col justify-between py-6 xl:py-12">
      <Header />
      <HomeHero description={user.description} name={user.name} />
      <Stats />
    </div>
  )
}
