import 'flag-icons/css/flag-icons.min.css'
import { Navbar } from '@/components/custom/custom-navbar'
import { useHeader } from './use-header'

export default function Header() {
  useHeader()

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
