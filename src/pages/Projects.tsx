import React, { useEffect, useState } from 'react';
import Sidebar from '../components/Sidebar';
import Header from '../components/Header';
import ProjectCard from '../components/ProjectsCard';
import Container from '../components/Container';
import Section from '../components/Section';
import { t } from 'i18next';
import { userBr, userEn } from '../data/userData';
import i18n from '@/i18n';
import { useTranslation } from 'react-i18next';

export default function Projects() {
	const [user, setUser] = useState(i18n.language === 'en' ? userEn : userBr);
	const { t } = useTranslation();
	useEffect(() => {
		setUser(i18n.language === 'en' ? userEn : userBr);
		i18n.changeLanguage(i18n.language);
	}, [i18n.language]);

	return (
		<div className=" text-mainTextColor">
			<Sidebar />
			<Container>
				<Header />
				<Section title={t('projects.title')} className="pb-0">
					<div>
						{user.projects.map((project) => (
							<ProjectCard
								key={project.title}
								title={project.title}
								description={project.description}
								images={project.images}
								link={project.link}
								github={project.github}
								technologies={project.technologies}
							/>
						))}
					</div>
				</Section>
			</Container>
		</div>
	);
}
