import React, { useEffect, useState } from 'react';
import Sidebar from '../components/Sidebar';
import Header from '../components/Header';
import ProjectCard from '../components/ProjectsCard';
import Container from '../components/Container';
import Section from '../components/Section';
import { t } from 'i18next';
import { userBr, userEn } from '../data/userData';

export default function Projects() {
	const [language, setLanguage] = useState(
		() => localStorage.getItem('language') || 'en'
	);
	const [user, setUser] = useState(() => (language === 'en' ? userEn : userBr));

	useEffect(() => {
		setUser(language === 'en' ? userEn : userBr);
	}, [language]);

	return (
		<div className=" text-mainTextColor">
			<Sidebar />
			<Container>
				<Header setLanguage={setLanguage} language={language} />
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
