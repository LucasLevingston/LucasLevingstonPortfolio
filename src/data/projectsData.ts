import SP1 from '../assets/SPOTIFY1.png';
import SP2 from '../assets/SPOTIFY2.png';
import SP3 from '../assets/SPOTIFY3.png';
import CM1 from '../assets/CampoMinado1.jpg';
import CM2 from '../assets/CampoMinado2.jpg';
import CM3 from '../assets/CampoMinado3.jpg';
import CALC1 from '../assets/Calc1.jpg';
import CALC2 from '../assets/Calc2.jpg';
import CALC3 from '../assets/Calc3.jpg';
import MP1 from '../assets/MP1.png';
import MP2 from '../assets/MP2.png';
import MP3 from '../assets/MP3.png';
import F1 from '../assets/Flexibble1.jpg';
import F2 from '../assets/Flexibble2.jpg';
import F3 from '../assets/Flexibble3.jpg';
import T1 from '../assets/threads1.png';
import T2 from '../assets/threads2.png';
import T3 from '../assets/threads3.png';
import PIW1 from '../assets/PIW1.jpg';
import PIW2 from '../assets/PIW2.jpg';
import PIW3 from '../assets/PIW3.jpg';
import PiwNode1 from '../assets/pass-in-web-node1.jpg';
import PiwNode2 from '../assets/pass-in-web-node2.jpg';
import PiwNode3 from '../assets/pass-in-web-node3.jpg';
import GestaoFuncionarios1 from '../assets/GestaoFuncionarios1.jpg';
import GestaoFuncionarios2 from '../assets/GestaoFuncionarios2.jpg';
import GestaoFuncionarios3 from '../assets/GestaoFuncionarios3.jpg';
import caputeeno1 from '../assets/caputeeno1.jpg';
import caputeeno2 from '../assets/caputeeno2.jpg';
import caputeeno3 from '../assets/caputeeno3.jpg';
import verbo1 from '../assets/verbo1.png';
import verbo2 from '../assets/verbo2.png';
import verbo3 from '../assets/verbo3.png';
import sercomp1 from '../assets/sercomp1.png';
import sercomp2 from '../assets/sercomp2.png';
import sercomp3 from '../assets/sercomp3.png';
import sercomp4 from '../assets/sercomp4.png';
import sercomp5 from '../assets/sercomp5.png';
import GymEvolution1 from '../assets/GymEvolution1.png';
import GymEvolution2 from '../assets/GymEvolution2.png';
import GymEvolution3 from '../assets/GymEvolution3.png';
import consultaFacil1 from '../assets/consultafacil1.png';
import consultaFacil2 from '../assets/consultafacil2.png';
import consultaFacil3 from '../assets/consultafacil3.png';
import consultaFacil4 from '../assets/consultafacil4.png';
import aneis1 from '../assets/Aneis1.png';
import aneis2 from '../assets/Aneis2.png';
import aneis3 from '../assets/Aneis3.png';
import { ProjectType } from '../types/ProjectType';

