import React, { useEffect, useState } from 'react';
import { FaShareAltSquare } from 'react-icons/fa';
import Typewriter from 'typewriter-effect';
import { User } from '../Data/userData';
import 'flag-icons/css/flag-icons.min.css';
import { useTranslation } from 'react-i18next';

export default function Header() {
	const user = User;
	const [language, setLanguage] = useState('en');
	const { t, i18n } = useTranslation(['home', 'main']);

	useEffect(() => {
		i18n.changeLanguage(language);
	}, [language]);

	const handleLanguage = async () => {
		const newLanguage = language === 'en' ? 'br' : 'en';
		setLanguage(newLanguage);
	};

	return (
		<div className="min-w-[50%] space-y-6 border-b-2 bg-aboutBgColor pb-5 text-left hover:text-mainTextColor">
			<div>
				<div className="flex justify-between">
					<h1 className="text-4xl font-bold text-bioBorderColor">
						{user.completName}
					</h1>
					<button
						onClick={() => {
							handleLanguage();
						}}
					>
						<p
							className={`flex h-8 w-[60px] rounded-full bg-mainColor bg-opacity-70 p-1 transition duration-500  ${language === 'en' ? 'justify-start' : 'justify-end'}`}
						>
							{language === 'en' ? (
								<span className="fi fi-us fis rounded-full"></span>
							) : (
								<span className="fi fi-br fis rounded-full"></span>
							)}
						</p>
					</button>
				</div>
				<div className="font-bold text-mainColor">
					<Typewriter
						onInit={(typewriter) => {
							typewriter
								.typeString('Desenvolvedor Full-Stack')
								.pauseFor(5000)
								.deleteChars(10)
								.typeString('Front-End')
								.pauseFor(5000)
								.deleteChars(9)
								.typeString('Back-End')
								.pauseFor(5000)
								.deleteChars(8)
								.typeString('Full-Stack')
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
				className="flex w-[130px] items-center  justify-center rounded-[5px] border-[2px] border-mainColor bg-mainColor
				 p-3 text-center text-[16px] font-bold transition-[0.5s] hover:bg-transparent hover:text-mainColor"
				href={user.gitHub}
				target="_blank"
				rel="noopener noreferrer"
			>
				<FaShareAltSquare className="text-[18px]" />
				<span className="pl-2 text-mainTextColor">GitHub</span>
			</a>
		</div>
	);
}
