import React from 'react';
import Sidebar from '../components/Sidebar';
import Header from '../components/Header';
import { FaShareAltSquare } from 'react-icons/fa';

export default function Home() {
	return (
		<div className="w-full flex flex-col sm:flex-row h-full text-mainTextColor">
			<Sidebar />
			<div className="flex-1 p-[50px]  sm:max-w-[75%] ml-auto mr-0 bg-aboutBgColor">
				<Header />
				<div className="overflow-y-auto">
					<p className="max-w-[100%] m m-[5px] ">
						Tenho 20 anos, sou estudante do sexto período de ciência da computação e sou
						desenvolvedor FullStack. Gosto de participar de projetos desde a{' '}
						<span className="text-mainColor">
							definição das regras de negócio e levantamento de requisitos{' '}
						</span>
						até o <span className="text-mainColor">deploy da aplicação.</span>
					</p>
					<p className="max-w-[100%] mb-4 ">
						Atualmente estou atuando como estagiário na empresa Splendore, na qual
						desempenho a função de{' '}
						<span className="text-mainColor">Desenvolvedor Web.</span>
					</p>
					<a
						className="hover:bg-transparent font-bold text-[13px] bg-mainColor hover:text-mainColor border-[3px] border-mainColor rounded-[5px] border-solid no-underline transition-[0.5s] m-[25px_0] p-[12px_10px] ] w-[150px] text-center flex"
						href="https://github.com/LucasLevingston"
						id="btn-projects"
						target="_blank"
						rel="noopener noreferrer"
					>
						<FaShareAltSquare className="text-[22px]  " />
						<span className=" pl-3  text-mainTextColor"> Ver GitHub</span>
					</a>
					<h2
						className="border-t-[1px] font-bold border-solid pt-10 border-mainTextColor mb-5 text-[32px]"
						id="skills-section-title"
					>
						Minhas Skills
					</h2>
					<div className="border-b-[1px]  border-solid pt-3  border-borderColor">
						<p className="text-2xl font-bold ">Conheça as tecnologias que domino:</p>
						<div className="flex flex-wrap mt-5" id="skills-container">
							<div className="w-full  sm:w-[33%] mb-8">
								<p className="text-xl  mb-4 font-bold pl-2 border-l-[5px] border-solid border-mainColor">
									Front-End
								</p>
								<i className="devicon-html5-plain colored text-4xl mr-2 ml-3"></i>
								<i className="devicon-css3-plain colored text-4xl mr-2"></i>
								<i className="devicon-javascript-plain colored text-4xl mr-2"></i>
								<i className="devicon-typescript-plain colored text-4xl mr-2"></i>
								<i className="devicon-tailwindcss-plain colored text-4xl mr-2"></i>
							</div>
							<div className="w-full  sm:w-[33%] mb-8">
								<p className="text-xl   mb-4 font-bold pl-2 border-l-[5px] border-solid border-mainColor">
									Back-End
								</p>
								<i className="devicon-java-plain colored text-4xl mr-2 ml-3"></i>
								<i className="devicon-python-plain colored text-4xl mr-2"></i>
								<i className="devicon-nodejs-plain colored text-4xl mr-2"></i>
							</div>
							<div className="w-full  sm:w-[33%] mb-8">
								<p className="text-xl   mb-4 font-bold pl-2 border-l-[5px] border-solid border-mainColor">
									Databases
								</p>
								<i className="devicon-postgresql-plain colored text-4xl mr-2 ml-3"></i>
								<i className="devicon-mysql-plain colored text-4xl mr-2"></i>
								<i className="devicon-mongodb-plain colored text-4xl mr-2"></i>
							</div>
							<div className="w-full  sm:w-[33%] mb-8">
								<p className="text-xl   mb-4 font-bold pl-2 border-l-[5px] border-solid border-mainColor">
									Front-End Frameworks
								</p>
								<i className="devicon-react-plain colored text-4xl mr-2 ml-3"></i>
							</div>
							<div className="w-full  sm:w-[33%] mb-8">
								<p className="text-xl   mb-4 font-bold pl-2 border-l-[5px] border-solid border-mainColor">
									Back-End Frameworks
								</p>
								<i className="devicon-express-original text-4xl mr-2 ml-3"></i>
							</div>
							<div className="w-full  sm:w-[33%] mb-8">
								<p className="text-xl   mb-4 font-bold pl-2 border-l-[5px] border-solid border-mainColor">
									Ferramentas
								</p>
								<i className="devicon-docker-plain-wordmark colored text-4xl mr-2 ml-3"></i>
								<i className="devicon-git-plain-wordmark colored colored text-4xl mr-2 ml-3"></i>
								<i className="devicon-github-original-wordmark text-4xl mr-2 ml-3"></i>
							</div>
						</div>
					</div>
					<div className="border-b-[1px]  border-solid pt-3 border-borderColor">
						<div className="text-2xl pb-2  pt-5 font-bold ">Minhas experiências:</div>
						<div className=" xl:pb-3">
							<h3 className="text-xl  sm:border-l-[5px] font-bold border-l-[5px] border-mainColor pl-3 xl:border-l-[5px]">
								Splendore - Patos, PB (atual)
							</h3>
							<p className=" pl-10 pt-3">Inicio: 06/2023</p>
							<p className=" pl-10 pt-3">Cargo: Estagiário de Desenvolvedor Web</p>
						</div>
						<div className="pt-5 pb-5">
							<h3 className="text-xl sm:border-l-[5px] border-l-[5px] font-bold border-mainColor pl-3 xl:border-l-[5px]">
								EndoDerm - Patos, PB
							</h3>
							<p className=" pl-10 pt-3">Inicio: 06/2022 - Fim: 10/2022</p>
							<p className=" pl-10 pt-3 ">Cargo: Atendente de consultório médico</p>
						</div>
					</div>
					<div>
						<div className="text-2xl pb-2  pt-5 font-bold ">Formação:</div>
						<div className=" pb-3">
							<h3 className="text-xl  sm:border-l-[5px] border-l-[5px] font-bold border-mainColor pl-3 xl:border-l-[5px]">
								Graduação em Ciências da Computação
							</h3>
							<p className=" pl-10 pt-3">Universidade Estadual da Paraíba (UEPB)</p>
							<p className=" pl-10 pt-3">Agosto/2020 - Agosto/2025 (previsto)</p>
						</div>
						<div className="pt-5">
							<h3 className="text-xl  sm:border-l-[5px] border-l-[5px] font-bold border-mainColor pl-3 xl:border-l-[5px]">
								Graduação em Engenharia Civil
							</h3>
							<p className=" pl-10 pt-3">Centro Universitário de Patos (UNIFIP)</p>
							<p className=" pl-10 pt-3 lg:pb-6">
								Fevereiro/2020 - Julho/2020 (1 semestre)
							</p>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
