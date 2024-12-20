import React, { useEffect, useState } from 'react';
import Sidebar from '../components/Sidebar';
import Header from '../components/Header';
import { HardSkillsSection } from '../components/HardSkillsSection';
import Section from '../components/Section';
import Container from '../components/Container';
import SectionItem from '../components/SectionItem';
import { useTranslation } from 'react-i18next';
import {
	Carousel,
	CarouselApi,
	CarouselContent,
	CarouselItem,
} from '@/components/ui/carousel';
import TechnologiesSection from '@/components/TechnologiesSection';
import { useLocation } from 'react-router-dom';
import CarouselPagination from '@/components/CarouselPagination';
import useUserStore from '@/hooks/user-hooks';

export default function About() {
	const { t, i18n } = useTranslation();
	const { user } = useUserStore();
	const location = useLocation();
	const [currentCertificate, setCurrentCertificate] = useState<number>(0);
	const [api, setApi] = useState<CarouselApi>();

	useEffect(() => {
		i18n.changeLanguage(i18n.language);

		if (!api) {
			return;
		}
		setCurrentCertificate(api.selectedScrollSnap());

		api.on('select', () => {
			setCurrentCertificate(api.selectedScrollSnap());
		});
	}, [i18n.language, api]);

	useEffect(() => {
		const search = location.search;
		if (!search) {
			window.scrollTo(0, 0);
		}
		if (search) {
			const element = document.getElementById(search.substring(1));
			element?.scrollIntoView({ behavior: 'smooth' });
		}
	}, [location]);

	return (
		<div className="text-mainTextColor">
			<Sidebar />
			<Container>
				<Header />
				<div>
					<Section title={t('about.professionalProfile')}>
						<div>
							<p
								dangerouslySetInnerHTML={{
									__html: user.description,
								}}
							/>
						</div>
					</Section>
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
							<SectionItem title={experience.role} key={index}>
								<div className="space-y-2">
									<p>
										{t('about.start')}: {experience.startsDate} -{' '}
										{t('about.end')}: {experience.endsDate} (
										{experience.location})
									</p>
									<p>
										{t('about.enterprise')}:{' '}
										<span className="underline">{experience.enterprise}</span>
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
										<span className="text-mainTextColor">
											{t('about.currentStatus')}:{' '}
										</span>
										{formation.currentStatus}
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
												<CarouselItem
													key={index}
													className="h-full w-full rounded-2xl"
												>
													<img
														src={certificate.image}
														className="h-full w-full rounded-2xl"
														// style={{ border: 'none' }}
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
					<Section title={'Soft Skills'} id={'Soft Skills'}>
						{user.softSkills.map((skill) => (
							<SectionItem title={skill}>{null}</SectionItem>
						))}
					</Section>
				</div>
			</Container>
		</div>
	);
}
