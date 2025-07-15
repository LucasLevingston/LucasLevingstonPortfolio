import { certificateImages } from '@/assets/images';
import type { CertificatesType } from '../types/CertificatesType';

export const certificatesDataBr: CertificatesType[] = [
	{
		title: 'Git e GitHub',
		image: certificateImages.gitHub,
		description: [
			'Git e GitHub do básico ao avançado (c/ gist e GitHub Pages)',
		],
		technologies: ['git', 'github'],
	},
	{
		title: 'Sercomp 2023',
		image: certificateImages.sercomp,
		description: [
			"Minicurso VI: Introdução a API's Rest em Java com Spring Boot",
			'Oficina VIII - Testes de software em back-end: estratégias e ferramentas para garantir a qualidade do seu sistema',
		],
		technologies: ['python', 'java', 'javascript', 'postman'],
	},
	{
		title: 'NLW Pocket: Javascript - Full-stack Intermediário',
		image: certificateImages.nlwPocketJavascript,
		description: [
			'Desenvolvimento de uma aplicação back-end em Node.js, aplicação dos conceitos de API REST, utilizando TypeScript, Fastify como framework, integração do DrizzleORM + PostgreSQL, Docker e Zod para validação de dados.',
			'Desenvolvimento de uma aplicação front-end em ReactJS, aplicação dos conceitos de Propriedades, Estados e Componentes, tipagem com Typescript, tooling com Vite, interface responsiva com TailwindCSS, consumo de API Node.js, gerenciamento de dados assíncronos com TanStack Query.',
		],
		technologies: [
			'nodejs',
			'typescript',
			'fastify',
			'postgresql',
			'docker',
			'zod',
			'react',
			'vite',
			'tailwindcss',
		],
	},
	{
		title: 'NLW Journey - Nodejs',
		image: certificateImages.nlwJourneyNodejs,
		description: [
			'Desenvolvimento de uma aplicação back-end em Node.js, aplicação dos conceitos de API REST, utilizando TypeScript, Fastify como framework, integração do Prisma ORM + SQLite e Zod para validação de dados.',
		],
		technologies: [
			'nodejs',
			'typescript',
			'fastify',
			'prisma',
			'sqlite',
			'zod',
		],
	},
	{
		title: 'NLW Unite RocketSeat - React',
		image: certificateImages.react,
		description: [
			'Curso do evento da Rocketseat em que foi desenvolvido o front-end do sistema Pass In Web.',
		],
		technologies: ['vite', 'react', 'typescript', 'tailwindcss'],
	},
	{
		title: 'NLW Unite RocketSeat - Node',
		image: certificateImages.node,
		description: [
			'Curso do evento da Rocketseat em que foi desenvolvido o back-end do sistema Pass In Web.',
		],
		technologies: ['nodejs', 'typescript', 'prisma', 'sqlite', 'fastify'],
	},
	{
		title: 'Introdução ao Desenvolvimento Full Stack',
		image: certificateImages.fullStack,
		description: [
			'Curso sobre desenvolvimento full stack com foco em tecnologias modernas.',
		],
		technologies: ['html5', 'css3', 'javascript', 'react', 'nodejs'],
	},
	{
		title: 'Introdução à Plataforma Java',
		image: certificateImages.java,
		description: ['Exploração dos conceitos essenciais da plataforma Java.'],
		technologies: ['java'],
	},
	{
		title: 'Introdução a Aplicações Rest',
		image: certificateImages.aplicacoesRest,
		description: ['Aprendizado sobre como criar e consumir APIs RESTful.'],
		technologies: ['rest', 'javascript'],
	},
	{
		title: 'Crie Um Portfólio Vencedor',
		image: certificateImages.portfolio,
		description: [
			'Desenvolvimento de um portfólio impactante para apresentar projetos.',
		],
		technologies: ['html5', 'css3', 'javascript'],
	},
	{
		title: 'Contribuindo em um Projeto Open Source',
		image: certificateImages.contribuicao,
		description: [
			'Experiência prática em colaboração em projetos open source no GitHub.',
		],
		technologies: ['git', 'github'],
	},
	{
		title: 'Ambiente de Desenvolvimento Java',
		image: certificateImages.ambienteJava,
		description: ['Configuração de um ambiente de desenvolvimento Java.'],
		technologies: ['java', 'eclipse', 'intellij'],
	},
	{
		title: 'NLW Connect - React',
		image: certificateImages.nlwConnectReact,
		description: [
			'Fundamentos do React, Fundamentos do Next.js, padrão de composição de componentes, estilização com Tailwind, roteamento com App Router, Server Components, Client Components,formulários com React Hook Form, criação de cliente HTTP com Orval, configuração de toolchain com Biome, validação com Zod,tipagem com Typescript.',
		],
		technologies: [
			'react',
			'nextjs',
			'nodejs',
			'typescript',
			'tailwindcss',
			'zod',
		],
	},
	{
		title: 'NLW Agents - FullStack',
		image: certificateImages.nlwAgentsFullStack,
		description: [
			'Construção de aplicações full-stack, configuração de back-end com Node.js e Fastify, uso de Docker e PostgreSQL com Drizzle ORM, desenvolvimento de front-end com React, Vite e Tailwind CSS, gerenciamento de rotas com React Router DOM, consumo de APIs com React Query, criação de hooks personalizados, gravação e upload de áudio no navegador e integração com Inteligência Artificial para transcrição, geração de embeddings e criação de respostas inteligentes com a API do Gemini.',
		],
		technologies: [
			'nodejs',
			'fastify',
			'docker',
			'postgresql',
			'react',
			'vite',
			'tailwindcss',
			'tanstackquery',
			'drizzle',
			'gemini',
			'axios',
			'typescript',
			'jwt',
			'zod',
		],
	},
];

