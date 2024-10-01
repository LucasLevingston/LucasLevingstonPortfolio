import React, { useEffect, useState } from 'react';
import Sidebar from '../components/Sidebar';
import Header from '../components/Header';
import ProjectCard from '../components/ProjectsCard';
import Container from '../components/Container';
import Section from '../components/Section';
import { userBr, userEn } from '../data/userData';
import i18n from '@/i18n';
import { useTranslation } from 'react-i18next';
import { ProjectType } from '@/types/ProjectType';
import { Toggle } from '@/components/ui/toggle';
import { Button } from '@/components/ui/button';
import {
	Popover,
	PopoverContent,
	PopoverTrigger,
} from '@/components/ui/popover';
import TechnologyIcon from '@/components/TechnologyIcon';
import { Filter } from 'lucide-react';
import { GoRepoForked } from 'react-icons/go';
import { AiOutlineLink } from 'react-icons/ai';
import { Input } from '@/components/ui/input';

const Projects: React.FC = () => {
	const [user, setUser] = useState(userEn);
	const [filteredProjects, setFilteredProjects] = useState<ProjectType[]>([]);
	const [filter, setFilter] = useState({
		selectedTechnologies: [] as string[],
		hasImage: false,
		hasGitHub: false,
		hasDeploy: false,
		searchTerm: '',
		isFrontEnd: false,
		isBackEnd: false,
	});

	const { t } = useTranslation();

	useEffect(() => {
		const currentUser = i18n.language === 'en' ? userEn : userBr;
		setUser(currentUser);
		setFilteredProjects(currentUser.projects);
	}, [i18n.language]);

	useEffect(() => {
		const filtered = user.projects.filter((project) => {
			const techMatch = filter.selectedTechnologies.length
				? filter.selectedTechnologies.every((tech) =>
						project.technologies.includes(tech)
					)
				: true;

			const imageMatch = filter.hasImage
				? (project.images?.length ?? 0) > 0
				: true;
			const githubMatch = filter.hasGitHub ? !!project.github : true;
			const deployMatch = filter.hasDeploy ? !!project.link : true;
			const nameMatch = project.title
				.toLowerCase()
				.includes(filter.searchTerm.toLowerCase());

			const isFrontEnd = project.technologies.some((tech) =>
				['react', 'next'].includes(tech.toLowerCase())
			);
			const isBackEnd = project.technologies.some((tech) =>
				['fastify', 'express'].includes(tech.toLowerCase())
			);

			const categoryMatch =
				(filter.isFrontEnd && filter.isBackEnd && isFrontEnd && isBackEnd) ||
				(filter.isFrontEnd && !filter.isBackEnd && isFrontEnd) ||
				(!filter.isFrontEnd && filter.isBackEnd && isBackEnd) ||
				(!filter.isFrontEnd && !filter.isBackEnd);

			return (
				techMatch &&
				imageMatch &&
				githubMatch &&
				deployMatch &&
				nameMatch &&
				categoryMatch
			);
		});

		setFilteredProjects(filtered);
	}, [
		filter.selectedTechnologies,
		filter.hasImage,
		filter.hasGitHub,
		filter.hasDeploy,
		filter.searchTerm,
		filter.isFrontEnd,
		filter.isBackEnd,
		user.projects,
	]);

	const uniqueTechnologies = Array.from(
		new Set(user.projects.flatMap((project) => project.technologies))
	);

	const handleToggleChange = (technology: string) => {
		setFilter((prev) => ({
			...prev,
			selectedTechnologies: prev.selectedTechnologies.includes(technology)
				? prev.selectedTechnologies.filter((tech) => tech !== technology)
				: [...prev.selectedTechnologies, technology],
		}));
	};

	return (
		<div className="min-h-screen">
			<Sidebar />
			<Container>
				<Header />

				<Section title={t('projects.title')}>
					<div className="flex items-center gap-3">
						<Popover>
							<PopoverTrigger asChild>
								<Button variant="outline">
									<Filter />
								</Button>
							</PopoverTrigger>
							<PopoverContent className="flex w-auto gap-2">
								<div className="grid grid-cols-2 gap-4">
									{uniqueTechnologies.map((tech) => (
										<Toggle
											key={tech}
											aria-label={tech}
											pressed={filter.selectedTechnologies.includes(tech)}
											onPressedChange={() => handleToggleChange(tech)}
											className="justify-start gap-2"
										>
											<TechnologyIcon technology={tech} />
											<span>
												{tech.charAt(0).toUpperCase() + tech.slice(1)}
											</span>
										</Toggle>
									))}
								</div>
								<div className="flex flex-col gap-4">
									<Toggle
										pressed={filter.hasImage}
										onPressedChange={(value) =>
											setFilter((prev) => ({ ...prev, hasImage: value }))
										}
									>
										<p>{t('projects.hasImage')}</p>
									</Toggle>
									<Toggle
										pressed={filter.hasGitHub}
										onPressedChange={(value) =>
											setFilter((prev) => ({ ...prev, hasGitHub: value }))
										}
									>
										<GoRepoForked className="text-2xl" />
									</Toggle>
									<Toggle
										pressed={filter.hasDeploy}
										onPressedChange={(value) =>
											setFilter((prev) => ({ ...prev, hasDeploy: value }))
										}
									>
										<AiOutlineLink className="text-2xl" />
									</Toggle>
									<Toggle
										pressed={filter.isFrontEnd}
										onPressedChange={(value) =>
											setFilter((prev) => ({ ...prev, isFrontEnd: value }))
										}
									>
										<p>Front-End</p>
									</Toggle>
									<Toggle
										pressed={filter.isBackEnd}
										onPressedChange={(value) =>
											setFilter((prev) => ({ ...prev, isBackEnd: value }))
										}
									>
										<p>Back-End</p>
									</Toggle>
								</div>
							</PopoverContent>
						</Popover>

						<Input
							type="text"
							placeholder={t('projects.search')}
							className="w-1/3"
							value={filter.searchTerm}
							onChange={(e) =>
								setFilter((prev) => ({ ...prev, searchTerm: e.target.value }))
							}
						/>

						<p className="text-sm">
							{filteredProjects.length} {t('projects.filteredResults')}
						</p>
					</div>

					<div>
						{filteredProjects.map((project) => (
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
};

export default Projects;
