import { HardSkillsType } from '../Data/HardSkillsData';
import { CertificatesType } from './CertificatesType';
import { ExperienceType } from './ExperienceType';
import { ProjectType } from './ProjectType';

export interface UserType {
	name: string;
	completName: string;
	description: string;
	profilePicture: string;
	experiences: ExperienceType[];
	projects: ProjectType[];
	certificates: CertificatesType[];
	hardSkills: HardSkillsType[];
	gitHub: string;
	linkedin: string;
	instagram: string;
	phone: string;
	whatsapp: string;
	email: string;
}
