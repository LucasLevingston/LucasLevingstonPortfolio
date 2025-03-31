export interface ProjectType {
	title: string;
	description: string;
	images?: string[];
	frontEndRepositoryUrl?: string;
	backEndRepositoryUrl?: string;
	repositoryUrl?: string;
	link?: string;
	favorite?: boolean;
	technologies: string[];
	isMobile?: boolean;
}
