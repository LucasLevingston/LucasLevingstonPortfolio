import React, { useEffect, useState } from 'react';
import { AiOutlineMail, AiFillPhone } from 'react-icons/ai';
import Navbar from './Navbar';
import Typewriter from 'typewriter-effect';
import SocialBar from './SocialBar';
import { UserBr, UserEn } from '../Data/userData';
import { ResumeButton } from './ResumeButon';
import { useTranslation } from 'react-i18next';
import i18n from '../i18n';

export default function Sidebar({ home }: { home?: boolean }) {
	const [language, setLanguage] = useState(
		() => localStorage.getItem('language') || 'en'
	);
	const [user, setUser] = useState(() => (language === 'en' ? UserEn : UserBr));
	const { t } = useTranslation();

	useEffect(() => {
		i18n.changeLanguage(language);
		setUser(language === 'en' ? UserEn : UserBr);
		localStorage.setItem('language', language);
	}, [language]);

	const handleLanguage = () => {
		const newLanguage = language === 'en' ? 'br' : 'en';
		setLanguage(newLanguage);
	};

	function formatPhoneNumber(phoneNumber: string): string {
		const match = phoneNumber.match(/^(\d{2})(\d{5})(\d{4})$/);
		if (match) {
			return `(${match[1]}) ${match[2]}-${match[3]}`;
		}
		return phoneNumber;
	}

	return (
		<div
			id="Sidebar"
			className={
				'flex h-full w-full flex-col items-center  justify-center gap-8 overflow-y-auto bg-bioBgColor p-[20px_12px] text-center text-mainTextColor no-underline scrollbar no-scrollbar hover:no-underline sm:fixed sm:min-h-screen ' +
				(home ? 'h-screen w-full' : 'sm:w-1/4') +
				' md:border-r-[5px]'
			}
		>
			<h1 className="text-[32px] font-bold text-bioBorderColor">{user.name}</h1>
			<img
				className="mx-auto h-[175px] w-[175px] rounded-[50%] sm:h-28 sm:w-28"
				src={user.profilePicture}
				alt={user.name}
			/>
			<div className="mx-auto max-w-[100%] text-center font-bold text-bioBorderColor">
				{t('sidebar.greeting')} {user.name} {t('sidebar.am')}
				<span className="text-mainColor">
					<Typewriter
						onInit={(typewriter) => {
							typewriter
								.typeString(t('sidebar.role.fullStack'))
								.pauseFor(5000)
								.deleteChars(t('sidebar.role.fullStack').length)
								.typeString(t('sidebar.role.frontEnd'))
								.pauseFor(5000)
								.deleteChars(t('sidebar.role.frontEnd').length)
								.typeString(t('sidebar.role.backEnd'))
								.pauseFor(5000)
								.deleteChars(t('sidebar.role.backEnd').length)
								.typeString(t('sidebar.role.fullStack'))
								.start();
						}}
					/>
				</span>
			</div>
			<div className="space-y-2 font-bold text-mainTextColor">
				<p>{t('sidebar.welcome')}</p>
				{home && (
					<button
						onClick={() => {
							handleLanguage();
						}}
					>
						<p
							className={`relative flex h-8 w-[60px] rounded-full bg-mainColor bg-opacity-50 p-1 transition-transform duration-500 ${
								language === 'en' ? 'justify-start' : 'justify-end'
							}`}
						>
							<span
								className={`bg-white absolute h-full w-1/2 rounded-full transition-transform duration-500 ${
									language === 'en' ? 'translate-x-0' : 'translate-x-full'
								}`}
							/>
							{language === 'en' ? (
								<span className="fi fi-us rounded-full"></span>
							) : (
								<span className="fi fi-br rounded-full"></span>
							)}
						</p>
					</button>
				)}
			</div>
			<SocialBar />
			<div>
				<div className="flex w-[100%] justify-center transition-[1s] hover:text-[17px]">
					<a
						className="text-none flex hover:text-mainTextColor"
						href={`mailto:${user.email}`}
					>
						<AiOutlineMail className="mr-[15px] max-w-[20px] text-[25px] text-mainColor" />
						{user.email}
					</a>
				</div>
				<div className="flex w-full justify-center">
					<AiFillPhone className="mr-[5px] max-w-[20px] text-[25px] text-mainColor" />
					<p className="text-none max-w-[225px] hover:text-mainTextColor">
						{formatPhoneNumber(user.phone)}
					</p>
				</div>
			</div>
			<ResumeButton />
			<Navbar />
		</div>
	);
}
