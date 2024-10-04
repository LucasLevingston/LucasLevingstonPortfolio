import React from 'react';
import { Avatar, AvatarFallback, AvatarImage } from './ui/avatar';
import { HoverCard, HoverCardContent, HoverCardTrigger } from './ui/hover-card';
import { FaLinkedin } from 'react-icons/fa';
import { t } from 'i18next';

interface SectionItemProps {
	children: React.ReactNode;
	title?: string | React.ReactNode;
	className?: string;
	recommendation?: RecommendationType;
}

export default function SectionItem({
	children,
	title,
	className,
	recommendation,
}: SectionItemProps): JSX.Element {
	return (
		<div className={` ${className} flex flex-col gap-1`}>
			<div className="flex items-center gap-3 border-l-[5px] border-mainColor pl-2 text-xl font-bold sm:border-l-[5px] xl:border-l-[5px]">
				{recommendation && (
					<Avatar>
						<AvatarImage src={recommendation.linkedinImageUrl} />
						<AvatarFallback>CN</AvatarFallback>
					</Avatar>
				)}
				<div className="flex flex-col">
					<p>{title}</p>
					{recommendation && (
						<p className="text-sm">{recommendation.position}</p>
					)}
				</div>
				{recommendation && (
					<HoverCard>
						<HoverCardTrigger asChild>
							<a
								className="text-[30px]  transition-[1s] hover:text-mainColor "
								href={recommendation.linkedinUrl}
								target="_blank"
								rel="noopener noreferrer"
							>
								<FaLinkedin className="w-8" />
							</a>
						</HoverCardTrigger>
						<HoverCardContent className="w-80">
							<div className="flex items-center space-x-4">
								<Avatar className="h-1/3 w-1/3">
									<AvatarImage src={recommendation.linkedinImageUrl} />
									<AvatarFallback>LI</AvatarFallback>
								</Avatar>
								<div className="flex flex-col justify-start text-left">
									<div className="flex flex-col">
										<h4 className="text-md font-semibold">
											{recommendation.name}
										</h4>
										<p className="text-sm">{t('social.linkedin.role')}</p>
									</div>
									<a
										href={recommendation.linkedinUrl}
										target="_blank"
										rel="noopener noreferrer"
										className="pt-3 text-sm font-semibold text-azulBebe hover:underline"
									>
										{t('social.linkedin.name')}
									</a>
								</div>
							</div>
						</HoverCardContent>
					</HoverCard>
				)}
			</div>
			<div className={`pl-7`}>{children}</div>
		</div>
	);
}
