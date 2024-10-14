import React from 'react';
import { DiScrum } from 'react-icons/di';
import nextAuthSVG from '@/assets/svgs/next-auth.svg';
import shadcnSVG from '@/assets/svgs/shadcn.svg';
import jwtSVG from '@/assets/svgs/jwt.svg';

interface TechnologyIconProps {
	technology: string;
	classname?: string;
}
export default function TechnologyIcon({
	technology,
	classname,
}: TechnologyIconProps) {
	return (
		<div className={`${classname}  text-3xl`}>
			{technology === 'scrum' ? (
				<DiScrum className="  text-azulBebe" />
			) : technology === 'rest' ? (
				<p className=" text-xl font-bold text-azulBebe ">REST</p>
			) : technology === 'jwt' ? (
				<img src={jwtSVG} alt="" className="w-[33px] rounded text-black" />
			) : technology === 'zustand' ? (
				<img
					src={
						'https://user-images.githubusercontent.com/958486/218346783-72be5ae3-b953-4dd7-b239-788a882fdad6.svg'
					}
					alt=""
					className="w-[33px] rounded text-black"
				/>
			) : technology === 'shadcn' ? (
				<img
					src={shadcnSVG}
					alt=""
					className="w-[30px] rounded dark:bg-white"
				/>
			) : technology === 'stripe' ? (
				<img
					src={
						'https://b.stripecdn.com/manage-statics-srv/assets/public/favicon.ico'
					}
					alt=""
					className="w-[30px] rounded dark:bg-white"
				/>
			) : technology === 'zod' ? (
				<img
					src={'https://zod.dev/logo.svg'}
					alt=""
					className="w-[30px] rounded "
				/>
			) : technology === 'next auth' ? (
				<img src={nextAuthSVG} alt="" className="w-[30px]" />
			) : technology === 'vite' ? (
				<img
					src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/vitejs/vitejs-original.svg"
					className="devicon-nextjs-original w-[30px] "
				/>
			) : (
				<i
					className={
						technology === 'fastify' || technology === 'nextjs'
							? `devicon-${technology}-plain  `
							: technology === 'sqlite' ||
								  technology === 'firebase' ||
								  technology === 'docker'
								? `devicon-${technology}-plain-wordmark  colored  `
								: technology === 'express' ||
									  technology === 'github' ||
									  technology === 'prisma'
									? `devicon-${technology}-original-wordmark  `
									: `devicon-${technology}-plain colored  `
					}
				></i>
			)}
		</div>
	);
}
