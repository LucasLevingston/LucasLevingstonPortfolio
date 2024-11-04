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
import TechnologiesSection from './TechnologiesSection';
import CarouselPagination from './CarouselPagination';
import CustomButton from './CustomButton';
import starIcon from '@/assets/svgs/star.svg';

interface ProjectCardProps {
	project: ProjectType;
	id: string;
}

interface ProjectCardProps {
	project: ProjectType;
	id: string;
}

export default function ProjectCard({
	project: { title, description, technologies, images, github, link, favorite },
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
		<Accordion
			type="single"
			collapsible
			onValueChange={setOpenAccordion}
			value={openAccordion}
			id={id}
		>
			<AccordionItem value={title}>
				<SectionItem
					title={
						<AccordionTrigger className="hover:cursor-pointer hover:no-underline">
							<div className="flex flex-col justify-start gap-2 text-left">
								<div className="flex items-center gap-2 text-xl font-bold">
									<Typewriter
										onInit={(typewriter) => {
											typewriter.typeString(title).start();
										}}
									/>
									{favorite && <img className="w-5" src={starIcon} />}
								</div>
								{openAccordion !== title && (
									<div className="flex w-full flex-wrap">
										<TechnologiesSection technologies={technologies} />
									</div>
								)}
							</div>
						</AccordionTrigger>
					}
					className="border-b border-b-borderColor py-5"
				>
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
									<CarouselContent className="h-[200px] w-full sm:h-[576px] sm:w-[1024px]">
										{images.map((image, index) => (
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
								{github && (
									<CustomButton icon={<GoRepoForked />} link={github}>
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
				</SectionItem>
			</AccordionItem>
		</Accordion>
	);
}
