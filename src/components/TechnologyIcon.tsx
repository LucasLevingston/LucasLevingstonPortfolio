import React from 'react';
import { DiScrum } from 'react-icons/di';

interface TecnologiaIconProps {
	technologies: string[];
}

const TechnologyIcon: React.FC<TecnologiaIconProps> = ({ technologies }) => {
	return (
		<div className="flex flex-wrap items-center gap-x-3">
			{technologies.map((tecnology, index) => (
				<React.Fragment key={index}>
					{tecnology === 'scrum' ? (
						<DiScrum className=" text-4xl text-azulBebe" />
					) : tecnology === 'vite' ? (
						<img
							src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/vitejs/vitejs-original.svg"
							className="devicon-nextjs-original  w-8"
						/>
					) : (
						<i
							className={
								tecnology === 'fastify' || tecnology === 'nextjs'
									? `devicon-${tecnology}-plain  text-4xl`
									: tecnology === 'sqlite' ||
										  tecnology === 'firebase' ||
										  tecnology === 'docker'
										? `devicon-${tecnology}-plain-wordmark  colored  text-4xl`
										: tecnology === 'express' ||
											  tecnology === 'github' ||
											  tecnology === 'prisma'
											? `devicon-${tecnology}-original-wordmark  text-4xl`
											: `devicon-${tecnology}-plain  colored  text-4xl`
							}
						></i>
					)}
				</React.Fragment>
			))}
		</div>
	);
};

export default TechnologyIcon;
