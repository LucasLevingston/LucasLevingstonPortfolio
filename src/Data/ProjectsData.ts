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
import { ProjectType } from '../types/ProjectType';

export const ProjectsData: ProjectType[] = [
	{
		title: 'CRM Splen',
		description:
			'CRM feito no estágio afim de venda de cursos da determinada empresa. Foram 7 meses de trabalho com início em junho de 2023 e fim em janeiro de 2024.',
		technologies: [
			'vite',
			'react',
			'typescript',
			'tailwindcss',
			'mongodb',
			'express',
			'docker',
			'git',
			'github',
			'postman',
			'scrum',
		],
	},
	{
		title: 'Verbo Eventos',
		description:
			'Se trata de um sistema de gestão de eventos. Feito em conjunto com outros desenvolvedores, utilizamos o padrão GitFlow. Desenvolvido o back e o front.',
		images: [verbo1, verbo2, verbo3],

		technologies: [
			'vite',
			'react',
			'fastify',
			'typescript',
			'tailwindcss',
			'docker',
			'swagger',
			'postgresql',
			'eslint',
			'postman',
			'git',
			'github',
			'gitflow',
		],
	},
	{
		title: 'VI Sercomp',
		images: [sercomp1, sercomp2, sercomp3, sercomp4, sercomp5],
		description:
			'Um projeto voluntário da faculdade que estudo, onde se trata de um sistema para o anual evento que acontece. Foi utilizado GitFlow para desenvolvimento. Juntamente com uma grande equipe de alunos conseguimos concluir o projeto em 2 meses.',
		technologies: [
			'vite',
			'react',
			'javascript',
			'css3',
			'git',
			'github',
			'gitflow',
		],
		link: 'https://sercomppb.com.br/',
	},
	{
		title: 'Gestão de Funcionários',
		images: [GestaoFuncionarios1, GestaoFuncionarios2, GestaoFuncionarios3],
		description:
			'Se trata de um sistema de gestão de funcionários com componentes do Shadcn como por exemplo o  formulário para o registro. Ele tem alterações de dados, promoção de funcionários e geração de PDF para os mesmos. Tudo armazenado no Firebase.',
		technologies: [
			'vite',
			'react',
			'typescript',
			'tailwindcss',
			'firebase',
			'git',
			'github',
			'PDF',
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
