import { UserType } from '../types/UserType';
import { CertificatesDataEn, CertificatesDataBr } from './CertificateData';
import { ExperiencesDataBr, ExperiencesDataEn } from './ExperienceData';
import { ProjectsDataBr, ProjectsDataEn } from './ProjectsData';
import FotoCurriculo from '../assets/FotoCurriculo.jpg';
import { HardSkillsDataBr, HardSkillsDataEn } from './HardSkillsData';
import { FormationDataBr, FormationDataEn } from './FormationData';

export const UserBr: UserType = {
	name: 'Lucas Levingston',
	completName: 'Lucas Levingston Araújo Gadelha Medeiros',
	description:
		'Sou um desenvolvedor apaixonado pelo que faço. Tenho <span class="text-mainColor">9 meses de experiência</span> e já atuei tanto no back end como no front end, utilizando <span class="text-mainColor">React, Typescript, Tailwind CSS, MongoDB, Prisma, Express, Postman, Git, GitHub, Scrum e Docker.</span><br /><br /> Atualmente estou no <span class="text-mainColor">9º semestre</span> do curso de <span class="text-mainColor">Ciências da Computação.</span>',
	profilePicture: FotoCurriculo,
	certificates: CertificatesDataBr,
	experiences: ExperiencesDataBr,
	projects: ProjectsDataBr,
	hardSkills: HardSkillsDataBr,
	formations: FormationDataBr,
	gitHub: 'https://github.com/LucasLevingston',
	linkedin: 'https://www.linkedin.com/in/lucas-levingston-44b851231/',
	instagram: 'https://www.instagram.com/lucaolevingston/?hl=pt-br',
	phone: '83999616220',
	whatsapp: 'https://wa.me/message/BL2FCNM72L7GJ1',
	email: 'lucaslevingston94@gmail.com',
};

export const UserEn: UserType = {
	name: 'Lucas Levingston',
	completName: 'Lucas Levingston Araújo Gadelha Medeiros',
	description:
		'I am a developer passionate about what I do. I have <span class="text-mainColor">9 months of experience</span> and have worked both on the back end and front end, using <span class="text-mainColor">React, TypeScript, Tailwind CSS, MongoDB, Prisma, Express, Postman, Git, GitHub, Scrum, and Docker.</span><br /><br /> I am currently in the <span class="text-mainColor">9th semester</span> of the <span class="text-mainColor">Computer Science</span> program.',
	profilePicture: FotoCurriculo,
	certificates: CertificatesDataEn,
	experiences: ExperiencesDataEn,
	projects: ProjectsDataEn,
	hardSkills: HardSkillsDataEn,
	formations: FormationDataEn,
	gitHub: 'https://github.com/LucasLevingston',
	linkedin: 'https://www.linkedin.com/in/lucas-levingston-44b851231/',
	instagram: 'https://www.instagram.com/lucaolevingston/?hl=en',
	phone: '83999616220',
	whatsapp: 'https://wa.me/message/BL2FCNM72L7GJ1',
	email: 'lucaslevingston94@gmail.com',
};