export const certificatesDataEn: CertificatesType[] = [
	{
		title: 'Git and GitHub',
		image: certificateImages.gitHub,
		description: [
			'Git and GitHub from basics to advanced (including Gist and GitHub Pages)',
		],
		technologies: ['git', 'github'],
	},
	{
		title: 'Sercomp 2023',
		image: certificateImages.sercomp,
		description: [
			'Workshop VI: Introduction to REST APIs in Java with Spring Boot',
			'Workshop VIII - Software Testing in Back-end: Strategies and tools to ensure the quality of your system',
		],
		technologies: ['python', 'java', 'javascript', 'postman'],
	},
	{
		title: 'NLW Pocket: Javascript - Intermediate Full-stack',
		image: certificateImages.nlwPocketJavascript,
		description: [
			'Development of a back-end application in Node.js, applying REST API concepts, using TypeScript, Fastify as the framework, integration of DrizzleORM + PostgreSQL, Docker, and Zod for data validation.',
			'Development of a front-end application in ReactJS, applying concepts of Properties, States, and Components, typing with TypeScript, tooling with Vite, responsive interface with TailwindCSS, consuming a Node.js API, and managing asynchronous data with TanStack Query.',
		],
		technologies: [
			'nodejs',
			'typescript',
			'fastify',
			'postgresql',
			'docker',
			'zod',
			'react',
			'vite',
			'tailwindcss',
			'tanstack-query',
		],
	},
	{
		title: 'NLW Journey - Node.js',
		image: certificateImages.nlwJourneyNodejs,
		description: [
			'Development of a back-end application in Node.js, applying REST API concepts, using TypeScript, Fastify as the framework, integration of Prisma ORM + SQLite, and Zod for data validation.',
		],
		technologies: [
			'nodejs',
			'typescript',
			'fastify',
			'prisma',
			'sqlite',
			'zod',
		],
	},
	{
		title: 'NLW Unite RocketSeat - React',
		image: certificateImages.react,
		description: [
			'Course from the Rocketseat event where the front-end of the Pass In Web system was developed.',
		],
		technologies: ['vite', 'react', 'typescript', 'tailwindcss'],
	},
	{
		title: 'NLW Unite RocketSeat - Node',
		image: certificateImages.node,
		description: [
			'Course from the Rocketseat event where the back-end of the Pass In Web system was developed.',
		],
		technologies: ['nodejs', 'typescript', 'prisma', 'sqlite', 'fastify'],
	},
	{
		title: 'Introduction to Full Stack Development',
		image: certificateImages.fullStack,
		description: [
			'Course on full stack development focusing on modern technologies.',
		],
		technologies: ['html5', 'css3', 'javascript', 'react', 'nodejs'],
	},
	{
		title: 'Introduction to the Java Platform',
		image: certificateImages.java,
		description: [
			'Exploration of the essential concepts of the Java platform.',
		],
		technologies: ['java'],
	},
	{
		title: 'Introduction to REST Applications',
		image: certificateImages.aplicacoesRest,
		description: ['Learning how to create and consume RESTful APIs.'],
		technologies: ['rest', 'javascript'],
	},
	{
		title: 'Create a Winning Portfolio',
		image: certificateImages.portfolio,
		description: [
			'Development of an impactful portfolio to showcase projects.',
		],
		technologies: ['html5', 'css3', 'javascript'],
	},
	{
		title: 'Contributing to an Open Source Project',
		image: certificateImages.contribuicao,
		description: [
			'Practical experience collaborating on open source projects on GitHub.',
		],
		technologies: ['git', 'github'],
	},
	{
		title: 'Java Development Environment',
		image: certificateImages.ambienteJava,
		description: ['Setting up a Java development environment.'],
		technologies: ['java', 'eclipse', 'intellij'],
	},
	{
		title: 'NLW Connect - React',
		image: certificateImages.nlwConnectReact,
		description: [
			'Fundamentals of React, Fundamentals of Next.js, component composition pattern, styling with Tailwind, routing with App Router, Server Components, Client Components, forms with React Hook Form, creating an HTTP client with Orval, toolchain setup with Biome, validation with Zod, typing with TypeScript.',
		],
		technologies: [
			'react',
			'nextjs',
			'nodejs',
			'typescript',
			'tailwindcss',
			'zod',
		],
	},
	{
		title: 'NLW Agents - FullStack',
		image: certificateImages.nlwAgentsFullStack,
		description: [
			'Building full-stack applications, backend setup with Node.js and Fastify, using Docker and PostgreSQL with Drizzle ORM, frontend development with React, Vite, and Tailwind CSS, route management with React Router DOM, API consumption with React Query, creating custom hooks, recording and uploading audio in the browser, and integrating with Artificial Intelligence for transcription, embedding generation, and creating intelligent responses with the Gemini API.',
		],
		technologies: [
			'nodejs',
			'fastify',
			'docker',
			'postgresql',
			'react',
			'vite',
			'tailwindcss',
			'tanstackquery',
			'drizzle',
			'gemini',
			'axios',
			'typescript',
			'jwt',
			'zod',
		],
	},
];
