import { UserType } from '../types/UserType';
import { certificatesDataEn, certificatesDataBr } from './certificateData';
import { experiencesDataBr, experiencesDataEn } from './experienceData';
import { projectsDataBr, projectsDataEn } from './projectsData';
import Foto from '../assets/Foto.jpg';
import FotoLinkedin from '../assets/FotoLinkedin.jpg';
import FotoWhatsapp from '../assets/FotoWhatsapp.jpg';
import FotoInstagram from '../assets/FotoInstagram.png';
import { hardSkillsDataBr, hardSkillsDataEn } from './hardSkillsData';
import { formationDataBr, formationDataEn } from './formationData';
import {
	recommendationDataBr,
	recommendationDataEn,
} from './recommendationData';
import { softSkillsBr, softSkillsEn } from './softSkillsData';

export const userBr: UserType = {
	name: 'Lucas Levingston',
	completName: 'Lucas Levingston Araújo Gadelha Medeiros',
	description:
		'Interesse em Desenvolvimento Full-Stack, Front-End ou Back-end.<br/> Tenho<span class="text-mainColor"> 1 ano e 8 meses de experiência </span> com desenvolvimento Full-Stack. Domino as tecnologias<span class="text-mainColor"> React, Typescript, Tailwind CSS, MongoDB, Prisma, Express, Postman, Git, GitHub, Scrum e Docker</span>.<br/>Atualmente estou no <span class="text-mainColor">10º semestre</span> do curso de Ciências da Computação.',
	resumeUrl:
		'https://docs.google.com/document/d/12krEMbPJzIrSUoN4tKSt3C5REMoSwNpGPSmVNa9UE9I/edit?usp=sharing',
	profilePicture: Foto,
	certificates: certificatesDataBr,
	experiences: experiencesDataBr,
	projects: projectsDataBr,
	hardSkills: hardSkillsDataBr,
	formations: formationDataBr,
	gitHub: 'https://github.com/LucasLevingston',
	linkedin: 'https://www.linkedin.com/in/lucas-levingston-44b851231/',
	linkedinImageUrl: FotoLinkedin,
	instagram: 'https://www.instagram.com/lucaolevingston/?hl=pt-br',
	instagramImageUrl: FotoInstagram,
	phone: '83999616220',
	whatsapp: 'https://wa.me/message/BL2FCNM72L7GJ1',
	whatsappImageUrl: FotoWhatsapp,
	email: 'lucaslevingston94@gmail.com',
	recomendations: recommendationDataBr,
	softSkills: softSkillsBr,
};

export const userEn: UserType = {
	name: 'Lucas Levingston',
	completName: 'Lucas Levingston Araújo Gadelha Medeiros',
	description:
		'Interest in Full-Stack, Front-End, or Back-End Development.<br /> I have <span class="text-mainColor">1 year and 8 months of experience</span> in Full-Stack development. I dominate as technologies<span class="text-mainColor"> React, TypeScript, Tailwind CSS, MongoDB, Prisma, Express, Postman, Git, GitHub, Scrum, and Docker</span>.<br/> Currently, I am in the <span class="text-mainColor">10th semester </span> of my Computer Science course.',
	resumeUrl:
		'https://docs.google.com/document/d/12krEMbPJzIrSUoN4tKSt3C5REMoSwNpGPSmVNa9UE9I/edit?usp=sharing',
	profilePicture: Foto,
	certificates: certificatesDataEn,
	experiences: experiencesDataEn,
	projects: projectsDataEn,
	hardSkills: hardSkillsDataEn,
	formations: formationDataEn,
	gitHub: 'https://github.com/LucasLevingston',
	linkedin: 'https://www.linkedin.com/in/lucas-levingston-44b851231/',
	linkedinImageUrl: FotoLinkedin,
	instagram: 'https://www.instagram.com/lucaolevingston/?hl=en',
	instagramImageUrl: FotoInstagram,
	phone: '83999616220',
	whatsapp: 'https://wa.me/message/BL2FCNM72L7GJ1',
	whatsappImageUrl: FotoWhatsapp,
	email: 'lucaslevingston94@gmail.com',
	recomendations: recommendationDataEn,
	softSkills: softSkillsEn,
};
