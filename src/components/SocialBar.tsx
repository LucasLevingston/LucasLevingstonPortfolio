import React from 'react';
import { BsGithub, BsInstagram } from 'react-icons/bs';
import { FaLinkedin, FaWhatsapp } from 'react-icons/fa';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import {
	HoverCard,
	HoverCardContent,
	HoverCardTrigger,
} from '@/components/ui/hover-card';
import { t } from 'i18next';
import useUserStore from '@/hooks/user-hooks';
import { twMerge } from 'tailwind-merge';
import { Link } from 'lucide-react';

interface SocialLink {
	icon: JSX.Element;
	url: keyof User;
	avatarUrl: (user: User) => string;
	username: string;
	role: string;
	name: string;
	className?: string;
}

interface User {
	gitHub: string;
	linkedin: string;
	whatsapp: string;
	instagram: string;
	linkedinImageUrl: string;
	whatsappImageUrl: string;
	instagramImageUrl: string;
}

const socialLinks: SocialLink[] = [
	{
		icon: <BsGithub />,
		url: 'gitHub',
		avatarUrl: (user) => `${user.gitHub}.png`,
		username: '@LucasLevingston',
		role: 'social.github.role',
		name: 'social.github.name',
	},
	{
		icon: <FaLinkedin className="w-8" />,
		url: 'linkedin',
		avatarUrl: (user) => user.linkedinImageUrl,
		username: '@lucas-levingston',
		role: 'social.linkedin.role',
		name: 'social.linkedin.name',
	},
	{
		icon: <FaWhatsapp className="w-8" />,
		url: 'whatsapp',
		avatarUrl: (user) => user.whatsappImageUrl,
		username: 'Lucas Levingston',
		role: 'social.whatsapp.message',
		name: 'social.whatsapp.label',
	},
	{
		icon: <BsInstagram className="w-8" />,
		url: 'instagram',
		avatarUrl: (user) => user.instagramImageUrl,
		username: '@lucaolevingston',
		role: 'social.instagram.role',
		name: 'social.instagram.name',
	},
];

interface SocialBarProps {
	className?: string;
}

export default function SocialBar({ className }: SocialBarProps) {
	const { user } = useUserStore();

	return (
		<section
			className={twMerge('flex items-center justify-center gap-3', className)}
		>
			{socialLinks.map((link, index) => (
				<div key={index} className="max-w-[60px]">
					<HoverCard>
						<HoverCardTrigger asChild>
							<div className="flex h-12 w-12 items-center justify-center rounded-full border border-mainColor transition-colors">
								<a
									className="text-[25px] text-mainColor transition-[1s] hover:text-aboutBgColor dark:hover:text-mainTextColor"
									href={user[link.url]}
									target="_blank"
									rel="noopener noreferrer"
								>
									{link.icon}
								</a>
							</div>
						</HoverCardTrigger>
						<HoverCardContent className="w-80">
							<div className="flex items-center space-x-4">
								<Avatar className="h-1/3 w-1/3">
									<AvatarImage src={link.avatarUrl(user)} />
									<AvatarFallback>LL</AvatarFallback>
								</Avatar>
								<div className="flex flex-col justify-start text-left">
									<div className="flex flex-col">
										<h4 className="text-md font-semibold">{link.username}</h4>
										<p className="text-sm">{t(link.role)}</p>
									</div>
									<a
										href={user[link.url]}
										target="_blank"
										rel="noopener noreferrer"
										className="flex items-center gap-2 pt-3 text-sm font-semibold text-lightBlue hover:underline"
									>
										<Link />
										<span>{t(link.name)}</span>
									</a>
								</div>
							</div>
						</HoverCardContent>
					</HoverCard>
				</div>
			))}
		</section>
	);
}
