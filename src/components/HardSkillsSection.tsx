import React from 'react';
import { DiScrum } from 'react-icons/di';
import { FaLink } from 'react-icons/fa';
import { HardSkillsType } from '../types/HardSkillsType';
import SectionItem from './SectionItem';
import TechnologiesSection from './ThecnologiesSection';

export const HardSkillsSection: React.FC<{ skills: HardSkillsType[] }> = ({
	skills,
}) => {
	return (
		<div className="flex flex-wrap space-y-3">
			{skills.map((skill, index) => (
				<SectionItem
					key={index}
					title={skill.category}
					className="w-full sm:w-1/3"
				>
					<TechnologiesSection technologies={skill.technologies} />
				</SectionItem>
			))}
		</div>
	);
};
