import React from 'react';
import { DiScrum } from 'react-icons/di';
import nextAuthSVG from '@/assets/svgs/next-auth.svg';
import shadcnSVG from '@/assets/svgs/shadcn.svg';
import jwtSVG from '@/assets/svgs/jwt.svg';
import reactNativeSVG from '@/assets/svgs/reactnative.svg';
import expoSVG from '@/assets/svgs/expo.svg';
import { twMerge } from 'tailwind-merge';

interface TechnologyIconProps {
	technology: string;
	className?: string;
	hover?: boolean;
}
export default function TechnologyIcon({
	technology,
	className,
	hover,
}: TechnologyIconProps) {
	const defaultClassNameSVG = hover ? 'w-[72px]' : 'w-[30px]';
	const defaultClassNameIcon = hover ? 'text-7xl' : 'text-3xl';

	const getTechnologyClass = (
		technology: string
	): { iconClassName?: string; svg?: string; element?: React.ReactNode } => {
		switch (technology) {
			case 'fastify':
			case 'nextjs':
				return { iconClassName: `devicon-${technology}-plain` };
			case 'sqlite':
			case 'firebase':
			case 'docker':
				return {
					iconClassName: `devicon-${technology}-plain-wordmark colored`,
				};
			case 'reactnative':
				return {
					svg: reactNativeSVG,
					iconClassName: 'dark:invert',
				};
			case 'expo':
				return {
					svg: expoSVG,
					iconClassName: 'dark:invert',
				};
			case 'express':
			case 'github':
			case 'prisma':
				return {
					iconClassName: `devicon-${technology}-original-wordmark`,
				};
			case 'scrum':
				return {
					element: (
						<DiScrum
							className={`text-lightBlue ${defaultClassNameIcon} ${className}`}
						/>
					),
				};
			case 'rest':
				return {
					element: (
						<p className="cursor-default text-xl font-bold text-lightBlue">
							REST
						</p>
					),
				};
			case 'jwt':
				return {
					svg: jwtSVG,
				};

			case 'zustand':
				return {
					svg: 'https://user-images.githubusercontent.com/958486/218346783-72be5ae3-b953-4dd7-b239-788a882fdad6.svg',
				};
			case 'shadcn':
				return {
					iconClassName: 'dark:bg-white rounded',
					svg: shadcnSVG,
				};
			case 'stripe':
				return {
					svg: 'https://b.stripecdn.com/manage-statics-srv/assets/public/favicon.ico',
				};
			case 'zod':
				return {
					svg: 'https://zod.dev/logo.svg',
				};
			case 'nexauth':
				return {
					svg: nextAuthSVG,
				};

			case 'vite':
				return {
					svg: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/vitejs/vitejs-original.svg',
				};

			default:
				return {
					iconClassName: `devicon-${technology}-plain colored`,
				};
		}
	};
	const { iconClassName, svg, element } = getTechnologyClass(technology);

	return (
		<>
			{svg && (
				<img
					className={twMerge(defaultClassNameSVG, iconClassName, className)}
					src={svg}
					alt=""
				/>
			)}

			{iconClassName && (
				<i
					className={twMerge(defaultClassNameIcon, iconClassName, className)}
				></i>
			)}

			{element}
		</>
	);
}
