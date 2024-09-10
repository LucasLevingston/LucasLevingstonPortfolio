import { UserType } from '../types/UserType';
import { certificatesDataEn, certificatesDataBr } from './certificateData';
import { experiencesDataBr, experiencesDataEn } from './experienceData';
import { projectsDataBr, projectsDataEn } from './projectsData';
import FotoCurriculo from '../assets/FotoCurriculo.jpg';
import { hardSkillsDataBr, hardSkillsDataEn } from './hardSkillsData';
import { formationDataBr, formationDataEn } from './formationData';

export const userBr: UserType = {
	name: 'Lucas Levingston',
	completName: 'Lucas Levingston Araújo Gadelha Medeiros',
	description:
		'Interesse em Desenvolvimento Full-Stack, Front-End ou Back-end.<br/> Tenho<span class="text-mainColor"> 1 ano e 3 meses de experiência </span> com desenvolvimento Full-Stack. Utilizo <span class="text-mainColor"> React, Typescript, Tailwind CSS, MongoDB, Prisma, Express, Postman, Git, GitHub, Scrum e Docker </span>.<br/>Atualmente estou no <span class="text-mainColor">9º semestre</span> do curso de Ciências da Computação.',
	profilePicture: FotoCurriculo,
	certificates: certificatesDataBr,
	experiences: experiencesDataBr,
	projects: projectsDataBr,
	hardSkills: hardSkillsDataBr,
	formations: formationDataBr,
	gitHub: 'https://github.com/LucasLevingston',
	linkedin: 'https://www.linkedin.com/in/lucas-levingston-44b851231/',
	instagram: 'https://www.instagram.com/lucaolevingston/?hl=pt-br',
	phone: '83999616220',
	whatsapp: 'https://wa.me/message/BL2FCNM72L7GJ1',
	email: 'lucaslevingston94@gmail.com',
};

export const userEn: UserType = {
	name: 'Lucas Levingston',
	completName: 'Lucas Levingston Araújo Gadelha Medeiros',
	description:
		'Interest in Full-Stack, Front-End, or Back-End Development.<br /> I have <span class="text-mainColor">1 year and 3 months of experience</span> in Full-Stack development. I use <span class="text-mainColor">React, TypeScript, Tailwind CSS, MongoDB, Prisma, Express, Postman, Git, GitHub, Scrum, and Docker</span>.<br/> Currently, I am in the <span class="text-mainColor">9th semester </span> of my Computer Science course.',
	profilePicture: FotoCurriculo,
	certificates: certificatesDataEn,
	experiences: experiencesDataEn,
	projects: projectsDataEn,
	hardSkills: hardSkillsDataEn,
	formations: formationDataEn,
	gitHub: 'https://github.com/LucasLevingston',
	linkedin: 'https://www.linkedin.com/in/lucas-levingston-44b851231/',
	instagram: 'https://www.instagram.com/lucaolevingston/?hl=en',
	phone: '83999616220',
	whatsapp: 'https://wa.me/message/BL2FCNM72L7GJ1',
	email: 'lucaslevingston94@gmail.com',
};
