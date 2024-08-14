import GitH from '../assets/CertificadoGiteGitHub.jpg';
import CertificadoSercomp from '../assets/CertificadoSercomp.jpg';
import CertificadoReact from '../assets/CertificadoReact.jpg';
import CertificadoNode from '../assets/CertificadoNode.jpg';
import { CertificatesType } from '../types/CertificatesType';

export const CertificatesData: CertificatesType[] = [
	{
		title: 'Git e GitHub',
		image: GitH,
		description: [
			'Git e GitHub do básico ao avançado (c/ gist e GitHub Pages)',
		],
		technlogies: ['git', 'github'],
	},
	{
		title: 'Sercomp 2023',
		image: CertificadoSercomp,
		description: [
			"Minicurso VI: Introdução a API's Rest em Java com Spring Boot",
			'Oficina VIII - Testes de software em back-end: estratégias e ferramentas para garantir a qualidade do seu sistema',
		],
		technlogies: ['python', 'java', 'javascript', 'postman'],
	},
	{
		title: 'NLW Unite RocketSeat - React',
		image: CertificadoReact,
		description: [
			'Curso do evento da Rocketseat em que foi desenvolvido o front-end do sistema Pass In Web.',
		],
		technlogies: ['vite', 'react', 'typescript', 'tailwindcss'],
	},
	{
		title: 'NLW Unite RocketSeat - Node',
		image: CertificadoNode,
		description: [
			'Curso do evento da Rocketseat em que foi desenvolvido o back-end do sistema Pass In Web.',
		],
		technlogies: ['nodejs', 'typescript', 'prisma', 'sqlite', 'fastify'],
	},
];
