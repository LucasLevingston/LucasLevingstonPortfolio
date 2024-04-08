import React from 'react';
import Sidebar from '../components/Sidebar';
import Header from '../components/Header';
import ProjectsComponents, { Project } from '../components/ProjectsComponents';
import { FaShareAltSquare } from 'react-icons/fa';
import SP1 from '../assets/projetos/SPOTIFY1.png';
import SP2 from '../assets/projetos/SPOTIFY2.png';
import SP3 from '../assets/projetos/SPOTIFY3.png';
import CM1 from '../assets/projetos/CampoMinado1.jpg';
import CM2 from '../assets/projetos/CampoMinado2.jpg';
import CM3 from '../assets/projetos/CampoMinado3.jpg';
import CALC1 from '../assets/projetos/Calc1.jpg';
import CALC2 from '../assets/projetos/Calc2.jpg';
import CALC3 from '../assets/projetos/Calc3.jpg';
import MP1 from '../assets/projetos/MP1.png';
import MP2 from '../assets/projetos/MP2.png';
import MP3 from '../assets/projetos/MP3.png';
import F1 from '../assets/projetos/Flexibble1.jpg';
import F2 from '../assets/projetos/Flexibble2.jpg';
import F3 from '../assets/projetos/Flexibble3.jpg';
import T1 from '../assets/projetos/threads1.png';
import T2 from '../assets/projetos/threads2.png';
import T3 from '../assets/projetos/threads3.png';
import PIW1 from '../assets/projetos/PIW1.jpg';
import PIW2 from '../assets/projetos/PIW2.jpg';
import PIW3 from '../assets/projetos/PIW3.jpg';

const projetos: Project[] = [
	{
		name: 'CRM Splen',
		sobre:
			'CRM feito no estágio afim de venda de cursos de determinada empresa.',

		tecnologias: [
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
		name: 'Gestão de Funcionários',
		sobre:
			'Se trata de um sistema de gestão de funcionários com formulário para o registro, alteracões de dados, promoção de funcionários e geração de PDF para os mesmos.',
		tecnologias: [
			'vite',
			'react',
			'typescript',
			'tailwindcss',
			'firebase',
			'git',
			'github',
			'PDF',
		],
	},
	{
		name: 'Pass In Web',
		sobre: 'Este é um aplicativo de registro de participantes para eventos, com funcionalidades de busca e check-in.',
		images: [PIW1, PIW2, PIW3],
		github: 'https://github.com/LucasLevingston/taugor-project',
		tecnologias: [
			'vite',
			'react',
			'typescript',
			'tailwindcss',
			'git',
			'github',
		],
	},
	{
		name: 'Threads Clone',
		sobre: '	O Threads clone é um projeto do clone do site Threads.      ',
		images: [T1, T2, T3],
		github: 'https://github.com/LucasLevingston/threads_app',
		link: 'https://threads-app-nextjs13.vercel.app/',
		tecnologias: [
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
		name: 'Spotify Clone',
		sobre: '	O Spotify clone é um projeto do clone do site Spotify.',
		images: [SP2, SP3, SP1],
		github: 'https://github.com/LucasLevingston/spotify-clone',
		link: 'https://spotify-nextjs13.vercel.app/',
		tecnologias: [
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
		name: 'Flexibble',
		sobre:
			'O Flexibble é uma aplicação web que tem como objetivo ser uma plataforma colaborativa para entusiastas da programação mostrarem, colaborarem e descobrirem projetos de programação.',
		images: [F3, F2, F1],
		github: 'https://github.com/LucasLevingston/grafbase_Flexibble',
		link: 'https://flexibble-nexjs13.vercel.app/',
		tecnologias: [
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
		name: 'Meu Portfólio ',
		sobre:
			'Como forma de aprendizado, desenvolvi meu portfólio  utilizando o framework react. Utilizando a linguagem TypeScript e o Tailwind CSS para estilização. Foi meu primeiro contato com react e o pontapé para projetos futuros.',
		images: [MP1, MP2, MP3],
		github: 'https://github.com/LucasLevingston/LucasLevingstonPortifolio',
		tecnologias: ['react', 'typescript', 'tailwindcss', 'git', 'github'],
	},
	{
		name: 'Campo Minado',
		sobre:
			'Campo minado foi um projeto na linguagem Java de um jogo já existente, onde o objetivo do jogo é o usuário abrir todos os campos do jogo sem abrir nenhum campo que esteja minado, caso ele abra, irá perder o jogo. Para a abertura de campos, utilizei o padrão observer. Quando tem um campo que esteja minado, os campos vizinhos irão avisar que tem entre 1 e 4 campos minados dentre os seus vizinhos. Com isso, abrindo campo por campo, até completar o jogo. Na parte gráfica utilizei o Jbutton, onde cada campo representa um botão. Utilizei a biblioteca do JUnit para os testes da aplicação.',
		images: [CM1, CM2, CM3],
		github: 'https://github.com/LucasLevingston/Campo_Minado',
		tecnologias: ['java'],
	},
	{
		name: 'Calculadora',
		sobre:
			'Calculadora em Java utilizando o padrão Observer e orientação a objetos, com interface gráfica Swing e suporte para adição, subtração, multiplicação e divisão. Aplicação modular e interativa, atualizando a tela em tempo real. Exemplo de código organizado e habilidades em desenvolvimento Java.',
		images: [CALC1, CALC2, CALC3],
		github: 'https://github.com/LucasLevingston/Calculadora.git',
		tecnologias: ['java'],
	},
];

export default function Projects() {
	return (
		<div className="flex h-full w-full flex-col bg-aboutBgColor sm:flex-row">
			<Sidebar />
			<div
				id="Projects"
				className="ml-auto mr-0 flex flex-col  bg-aboutBgColor p-4 pb-0 sm:w-full sm:max-w-[75%]  lg:p-12"
			>
				<Header />
				<a
					className="] m-[25px_0] flex w-[150px] rounded-[5px] border-[3px] border-solid border-mainColor bg-mainColor p-[12px_10px] text-center text-[13px] font-bold text-mainTextColor no-underline transition-[0.5s] hover:bg-transparent hover:text-mainColor"
					href="https://github.com/LucasLevingston"
					target="_blank"
					rel="noopener noreferrer"
				>
					<FaShareAltSquare className="text-[22px]" />
					<span className="pl-3 text-mainTextColor"> Ver GitHub</span>
				</a>
				<h2 className="border-t border-solid border-mainTextColor pt-5 text-2xl font-bold">
					Meus Projetos
				</h2>
				<div>
					{projetos.map((projeto) => (
						<ProjectsComponents
							key={projeto.name}
							name={projeto.name}
							sobre={projeto.sobre}
							images={projeto.images}
							link={projeto.link}
							github={projeto.github}
							tecnologias={projeto.tecnologias}
						/>
					))}
				</div>
			</div>
		</div>
	);
}
