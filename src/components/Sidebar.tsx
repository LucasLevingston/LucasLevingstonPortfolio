import React from 'react';
import { AiOutlineMail, AiFillPhone } from 'react-icons/ai';
import { Navbar } from './Navbar';
import Typewriter from 'typewriter-effect';
import SocialBar from './SocialBar';
import { ModeToggle } from './toggles/ModeToggle';
import LanguageToggle from './toggles/LanguageToggle';
import { ResumeButton } from './ResumeButon';
import { Avatar, AvatarFallback, AvatarImage } from './ui/avatar';
import { useTranslation } from 'react-i18next';
import { Carousel, CarouselContent, CarouselItem } from './ui/carousel';
import { formatPhoneNumber } from '@/lib/constants/format-number';
import useUserStore from '@/hooks/user-hooks';

export default function Sidebar({ home }: { home?: boolean }) {
	const { t } = useTranslation();
	const { user } = useUserStore();

	const photos = [
		user.profilePicture,
		user.whatsappImageUrl,
		user.instagramImageUrl,
		user.linkedinImageUrl,
	];
	return (
		<div
			className={
				'flex h-full w-full flex-col items-center justify-center gap-8 overflow-y-auto p-[20px_12px] text-center text-bioBgColor no-underline scrollbar no-scrollbar hover:no-underline dark:text-bioBorderColor sm:fixed sm:min-h-screen ' +
				(home
					? 'h-screen w-full bg-mainTextColor dark:bg-bioBgColor'
					: 'border sm:w-1/4 md:border-r-[5px]')
			}
		>
			<h1 className="text-[32px] font-bold">{user.name}</h1>

			<Avatar className="mx-auto h-[175px] w-[175px] sm:h-28 sm:w-28">
				<AvatarImage src={user.profilePicture} alt={`User photo`} />
				<AvatarFallback>
					{user.name
						.split(' ')
						.map((n) => n[0])
						.join('')}
				</AvatarFallback>
			</Avatar>

			<div className="mx-auto max-w-[100%] text-center font-bold">
				{t('sidebar.greeting')} {user.name} {t('sidebar.am')}
				<span className="text-mainColor">
					<Typewriter
						onInit={(typewriter) => {
							typewriter
								.typeString('Full-Stack Developer')
								.pauseFor(5000)
								.deleteChars(20)
								.typeString('Front-End Developer')
								.pauseFor(5000)
								.deleteChars(19)
								.typeString('Back-End Developer')
								.pauseFor(5000)
								.deleteChars(18)
								.typeString('Full-Stack Developer')
								.start();
						}}
					/>
				</span>
			</div>
			<div className="items-center justify-center space-y-2 font-bold">
				<p>{t('sidebar.welcome')}</p>
			</div>
			<div className="flex flex-col gap-2">
				<LanguageToggle />
				<ModeToggle />
			</div>
			<Navbar />

			<SocialBar />
			<div>
				<div className="flex w-[100%] justify-center">
					<a className="text-none flex gap-2" href={`mailto:${user.email}`}>
						<AiOutlineMail className="max-w-[20px] text-[25px] text-mainColor" />
						<span className="transition-[1s] hover:text-mainColor">
							{user.email}
						</span>
					</a>
				</div>
				<div className="flex w-full justify-center gap-2">
					<AiFillPhone className="mr-[5px] max-w-[20px] text-[25px] text-mainColor" />
					<p className="text-none hover:max-w-[225px]">
						{formatPhoneNumber(user.phone)}
					</p>
				</div>
			</div>
			<ResumeButton url={user.resumeUrl} />
		</div>
	);
}
