'use client';

import { useEffect, useState } from 'react';
import Sidebar from '../components/Sidebar';
import Header from '../components/Header';
import { HardSkillsSection } from '../components/HardSkillsSection';
import Section from '../components/Section';
import Container from '../components/Container';
import SectionItem from '../components/SectionItem';
import { useTranslation } from 'react-i18next';
import {
	Carousel,
	type CarouselApi,
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
			console.log(element);
			element?.scrollIntoView({ behavior: 'smooth' });
		}
	}, [location]);

	return (
		<div className="text-mainTextColor">
			<Sidebar />
			<Container>
				<Header />
				<div>
					<Section.Root>
						<Section.Title>{t('about.professionalProfile')}</Section.Title>
						<Section.Content>
							<div>
								<p
									dangerouslySetInnerHTML={{
										__html: user.description,
									}}
								/>
							</div>
						</Section.Content>
					</Section.Root>

					<Section.Root id={t('about.personalInfo')}>
						<Section.Title>{t('about.personalInfo')}</Section.Title>
						<Section.Content className="grid gap-2 md:grid-cols-2">
							<SectionItem.Root className="space-y-2">
								<SectionItem.Header>{t('about.address')}</SectionItem.Header>
								<p>{user.address}</p>

								<SectionItem.Header>{t('about.phone')}</SectionItem.Header>
								<p>{user.phone}</p>
							</SectionItem.Root>
							<div className="space-y-2">
								<SectionItem.Header>{t('about.email')}</SectionItem.Header>
								<p>{user.email}</p>

								<SectionItem.Header>{t('about.location')}</SectionItem.Header>
								<p>{user.location}</p>
							</div>
						</Section.Content>
					</Section.Root>

					<Section.Root id={t('about.technologiesTitle')}>
						<Section.Title>{t('about.technologiesTitle')}</Section.Title>
						<Section.Content>
							<HardSkillsSection skills={user.hardSkills} />
						</Section.Content>
					</Section.Root>

					<Section.Root id={t('about.experiencesTitle')}>
						<Section.Title>{t('about.experiencesTitle')}</Section.Title>
						<Section.Content>
							{user.experiences.map((experience, index) => (
								<SectionItem.Root key={index}>
									<SectionItem.Header>
										<SectionItem.Title>{experience.role}</SectionItem.Title>
									</SectionItem.Header>
									<SectionItem.Content>
										<div className="space-y-2">
											<p>
												{t('about.start')}: {experience.startsDate} -{' '}
												{t('about.end')}: {experience.endsDate} (
												{experience.location})
											</p>
											<p>
												{t('about.enterprise')}:{' '}
												<span className="underline">
													{experience.enterprise}
												</span>
											</p>
											<p
												dangerouslySetInnerHTML={{
													__html: experience.description,
												}}
											/>
										</div>
									</SectionItem.Content>
								</SectionItem.Root>
							))}
						</Section.Content>
					</Section.Root>

					<Section.Root id={t('about.educationTitle')}>
						<Section.Title>{t('about.educationTitle')}</Section.Title>
						<Section.Content>
							{user.formations.map((formation, index) => (
								<SectionItem.Root key={index}>
									<SectionItem.Header>
										<SectionItem.Title>{formation.title}</SectionItem.Title>
									</SectionItem.Header>
									<SectionItem.Content>
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
									</SectionItem.Content>
								</SectionItem.Root>
							))}
						</Section.Content>
					</Section.Root>

					<Section.Root id={t('about.certificatesTitle')}>
						<Section.Title>{t('about.certificatesTitle')}</Section.Title>
						<Section.Content>
							<SectionItem.Root>
								<SectionItem.Header>
									<SectionItem.Title>
										{user.certificates[currentCertificate].title}
									</SectionItem.Title>
								</SectionItem.Header>
								<SectionItem.Content>
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
																src={certificate.image || '/placeholder.svg'}
																className="h-full w-full rounded-2xl"
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
								</SectionItem.Content>
							</SectionItem.Root>
						</Section.Content>
					</Section.Root>

					<Section.Root id={t('about.recommendationsTitle')}>
						<Section.Title>{t('about.recommendationsTitle')}</Section.Title>
						<Section.Content>
							{user.recomendations.map((recomendation) => (
								<SectionItem.Root key={recomendation.name}>
									<SectionItem.Header>
										<SectionItem.Avatar
											imageUrl={recomendation.linkedinImageUrl}
										/>
										<SectionItem.Title subtitle={recomendation.position}>
											{recomendation.name}
										</SectionItem.Title>
										<SectionItem.LinkedIn recommendation={recomendation} />
									</SectionItem.Header>
									<SectionItem.Content>
										<div className="flex flex-col gap-3">
											<p className="text-lg">{recomendation.company}</p>
											<div>
												<p className="text-slate-500">{recomendation.date}</p>
												<p>"{recomendation.comments}"</p>
											</div>
										</div>
									</SectionItem.Content>
								</SectionItem.Root>
							))}
						</Section.Content>
					</Section.Root>

					<Section.Root id={'Soft Skills'}>
						<Section.Title>{'Soft Skills'}</Section.Title>
						<Section.Content className="grid gap-2 md:grid-cols-2">
							{user.softSkills.map((skill, index) => (
								<SectionItem.Root key={index}>
									<SectionItem.Header>
										<SectionItem.Title>{skill}</SectionItem.Title>
									</SectionItem.Header>
									<SectionItem.Content>{null}</SectionItem.Content>
								</SectionItem.Root>
							))}
						</Section.Content>
					</Section.Root>
				</div>
			</Container>
		</div>
	);
}
