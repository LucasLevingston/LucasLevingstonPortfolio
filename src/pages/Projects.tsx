import React from 'react';
import Sidebar from '../components/Sidebar';
import Header from '../components/Header';
import ProjectCard from '../components/ProjectsCard';
import { User } from '../Data/userData';
import Container from '../components/Container';
import Section from '../components/Section';

export default function Projects() {
	const user = User;
	return (
		<div className=" text-mainTextColor">
			<Sidebar />
			<Container>
				<Header />
				<Section title="Meus Projetos" className="pb-0">
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
