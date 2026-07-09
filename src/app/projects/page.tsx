import { Suspense } from 'react'
import { Projects } from '@/views/Projects'

export default function Page() {
  return (
    <Suspense fallback={null}>
      <Projects />
    </Suspense>
  )
}
