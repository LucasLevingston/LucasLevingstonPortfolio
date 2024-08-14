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
import Section from '../components/Section';
import Container from '../components/Container';

export default function Home() {
	const [indiceAtual, setIndiceAtual] = useState<number>(0);

	const user = User;

	return (
		<div className=" text-mainTextColor">
			<Sidebar />
			<Container>
				<Header />
				<Section>
					<p className="text-2xl font-bold">
						Conheça as tecnologias que domino
					</p>
					<HardSkillsSection skills={user.hardSkills} />
				</Section>
				<Section>
					<p className="text-2xl font-bold">Minhas experiências</p>
					{user.experiences.map((experience, index) => (
						<div key={index} className="space-y-3">
							<div className="">
								<h3 className="border-l-[5px] border-mainColor pl-3 text-xl font-bold sm:border-l-[5px] xl:border-l-[5px]">
									{experience.enterprise}
								</h3>
								<div className="space-y-2 pl-10 pt-3">
									<p>
										Início: {experience.startsDate} - Fim: {experience.endsDate}{' '}
										({experience.location})
									</p>
									<p>
										Cargo: <span className="underline">{experience.role}</span>
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
				</Section>
				<Section>
					<p className="text-2xl font-bold">Formação</p>
					{user.formations.map((formation) => (
						<div key={formation.title}>
							<div className="pb-3">
								<h3 className="border-l-[5px]  border-mainColor pl-3 text-xl font-bold sm:border-l-[5px] xl:border-l-[5px]">
									{formation.title}
								</h3>
								<div className="space-y-2 pl-10  pt-3">
									<p>{formation.institution}</p>
									<p>
										{formation.startsDate} - {formation.endsDate}
									</p>
									<p className="text-mainColor">{formation.currentStatus}</p>
								</div>
							</div>
						</div>
					))}
				</Section>
				<Section>
					<p className="text-2xl font-bold">Certificados</p>
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
				</Section>
			</Container>
		</div>
	);
}
