import React, { useEffect, useState } from 'react';
import Sidebar from '../components/Sidebar';
import Header from '../components/Header';
import TecnologiaIcon from '../components/TechnologyIcon';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';
import 'swiper/swiper-bundle.css';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import '../index.css';
import { HardSkillsSection } from '../components/HardSkillsSection';
import Section from '../components/Section';
import Container from '../components/Container';
import SectionItem from '../components/SectionItem';
import { useTranslation } from 'react-i18next';
import { userBr, userEn } from '../data/userData';
import i18n from '@/i18n';

export default function About() {
	const [currentCertificate, setCurrentCertificate] = useState<number>(0);

	const [user, setUser] = useState(i18n.language === 'en' ? userEn : userBr);
	const { t } = useTranslation();
	useEffect(() => {
		setUser(i18n.language === 'en' ? userEn : userBr);
		i18n.changeLanguage(i18n.language);
	}, [i18n.language]);

	return (
		<div className="text-mainTextColor">
			<Sidebar />
			<Container>
				<Header />

				<Section title={t('about.technologiesTitle')}>
					<HardSkillsSection skills={user.hardSkills} />
				</Section>

				<Section title={t('about.experiencesTitle')}>
					{user.experiences.map((experience, index) => (
						<SectionItem title={experience.enterprise} key={index}>
							<div className="space-y-2">
								<p>
									{t('about.start')}: {experience.startsDate} - {t('about.end')}
									: {experience.endsDate} ({experience.location})
								</p>
								<p>
									{t('about.position')}:{' '}
									<span className="underline">{experience.role}</span>
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

				<Section title={t('about.educationTitle')}>
					{user.formations.map((formation, index) => (
						<SectionItem title={formation.title} key={index}>
							<div className="space-y-2">
								<p>{formation.institution}</p>
								<p>
									{formation.startsDate} - {formation.endsDate}
								</p>
								<p className="text-mainColor">
									{t('about.currentStatus')}: {formation.currentStatus}
								</p>
							</div>
						</SectionItem>
					))}
				</Section>

				<Section title={t('about.certificatesTitle')}>
					<SectionItem title={user.certificates[currentCertificate].title}>
						<div className="space-y-2">
							<div>
								{user.certificates[currentCertificate].description.map(
									(description, index) => (
										<p key={index}>{description}</p>
									)
								)}
							</div>
							<p className="text-lg font-bold">
								{t('about.usedTechnologies')}:
							</p>
							<div className="flex w-full flex-wrap">
								<TecnologiaIcon
									technologies={
										user.certificates[currentCertificate].technologies
									}
								/>
							</div>
							{user.certificates[currentCertificate].image && (
								<Swiper
									modules={[Pagination]}
									pagination={{
										clickable: true,
									}}
									slidesPerView={1}
									spaceBetween={50}
									onSlideChange={(i) => setCurrentCertificate(i.activeIndex)}
									className="h-[200px] w-full sm:h-[576px] sm:w-[1024px]"
								>
									{user.certificates.map((certificate, i) => (
										<SwiperSlide key={i}>
											<img
												src={certificate.image}
												alt={`Imagem do certificado ${currentCertificate}`}
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
