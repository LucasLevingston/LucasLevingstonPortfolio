import type React from 'react'
import { cn } from '@/lib/utils/cn'
import { useLanguageToggle } from './use-language-toggle'

const GROUP_CLASS_NAME = cn(
  'relative grid h-9 min-w-0 grid-cols-2 items-center rounded-full p-0.5',
  'border-2 border-mainColor bg-background'
)

const INDICATOR_CLASS_NAME = cn(
  'pointer-events-none absolute top-0.5 bottom-0.5 left-0.5',
  'w-[calc(50%-0.125rem)] rounded-full bg-mainColor',
  'transition-transform duration-200 ease-out motion-reduce:transition-none'
)

const OPTION_CLASS_NAME = cn(
  'relative z-10 flex h-full cursor-pointer select-none items-center justify-center',
  'gap-1.5 rounded-full px-2.5 text-xs font-semibold tracking-wide',
  'transition-colors duration-200',
  'has-[input:focus-visible]:ring-2 has-[input:focus-visible]:ring-mainColor',
  'has-[input:focus-visible]:ring-offset-2 has-[input:focus-visible]:ring-offset-background'
)

const LanguageToggle: React.FC = () => {
  const {
    options,
    currentLanguage,
    activeIndex,
    groupName,
    groupLabel,
    handleOptionChange,
  } = useLanguageToggle()

  return (
    <fieldset className={GROUP_CLASS_NAME}>
      <legend className="sr-only">{groupLabel}</legend>
      <span
        aria-hidden="true"
        className={INDICATOR_CLASS_NAME}
        style={{ transform: `translateX(${activeIndex * 100}%)` }}
      />
      {options.map(option => {
        const isActive = option.value === currentLanguage

        return (
          <label
            className={cn(
              OPTION_CLASS_NAME,
              isActive
                ? 'text-mainColorForeground'
                : 'text-foreground/60 hover:text-foreground'
            )}
            key={option.value}
            title={option.label}
          >
            <input
              aria-label={option.label}
              checked={isActive}
              className="sr-only"
              lang={option.lang}
              name={groupName}
              onChange={handleOptionChange}
              type="radio"
              value={option.value}
            />
            <span
              aria-hidden="true"
              className={cn('fi fis rounded-full text-sm', `fi-${option.flag}`)}
            />
            <span aria-hidden="true">{option.code}</span>
          </label>
        )
      })}
    </fieldset>
  )
}

export default LanguageToggle
