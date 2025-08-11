import { t } from 'i18next'
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from '@/components/ui/hover-card'
import { getTechnologyData } from '@/lib/utils/getTechnologyData'
import TechnologyIcon from './TechnologyIcon'

interface TechnologyHoverIconProps {
  technology: string
  classname?: string
}
export default function TechnologyHoverIcon({
  technology,
  classname,
}: TechnologyHoverIconProps) {
  const technologyData = getTechnologyData(technology)

  return (
    <HoverCard>
      <HoverCardTrigger className="transition-all hover:opacity-30">
        <TechnologyIcon className={classname} technology={technology} />
      </HoverCardTrigger>
      <HoverCardContent className="flex w-80 gap-4">
        <div className="flex items-center space-x-4">
          <TechnologyIcon hover={true} technology={technology} />
        </div>
        <div className="flex w-full flex-col justify-start text-left">
          <h4 className="text-md font-semibold">{technologyData?.label}</h4>
          <p className="text-sm">{technologyData?.description}</p>
          <a
            className="text-azulBebe pt-3 text-sm font-semibold hover:underline"
            href={technologyData?.link}
            rel="noopener noreferrer"
            target="_blank"
          >
            {t('technologyHoverIcon.viewDocumentation')}{' '}
          </a>
        </div>
      </HoverCardContent>
    </HoverCard>
  )
}
