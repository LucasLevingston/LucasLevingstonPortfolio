import React from 'react';
import { DiScrum } from 'react-icons/di';
import { FaLink } from 'react-icons/fa';
import { HardSkillsType } from '../types/HardSkillsType';
import SectionItem from './SectionItem';

export const HardSkillsSection: React.FC<{ skills: HardSkillsType[] }> = ({
	skills,
}) => {
	return (
		<div className="flex flex-wrap space-y-3">
			{skills.map((skill, index) => (
				<SectionItem
					key={index}
					title={skill.category}
					className="w-full sm:w-[33%]"
				>
					<div className="flex gap-x-4">
						{skill.technologies.map((technology, i) =>
							technology === 'scrum' ? (
								<DiScrum key={i} className="text-4xl text-azulBebe" />
							) : technology === 'rest' ? (
								<div className="flex items-center" key={i}>
									<span className=" font-bold text-azulBebe">REST</span>
								</div>
							) : technology === 'vite' ? (
								<img
									key={i}
									className="w-9"
									src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/vitejs/vitejs-original.svg"
								/>
							) : (
								<i
									key={i}
									className={
										technology === 'fastify' || technology === 'nextjs'
											? `devicon-${technology}-plain text-4xl`
											: technology === 'sqlite' ||
												  technology === 'firebase' ||
												  technology === 'docker' ||
												  technology === 'axios'
												? `devicon-${technology}-plain-wordmark colored text-4xl`
												: technology === 'express' ||
													  technology === 'github' ||
													  technology === 'prisma'
													? `devicon-${technology}-original-wordmark text-4xl`
													: `devicon-${technology}-plain colored text-4xl`
									}
								></i>
							)
						)}
					</div>
				</SectionItem>
			))}
		</div>
	);
};
