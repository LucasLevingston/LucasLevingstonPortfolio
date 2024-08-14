import React from 'react';
import { DiScrum } from 'react-icons/di';
import { HardSkillsType } from '../types/HardSkillsType';

export const HardSkillsSection: React.FC<{ skills: HardSkillsType[] }> = ({
	skills,
}) => {
	return (
		<div>
			<div className="flex flex-wrap pt-5">
				{skills.map((skill, index) => (
					<div key={index} className="mb-8 w-full sm:w-[33%]">
						<p className="mb-4 border-l-[5px] border-solid border-mainColor pl-2 text-xl font-bold">
							{skill.category}
						</p>
						<div className="flex gap-x-3 pl-5">
							{skill.technologies.map((technology: string, i: number) =>
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
					</div>
				))}
			</div>
		</div>
	);
};
