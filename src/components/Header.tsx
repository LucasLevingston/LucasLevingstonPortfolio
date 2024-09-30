import React, { useEffect, useState } from 'react';
import { FaShareAltSquare } from 'react-icons/fa';
import Typewriter from 'typewriter-effect';
import { userEn, userBr } from '../data/userData';
import 'flag-icons/css/flag-icons.min.css';
import { useTranslation } from 'react-i18next';
import LanguageToggle from './LanguageToggle';
import i18n from '@/i18n';

export default function Header() {
	const [user, setUser] = useState(i18n.language === 'en' ? userEn : userBr);
	const { t } = useTranslation();
	useEffect(() => {
		setUser(i18n.language === 'en' ? userEn : userBr);
		i18n.changeLanguage(i18n.language);
	}, [i18n.language]);

	return (
		<div className="min-w-[50%] space-y-6 border-b-2 pb-5 text-left">
			<div>
				<div className="flex justify-between">
					<h1 className="text-4xl font-bold">{user.completName}</h1>
				</div>
				<div className="font-bold text-mainColor">
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
				</div>
			</div>
			<div>
				<p
					dangerouslySetInnerHTML={{
						__html: user.description,
					}}
				/>
			</div>
			<a
				className=" flex w-[130px] items-center justify-center rounded-[5px] border-[2px] border-mainColor bg-mainColor  p-3 text-center text-[16px] font-bold text-bioBgColor transition-[0.5s] hover:bg-transparent hover:text-mainColor dark:bg-mainColor dark:text-mainTextColor dark:hover:bg-transparent dark:hover:text-mainColor"
				href={user.gitHub}
				target="_blank"
				rel="noopener noreferrer"
			>
				<FaShareAltSquare className="text-[18px]" />
				<span className="pl-2 text-bioBgColor dark:text-mainTextColor">
					GitHub
				</span>
			</a>
		</div>
	);
}
