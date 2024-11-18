import React, { useEffect, useState } from 'react';
import { FaShareAltSquare } from 'react-icons/fa';
import Typewriter from 'typewriter-effect';
import 'flag-icons/css/flag-icons.min.css';
import { useTranslation } from 'react-i18next';
import CustomButton from './CustomButton';
import useUserStore from '@/hooks/user-hooks';

export default function Header() {
	const { t, i18n } = useTranslation();
	const { user } = useUserStore();

	useEffect(() => {
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

			<CustomButton icon={<FaShareAltSquare />} link={user.gitHub}>
				GitHub
			</CustomButton>
		</div>
	);
}
