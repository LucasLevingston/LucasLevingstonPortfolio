import React from 'react';
import Sidebar from '../components/Sidebar';
import Header from '../components/Header';
import { FaShareAltSquare } from 'react-icons/fa';
import { projetos } from '../Data/ProjetosData';
import ProjetoCard from '../components/ProjetoCard';

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
						<ProjetoCard
							key={projeto.nome}
							nome={projeto.nome}
							sobre={projeto.sobre}
							imagens={projeto.imagens}
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
