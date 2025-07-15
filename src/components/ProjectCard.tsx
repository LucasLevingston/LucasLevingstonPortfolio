'use client';

import { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import Typewriter from 'typewriter-effect';
import type { ProjectType } from '../types/ProjectType';
import Section from './Section';
import {
	Accordion,
	AccordionItem,
	AccordionTrigger,
	AccordionContent,
} from './ui/accordion';
import {
	Carousel,
	type CarouselApi,
	CarouselContent,
	CarouselItem,
} from './ui/carousel';
import { Card, CardContent, CardHeader } from './ui/card';
import { Badge } from './ui/badge';
import { Button } from './ui/button';
import TechnologiesSection from './TechnologiesSection';
import CarouselPagination from './CarouselPagination';
import PhoneFrame from './PhoneFrame';
import { DesktopFrame } from './DesktopFrame'; // Import the new DesktopFrame
import {
	Star,
	Github,
	ExternalLink,
	Code,
	ImageIcon,
	Smartphone,
	Monitor,
} from 'lucide-react';
import TechnologyIcon from './Icon/TechnologyIcon';
import { ImageViewer } from './image-viewer';

interface ProjectCardProps {
	project: ProjectType;
	id: string;
}

export default function ProjectCard({
	project: {
		title,
		description,
		technologies,
		images,
		repositoryUrl,
		frontEndRepositoryUrl,
		backEndRepositoryUrl,
		link,
		favorite,
		isMobile,
	},
	id,
}: ProjectCardProps) {
	const { t } = useTranslation();
	const [currentImage, setCurrentImage] = useState(0);
	const [api, setApi] = useState<CarouselApi>();
	const [openAccordion, setOpenAccordion] = useState<string | undefined>(
		undefined
	);

	useEffect(() => {
		const urlParams = new URLSearchParams(location.search);
		const searchParam = urlParams.get('search') || '';
		setOpenAccordion(searchParam);
	}, [location.search]);

	useEffect(() => {
		if (!api) return;
		setCurrentImage(api.selectedScrollSnap());
		api.on('select', () => {
			setCurrentImage(api.selectedScrollSnap());
		});
	}, [api]);

	// Get the first image for the preview
	const previewImage =
		images && images.length > 0 ? images[0] : '/placeholder.svg';

	return (
		<Card className="transition-shadow hover:shadow-md">
			<Section.Root id={id}>
				<Accordion
					type="single"
					collapsible
					onValueChange={setOpenAccordion}
					value={openAccordion}
					className="w-full"
				>
					<AccordionItem value={title} className="border-none">
						<CardHeader className="pb-3">
							<AccordionTrigger className="w-full p-0 hover:no-underline">
								<div className="flex w-full flex-col items-start justify-between gap-4 sm:flex-row sm:items-center">
									<div className="flex items-center gap-3">
										<div className="rounded-lg p-2">
											{isMobile ? (
												<Smartphone className="h-4 w-4 text-mainColor" />
											) : (
												<Monitor className="h-4 w-4 text-mainColor" />
											)}
										</div>
										<div className="text-left">
											<div className="flex items-center gap-2">
												<h3 className="text-lg font-semibold text-foreground">
													<Typewriter
														onInit={(typewriter) => {
															typewriter.typeString(title).start();
														}}
													/>
												</h3>
												{favorite && (
													<Star className="h-4 w-4 fill-current text-mainColor" />
												)}
											</div>
											{openAccordion !== title && (
												<div className="mt-2 flex flex-wrap gap-1">
													{technologies.slice(0, 6).map((tech) => (
														<div key={tech} className="rounded p-1">
															<TechnologyIcon technology={tech} />
														</div>
													))}
													{technologies.length > 6 && (
														<Badge
															variant="outline"
															className="border-mainBorder text-xs text-mainColor dark:border-main-border-dark dark:text-mainColor"
														>
															+{technologies.length - 6}
														</Badge>
													)}
												</div>
											)}
										</div>
									</div>
									{openAccordion !== title && images && images.length > 0 && (
										<div className="w-full px-6 pb-4 sm:w-auto sm:px-0 sm:pb-0">
											<div className="relative flex h-48 w-full items-center justify-center overflow-hidden rounded-md">
												{isMobile ? (
													<PhoneFrame className="h-full max-h-[180px]">
														<img
															src={previewImage || '/placeholder.svg'}
															alt={`Preview of ${title}`}
															className="h-full w-full object-cover"
														/>
													</PhoneFrame>
												) : (
													<DesktopFrame className="h-full max-h-[180px]">
														<img
															src={previewImage || '/placeholder.svg'}
															alt={`Preview of ${title}`}
															className="h-full w-full object-contain"
														/>
													</DesktopFrame>
												)}
											</div>
										</div>
									)}
									<div className="flex items-center gap-2 sm:ml-auto">
										{images && images.length > 0 && (
											<ImageIcon className="h-4 w-4 text-mainColor" />
										)}
										{(repositoryUrl ||
											frontEndRepositoryUrl ||
											backEndRepositoryUrl) && (
											<Github className="h-4 w-4 text-mainColor" />
										)}
										{link && (
											<ExternalLink className="h-4 w-4 text-mainColor" />
										)}
									</div>
								</div>
							</AccordionTrigger>
						</CardHeader>
						<AccordionContent>
							<CardContent className="pt-0">
								<div className="space-y-6">
									<div className="rounded-lg p-4">
										<p className="text-sm leading-relaxed text-foreground">
											{description}
										</p>
									</div>
									<div>
										<div className="mb-3 flex items-center gap-2">
											<Code className="h-4 w-4 text-mainColor" />
											<h4 className="text-sm font-semibold text-foreground">
												Tecnologias utilizadas
											</h4>
										</div>
										<TechnologiesSection technologies={technologies} />
									</div>
									{images && images.length > 0 && (
										<div>
											<div className="mb-3 flex items-center gap-2">
												<ImageIcon className="h-4 w-4 text-mainColor" />
												<h4 className="text-sm font-semibold text-foreground">
													Screenshots
												</h4>
											</div>
											<Carousel setApi={setApi}>
												<CarouselContent className="h-full w-[500px]">
													{images.map((image, index) =>
														isMobile ? (
															<CarouselItem
																key={index}
																className="flex justify-center"
															>
																<ImageViewer
																	src={image || '/placeholder.svg'}
																	alt={`Screenshot ${index + 1}`}
																>
																	<PhoneFrame>
																		<img
																			src={image || '/placeholder.svg'}
																			alt={`Screenshot ${index + 1}`}
																			className="h-full w-full object-cover"
																		/>
																	</PhoneFrame>
																</ImageViewer>
															</CarouselItem>
														) : (
															<CarouselItem key={index}>
																<ImageViewer
																	src={image || '/placeholder.svg'}
																	alt={`Screenshot ${index + 1}`}
																>
																	<div className="h-full rounded-lg p-2">
																		<img
																			src={image || '/placeholder.svg'}
																			alt={`Screenshot ${index + 1}`}
																			className="h-full w-full rounded-lg object-contain"
																		/>
																	</div>
																</ImageViewer>
															</CarouselItem>
														)
													)}
												</CarouselContent>
												<div className="py-2 text-center text-xs text-mainColor dark:text-mainColor">
													<CarouselPagination
														currentImage={currentImage}
														setCurrentImage={setCurrentImage}
														api={api}
														images={images}
													/>
												</div>
											</Carousel>
										</div>
									)}
									{/* Action Buttons */}
									<div className="flex flex-wrap items-center justify-center gap-3 border-mainBorder pt-4 dark:border-main-border-dark">
										{frontEndRepositoryUrl && (
											<Button
												asChild
												variant="outline"
												className="gap-2 border-mainBorder bg-transparent text-sm hover:bg-lightMainColor dark:border-main-border-dark dark:hover:bg-light-main-color-dark"
											>
												<a
													href={frontEndRepositoryUrl}
													target="_blank"
													rel="noopener noreferrer"
												>
													<Github className="h-4 w-4 text-mainColor" />
													Ver Front-End
												</a>
											</Button>
										)}
										{backEndRepositoryUrl && (
											<Button
												asChild
												variant="outline"
												className="gap-2 border-mainBorder bg-transparent text-sm hover:bg-lightMainColor dark:border-main-border-dark dark:hover:bg-light-main-color-dark"
											>
												<a
													href={backEndRepositoryUrl}
													target="_blank"
													rel="noopener noreferrer"
												>
													<Github className="h-4 w-4 text-mainColor" />
													Ver Back-End
												</a>
											</Button>
										)}
										{!frontEndRepositoryUrl &&
											!backEndRepositoryUrl &&
											repositoryUrl && (
												<Button
													asChild
													variant="outline"
													className="gap-2 border-mainBorder bg-transparent text-sm hover:bg-lightMainColor dark:border-main-border-dark dark:hover:bg-light-main-color-dark"
												>
													<a
														href={repositoryUrl}
														target="_blank"
														rel="noopener noreferrer"
													>
														<Github className="h-4 w-4 text-mainColor" />
														Ver GitHub
													</a>
												</Button>
											)}
										{link && (
											<Button
												asChild
												className="gap-2 bg-mainColor text-sm text-white hover:bg-main-color-dark"
											>
												<a
													href={link}
													target="_blank"
													rel="noopener noreferrer"
												>
													<ExternalLink className="h-4 w-4" />
													Visitar Site
												</a>
											</Button>
										)}
									</div>
								</div>
							</CardContent>
						</AccordionContent>
					</AccordionItem>
				</Accordion>
			</Section.Root>
		</Card>
	);
}
