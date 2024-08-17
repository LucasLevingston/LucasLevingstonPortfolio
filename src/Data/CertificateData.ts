import GitH from '../assets/CertificadoGiteGitHub.jpg';
import CertificadoSercomp from '../assets/CertificadoSercomp.jpg';
import CertificadoReact from '../assets/CertificadoReact.jpg';
import CertificadoNode from '../assets/CertificadoNode.jpg';
import { CertificatesType } from '../types/CertificatesType';

export const CertificatesDataBr: CertificatesType[] = [
	{
		title: 'Git e GitHub',
		image: GitH,
		description: [
			'Git e GitHub do básico ao avançado (c/ gist e GitHub Pages)',
		],
		technologies: ['git', 'github'],
	},
	{
		title: 'Sercomp 2023',
		image: CertificadoSercomp,
		description: [
			"Minicurso VI: Introdução a API's Rest em Java com Spring Boot",
			'Oficina VIII - Testes de software em back-end: estratégias e ferramentas para garantir a qualidade do seu sistema',
		],
		technologies: ['python', 'java', 'javascript', 'postman'],
	},
	{
		title: 'NLW Unite RocketSeat - React',
		image: CertificadoReact,
		description: [
			'Curso do evento da Rocketseat em que foi desenvolvido o front-end do sistema Pass In Web.',
		],
		technologies: ['vite', 'react', 'typescript', 'tailwindcss'],
	},
	{
		title: 'NLW Unite RocketSeat - Node',
		image: CertificadoNode,
		description: [
			'Curso do evento da Rocketseat em que foi desenvolvido o back-end do sistema Pass In Web.',
		],
		technologies: ['nodejs', 'typescript', 'prisma', 'sqlite', 'fastify'],
	},
];

export const CertificatesDataEn: CertificatesType[] = [
	{
		title: 'Git and GitHub',
		image: GitH,
		description: [
			'Git and GitHub from basic to advanced (including Gist and GitHub Pages)',
		],
		technologies: ['git', 'github'],
	},
	{
		title: 'Sercomp 2023',
		image: CertificadoSercomp,
		description: [
			'VI Mini-course: Introduction to REST APIs in Java with Spring Boot',
			'Workshop VIII - Software Testing in Back-End: Strategies and Tools to Ensure System Quality',
		],
		technologies: ['python', 'java', 'javascript', 'postman'],
	},
	{
		title: 'NLW Unite RocketSeat - React',
		image: CertificadoReact,
		description: [
			'Course from Rocketseat event where the front-end of the Pass In Web system was developed.',
		],
		technologies: ['vite', 'react', 'typescript', 'tailwindcss'],
	},
	{
		title: 'NLW Unite RocketSeat - Node',
		image: CertificadoNode,
		description: [
			'Course from Rocketseat event where the back-end of the Pass In Web system was developed.',
		],
		technologies: ['nodejs', 'typescript', 'prisma', 'sqlite', 'fastify'],
	},
];
