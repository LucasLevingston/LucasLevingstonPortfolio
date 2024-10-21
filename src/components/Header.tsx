import React, { useEffect, useState } from 'react';
import { FaShareAltSquare } from 'react-icons/fa';
import Typewriter from 'typewriter-effect';
import { userEn, userBr } from '../data/userData';
import 'flag-icons/css/flag-icons.min.css';
import { useTranslation } from 'react-i18next';
import LanguageToggle from './LanguageToggle';
import i18n from '@/i18n';
import CustomButton from './CustomButton';

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
			<CustomButton icon={<FaShareAltSquare />} link={user.gitHub}>
				GitHub
			</CustomButton>
		</div>
	);
}
