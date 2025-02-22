import React from 'react';
import { ResumeButton } from '@/components/ResumeButon';
import Photo from '@/components/Photo';
import { useUser } from '@/hooks/user-hooks';
import SocialBar from '@/components/SocialBar';
import Header from '@/components/Header';
import Stats from '@/components/Stats';
import { ModeToggle } from '@/components/toggles/ModeToggle';
import LanguageToggle from '@/components/toggles/LanguageToggle';
import { useTranslation } from 'react-i18next';
import Typewriter from 'typewriter-effect';

export default function Home() {
	const user = useUser();
	const { t } = useTranslation();
	return (
		<div className="min-h-screen p-4">
			<Header />
			<div className="container mx-auto px-4 py-8 md:py-6 lg:py-8 xl:py-12">
				<div className="flex flex-col items-center justify-between gap-8 lg:flex-row lg:items-start">
					<Photo className="h-[200px] w-[200px] sm:h-[300px] sm:w-[300px] lg:h-[400px] lg:w-[400px] xl:h-[506px] xl:w-[506px]" />
					<div className="max-w-2xl text-center lg:text-left">
						<span className="mb-2 inline-block text-lg sm:text-xl">
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
						<h1 className="mb-4 text-2xl font-bold sm:mb-6 sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl">
							{t('home.greeting')} <br className="hidden sm:inline" />{' '}
							<span className="text-mainColor">{user.name}</span>
						</h1>

						<p
							className="mb-6 text-sm sm:mb-9 sm:text-base"
							dangerouslySetInnerHTML={{
								__html: user.description,
							}}
						/>
						<div className="flex flex-col items-center justify-center gap-4 sm:flex-row sm:gap-8 lg:justify-start">
							<ResumeButton />
							<SocialBar />
							<div className="mt-4 flex gap-2 sm:mt-0 sm:flex-col sm:gap-0 sm:space-y-2">
								<ModeToggle />
								<LanguageToggle />
							</div>
						</div>
					</div>
				</div>
			</div>
			<Stats />
		</div>
	);
}
