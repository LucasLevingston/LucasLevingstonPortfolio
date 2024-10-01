import React from 'react';
import { DiScrum } from 'react-icons/di';
import TechnologyIcon from './TechnologyIcon';

interface TechnologiesSectionProps {
	technologies: string[];
}

const TechnologiesSection: React.FC<TechnologiesSectionProps> = ({
	technologies,
}) => {
	return (
		<div className={`flex flex-wrap items-center gap-x-3`}>
			{technologies.map((technology) => (
				<TechnologyIcon technology={technology} key={technology} />
			))}
		</div>
	);
};

export default TechnologiesSection;
