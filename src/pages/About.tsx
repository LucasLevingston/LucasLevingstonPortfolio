import React, { useEffect, useState } from 'react';
import Sidebar from '../components/Sidebar';
import Header from '../components/Header';
import { HardSkillsSection } from '../components/HardSkillsSection';
import Section from '../components/Section';
import Container from '../components/Container';
import SectionItem from '../components/SectionItem';
import { useTranslation } from 'react-i18next';
import { userBr, userEn } from '../data/userData';
import i18n from '@/i18n';
import {
	Carousel,
	CarouselApi,
	CarouselContent,
	CarouselItem,
} from '@/components/ui/carousel';
import TechnologiesSection from '@/components/ThecnologiesSection';
import { useLocation } from 'react-router-dom';
import CarouselPagination from '@/components/CarouselPagination';

export default function About() {
	const [currentCertificate, setCurrentCertificate] = useState<number>(0);
	const [api, setApi] = useState<CarouselApi>();
	const [user, setUser] = useState(i18n.language === 'en' ? userEn : userBr);
	const { t } = useTranslation();
	const location = useLocation();

	useEffect(() => {
		setUser(i18n.language === 'en' ? userEn : userBr);
		i18n.changeLanguage(i18n.language);

		if (!api) {
			return;
		}
		setCurrentCertificate(api.selectedScrollSnap());

		api.on('select', () => {
			setCurrentCertificate(api.selectedScrollSnap());
		});
		const hash = location.hash;
		if (hash) {
			const element = document.getElementById(hash.substring(1));
			element?.scrollIntoView({ behavior: 'smooth' });
		}
	}, [i18n.language, api, currentCertificate]);

	return (
		<div className="text-mainTextColor">
			<Sidebar />
			<Container>
				<Header />
				<div>
					<Section
						id={t('about.technologiesTitle')}
						title={t('about.technologiesTitle')}
					>
						<HardSkillsSection skills={user.hardSkills} />
					</Section>

					<Section
						title={t('about.experiencesTitle')}
						id={t('about.experiencesTitle')}
					>
						{user.experiences.map((experience, index) => (
							<SectionItem title={experience.enterprise} key={index}>
								<div className="space-y-2">
									<p>
										{t('about.start')}: {experience.startsDate} -{' '}
										{t('about.end')}: {experience.endsDate} (
										{experience.location})
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

					<Section
						title={t('about.educationTitle')}
						id={t('about.educationTitle')}
					>
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

					<Section
						title={t('about.certificatesTitle')}
						id={t('about.certificatesTitle')}
					>
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
									<TechnologiesSection
										technologies={
											user.certificates[currentCertificate].technologies
										}
									/>
								</div>
								{user.certificates[currentCertificate].image && (
									<Carousel setApi={setApi}>
										<CarouselContent className="h-[200px] w-full sm:h-[576px] sm:w-[1024px]">
											{user.certificates.map((certificate, index) => (
												<CarouselItem key={index}>
													<img
														src={certificate.image}
														alt={`Imagem do certificado ${index}`}
														className="h-full w-full rounded-2xl "
													/>
												</CarouselItem>
											))}
										</CarouselContent>
									</Carousel>
								)}
								<div className="py-2 text-center text-sm text-muted-foreground">
									<CarouselPagination
										currentImage={currentCertificate}
										setCurrentImage={setCurrentCertificate}
										api={api}
										images={user.certificates}
									/>
								</div>
							</div>
						</SectionItem>
					</Section>

					<Section
						title={t('about.recommendationsTitle')}
						id={t('about.recommendationsTitle')}
					>
						{user.recomendations.map((recomendation) => (
							<SectionItem
								title={recomendation.name}
								recommendation={recomendation}
								key={recomendation.name}
							>
								<div className="flex flex-col gap-3">
									<p className="text-lg">{recomendation.company}</p>
									<div>
										<p className="text-slate-500">{recomendation.date}</p>
										<p>"{recomendation.comments}"</p>
									</div>
								</div>
							</SectionItem>
						))}
					</Section>
				</div>
			</Container>
		</div>
	);
}
