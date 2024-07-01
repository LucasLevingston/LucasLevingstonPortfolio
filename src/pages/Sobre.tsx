import React, { useState } from 'react';
import Sidebar from '../components/Sidebar';
import Header from '../components/Header';
import TecnologiaIcon from '../components/TecnologiaIcon';
import { certificados } from '../Data/CertificadosData';
import { TecnologiasDominadas } from '../components/TecnologiasDominadas';
import { tecnologiasDominadasData } from '../Data/TecnologiasDominadasData';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';
import 'swiper/swiper-bundle.css';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import '../index.css';

export default function Home() {
	const [indiceAtual, setIndiceAtual] = useState<number>(0);
	return (
		<div className=" text-mainTextColor">
			<Sidebar />
			<div
				id="Sobre"
				className="ml-auto mr-0 h-full  flex-1 bg-aboutBgColor p-[50px] sm:max-w-[75%]"
			>
				<Header />
				<div className="overflow-y-auto">
					<div className="border-b-[1px] border-solid border-borderColor py-4 pl-3">
						<p className="text-2xl font-bold ">
							Conheça as tecnologias que domino:
						</p>
						<TecnologiasDominadas tecnologias={tecnologiasDominadasData} />
					</div>
					<div className="border-b-[1px] border-solid border-borderColor py-4 pl-3">
						<div className="pb-2 text-2xl font-bold ">Minhas experiências:</div>
						<div className="space-y-3">
							<div className="">
								<h3 className="border-l-[5px]  border-mainColor pl-3 text-xl font-bold sm:border-l-[5px] xl:border-l-[5px]">
									Splendore - Patos, PB
								</h3>
								<div className="space-y-2 pl-10  pt-3">
									<p className="">Início: 06/2023 - Fim: 01/2024</p>
									<p className="">
										Cargo:{' '}
										<span className="underline">
											Estagiário de Desenvolvedor Web
										</span>
									</p>
									<p className="">
										Liderei o desenvolvimento de um sistema de CRM, usado no
										gerenciamento das vendas dos cursos da Unopar na região,
										atendendo centenas de alunos. Trabalhei com desenvolvimento
										web,{' '}
										<span className="text-mainColor">
											desenvolvendo tanto o Back e o Front de aplicações
											utilizando React, Typescript, Tailwind, Mongo, Prisma,
											Express e Docker.{' '}
										</span>
										Encarregado da coleta de requisitos, design de projeto e
										escolha da Stack de tecnologias utilizada. Atuei na
										implementação de diversas rotas e lógica de negócio de uma{' '}
										<span className="text-mainColor">API REST </span> , além de
										desenvolver as{' '}
										<span className="text-mainColor">
											interfaces e features presentes no front-end
										</span>
										. Realizei a reformulação e modularização do back-end,
										padronizando a organização de pastas e arquivos do projeto,
										aprimorando a Developer Experience.
									</p>
								</div>
							</div>
							<div className="">
								<h3 className="border-l-[5px]  border-mainColor pl-3 text-xl font-bold sm:border-l-[5px] xl:border-l-[5px]">
									Sercomp VI UEPB - Patos, PB
								</h3>
								<div className="space-y-2 pl-10  pt-3">
									<p>Início: 04/2023 - Fim: 06/2024</p>
									<p className="">
										Cargo:{' '}
										<span className="underline">Desenvolvedor Full-Stack</span>
									</p>
									<p className="">
										Participei do desenvolvimento do site do do VI Sercomp da
										UEPB. Estou atuando com diversas pessoas do curso, estando
										em um ambiente real de trabalho. Estou atuando no
										desenvolvimento com{' '}
										<span className="text-mainColor">
											React, JavaScript, CSS, Node e Vite
										</span>
										, e utilizando o{' '}
										<span className="text-mainColor">Git Flow</span> como fluxo
										de trabalho.
									</p>
								</div>
							</div>
							<div className="">
								<h3 className="border-l-[5px] border-mainColor pl-3 text-xl font-bold sm:border-l-[5px] xl:border-l-[5px]">
									EndoDerm - Patos, PB
								</h3>
								<div className="space-y-2 pl-10  pt-3">
									<p className="">Início: 06/2022 - Fim: 10/2022</p>
									<p className=" ">Cargo: Atendente de consultório médico</p>
									<p className="">
										Realizava agendamento de consultas, organização de planilhas
										e atendimento ao público.
									</p>
								</div>
							</div>
						</div>
					</div>
					<div className="border-b-[1px] border-solid border-borderColor py-4 pl-3">
						<div className="pb-2   text-2xl font-bold ">Formação:</div>
						<div className="pb-3">
							<h3 className="border-l-[5px]  border-mainColor pl-3 text-xl font-bold sm:border-l-[5px] xl:border-l-[5px]">
								Graduação em Ciências da Computação
							</h3>
							<div className="space-y-2 pl-10  pt-3">
								<p className="">Universidade Estadual da Paraíba (UEPB)</p>
								<p className="">Agosto/2020 - Agosto/2025 (previsto)</p>
								<p className="">
									Atualmente no{' '}
									<span className="text-mainColor">8º/10 semestre.</span>
								</p>
							</div>
						</div>
						<div className="pt-5">
							<h3 className="border-l-[5px]  border-mainColor pl-3 text-xl font-bold sm:border-l-[5px] xl:border-l-[5px]">
								Graduação em Engenharia Civil
							</h3>
							<div className="space-y-2 pl-10  pt-3">
								<p className="">Centro Universitário de Patos (UNIFIP)</p>
								<p className="">Fevereiro/2020 - Julho/2020 (1 semestre)</p>
							</div>
						</div>
					</div>
					<div className="py-4 pl-3">
						<div className=" text-2xl font-bold ">Certificados</div>
						<div className="pt-2">
							<div className="m-auto">
								<div className="flex max-w-full">
									<h2 className="border-l-[5px] border-mainColor pl-3 text-xl font-bold sm:border-l-[5px] xl:border-l-[5px]">
										{certificados[indiceAtual].nome}
									</h2>
								</div>
								<div className="space-y-2 pl-10  pt-3">
									<div className="">
										{certificados[indiceAtual].sobre.map((sobre, index) => (
											<div key={index}>
												<p className="">{sobre}</p>
											</div>
										))}
									</div>
									<p className="text-lg font-bold">Tecnologias Utilizadas:</p>
									<div className="flex w-full flex-wrap pt-3">
										<TecnologiaIcon
											tecnologias={certificados[indiceAtual].tecnologias}
										/>
									</div>
								</div>
							</div>
							{certificados[indiceAtual].imagem && (
								<Swiper
									modules={[Pagination]}
									pagination={{
										clickable: true,
									}}
									slidesPerView={1}
									spaceBetween={50}
									onSlideChange={(i) => setIndiceAtual(i.activeIndex)}
									className="
									 m-auto flex h-[300px] w-[380px] items-center px-0 py-10 sm:h-[520px] sm:w-[780px] sm:p-8 "
								>
									{certificados.map((certificado, i) => (
										<SwiperSlide key={i}>
											<img
												src={certificado.imagem}
												alt={`Imagem do certificado ${indiceAtual}`}
												className="h-full w-full rounded-2xl bg-cover bg-center duration-500"
											/>
										</SwiperSlide>
									))}
								</Swiper>
							)}
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
