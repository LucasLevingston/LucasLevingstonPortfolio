import {
	HoverCard,
	HoverCardContent,
	HoverCardTrigger,
} from '@/components/ui/hover-card';
import TechnologyIcon from './TechnologyIcon';
import { t } from 'i18next';
import { getTechnologyData } from '@/lib/utils/getTechnologyData';

interface TechnologyHoverIconProps {
	technology: string;
	classname?: string;
}
export default function TechnologyHoverIcon({
	technology,
	classname,
}: TechnologyHoverIconProps) {
	const technologyData = getTechnologyData(technology);

	return (
		<HoverCard>
			<HoverCardTrigger className="transition-all hover:opacity-30">
				<TechnologyIcon technology={technology} className={classname} />
			</HoverCardTrigger>
			<HoverCardContent className="flex w-80 gap-4">
				<div className="flex items-center space-x-4">
					<TechnologyIcon technology={technology} hover={true} />
				</div>
				<div className="flex w-full flex-col justify-start text-left">
					<h4 className="text-md font-semibold">{technologyData?.label}</h4>
					<p className="text-sm">{technologyData?.description}</p>
					<a
						href={technologyData?.link}
						target="_blank"
						rel="noopener noreferrer"
						className="text-azulBebe pt-3 text-sm font-semibold hover:underline"
					>
						{t('technologyHoverIcon.viewDocumentation')}{' '}
					</a>
				</div>
			</HoverCardContent>
		</HoverCard>
	);
}
