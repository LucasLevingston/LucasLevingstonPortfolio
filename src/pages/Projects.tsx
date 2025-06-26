import type React from 'react';
import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import Sidebar from '../components/Sidebar';
import Header from '../components/Header';
import ProjectCard from '../components/ProjectCard';
import Container from '../components/Container';
import Section from '../components/Section';
import { useTranslation } from 'react-i18next';
import type { ProjectType } from '@/types/ProjectType';
import { Toggle } from '@/components/ui/toggle';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import {
	Popover,
	PopoverContent,
	PopoverTrigger,
} from '@/components/ui/popover';
import TechnologyIcon from '@/components/Icon/TechnologyIcon';
import {
	Filter,
	ImageIcon,
	Github,
	ExternalLink,
	Smartphone,
	Monitor,
	Server,
	FolderOpen,
	Search,
	X,
	RotateCcw,
} from 'lucide-react';
import { Input } from '@/components/ui/input';
import useUserStore from '@/hooks/user-hooks';

const Projects: React.FC = () => {
	const { t, i18n } = useTranslation();
	const location = useLocation();
	const [filteredProjects, setFilteredProjects] = useState<ProjectType[]>([]);
	const [filter, setFilter] = useState({
		selectedTechnologies: [] as string[],
		hasImage: false,
		hasGitHub: false,
		hasDeploy: false,
		searchTerm: '',
		isFrontEnd: false,
		isBackEnd: false,
		isMobile: false,
	});
	const { user } = useUserStore();

	useEffect(() => {
		setFilteredProjects(user.projects);
	}, [i18n.language]);

	useEffect(() => {
		const search = location.search;
		if (!search) {
			window.scrollTo(0, 0);
		}
		if (search) {
			const element = document.getElementById(search.substring(1));
			element?.scrollIntoView({ behavior: 'smooth' });
		}
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
			const githubMatch = filter.hasGitHub ? !!project.repositoryUrl : true;
			const deployMatch = filter.hasDeploy ? !!project.link : true;
			const nameMatch = project.title
				.toLowerCase()
				.includes(filter.searchTerm.toLowerCase());
			const mobileMatch = filter.isMobile ? project.isMobile : true;

			return (
				techMatch &&
				imageMatch &&
				githubMatch &&
				deployMatch &&
				nameMatch &&
				mobileMatch
			);
		});

		setFilteredProjects(filtered);
	}, [filter, user.projects]);

	const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		const searchValue = e.target.value;
		setFilter((prev) => ({ ...prev, searchTerm: searchValue }));

		const url = new URL(window.location.toString());
		url.searchParams.set('search', searchValue);
		window.history.pushState({}, '', url.toString());
	};

	const clearSearch = () => {
		setFilter((prev) => ({ ...prev, searchTerm: '' }));
		const url = new URL(window.location.toString());
		url.searchParams.delete('search');
		window.history.pushState({}, '', url.toString());
	};

	const clearAllFilters = () => {
		setFilter({
			selectedTechnologies: [],
			hasImage: false,
			hasGitHub: false,
			hasDeploy: false,
			searchTerm: '',
			isFrontEnd: false,
			isBackEnd: false,
			isMobile: false,
		});
		const url = new URL(window.location.toString());
		url.searchParams.delete('search');
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

	const getActiveFiltersCount = () => {
		return (
			filter.selectedTechnologies.length +
			(filter.hasImage ? 1 : 0) +
			(filter.hasGitHub ? 1 : 0) +
			(filter.hasDeploy ? 1 : 0) +
			(filter.isFrontEnd ? 1 : 0) +
			(filter.isBackEnd ? 1 : 0) +
			(filter.isMobile ? 1 : 0)
		);
	};

	return (
		<div className="min-h-screen text-foreground">
			<Sidebar />
			<Container>
				<Header />

				<Section.Root>
					<Section.Title className="flex items-center gap-3 text-xl font-semibold text-foreground">
						<FolderOpen className="h-5 w-5 text-mainColor" />
						{t('projects.title')}
					</Section.Title>
					<Section.Content>
						<div className="space-y-6">
							<Card>
								<CardContent className="pt-6">
									<div className="flex flex-col gap-4 md:flex-row md:items-center">
										<Popover>
											<PopoverTrigger asChild>
												<Button
													variant="outline"
													className="relative border-mainBorder text-sm hover:bg-lightMainColor dark:border-main-border-dark dark:hover:bg-light-main-color-dark"
												>
													<Filter className="mr-2 h-4 w-4 text-mainColor" />
													Filtros
													{getActiveFiltersCount() > 0 && (
														<Badge className="ml-2 h-5 w-5 rounded-full bg-mainColor p-0 text-xs text-white">
															{getActiveFiltersCount()}
														</Badge>
													)}
												</Button>
											</PopoverTrigger>
											<PopoverContent className="w-96" align="start">
												<div className="space-y-4">
													<div>
														<h4 className="mb-3 flex items-center gap-2 text-sm font-medium text-foreground">
															<Monitor className="h-4 w-4 text-mainColor" />
															Tecnologias
														</h4>
														<div className="grid grid-cols-3 gap-2">
															{uniqueTechnologies.map((tech) => (
																<Toggle
																	key={tech}
																	size="sm"
																	pressed={filter.selectedTechnologies.includes(
																		tech
																	)}
																	onPressedChange={() =>
																		handleToggleChange(tech)
																	}
																	className="h-12 w-12 justify-center p-2 data-[state=on]:bg-lightMainColor data-[state=on]:text-mainColor dark:data-[state=on]:bg-light-main-color-dark dark:data-[state=on]:text-red-300"
																>
																	<TechnologyIcon technology={tech} />
																</Toggle>
															))}
														</div>
													</div>

													<div className="border-t pt-4">
														<h4 className="mb-3 text-sm font-medium text-foreground">
															Filtrar por
														</h4>
														<div className="grid grid-cols-2 gap-2">
															<Toggle
																size="sm"
																pressed={filter.hasImage}
																onPressedChange={(value) =>
																	setFilter((prev) => ({
																		...prev,
																		hasImage: value,
																	}))
																}
																className="justify-start gap-2 data-[state=on]:bg-lightMainColor data-[state=on]:text-mainColor dark:data-[state=on]:bg-light-main-color-dark dark:data-[state=on]:text-red-300"
															>
																<ImageIcon className="h-4 w-4" />
																<span className="text-xs">Imagens</span>
															</Toggle>

															<Toggle
																size="sm"
																pressed={filter.hasGitHub}
																onPressedChange={(value) =>
																	setFilter((prev) => ({
																		...prev,
																		hasGitHub: value,
																	}))
																}
																className="justify-start gap-2 data-[state=on]:bg-lightMainColor data-[state=on]:text-mainColor dark:data-[state=on]:bg-light-main-color-dark dark:data-[state=on]:text-red-300"
															>
																<Github className="h-4 w-4" />
																<span className="text-xs">GitHub</span>
															</Toggle>

															<Toggle
																size="sm"
																pressed={filter.hasDeploy}
																onPressedChange={(value) =>
																	setFilter((prev) => ({
																		...prev,
																		hasDeploy: value,
																	}))
																}
																className="justify-start gap-2 data-[state=on]:bg-lightMainColor data-[state=on]:text-mainColor dark:data-[state=on]:bg-light-main-color-dark dark:data-[state=on]:text-red-300"
															>
																<ExternalLink className="h-4 w-4" />
																<span className="text-xs">Deploy</span>
															</Toggle>

															<Toggle
																size="sm"
																pressed={filter.isMobile}
																onPressedChange={(value) =>
																	setFilter((prev) => ({
																		...prev,
																		isMobile: value,
																	}))
																}
																className="justify-start gap-2 data-[state=on]:bg-lightMainColor data-[state=on]:text-mainColor dark:data-[state=on]:bg-light-main-color-dark dark:data-[state=on]:text-red-300"
															>
																<Smartphone className="h-4 w-4" />
																<span className="text-xs">Mobile</span>
															</Toggle>

															<Toggle
																size="sm"
																pressed={filter.isFrontEnd}
																onPressedChange={(value) =>
																	setFilter((prev) => ({
																		...prev,
																		isFrontEnd: value,
																	}))
																}
																className="justify-start gap-2 data-[state=on]:bg-lightMainColor data-[state=on]:text-mainColor dark:data-[state=on]:bg-light-main-color-dark dark:data-[state=on]:text-red-300"
															>
																<Monitor className="h-4 w-4" />
																<span className="text-xs">Front-End</span>
															</Toggle>

															<Toggle
																size="sm"
																pressed={filter.isBackEnd}
																onPressedChange={(value) =>
																	setFilter((prev) => ({
																		...prev,
																		isBackEnd: value,
																	}))
																}
																className="justify-start gap-2 data-[state=on]:bg-lightMainColor data-[state=on]:text-mainColor dark:data-[state=on]:bg-light-main-color-dark dark:data-[state=on]:text-red-300"
															>
																<Server className="h-4 w-4" />
																<span className="text-xs">Back-End</span>
															</Toggle>
														</div>
													</div>
												</div>
											</PopoverContent>
										</Popover>

										{/* Search Input */}
										<div className="relative max-w-md flex-1">
											<Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 transform text-mainColor" />
											<Input
												type="text"
												placeholder="Buscar projetos..."
												className="border-mainBorder pl-10 pr-10 text-sm focus:border-red-500 dark:border-main-border-dark"
												value={filter.searchTerm}
												onChange={handleSearchChange}
											/>
											{filter.searchTerm && (
												<Button
													variant="ghost"
													size="sm"
													className="absolute right-1 top-1/2 h-6 w-6 -translate-y-1/2 transform p-0 hover:bg-lightMainColor dark:hover:bg-light-main-color-dark"
													onClick={clearSearch}
												>
													<X className="h-3 w-3 text-mainColor" />
												</Button>
											)}
										</div>

										{/* Clear All Filters */}
										<Button
											onClick={clearAllFilters}
											variant="outline"
											size="sm"
											className="border-mainBorder text-sm hover:bg-lightMainColor dark:border-main-border-dark dark:hover:bg-light-main-color-dark"
										>
											<RotateCcw className="mr-2 h-4 w-4 text-mainColor" />
											Limpar
										</Button>

										{/* Results Count */}
										<div className="flex items-center gap-2">
											<Badge
												variant="outline"
												className="border-mainBorder text-xs text-mainColor dark:border-main-border-dark dark:text-mainColor"
											>
												{filteredProjects.length} resultados
											</Badge>
										</div>
									</div>

									{/* Active Filters Display */}
									{getActiveFiltersCount() > 0 && (
										<div className="mt-4 border-t border-mainBorder pt-4 dark:border-main-border-dark">
											<div className="flex flex-wrap gap-2">
												{filter.selectedTechnologies.map((tech) => (
													<Badge
														key={tech}
														variant="outline"
														className="gap-1 border-mainBorder text-xs text-mainColor dark:border-main-border-dark dark:text-mainColor"
													>
														<TechnologyIcon technology={tech} />
														{tech}
														<Button
															variant="ghost"
															size="sm"
															className="ml-1 h-3 w-3 p-0 hover:bg-lightMainColor dark:hover:bg-light-main-color-dark"
															onClick={() => handleToggleChange(tech)}
														>
															<X className="h-2 w-2 text-mainColor" />
														</Button>
													</Badge>
												))}
											</div>
										</div>
									)}
								</CardContent>
							</Card>

							{/* Projects List */}
							<div className="space-y-4">
								{filteredProjects.length > 0 ? (
									filteredProjects.map((project) => (
										<ProjectCard
											key={project.title}
											project={project}
											id={project.title}
										/>
									))
								) : (
									<Card className="border-mainBorder dark:border-main-border-dark">
										<CardContent className="pt-6">
											<div className="py-8 text-center">
												<FolderOpen className="mx-auto mb-4 h-12 w-12 text-mainColor" />
												<h3 className="mb-2 text-lg font-medium text-foreground">
													Nenhum projeto encontrado
												</h3>
												<p className="mb-4 text-sm text-mainColor dark:text-mainColor">
													Tente ajustar os filtros ou termos de busca
												</p>
												<Button
													onClick={clearAllFilters}
													variant="outline"
													className="border-mainBorder text-sm hover:bg-lightMainColor dark:border-main-border-dark dark:hover:bg-light-main-color-dark"
												>
													<RotateCcw className="mr-2 h-4 w-4 text-mainColor" />
													Limpar filtros
												</Button>
											</div>
										</CardContent>
									</Card>
								)}
							</div>
						</div>
					</Section.Content>
				</Section.Root>
			</Container>
		</div>
	);
};

export default Projects;
