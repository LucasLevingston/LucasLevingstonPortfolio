interface PhoneFrameProps {
  children: React.ReactNode
  className?: string
}

export default function PhoneFrame({
  children,
  className = '',
}: PhoneFrameProps) {
  return (
    <div className={`relative mx-auto my-5 ${className}`}>
      <div className="relative flex h-[560px] w-[280px] flex-col items-center rounded-[36px] border border-[#333] bg-[#1a1a1a] p-3 shadow-lg sm:h-[640px] sm:w-[320px]">
        <div className="relative mb-1 flex h-[25px] w-[120px] items-center justify-center gap-2 rounded-b-[16px] bg-[#1a1a1a]">
          <div className="h-[5px] w-[40px] rounded-[3px] bg-[#333]" />

          <div className="h-[8px] w-[8px] rounded-full bg-[#333]" />
        </div>

        <div className="w-full flex-grow overflow-hidden rounded-[24px] bg-white">
          {children}
        </div>

        <div className="mt-2 h-[40px] w-[40px] rounded-full border-2 border-[#333]" />
      </div>
    </div>
  )
}
