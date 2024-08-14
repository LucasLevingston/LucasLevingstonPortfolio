import React from 'react';
import { DiScrum } from 'react-icons/di';

interface TecnologiaIconProps {
	tecnologias: string[];
}

const TecnologiaIcon: React.FC<TecnologiaIconProps> = ({ tecnologias }) => {
	return (
		<div className="flex flex-wrap items-center gap-x-3">
			{tecnologias.map((tecnologia, index) => (
				<React.Fragment key={index}>
					{tecnologia === 'scrum' ? (
						<DiScrum className=" text-4xl text-azulBebe" />
					) : tecnologia === 'vite' ? (
						<img
							src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/vitejs/vitejs-original.svg"
							className="devicon-nextjs-original  w-8"
						/>
					) : (
						<i
							className={
								tecnologia === 'fastify' || tecnologia === 'nextjs'
									? `devicon-${tecnologia}-plain  text-4xl`
									: tecnologia === 'sqlite' ||
										  tecnologia === 'firebase' ||
										  tecnologia === 'docker'
										? `devicon-${tecnologia}-plain-wordmark  colored  text-4xl`
										: tecnologia === 'express' ||
											  tecnologia === 'github' ||
											  tecnologia === 'prisma'
											? `devicon-${tecnologia}-original-wordmark  text-4xl`
											: `devicon-${tecnologia}-plain  colored  text-4xl`
							}
						></i>
					)}
				</React.Fragment>
			))}
		</div>
	);
};

export default TecnologiaIcon;
