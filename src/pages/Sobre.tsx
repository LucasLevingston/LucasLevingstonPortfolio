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
					<div className="border-b-[1px] border-solid border-borderColor pl-3 py-4">
						<p className="text-2xl font-bold ">
							Conheça as tecnologias que domino:
						</p>
						<TecnologiasDominadas tecnologias={tecnologiasDominadasData} />
					</div>
					<div className="border-b-[1px] border-solid border-borderColor pl-3 py-4">
						<div className="pb-2 text-2xl font-bold ">
							Minhas experiências:
						</div>
						<div className="xl:pb-3">
							<h3 className="border-l-[5px]  border-mainColor pl-3 text-xl font-bold sm:border-l-[5px] xl:border-l-[5px]">
								Splendore - Patos, PB
							</h3>
							<p className=" pl-10 pt-3">Início: 06/2023 - Fim: 01/2024</p>
							<p className=" pl-10 pt-3">
								Cargo:{' '}
								<span className="underline">
									Estagiário de Desenvolvedor Web
								</span>
							</p>
							<p className=" pl-10 pt-3">
								Liderei o desenvolvimento de um sistema de CRM, usado no gerenciamento das vendas dos cursos da Unopar na região, atendendo centenas de alunos.
								Trabalhei com desenvolvimento web, <span className='text-mainColor'>desenvolvendo tanto o Back e o Front de aplicações utilizando React, Typescript, Tailwind, Mongo, Prisma, Express e Docker. </span>
								Encarregado da coleta de requisitos, design de projeto e escolha da Stack de tecnologias utilizada.
								Atuei na implementação de diversas rotas e lógica de negócio de uma <span className='text-mainColor'>API REST </span> , além de desenvolver as<span className='text-mainColor'> interfaces e features presentes no front-end</span> .
								Realizei a reformulação e modularização do back-end, padronizando a organização de pastas e arquivos do projeto, aprimorando a Developer Experience.
							</p>
						</div>
						<div className="pb-5 pt-5">
							<h3 className="border-l-[5px] border-mainColor pl-3 text-xl font-bold sm:border-l-[5px] xl:border-l-[5px]">
								EndoDerm - Patos, PB
							</h3>
							<p className=" pl-10 pt-3">Início: 06/2022 - Fim: 10/2022</p>
							<p className=" pl-10 pt-3 ">
								Cargo: Atendente de consultório médico
							</p>
							<p className=" pl-10 pt-3">
								Realizava agendamento de consultas, organização de planilhas e
								atendimento ao público.
							</p>
						</div>
					</div>
					<div className="border-b-[1px] border-solid border-borderColor pl-3 py-4">
						<div className="pb-2   text-2xl font-bold ">Formação:</div>
						<div className="pb-3">
							<h3 className="border-l-[5px]  border-mainColor pl-3 text-xl font-bold sm:border-l-[5px] xl:border-l-[5px]">
								Graduação em Ciências da Computação
							</h3>
							<p className=" pl-10 pt-3">
								Universidade Estadual da Paraíba (UEPB)
							</p>
							<p className=" pl-10 pt-3">
								Agosto/2020 - Agosto/2025 (previsto)
							</p>
							<p className=" pl-10 pt-3">
								Atualmente no{' '}
								<span className="text-mainColor">8º/10 semestre.</span>
							</p>
						</div>
						<div className="pt-5">
							<h3 className="border-l-[5px]  border-mainColor pl-3 text-xl font-bold sm:border-l-[5px] xl:border-l-[5px]">
								Graduação em Engenharia Civil
							</h3>
							<p className=" pl-10 pt-3">
								Centro Universitário de Patos (UNIFIP)
							</p>
							<p className=" pl-10 pt-3">
								Fevereiro/2020 - Julho/2020 (1 semestre)
							</p>
						</div>
					</div>
					<div className="pl-3 py-4">
						<div className=" text-2xl font-bold ">Certificados</div>
						<div className="pt-2">
							<div className="m-auto">
								<div className="flex max-w-full">
									<h2 className="border-l-[5px] border-mainColor pl-3 text-xl font-bold sm:border-l-[5px] xl:border-l-[5px]">
										{certificados.certificados[indiceAtual].nome}
									</h2>
								</div>
								<div className='pl-10'>

									<div className="">
										{certificados.certificados[indiceAtual].sobre.map((sobre, index) => (
											<div key={index}>
												<p className="pt-3">{sobre}</p>
											</div>
										))}
									</div>
									<p className="pt-3 text-[120%] font-bold">Tecnologias Utilizadas:</p>
									<div className="flex w-full flex-wrap pt-3">
										<TecnologiaIcon tecnologias={certificados.certificados[indiceAtual].tecnologias} />
									</div>
								</div>
							</div>
							{certificados.certificados[indiceAtual].imagem && (
								<Swiper
									modules={[Pagination]}
									pagination={{
										clickable: true,
									}}
									slidesPerView={1}
									spaceBetween={50}
									onSlideChange={(i) => setIndiceAtual(i.activeIndex)}
									className='
									 m-auto flex items-center px-0 py-10 sm:p-8 sm:w-[780px] sm:h-[520px] h-[300px] w-[380px] '
								>
									{certificados.certificados.map((certificado, i) => (
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
		</div >
	);
}
