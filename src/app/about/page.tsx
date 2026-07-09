import { Suspense } from 'react'
import { About } from '@/views/About'

export default function Page() {
  return (
    <Suspense fallback={null}>
      <About />
    </Suspense>
  )
}
