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
import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import {
	GraduationCap,
	Calendar,
	Building2,
	Clock,
	MapPin,
	Phone,
	Mail,
	User,
	Briefcase,
	Award,
	CheckCircle,
	PlayCircle,
	PauseCircle,
	Trophy,
	Lightbulb,
	Heart,
	MessageSquare,
	ExternalLink,
	BookOpen,
	Code,
	Zap,
} from 'lucide-react';
import { ImageViewer } from '@/components/image-viewer';

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

	const getEducationStatusBadge = (formation: any) => {
		if (formation.graduated) {
			return (
				<Badge className="border-green-300 bg-green-100 text-base text-green-800 hover:bg-green-100 dark:bg-green-900 dark:text-green-300">
					<Trophy className="mr-1 h-3 w-3" />
					{t('about.graduated')}
				</Badge>
			);
		}

		if (
			formation.currentStatus?.toLowerCase().includes('trancado') ||
			formation.currentStatus?.toLowerCase().includes('deferred')
		) {
			return (
				<Badge
					variant="outline"
					className="border-red-300 bg-red-50 text-base text-red-700 dark:bg-red-950 dark:text-red-300"
				>
					<PauseCircle className="mr-1 h-3 w-3" />
					{t('about.deferred')}
				</Badge>
			);
		}

		return (
			<Badge className="border-red-300 bg-red-100 text-base text-red-800 hover:bg-red-100 dark:bg-red-900 dark:text-red-300">
				<PlayCircle className="mr-1 h-3 w-3" />
				{t('about.inProgress')}
			</Badge>
		);
	};

	return (
		<div className="text-foreground">
			<Sidebar />
			<Container>
				<Header />
				<div className="space-y-8">
					<Section.Root>
						<Section.Title className="flex items-center gap-3 text-xl font-semibold text-foreground">
							<User className="h-5 w-5 text-mainColor" />
							{t('about.professionalProfile')}
						</Section.Title>
						<Section.Content>
							<Card className="">
								<CardContent className="pt-6">
									<p
										className="text-base leading-relaxed text-foreground"
										dangerouslySetInnerHTML={{
											__html: user.description,
										}}
									/>
								</CardContent>
							</Card>
						</Section.Content>
					</Section.Root>

					<Section.Root id={t('about.personalInfo')}>
						<Section.Title className="flex items-center gap-3 text-xl font-semibold text-foreground">
							<User className="h-5 w-5 text-mainColor" />
							{t('about.personalInfo')}
						</Section.Title>
						<Section.Content className="grid gap-6 md:grid-cols-2">
							<Card className="">
								<CardContent className="space-y-4 pt-6">
									<div className="flex items-center gap-3">
										<MapPin className="h-4 w-4 text-mainColor" />
										<div>
											<p className="mb-1 text-base font-medium tracking-wide text-mainColor dark:text-mainColor">
												{t('about.location')}
											</p>
											<p className="text-base text-foreground">
												{user.location}
											</p>
										</div>
									</div>

									<div className="flex items-center gap-3">
										<MapPin className="h-4 w-4 text-mainColor" />

										<div>
											<p className="mb-1 text-base font-medium tracking-wide text-mainColor dark:text-mainColor">
												{t('about.address')}
											</p>
											<p className="text-base text-foreground">
												{user.address}
											</p>
										</div>
									</div>
								</CardContent>
							</Card>

							<Card className="">
								<CardContent className="space-y-4 pt-6">
									<div className="flex items-center gap-3">
										<Mail className="h-4 w-4 text-mainColor" />
										<div>
											<p className="mb-1 text-base font-medium tracking-wide text-mainColor dark:text-mainColor">
												{t('about.email')}
											</p>
											<p className="text-base text-foreground">{user.email}</p>
										</div>
									</div>

									<div className="flex items-center gap-3">
										<Phone className="h-4 w-4 text-mainColor" />

										<div>
											<p className="mb-1 text-base font-medium tracking-wide text-mainColor dark:text-mainColor">
												{t('about.phone')}
											</p>
											<p className="text-base text-foreground">{user.phone}</p>
										</div>
									</div>
								</CardContent>
							</Card>
						</Section.Content>
					</Section.Root>

					<Section.Root id={t('about.technologiesTitle')}>
						<Section.Title className="flex items-center gap-3 text-xl font-semibold text-foreground">
							<Code className="h-5 w-5 text-mainColor" />
							{t('about.technologiesTitle')}
						</Section.Title>
						<Section.Content>
							<Card className="">
								<CardContent className="pt-6">
									<HardSkillsSection skills={user.hardSkills} />
								</CardContent>
							</Card>
						</Section.Content>
					</Section.Root>

					<Section.Root id={t('about.experiencesTitle')}>
						<Section.Title className="flex items-center gap-3 text-xl font-semibold text-foreground">
							<Briefcase className="h-5 w-5 text-mainColor" />
							{t('about.experiencesTitle')}
						</Section.Title>
						<Section.Content className="space-y-4">
							{user.experiences.map((experience, index) => (
								<Card key={index} className="transition-shadow hover:shadow-md">
									<CardHeader>
										<div className="flex items-center gap-3">
											<div className="rounded-lg p-2">
												<Briefcase className="h-4 w-4 text-mainColor" />
											</div>
											<h3 className="text-lg font-semibold text-foreground">
												{experience.role}
											</h3>
										</div>
									</CardHeader>
									<CardContent>
										<div className="space-y-3">
											<div className="flex items-center gap-4 text-base text-mainColor dark:text-mainColor">
												<div className="flex items-center gap-1">
													<Calendar className="h-3 w-3" />
													<span>
														{t('about.start')}: {experience.startsDate} -{' '}
														{t('about.end')}: {experience.endsDate}
													</span>
												</div>
												<div className="flex items-center gap-1">
													<MapPin className="h-3 w-3" />
													<span>{experience.location}</span>
												</div>
											</div>

											<div className="flex items-center gap-2">
												<Building2 className="h-4 w-4 text-mainColor" />
												<span className="text-base text-foreground">
													{t('about.enterprise')}:{' '}
													<span className="font-medium text-mainColor dark:text-mainColor">
														{experience.enterprise}
													</span>
												</span>
											</div>

											<div className="rounded-lg border-l-4 border-mainColor p-4">
												<p
													className="text-base leading-relaxed text-foreground"
													dangerouslySetInnerHTML={{
														__html: experience.description,
													}}
												/>
											</div>
										</div>
									</CardContent>
								</Card>
							))}
						</Section.Content>
					</Section.Root>

					<Section.Root id={t('about.educationTitle')}>
						<Section.Title className="flex items-center gap-3 text-xl font-semibold text-foreground">
							<GraduationCap className="h-5 w-5 text-mainColor" />
							{t('about.educationTitle')}
						</Section.Title>
						<Section.Content className="space-y-4">
							{user.formations.map((formation, index) => (
								<Card
									key={index}
									className="transition-all duration-300 hover:shadow-md"
								>
									<CardHeader>
										<div className="flex w-full items-start justify-between gap-4">
											<div className="flex flex-1 items-center gap-3">
												<div className="rounded-lg p-2">
													<BookOpen className="h-4 w-4 text-mainColor" />
												</div>
												<h3 className="flex-1 text-lg font-semibold text-foreground">
													{formation.title}
												</h3>
											</div>
											{getEducationStatusBadge(formation)}
										</div>
									</CardHeader>
									<CardContent>
										<div className="space-y-4">
											<div className="flex items-center gap-3 rounded-lg p-3">
												<Building2 className="h-4 w-4 text-mainColor" />
												<span className="text-base font-medium text-foreground">
													{formation.institution}
												</span>
											</div>

											<div className="grid grid-cols-1 gap-4 md:grid-cols-2">
												<div className="/20 flex items-center gap-3 rounded-lg p-3">
													<Calendar className="h-4 w-4 text-mainColor" />
													<div>
														<span className="block text-base font-medium tracking-wide">
															{t('about.period')}
														</span>
														<span className="text-base text-foreground">
															{formation.startsDate} - {formation.endsDate}
														</span>
													</div>
												</div>

												{formation.duration && (
													<div className="/20 flex items-center gap-3 rounded-lg p-3">
														<Clock className="h-4 w-4 text-mainColor" />
														<div>
															<span className="block text-base font-medium tracking-wide">
																{t('about.duration')}
															</span>
															<span className="text-base text-foreground">
																{formation.duration}
															</span>
														</div>
													</div>
												)}
											</div>

											{!formation.graduated && formation.currentStatus && (
												<div className="rounded-lg border-l-4 border-mainColor p-4">
													<div className="flex items-center gap-2">
														<Zap className="h-4 w-4 text-mainColor" />
														<span className="text-base font-medium tracking-wide text-mainColor">
															{t('about.currentStatus')}:
														</span>
													</div>
													<span className="mt-1 block text-base">
														{formation.currentStatus}
													</span>
												</div>
											)}

											{formation.graduated && (
												<div className="rounded-lg border-l-4 border-green-500 p-4">
													<div className="flex items-center gap-2">
														<Zap className="h-4 w-4 text-mainColor" />

														<span className="text-base font-medium tracking-wide text-mainColor">
															{t('about.currentStatus')}:
														</span>
													</div>
													<div className="flex items-center gap-2">
														<CheckCircle className="h-4 w-4" />
														<span className="text-base font-medium">
															{t('about.completedSuccessfully')}
														</span>
													</div>
												</div>
											)}
										</div>
									</CardContent>
								</Card>
							))}
						</Section.Content>
					</Section.Root>

					<Section.Root id={t('about.certificatesTitle')}>
						<Section.Title className="flex items-center gap-3 text-xl font-semibold text-foreground">
							<Award className="h-5 w-5 text-mainColor" />
							{t('about.certificatesTitle')}
						</Section.Title>
						<Section.Content>
							<Card className="">
								<CardHeader>
									<div className="flex items-center gap-3">
										<div className="rounded-lg p-2">
											<Trophy className="h-4 w-4 text-mainColor" />
										</div>
										<h3 className="text-lg font-semibold text-foreground">
											{user.certificates[currentCertificate].title}
										</h3>
									</div>
								</CardHeader>
								<CardContent>
									<div className="space-y-4">
										<div className="rounded-lg p-4">
											{user.certificates[currentCertificate].description.map(
												(description, index) => (
													<p
														key={index}
														className="text-base leading-relaxed text-foreground"
													>
														{description}
													</p>
												)
											)}
										</div>
										<div className="flex items-center gap-2">
											<Code className="h-4 w-4 text-mainColor" />
											<p className="text-base font-semibold text-foreground">
												{t('about.usedTechnologies')}:
											</p>
										</div>
										<div className="flex w-full flex-wrap">
											<TechnologiesSection
												technologies={
													user.certificates[currentCertificate].technologies
												}
											/>
										</div>
										{user.certificates[currentCertificate].image && (
											<Carousel setApi={setApi}>
												<CarouselContent className="w-400 h-[200px]">
													{user.certificates.map((certificate, index) => (
														<CarouselItem key={index} className="h-full w-full">
															<ImageViewer
																src={certificate.image || '/placeholder.svg'}
																alt={certificate.title}
															>
																<div className="/20 h-full w-full rounded-lg p-2">
																	<img
																		src={
																			certificate.image || '/placeholder.svg'
																		}
																		className="h-full w-full rounded-lg object-contain"
																		alt={certificate.title}
																	/>
																</div>
															</ImageViewer>
														</CarouselItem>
													))}
												</CarouselContent>
											</Carousel>
										)}
										<div className="py-2 text-center text-base text-mainColor dark:text-mainColor">
											<CarouselPagination
												currentImage={currentCertificate}
												setCurrentImage={setCurrentCertificate}
												api={api}
												images={user.certificates}
											/>
										</div>
									</div>
								</CardContent>
							</Card>
						</Section.Content>
					</Section.Root>

					<Section.Root id={t('about.recommendationsTitle')}>
						<Section.Title className="flex items-center gap-3 text-xl font-semibold text-foreground">
							<MessageSquare className="h-5 w-5 text-mainColor" />
							{t('about.recommendationsTitle')}
						</Section.Title>
						<Section.Content className="space-y-4">
							{user.recomendations.map((recomendation) => (
								<Card
									key={recomendation.name}
									className="transition-shadow hover:shadow-md"
								>
									<CardHeader>
										<div className="flex items-center gap-4">
											<SectionItem.Avatar
												imageUrl={recomendation.linkedinImageUrl}
											/>
											<div className="flex-1">
												<h3 className="text-lg font-semibold text-foreground">
													{recomendation.name}
												</h3>
												<p className="text-base text-mainColor dark:text-mainColor">
													{recomendation.position}
												</p>
											</div>
											<div className="flex items-center gap-2">
												<ExternalLink className="h-4 w-4 text-mainColor" />
												<SectionItem.LinkedIn recommendation={recomendation} />
											</div>
										</div>
									</CardHeader>
									<CardContent>
										<div className="space-y-3">
											<div className="flex items-center gap-2">
												<Building2 className="h-4 w-4 text-mainColor" />
												<p className="text-base font-medium text-foreground">
													{recomendation.company}
												</p>
											</div>
											<div className="rounded-lg border-l-4 border-mainColor p-4">
												<div className="mb-2 flex items-center gap-2">
													<Calendar className="h-4 w-4 text-mainColor" />
													<p className="text-base font-medium tracking-wide text-mainColor dark:text-mainColor">
														{recomendation.date}
													</p>
												</div>
												<div className="flex gap-2">
													<MessageSquare className="mt-1 h-4 w-4 flex-shrink-0 text-mainColor" />
													<p className="text-base italic leading-relaxed text-foreground">
														"{recomendation.comments}"
													</p>
												</div>
											</div>
										</div>
									</CardContent>
								</Card>
							))}
						</Section.Content>
					</Section.Root>

					<Section.Root id={'Soft Skills'}>
						<Section.Title className="flex items-center gap-3 text-xl font-semibold text-foreground">
							<Heart className="h-5 w-5 text-mainColor" />
							{'Soft Skills'}
						</Section.Title>
						<Section.Content className="grid gap-4 md:grid-cols-2">
							{user.softSkills.map((skill, index) => (
								<Card key={index} className="transition-shadow hover:shadow-md">
									<CardContent className="pt-6">
										<div className="flex items-center gap-3">
											<div className="rounded-lg p-2">
												<Lightbulb className="h-4 w-4 text-mainColor" />
											</div>
											<p className="text-base font-medium text-foreground">
												{skill}
											</p>
										</div>
									</CardContent>
								</Card>
							))}
						</Section.Content>
					</Section.Root>
				</div>
			</Container>
		</div>
	);
}
