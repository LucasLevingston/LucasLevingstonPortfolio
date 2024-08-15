import React from 'react';
import { DiScrum } from 'react-icons/di';
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
					<div className="flex gap-x-3">
						{skill.technologies.map((technology, i) =>
							technology === 'scrum' ? (
								<DiScrum key={i} className=" text-5xl text-azulBebe" />
							) : (
								<i
									key={i}
									className={
										technology === 'fastify' || technology === 'nextjs'
											? `devicon-${technology}-plain  text-5xl`
											: technology === 'sqlite' ||
												  technology === 'firebase' ||
												  technology === 'docker'
												? `devicon-${technology}-plain-wordmark  colored  text-5xl`
												: technology === 'express' ||
													  technology === 'github' ||
													  technology === 'prisma'
													? `devicon-${technology}-original-wordmark  text-5xl`
													: `devicon-${technology}-plain  colored  text-5xl`
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
