import React, { useState } from 'react';
import Sidebar from '../components/Sidebar';
import Header from '../components/Header';
import TecnologiaIcon from '../components/TecnologiaIcon';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';
import 'swiper/swiper-bundle.css';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import '../index.css';
import { User } from '../Data/userData';
import { HardSkillsSection } from '../components/HardSkillsSection';

export default function Home() {
	const [indiceAtual, setIndiceAtual] = useState<number>(0);

	const user = User;

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
						<HardSkillsSection skills={user.hardSkills} />
					</div>
					<div className="space-y-2 border-b-[1px] border-solid border-borderColor py-4 pl-3">
						<div className="text-2xl font-bold">Minhas experiências:</div>
						{user.experiences.map((experience, index) => (
							<div key={index} className="space-y-3">
								<div className="">
									<h3 className="border-l-[5px] border-mainColor pl-3 text-xl font-bold sm:border-l-[5px] xl:border-l-[5px]">
										{experience.enterprise}
									</h3>
									<div className="space-y-2 pl-10 pt-3">
										<p>
											Início: {experience.startsDate} - Fim:{' '}
											{experience.endsDate} ({experience.location})
										</p>
										<p>
											Cargo:{' '}
											<span className="underline">{experience.role}</span>
										</p>
										<p
											dangerouslySetInnerHTML={{
												__html: experience.description,
											}}
										/>
									</div>
								</div>
							</div>
						))}
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
										{user.certificates[indiceAtual].title}
									</h2>
								</div>
								<div className="space-y-2 pl-10  pt-3">
									<div className="">
										{user.certificates[indiceAtual].description.map(
											(description, index) => (
												<div key={index}>
													<p className="">{description}</p>
												</div>
											)
										)}
									</div>
									<p className="text-lg font-bold">Tecnologias Utilizadas:</p>
									<div className="flex w-full flex-wrap pt-3">
										<TecnologiaIcon
											tecnologias={user.certificates[indiceAtual].technlogies}
										/>
									</div>
								</div>
							</div>
							{user.certificates[indiceAtual].image && (
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
									{user.certificates.map((certificate, i) => (
										<SwiperSlide key={i}>
											<img
												src={certificate.image}
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
