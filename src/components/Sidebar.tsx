import React, { useEffect, useState } from 'react';
import { AiOutlineMail, AiFillPhone } from 'react-icons/ai';
import { Navbar } from './Navbar';
import Typewriter from 'typewriter-effect';
import SocialBar from './SocialBar';
import { useTranslation } from 'react-i18next';
import { userBr, userEn } from '../data/userData';
import { ModeToggle } from './ModeToggle';
import LanguageToggle from './LanguageToggle';
import { ResumeButton } from './ResumeButon';
import { Avatar, AvatarFallback, AvatarImage } from './ui/avatar';

export default function Sidebar({ home }: { home?: boolean }) {
	const [language, setLanguage] = useState('en');
	const [user, setUser] = useState(language === 'en' ? userEn : userBr);
	const { t, i18n } = useTranslation();
	useEffect(() => {
		setLanguage(i18n.language);
		setUser(language === 'en' ? userEn : userBr);
	}, [language]);

	const formatPhoneNumber = (phoneNumber: string): string => {
		const match = phoneNumber.match(/^(\d{2})(\d{5})(\d{4})$/);
		if (match) {
			return `(${match[1]}) ${match[2]}-${match[3]}`;
		}
		return phoneNumber;
	};

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
			<Avatar className="h-[175px] w-[175px] sm:h-28 sm:w-28">
				<AvatarImage src={user.profilePicture} />
				<AvatarFallback>LL</AvatarFallback>
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
				<div className="flex w-[100%] justify-center  ">
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
			<ResumeButton />
		</div>
	);
}
