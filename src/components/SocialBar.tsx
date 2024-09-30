import React from 'react';
import { BsGithub, BsInstagram } from 'react-icons/bs';
import { FaLinkedin, FaWhatsapp } from 'react-icons/fa';
import { userEn } from '../data/userData';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import {
	HoverCard,
	HoverCardContent,
	HoverCardTrigger,
} from '@/components/ui/hover-card';
import { t } from 'i18next';

export default function SocialBar() {
	const user = userEn;

	return (
		<section className="mx-auto flex w-[200px] list-none items-center justify-center border-b-[1px] border-solid pb-3">
			<section className="mx-auto max-w-[60px]">
				<HoverCard>
					<HoverCardTrigger asChild>
						<a
							className="text-[30px] text-mainColor transition-[1s] hover:text-aboutBgColor dark:hover:text-mainTextColor"
							href={user.gitHub}
							target="_blank"
							rel="noopener noreferrer"
						>
							<BsGithub />
						</a>
					</HoverCardTrigger>
					<HoverCardContent className="w-80">
						<div className="flex items-center space-x-4">
							<Avatar className="h-1/3 w-1/3">
								<AvatarImage src={`${user.gitHub}.png`} />
								<AvatarFallback>LL</AvatarFallback>
							</Avatar>
							<div className="flex flex-col justify-start text-left">
								<div className="flex flex-col">
									<h4 className="text-md font-semibold">@LucasLevingston</h4>
									<p className="text-sm">{t('social.github.role')}</p>
								</div>
								<a
									href={user.gitHub}
									target="_blank"
									rel="noopener noreferrer"
									className="pt-3 text-sm font-semibold text-azulBebe hover:underline"
								>
									{t('social.github.name')}
								</a>
							</div>
						</div>
					</HoverCardContent>
				</HoverCard>
			</section>

			<div className="mx-auto max-w-[60px]">
				<HoverCard>
					<HoverCardTrigger asChild>
						<a
							className="text-[30px] text-mainColor transition-[1s] hover:text-aboutBgColor dark:hover:text-mainTextColor"
							href={user.linkedin}
							target="_blank"
							rel="noopener noreferrer"
						>
							<FaLinkedin className="w-8" />
						</a>
					</HoverCardTrigger>
					<HoverCardContent className="w-80">
						<div className="flex items-center space-x-4">
							<Avatar className="h-1/3 w-1/3">
								<AvatarImage src={user.linkedinImageUrl} />
								<AvatarFallback>LI</AvatarFallback>
							</Avatar>
							<div className="flex flex-col justify-start text-left">
								<div className="flex flex-col">
									<h4 className="text-md font-semibold">@lucas-levingston</h4>
									<p className="text-sm">{t('social.linkedin.role')}</p>
								</div>
								<a
									href={user.linkedin}
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
			</div>

			<div className="mx-auto max-w-[60px]">
				<HoverCard>
					<HoverCardTrigger asChild>
						<a
							className="text-[30px] text-mainColor transition-[1s] hover:text-aboutBgColor dark:hover:text-mainTextColor"
							href={user.whatsapp}
							target="_blank"
							rel="noopener noreferrer"
						>
							<FaWhatsapp className="w-8" />
						</a>
					</HoverCardTrigger>
					<HoverCardContent className="w-80">
						<div className="flex items-center space-x-4">
							<Avatar className="h-1/3 w-1/3">
								<AvatarImage src={user.whatsappImageUrl} />
								<AvatarFallback>LL</AvatarFallback>
							</Avatar>
							<div className="flex flex-col justify-start text-left">
								<div className="flex flex-col">
									<h4 className="text-md font-semibold">
										{t('social.whatsapp.label')}
									</h4>
									<p className="text-sm">{t('social.whatsapp.message')}</p>
								</div>
								<a
									href={user.whatsapp}
									target="_blank"
									rel="noopener noreferrer"
									className="pt-3 text-sm font-semibold text-azulBebe hover:underline"
								>
									{t('social.whatsapp.label')}
								</a>
							</div>
						</div>
					</HoverCardContent>
				</HoverCard>
			</div>

			<div className="mx-auto max-w-[60px]">
				<HoverCard>
					<HoverCardTrigger asChild>
						<a
							className="text-[30px] text-mainColor transition-[1s] hover:text-aboutBgColor dark:hover:text-mainTextColor"
							href={user.instagram}
							target="_blank"
							rel="noopener noreferrer"
						>
							<BsInstagram className="w-8" />
						</a>
					</HoverCardTrigger>
					<HoverCardContent className="w-80">
						<div className="flex items-center space-x-4">
							<Avatar className="h-1/3 w-1/3">
								<AvatarImage src={user.instagramImageUrl} />
								<AvatarFallback>LL</AvatarFallback>
							</Avatar>
							<div className="flex flex-col justify-start text-left">
								<div className="flex flex-col">
									<h4 className="text-md font-semibold">@lucaolevingston</h4>
									<p className="text-sm">{t('social.instagram.role')}</p>
								</div>
								<a
									href={user.instagram}
									target="_blank"
									rel="noopener noreferrer"
									className="pt-3 text-sm font-semibold text-azulBebe hover:underline"
								>
									{t('social.instagram.name')}
								</a>
							</div>
						</div>
					</HoverCardContent>
				</HoverCard>
			</div>
		</section>
	);
}
