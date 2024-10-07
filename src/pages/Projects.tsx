import React, { useEffect, useState } from 'react';
import Sidebar from '../components/Sidebar';
import Header from '../components/Header';
import ProjectCard from '../components/ProjectsCard';
import Container from '../components/Container';
import Section from '../components/Section';
import { userBr, userEn } from '../data/userData';
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

	const { t, i18n } = useTranslation();

	useEffect(() => {
		const currentUser = i18n.language === 'en' ? userEn : userBr;
		setUser(currentUser);
		setFilteredProjects(currentUser.projects);
	}, [i18n.language]);

	useEffect(() => {
		const url = new URL(window.location.toString());
		const searchParam = url.searchParams.get('search') || '';
		setFilter((prev) => ({ ...prev, searchTerm: searchParam }));
	}, []);

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

			return techMatch && imageMatch && githubMatch && deployMatch && nameMatch;
		});

		setFilteredProjects(filtered);
	}, [filter, user.projects]);

	const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		const searchValue = e.target.value;
		setFilter((prev) => ({ ...prev, searchTerm: searchValue }));

		// Atualizar a URL
		const url = new URL(window.location.toString());
		url.searchParams.set('search', searchValue);
		window.history.pushState({}, '', url.toString());
	};

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
							onChange={handleSearchChange}
						/>

						<p className="text-sm">
							{filteredProjects.length} {t('projects.filteredResults')}
						</p>
					</div>

					<div>
						{filteredProjects.map((project) => (
							<ProjectCard
								key={project.title}
								project={project}
								id={project.title}
							/>
						))}
					</div>
				</Section>
			</Container>
		</div>
	);
};

export default Projects;
