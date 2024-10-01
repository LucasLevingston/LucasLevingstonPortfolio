import React from 'react';
import { DiScrum } from 'react-icons/di';

interface TechnologyIconProps {
	technology: string;
	classname?: string;
}
export default function TechnologyIcon({
	technology,
	classname,
}: TechnologyIconProps) {
	return (
		<div className={`${classname} text-3xl `}>
			{technology === 'scrum' ? (
				<DiScrum className="  text-azulBebe" />
			) : technology === 'vite' ? (
				<img
					src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/vitejs/vitejs-original.svg"
					className="devicon-nextjs-original  w-8"
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
									: `devicon-${technology}-plain  colored  `
					}
				></i>
			)}
		</div>
	);
}
