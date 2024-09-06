import React, { useEffect, useState } from 'react';
import { FaShareAltSquare } from 'react-icons/fa';
import Typewriter from 'typewriter-effect';
import { userEn, userBr } from '../data/userData';
import 'flag-icons/css/flag-icons.min.css';
import { useTranslation } from 'react-i18next';

export default function Header({
	language,
	setLanguage,
}: {
	language: string;
	setLanguage: (language: string) => void;
}) {
	const [user, setUser] = useState(language === 'en' ? userEn : userBr);
	const { t, i18n } = useTranslation();

	useEffect(() => {
		i18n.changeLanguage(language);
		setUser(language === 'en' ? userEn : userBr);
		localStorage.setItem('language', language);
	}, [language]);

	const handleLanguage = () => {
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
					<div>
						<button
							className={`flex h-9 w-[80px] items-center rounded-full bg-mainColor bg-opacity-50 p-1 transition-transform duration-500 ${
								language === 'en' ? 'justify-start' : 'justify-end'
							}`}
							onClick={() => {
								handleLanguage();
							}}
						>
							<p
								className={`bg-white absolute rounded-full transition-transform duration-500 ${
									language === 'en' ? 'translate-x-0' : 'translate-x-full'
								}`}
							/>
							{language === 'en' ? (
								<span className="flex items-center gap-2">
									<span className="fi fi-us fis rounded-full text-[30px]"></span>
								</span>
							) : (
								<p className="flex items-center gap-2">
									<span className="fi fi-br fis rounded-full text-[30px]"></span>
								</p>
							)}
						</button>
					</div>
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
