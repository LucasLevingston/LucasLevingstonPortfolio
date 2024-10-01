import React, { useEffect, useState } from 'react';
import { AiOutlineLink } from 'react-icons/ai';
import { GoRepoForked } from 'react-icons/go';
import Typewriter from 'typewriter-effect';
import { ProjectType } from '../types/ProjectType';
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
	CarouselApi,
	CarouselContent,
	CarouselItem,
} from './ui/carousel';
import TechnologiesSection from './ThecnologiesSection';

export default function ProjectCard(project: ProjectType) {
	const [currentImage, setCurrentImage] = useState(0);
	const [api, setApi] = useState<CarouselApi>();
	const [open, setOpen] = useState(false);

	useEffect(() => {
		if (!api) return;

		setCurrentImage(api.selectedScrollSnap());
		api.on('select', () => {
			setCurrentImage(api.selectedScrollSnap());
		});
	}, [api]);

	return (
		<Accordion type="single" collapsible>
			<AccordionItem value={project.title}>
				<SectionItem
					title={
						<AccordionTrigger
							className="hover:cursor-pointer hover:no-underline"
							onClick={() => setOpen(!open)}
						>
							<div className="flex flex-col justify-start gap-2 text-left">
								<p className="text-xl font-bold">
									<Typewriter
										onInit={(typewriter) => {
											typewriter.typeString(project.title).start();
										}}
									/>
								</p>
								{!open && (
									<div className="flex w-full flex-wrap">
										<TechnologiesSection technologies={project.technologies} />
									</div>
								)}
							</div>
						</AccordionTrigger>
					}
					className="border-b border-b-borderColor py-5"
				>
					<AccordionContent>
						<div className="space-y-4">
							<p className="text-base">{project.description}</p>

							<div className="space-y-1">
								<p className="text-xl font-bold">
									{t('projectCard.technologiesUsed')}
								</p>
								<div className="flex w-full flex-wrap">
									<TechnologiesSection technologies={project.technologies} />
								</div>
							</div>

							{project.images && (
								<Carousel setApi={setApi}>
									<CarouselContent className="h-[200px] w-full sm:h-[576px] sm:w-[1024px]">
										{project.images.map((image, index) => (
											<CarouselItem key={index}>
												<img
													src={image}
													alt={`Imagem ${index}`}
													className="h-full w-full rounded-2xl"
												/>
											</CarouselItem>
										))}
									</CarouselContent>
									<div className="py-2 text-center text-sm text-muted-foreground">
										{t('projectCard.projectCurrentSlide')} {currentImage + 1}{' '}
										{t('projectCard.of')} {api?.scrollSnapList().length}
									</div>
								</Carousel>
							)}

							<div className="flex items-center justify-center space-x-4">
								{project.github && (
									<a
										className="flex w-[150px] items-center justify-center space-x-1 rounded-md border-[3px] border-solid border-mainColor 
                                        bg-mainColor p-3 text-[13px] font-bold text-mainTextColor no-underline transition-[0.5s] hover:bg-transparent hover:text-mainColor"
										href={project.github}
										target="_blank"
										rel="noopener noreferrer"
									>
										<GoRepoForked className="text-2xl" />
										<p className="text-bioBgColor dark:text-mainTextColor">
											{t('projectCard.viewGitHub')}
										</p>
									</a>
								)}

								{project.link && (
									<a
										className="flex w-[150px] items-center justify-center space-x-1 rounded-md border-[3px] border-solid border-mainColor 
                                        bg-mainColor p-3 text-[13px] font-bold text-mainTextColor no-underline transition-[0.5s] hover:bg-transparent hover:text-mainColor"
										href={project.link}
										target="_blank"
										rel="noopener noreferrer"
									>
										<AiOutlineLink className="text-2xl" />
										<p className="text-bioBgColor dark:text-mainTextColor">
											{t('projectCard.visitSite')}
										</p>
									</a>
								)}
							</div>
						</div>
					</AccordionContent>
				</SectionItem>
			</AccordionItem>
		</Accordion>
	);
}