export const projectsDataBr: ProjectType[] = [
	{
		title: 'CRM Splen',
		favorite: true,
		description:
			'CRM feito no estágio na Splendore a fim de venda de graduações, pós-graduações, etc. Foi utilizada a metodologia Scrum para o caminhar do projeto.',
		technologies: [
			'typescript',
			'react',
			'nodejs',
			'tailwindcss',
			'mongodb',
			'vite',
			'express',
			'docker',
			'prisma',
			'git',
			'github',
			'postman',
			'scrum',
		],
	},
	{
		title: 'Consulta Fácil',
		favorite: true,
		description:
			'Aplicação de consultas médicas com integração com Stripe, desenvolvida com NextJs, prisma, utilizando nextauth para autenticação, tailwind para estilização, zod para validações e shadcn para componentes.',
		technologies: [
			'nextjs',
			'typescript',
			'stripe',
			'nodejs',
			'tailwindcss',
			'postgresql',
			'prisma',
			'docker',
			'git',
			'github',
			'zod',
			'jwt',
			'shadcn',
			'nextauth',
		],
		images: [consultaFacil1, consultaFacil2, consultaFacil3, consultaFacil4],
		link: 'https://consulta-facil-next.vercel.app/',
		github: 'https://github.com/LucasLevingston/consultaFacil',
	},
	{
		title: 'Anéis de Poder',
		favorite: true,
		description:
			'A aplicação consiste em um sistema de criação de anéis. Feito com React, tailwind, axios, zustand para o front, consumindo a API REST desenvolvida com node, typescript, Fastify, Swagger, zod para validações e vitest para testes unitários. Utilizado PosgreSql como banco de dados, Docker para container e Sequelize como ORM.',
		technologies: [
			'react',
			'typescript',
			'vite',
			'nodejs',
			'fastify',
			'tailwindcss',
			'postgresql',
			'sequelize',
			'docker',
			'git',
			'github',
			'postman',
			'zod',
			'jwt',
			'axios',
			'zustand',
			'vitest',
		],
		images: [aneis1, aneis2, aneis3],
		github: 'https://github.com/LucasLevingston/AneisDePoder',
	},
	{
		title: 'Verbo Hub',
		favorite: true,
		description:
			'Trata-se de um sistema de gestão de eventos para a igreja Verbo da Vida - Patos, PB. Com GitFlow, desenvolvemos o back e o front-end da aplicação juntamente com testes unitários. A interface está implantada no AWS CloudFront e a API está implantada no AWS S3 Elastic Beanstalk',
		images: [verbo1, verbo2, verbo3],
		technologies: [
			'react',
			'typescript',
			'nodejs',
			'fastify',
			'tailwindcss',
			'docker',
			'vite',
			'swagger',
			'postgresql',
			'eslint',
			'postman',
			'amazonwebservices',
			'git',
			'github',
		],
	},
	{
		title: 'GymEvolution',
		favorite: true,
		description:
			'GymEvolution Se trata de um sistema para evolução na musculação, realacionados a dieta e treino, com gráficos, planilhas de treinos, acompanhamento nutricional e pessoal.',
		images: [GymEvolution1, GymEvolution2, GymEvolution3],
		technologies: [
			'react',
			'typescript',
			'nodejs',
			'fastify',
			'vite',
			'tailwindcss',
			'prisma',
			'swagger',
			'sqlite',
			'eslint',
			'postman',
			'git',
			'github',
		],
		github: 'https://github.com/LucasLevingston/gymevolution',
	},
	{
		title: 'VI Sercomp',
		images: [sercomp1, sercomp2, sercomp3, sercomp4, sercomp5],
		description:
			'Um projeto voluntário da faculdade, onde se trata de uma aplicação para o congresso do curso. Foi utilizado GitFlow para desenvolvimento. Juntamente com uma grande equipe de alunos conseguimos concluir o projeto em 2 meses.',
		technologies: ['react', 'javascript', 'css3', 'git', 'vite', 'github'],
		link: 'https://sercomppb.com.br/',
	},
	{
		title: 'Gestão de Funcionários',
		images: [GestaoFuncionarios1, GestaoFuncionarios2, GestaoFuncionarios3],
		description:
			'Se trata de um sistema de gestão de funcionários com componentes do Shadcn como por exemplo o  formulário para o registro. Ele tem alterações de dados, promoção de funcionários e geração de PDF para os mesmos. Tudo armazenado no Firebase.',
		technologies: [
			'react',
			'typescript',
			'tailwindcss',
			'firebase',
			'vite',
			'git',
			'github',
		],
		github: 'https://github.com/LucasLevingston/taugor-project',
	},
	{
		title: 'Caputeeno',
		description:
			'Este projeto consiste em uma aplicação front-end em ReactJS, onde me realizei um desafio visto no youtube, desenvolvendo o Front-End de um E-commerce. Mudei as tecnologias utilizadas no desafio e utilizei as que uso no meu dia a dia, assim com um sistema 100% desenvolvido por mim.',
		images: [caputeeno1, caputeeno2, caputeeno3],
		github: 'https://github.com/LucasLevingston/capputeeno',
		technologies: [
			'vite',
			'react',
			'typescript',
			'tailwindcss',
			'nodejs',
			'graphql',
		],
	},
	{
		title: 'Plann.er',
		description:
			'Plann.er é um sistema de backend para a organização de viagens. Este projeto tem como objetivo facilitar a criação e o gerenciamento de viagens, permitindo que os usuários adicionem destinos, datas, participantes e outras informações importantes.',
		github: 'https://github.com/LucasLevingston/planner',
		technologies: [
			'typescript',
			'zod',
			'nodejs',
			'fastify',
			'prisma',
			'sqlite',
			'swagger',
		],
	},
	{
		title: 'FocalPoint',
		description:
			'Um sistema de gerenciamento de tarefas foi desenvolvido utilizando React para criar uma interface interativa e responsiva. O estado da aplicação é gerenciado com Zustand, o design é estilizado com Tailwind CSS e Shadcn, Zod valida os dados e Axios facilita a comunicação com APIs.',
		github: 'https://github.com/LucasLevingston/focalPoint',
		technologies: [
			'typescript',
			'react',
			'zod',
			'nodejs',
			'zustand',
			'axios',
			'shadcn',
			'tailwindcss',
		],
	},
	{
		title: 'Gerenciamento Escolar',
		description:
			'Um sistema de gerenciamento de notas escolares, feito com react, material ui, bootstrap, mockable para dados fictícios e axios para consumo.',
		github: 'https://github.com/LucasLevingston/gerenciamento-escolar',
		technologies: ['javascript', 'react', 'bootstrap', 'axios', 'materialui'],
	},
	{
		title: 'Pass In Web - ReactJs',
		description:
			'Este projeto consiste em uma aplicação front-end em ReactJS, aplicação dos conceitos de Propriedades, Estados e Componentes, tipagem com Typescript, tooling com Vite, interface responsiva com TailwindCSS, consumo de API Node.js, uso de URL states.',
		images: [PIW1, PIW2, PIW3],
		github: 'https://github.com/LucasLevingston/pass-in-web-reactjs',
		technologies: [
			'vite',
			'react',
			'typescript',
			'tailwindcss',
			'git',
			'github',
		],
	},
	{
		title: 'Blog Soft',
		description:
			'Desenvolvimento de um blog para estudos. Consiste em um desafio de determinada vaga de emprego para testes de conhecimentos. Feito front e back-end.',
		github: 'https://github.com/LucasLevingston/Blog',
		technologies: [
			'react',
			'typescript',
			'nodejs',
			'fastify',
			'vite',
			'tailwindcss',
			'prisma',
			'swagger',
			'sqlite',
			'eslint',
			'postman',
			'git',
			'github',
		],
	},
	{
		title: 'Pass In Web - NodeJs',
		description:
			'Este projeto no consiste em uma aplicação back-end em Node.js, aplicação dos conceitos de API REST, utilizando TypeScript, Fastify como framework, integração do Prisma ORM + SQLite e Zod para validação de dados.',
		images: [PiwNode1, PiwNode2, PiwNode3],
		github: 'https://github.com/LucasLevingston/pass-in-web-nodejs',
		technologies: [
			'typescript',
			'nodejs',
			'fastify',
			'prisma',
			'sqlite',
			'git',
			'github',
		],
	},
	{
		title: 'Threads Clone',
		description: '	O Threads clone é um projeto do clone do site Threads. ',
		images: [T1, T2, T3],
		github: 'https://github.com/LucasLevingston/threads_app',
		link: 'https://threads-app-nextjs13.vercel.app/',
		technologies: [
			'react',
			'typescript',
			'nextjs',
			'tailwindcss',
			'mongodb',
			'git',
			'github',
		],
	},
	{
		title: 'Spotify Clone',
		description: '	O Spotify clone é um projeto do clone do site Spotify.',
		images: [SP2, SP3, SP1],
		github: 'https://github.com/LucasLevingston/spotify-clone',
		link: 'https://spotify-nextjs13.vercel.app/',
		technologies: [
			'react',
			'typescript',
			'nextjs',
			'tailwindcss',
			'postgresql',
			'git',
			'github',
		],
	},
	{
		title: 'Flexibble',
		description:
			'O Flexibble é uma aplicação web que tem como objetivo ser uma plataforma colaborativa para entusiastas da programação mostrarem, colaborarem e descobrirem projetos de programação.',
		images: [F3, F2, F1],
		github: 'https://github.com/LucasLevingston/grafbase_Flexibble',
		link: 'https://flexibble-nexjs13.vercel.app/',
		technologies: [
			'react',
			'typescript',
			'nextjs',
			'graphql',
			'tailwindcss',
			'git',
			'github',
		],
	},
	{
		title: 'Meu Portfólio ',
		description:
			'Como forma de aprendizado, desenvolvi meu portfólio  utilizando o framework react. Utilizando a linguagem TypeScript e o Tailwind CSS para estilização. Foi meu primeiro contato com react e o pontapé para projetos futuros.',
		images: [MP1, MP2, MP3],
		github: 'https://github.com/LucasLevingston/LucasLevingstonPortifolio',
		technologies: ['react', 'typescript', 'tailwindcss', 'git', 'github'],
	},
	{
		title: 'Campo Minado',
		description:
			'Campo minado foi um projeto na linguagem Java de um jogo já existente, onde o objetivo do jogo é o usuário abrir todos os campos do jogo sem abrir nenhum campo que esteja minado, caso ele abra, irá perder o jogo. Para a abertura de campos, utilizei o padrão observer. Quando tem um campo que esteja minado, os campos vizinhos irão avisar que tem entre 1 e 4 campos minados dentre os seus vizinhos. Com isso, abrindo campo por campo, até completar o jogo. Na parte gráfica utilizei o Jbutton, onde cada campo representa um botão. Utilizei a biblioteca do JUnit para os testes da aplicação.',
		images: [CM1, CM2, CM3],
		github: 'https://github.com/LucasLevingston/Campo_Minado',
		technologies: ['java'],
	},
	{
		title: 'Calculadora',
		description:
			'Calculadora em Java utilizando o padrão Observer e orientação a objetos, com interface gráfica Swing e suporte para adição, subtração, multiplicação e divisão. Aplicação modular e interativa, atualizando a tela em tempo real. Exemplo de código organizado e habilidades em desenvolvimento Java.',
		images: [CALC1, CALC2, CALC3],
		github: 'https://github.com/LucasLevingston/Calculadora.git',
		technologies: ['java'],
	},
];

