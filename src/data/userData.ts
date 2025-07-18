import { UserType } from '../types/UserType';
import { certificatesDataEn, certificatesDataBr } from './certificateData';
import { experiencesDataBr, experiencesDataEn } from './experienceData';
import { projectsDataBr, projectsDataEn } from './projectsData';

import { hardSkillsDataBr, hardSkillsDataEn } from './hardSkillsData';
import { formationDataBr, formationDataEn } from './formationData';
import {
	recommendationDataBr,
	recommendationDataEn,
} from './recommendationData';
import { softSkillsBr, softSkillsEn } from './softSkillsData';
import { generalImages } from '@/assets/images';

export const userBr: UserType = {
	name: 'Lucas Levingston',
	completName: 'Lucas Levingston Araújo Gadelha Medeiros',
	description:
		'Interesse em Desenvolvimento Full-Stack, Front-End ou Back-end.<br/> Possuo<span class="text-mainColor"> 2 anos </span> com desenvolvimento Full-Stack. Domino as tecnologias<span class="text-mainColor"> React, Typescript, Node.Js, Tailwind CSS, React Native, SQL e NoSQL, ORMs, APIs, testes de APIs com postman, versionamento com git, metodologias ágeis e conteinerização com docker</span>.<br/> <span class="text-mainColor">Graduado</span> em Ciências da Computação.',
	resumeUrl:
		'https://docs.google.com/document/d/12krEMbPJzIrSUoN4tKSt3C5REMoSwNpGPSmVNa9UE9I/edit?usp=sharing',
	profilePicture: generalImages.foto,
	certificates: certificatesDataBr,
	experiences: experiencesDataBr,
	projects: projectsDataBr,
	hardSkills: hardSkillsDataBr,
	formations: formationDataBr,
	gitHub: 'https://github.com/LucasLevingston',
	linkedin: 'https://www.linkedin.com/in/lucas-levingston-44b851231/',
	linkedinImageUrl: generalImages.fotoLinkedin,
	instagram: 'https://www.instagram.com/lucaolevingston/?hl=pt-br',
	instagramImageUrl: generalImages.fotoInstagram,
	phone: '(83) 99961-6220',
	whatsapp: 'https://wa.me/message/BL2FCNM72L7GJ1',
	whatsappImageUrl: generalImages.fotoWhatsapp,
	email: 'lucaslevingston94@gmail.com',
	recomendations: recommendationDataBr,
	softSkills: softSkillsBr,
	address: 'Rua Severino Soares, 70 - Jardim Guanabara',
	location: 'Patos - PB',
};

export const userEn: UserType = {
	name: 'Lucas Levingston',
	completName: 'Lucas Levingston Araújo Gadelha Medeiros',
	description:
		'Interest in Full-Stack, Front-End or Back-End Development.<br/> I have <span class="text-mainColor">2 years</span> of experience in Full-Stack development. I master the technologies <span class="text-mainColor">React, TypeScript, Node.js, Tailwind CSS, React Native, SQL and NoSQL, ORMs, APIs, API testing with Postman, version control with Git, agile methodologies, and containerization with Docker</span>.<br/> <span class="text-mainColor">Graduated</span> in Computer Science.',
	resumeUrl:
		'https://docs.google.com/document/d/12krEMbPJzIrSUoN4tKSt3C5REMoSwNpGPSmVNa9UE9I/edit?usp=sharing',
	profilePicture: generalImages.foto,
	certificates: certificatesDataEn,
	experiences: experiencesDataEn,
	projects: projectsDataEn,
	hardSkills: hardSkillsDataEn,
	formations: formationDataEn,
	gitHub: 'https://github.com/LucasLevingston',
	linkedin: 'https://www.linkedin.com/in/lucas-levingston-44b851231/',
	linkedinImageUrl: generalImages.fotoLinkedin,
	instagram: 'https://www.instagram.com/lucaolevingston/?hl=en',
	instagramImageUrl: generalImages.fotoInstagram,
	phone: '(83) 99961-6220',
	whatsapp: 'https://wa.me/message/BL2FCNM72L7GJ1',
	whatsappImageUrl: generalImages.fotoWhatsapp,
	email: 'lucaslevingston94@gmail.com',
	recomendations: recommendationDataEn,
	softSkills: softSkillsEn,
	address: 'Rua Severino Soares, 70 - Jardim Guanabara',
	location: 'Patos - PB',
};
