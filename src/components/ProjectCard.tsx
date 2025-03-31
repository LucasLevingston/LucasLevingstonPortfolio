import { useEffect, useState } from 'react';
import { AiOutlineLink } from 'react-icons/ai';
import { GoRepoForked } from 'react-icons/go';
import Typewriter from 'typewriter-effect';
import type { ProjectType } from '../types/ProjectType';
import Section from './Section';
import SectionItem from './SectionItem';
import { t } from 'i18next';
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
import TechnologiesSection from './TechnologiesSection';
import CarouselPagination from './CarouselPagination';
import CustomButton from './CustomButton';
import starIcon from '@/assets/svgs/star.svg';
import PhoneFrame from './PhoneFrame';

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

	return (
		<Section.Root id={id}>
			<Accordion
				type="single"
				collapsible
				onValueChange={setOpenAccordion}
				value={openAccordion}
				className="w-full"
			>
				<AccordionItem value={title} className="border-none">
					<SectionItem.Root className="py-5">
						<SectionItem.Header>
							<AccordionTrigger className="flex-1 hover:cursor-pointer hover:no-underline">
								<div className="flex flex-col justify-start gap-2 text-left">
									<div className="flex items-center gap-2 text-xl font-bold">
										<Typewriter
											onInit={(typewriter) => {
												typewriter.typeString(title).start();
											}}
										/>
										{favorite && (
											<img
												className="w-5"
												src={starIcon || '/placeholder.svg'}
											/>
										)}
									</div>
									{openAccordion !== title && (
										<div className="flex w-full flex-wrap">
											<TechnologiesSection technologies={technologies} />
										</div>
									)}
								</div>
							</AccordionTrigger>
						</SectionItem.Header>
						<SectionItem.Content>
							<AccordionContent>
								<div className="space-y-4">
									<p className="text-base">{description}</p>

									<div className="space-y-1">
										<p className="text-xl font-bold">
											{t('projectCard.technologiesUsed')}
										</p>
										<div className="flex w-full flex-wrap">
											<TechnologiesSection technologies={technologies} />
										</div>
									</div>

									{images && (
										<Carousel setApi={setApi}>
											<CarouselContent>
												{images.map((image, index) =>
													isMobile ? (
														<CarouselItem
															key={index}
															className="flex justify-center"
														>
															<PhoneFrame>
																<img
																	src={image || '/placeholder.svg'}
																	alt={`Imagem ${index}`}
																	className="h-full w-full object-cover"
																/>
															</PhoneFrame>
														</CarouselItem>
													) : (
														<CarouselItem key={index}>
															<img
																src={image || '/placeholder.svg'}
																alt={`Imagem ${index}`}
																className="h-full w-full rounded-2xl sm:h-[576px] sm:w-[1024px]"
															/>
														</CarouselItem>
													)
												)}
											</CarouselContent>
											<div className="py-2 text-center text-sm text-muted-foreground">
												<CarouselPagination
													currentImage={currentImage}
													setCurrentImage={setCurrentImage}
													api={api}
													images={images}
												/>
											</div>
										</Carousel>
									)}

									<div className="flex items-center justify-center space-x-4">
										{frontEndRepositoryUrl && (
											<CustomButton
												icon={<GoRepoForked />}
												link={frontEndRepositoryUrl}
												className="w-48"
											>
												{t('projectCard.viewFrontEndRepo')}
											</CustomButton>
										)}

										{backEndRepositoryUrl && (
											<CustomButton
												icon={<GoRepoForked />}
												link={backEndRepositoryUrl}
												className="w-48"
											>
												{t('projectCard.viewBackEndRepo')}
											</CustomButton>
										)}

										{!frontEndRepositoryUrl &&
											!backEndRepositoryUrl &&
											repositoryUrl && (
												<CustomButton
													icon={<GoRepoForked />}
													link={repositoryUrl}
												>
													{t('projectCard.viewGitHub')}
												</CustomButton>
											)}

										{link && (
											<CustomButton icon={<AiOutlineLink />} link={link}>
												{t('projectCard.visitSite')}
											</CustomButton>
										)}
									</div>
								</div>
							</AccordionContent>
						</SectionItem.Content>
					</SectionItem.Root>
				</AccordionItem>
			</Accordion>
		</Section.Root>
	);
}
