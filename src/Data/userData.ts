import { UserType } from '../types/UserType';
import { CertificatesData } from './CertificateData';
import { ExperiencesData } from './ExperienceData';
import { ProjectsData } from './ProjectsData';
import FotoCurriculo from '../assets/FotoCurriculo.jpg';
import { HardSkillsData } from './HardSkillsData';

export const User: UserType = {
	name: 'Lucas Levingston',
	completName: 'Lucas Levingston Araújo Gadelha Medeiros',
	description:
		'Sou um desenvolvedor apaixonado pelo que faço. Tenho <span class="text-mainColor">9 meses de experiência</span> e já atuei tanto no back end como no front end, utilizando <span class="text-mainColor">React, Typescript, Tailwind CSS, MongoDB, Prisma, Express, Postman, Git, GitHub, Scrum e Docker.</span><br /><br /> Atualmente estou no <span class="text-mainColor">9º semestre</span> do curso de <span class="text-mainColor">Ciências da Computação.</span>',
	profilePicture: FotoCurriculo,
	certificates: CertificatesData,
	experiences: ExperiencesData,
	projects: ProjectsData,
	hardSkills: HardSkillsData,
	gitHub: 'https://github.com/LucasLevingston',
	linkedin: 'https://www.linkedin.com/in/lucas-levingston-44b851231/',
	instagram: 'https://www.instagram.com/lucaolevingston/?hl=pt-br',
	phone: '83999616220',
	whatsapp: 'https://wa.me/message/BL2FCNM72L7GJ1',
	email: 'lucaslevingston94@gmail.com',
};