export const projectsDataEn: ProjectType[] = [
	{
		title: 'CRM Splen',
		favorite: true,
		description:
			'CRM developed during my internship at Splendore for selling undergraduate and graduate programs. Scrum methodology was used throughout the project.',
		technologies: [
			'typescript',
			'react',
			'nodejs',
			'tailwindcss',
			'mongodb',
			'vite',
			'express',
			'docker',
			'prisma',
			'git',
			'github',
			'postman',
			'scrum',
		],
	},
	{
		title: 'Consulta Fácil',
		favorite: true,
		description:
			'Medical appointment application integrated with Stripe, developed with NextJs, Prisma, using NextAuth for authentication, Tailwind for styling, Zod for validations, and Shadcn for components.',
		technologies: [
			'nextjs',
			'typescript',
			'stripe',
			'nodejs',
			'tailwindcss',
			'postgresql',
			'prisma',
			'docker',
			'git',
			'github',
			'zod',
			'jwt',
			'shadcn',
			'nextauth',
		],
		images: [consultaFacil1, consultaFacil2, consultaFacil3, consultaFacil4],
		link: 'https://consulta-facil-next.vercel.app/',
		github: 'https://github.com/LucasLevingston/consultaFacil',
	},
	{
		title: 'Rings of Power',
		favorite: true,
		description:
			'The application consists of a system for creating rings. Built with React, Tailwind, Axios, and Zustand for the frontend, consuming a REST API developed with Node, TypeScript, Fastify, Swagger, Zod for validations, and Vitest for unit testing. PostgreSQL is used as the database, Docker for containers, and Sequelize as the ORM.',
		technologies: [
			'react',
			'typescript',
			'vite',
			'nodejs',
			'fastify',
			'tailwindcss',
			'postgresql',
			'sequelize',
			'docker',
			'git',
			'github',
			'postman',
			'zod',
			'jwt',
			'axios',
			'zustand',
			'vitest',
		],
		images: [aneis1, aneis2, aneis3],
		github: 'https://github.com/LucasLevingston/AneisDePoder',
	},
	{
		title: 'Verbo Hub',
		favorite: true,
		description:
			'A system for managing events for the Verbo da Vida church in Patos, PB. Using GitFlow, we developed the back and front-end of the application along with unit tests. The interface is deployed on AWS CloudFront, and the API is deployed on AWS S3 Elastic Beanstalk.',
		images: [verbo1, verbo2, verbo3],
		technologies: [
			'react',
			'typescript',
			'nodejs',
			'fastify',
			'tailwindcss',
			'docker',
			'vite',
			'swagger',
			'postgresql',
			'eslint',
			'postman',
			'amazonwebservices',
			'git',
			'github',
		],
	},
	{
		title: 'GymEvolution',
		favorite: true,
		description:
			'GymEvolution is a system for fitness evolution related to diet and training, featuring graphs, workout sheets, and nutritional and personal tracking.',
		images: [GymEvolution1, GymEvolution2, GymEvolution3],
		technologies: [
			'react',
			'typescript',
			'nodejs',
			'fastify',
			'vite',
			'tailwindcss',
			'prisma',
			'swagger',
			'sqlite',
			'eslint',
			'postman',
			'git',
			'github',
		],
		github: 'https://github.com/LucasLevingston/gymevolution',
	},
	{
		title: 'VI Sercomp',
		images: [sercomp1, sercomp2, sercomp3, sercomp4, sercomp5],
		description:
			'A volunteer project from college, consisting of an application for the course congress. We utilized GitFlow for development. Together with a large team of students, we completed the project in 2 months.',
		technologies: ['react', 'javascript', 'css3', 'git', 'vite', 'github'],
		link: 'https://sercomppb.com.br/',
	},
	{
		title: 'Employee Management',
		images: [GestaoFuncionarios1, GestaoFuncionarios2, GestaoFuncionarios3],
		description:
			'A system for managing employees, featuring Shadcn components like a form for registration. It allows data changes, employee promotions, and PDF generation for them, all stored in Firebase.',
		technologies: [
			'react',
			'typescript',
			'tailwindcss',
			'firebase',
			'vite',
			'git',
			'github',
		],
		github: 'https://github.com/LucasLevingston/taugor-project',
	},
	{
		title: 'Caputeeno',
		description:
			'This project consists of a front-end application in ReactJS, based on a challenge seen on YouTube, developing the Front-End of an E-commerce. I changed the technologies used in the challenge to those I use daily, thus creating a 100% self-developed system.',
		images: [caputeeno1, caputeeno2, caputeeno3],
		github: 'https://github.com/LucasLevingston/capputeeno',
		technologies: [
			'vite',
			'react',
			'typescript',
			'tailwindcss',
			'nodejs',
			'graphql',
		],
	},
	{
		title: 'Plann.er',
		description:
			'Plann.er is a backend system for organizing trips. This project aims to facilitate the creation and management of trips, allowing users to add destinations, dates, participants, and other important information.',
		github: 'https://github.com/LucasLevingston/planner',
		technologies: [
			'typescript',
			'zod',
			'nodejs',
			'fastify',
			'prisma',
			'sqlite',
			'swagger',
		],
	},
	{
		title: 'FocalPoint',
		description:
			'A task management system developed using React to create an interactive and responsive interface. The application state is managed with Zustand, the design is styled with Tailwind CSS and Shadcn, Zod validates the data, and Axios facilitates communication with APIs.',
		github: 'https://github.com/LucasLevingston/focalPoint',
		technologies: [
			'typescript',
			'react',
			'zod',
			'nodejs',
			'zustand',
			'axios',
			'shadcn',
			'tailwindcss',
		],
	},
	{
		title: 'School Management',
		description:
			'A system for managing school grades, built with React, Material UI, Bootstrap, Mockable for fictional data, and Axios for consumption.',
		github: 'https://github.com/LucasLevingston/gerenciamento-escolar',
		technologies: ['javascript', 'react', 'bootstrap', 'axios', 'materialui'],
	},
	{
		title: 'Pass In Web - ReactJs',
		description:
			'This project consists of a front-end application in ReactJS, applying the concepts of Properties, States, and Components, with TypeScript typing, tooling with Vite, responsive interface with TailwindCSS, consuming a Node.js API, and using URL states.',
		images: [PIW1, PIW2, PIW3],
		github: 'https://github.com/LucasLevingston/pass-in-web-reactjs',
		technologies: [
			'vite',
			'react',
			'typescript',
			'tailwindcss',
			'git',
			'github',
		],
	},
	{
		title: 'Blog Soft',
		description:
			'Development of a blog for studies. This consists of a challenge for a job application to test knowledge. Both front and back-end were developed.',
		github: 'https://github.com/LucasLevingston/Blog',
		technologies: [
			'react',
			'typescript',
			'nodejs',
			'fastify',
			'vite',
			'tailwindcss',
			'prisma',
			'swagger',
			'sqlite',
			'eslint',
			'postman',
			'git',
			'github',
		],
	},
	{
		title: 'Pass In Web - NodeJs',
		description:
			'This project consists of a back-end application in Node.js, applying the concepts of REST API, using TypeScript, Fastify as the framework, integrating Prisma ORM + SQLite, and Zod for data validation.',
		images: [PiwNode1, PiwNode2, PiwNode3],
		github: 'https://github.com/LucasLevingston/pass-in-web-nodejs',
		technologies: [
			'typescript',
			'nodejs',
			'fastify',
			'prisma',
			'sqlite',
			'git',
			'github',
		],
	},
	{
		title: 'Threads Clone',
		description:
			'The Threads clone is a project that replicates the Threads website.',
		images: [T1, T2, T3],
		github: 'https://github.com/LucasLevingston/threads_app',
		link: 'https://threads-app-nextjs13.vercel.app/',
		technologies: [
			'react',
			'typescript',
			'nextjs',
			'tailwindcss',
			'mongodb',
			'git',
			'github',
		],
	},
	{
		title: 'Spotify Clone',
		description:
			'The Spotify clone is a project that replicates the Spotify website.',
		images: [SP2, SP3, SP1],
		github: 'https://github.com/LucasLevingston/spotify-clone',
		link: 'https://spotify-nextjs13.vercel.app/',
		technologies: [
			'react',
			'typescript',
			'nextjs',
			'tailwindcss',
			'postgresql',
			'git',
			'github',
		],
	},
	{
		title: 'Flexibble',
		description:
			'Flexibble is a web application aimed at being a collaborative platform for programming enthusiasts to showcase, collaborate, and discover programming projects.',
		images: [F3, F2, F1],
		github: 'https://github.com/LucasLevingston/grafbase_Flexibble',
		link: 'https://flexibble-nexjs13.vercel.app/',
		technologies: [
			'react',
			'typescript',
			'nextjs',
			'graphql',
			'tailwindcss',
			'git',
			'github',
		],
	},
	{
		title: 'My Portfolio',
		description:
			'As a learning experience, I developed my portfolio using the React framework. I used TypeScript and Tailwind CSS for styling. This was my first contact with React and the starting point for future projects.',
		images: [MP1, MP2, MP3],
		github: 'https://github.com/LucasLevingston/LucasLevingstonPortifolio',
		technologies: ['react', 'typescript', 'tailwindcss', 'git', 'github'],
	},
	{
		title: 'Minesweeper',
		description:
			'Minesweeper was a project in Java based on an existing game where the goal is for the user to open all fields without triggering any mines. I used the observer pattern for field openings. When a field is mined, adjacent fields will indicate how many mines are nearby. Thus, by opening each field, the game can be completed. The graphical part used JButton, where each field represents a button. I used the JUnit library for application testing.',
		images: [CM1, CM2, CM3],
		github: 'https://github.com/LucasLevingston/Campo_Minado',
		technologies: ['java'],
	},
	{
		title: 'Calculator',
		description:
			'Calculator in Java using the Observer pattern and object-oriented principles, featuring a Swing GUI and support for addition, subtraction, multiplication, and division. A modular, interactive application that updates the display in real time. An example of organized code and Java development skills.',
		images: [CALC1, CALC2, CALC3],
		github: 'https://github.com/LucasLevingston/Calculadora.git',
		technologies: ['java'],
	},
];
