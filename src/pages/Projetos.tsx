import React from 'react';
import Sidebar from '../components/Sidebar';
import Header from '../components/Header';
import ProjectCard from '../components/ProjectsCard';
import { User } from '../Data/userData';

export default function Projects() {
	const user = User;
	return (
		<div className="flex h-full w-full flex-col bg-aboutBgColor sm:flex-row">
			<Sidebar />
			<div
				id="Projects"
				className="ml-auto mr-0 flex flex-col  bg-aboutBgColor p-4 pb-0 sm:w-full sm:max-w-[75%]  lg:p-12"
			>
				<Header />
				<h2 className="border-t border-solid border-mainTextColor pt-5 text-2xl font-bold">
					Meus Projetos
				</h2>
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
			</div>
		</div>
	);
}
