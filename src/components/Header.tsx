import React, { useEffect } from 'react';
import Typewriter from 'typewriter-effect';
import 'flag-icons/css/flag-icons.min.css';
import { useTranslation } from 'react-i18next';
import useUserStore from '@/hooks/user-hooks';
import { Navbar } from './Navbar';

export default function Header() {
	const { i18n } = useTranslation();

	useEffect(() => {
		i18n.changeLanguage(i18n.language);
	}, [i18n.language]);

	return (
		<div className="py-4 xl:py-8">
			<div className="container mx-auto flex items-center justify-between">
				<div>
					<div className="flex justify-between">
						<h1 className="text-4xl font-bold">
							Lucas
							<span className="text-3xl text-mainColor">.dev</span>
						</h1>
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

				<Navbar />
			</div>
		</div>
	);
}
