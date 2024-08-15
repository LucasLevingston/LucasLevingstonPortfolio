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
import SectionItem from '../components/SectionItem';

export default function Home() {
	const [indiceAtual, setIndiceAtual] = useState<number>(0);

	const user = User;

	return (
		<div className=" text-mainTextColor">
			<Sidebar />
			<Container>
				<Header />

				<Section title="Conheça as tecnologias que domino">
					<HardSkillsSection skills={user.hardSkills} />
				</Section>

				<Section title="Experiências">
					{user.experiences.map((experience, index) => (
						<SectionItem title={experience.enterprise} key={index}>
							<div className="space-y-2">
								<p>
									Início: {experience.startsDate} - Fim: {experience.endsDate} (
									{experience.location})
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
						</SectionItem>
					))}
				</Section>

				<Section title="Formação">
					{user.formations.map((formation, index) => (
						<SectionItem title={formation.title} key={index}>
							<div className="space-y-2">
								<p>{formation.institution}</p>
								<p>
									{formation.startsDate} - {formation.endsDate}
								</p>
								<p className="text-mainColor">{formation.currentStatus}</p>
							</div>
						</SectionItem>
					))}
				</Section>

				<Section title="Certificados">
					<SectionItem title={user.certificates[indiceAtual].title}>
						<div className="space-y-2">
							<div>
								{user.certificates[indiceAtual].description.map(
									(description, index) => (
										<p key={index}>{description}</p>
									)
								)}
							</div>
							<p className="text-lg font-bold">Tecnologias Utilizadas:</p>
							<div className="flex w-full flex-wrap">
								<TecnologiaIcon
									tecnologias={user.certificates[indiceAtual].technlogies}
								/>
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
									className="h-[200px] w-full sm:h-[576px] sm:w-[1024px]"
								>
									{user.certificates.map((certificate, i) => (
										<SwiperSlide key={i}>
											<img
												src={certificate.image}
												alt={`Imagem do certificado ${indiceAtual}`}
												className="h-full w-full rounded-2xl"
											/>
										</SwiperSlide>
									))}
								</Swiper>
							)}
						</div>
					</SectionItem>
				</Section>
			</Container>
		</div>
	);
}
