import React, { useState } from 'react';
import { AiOutlineLink } from 'react-icons/ai';
import { BsChevronBarLeft, BsChevronBarRight } from 'react-icons/bs';
import { DiScrum } from 'react-icons/di';
import { GoRepoForked } from 'react-icons/go';
import { SiPostman } from 'react-icons/si';
import Typewriter from 'typewriter-effect';
export interface Project {
	name: string;
	sobre: string;
	images: string[];
	github?: string;
	link?: string;
	tecnologias: string[];
}

export default function ProjectsComponents(projeto: Project) {
	const [currentIndex, setCurrentIndex] = useState(2);
	const prevImage = () => {
		const isFirstImage = currentIndex === 0;
		const newIndex = isFirstImage
			? projeto.images.length - 1
			: currentIndex - 1;
		setCurrentIndex(newIndex);
	};

	const nextImage = () => {
		const isLastImage = currentIndex === projeto.images.length - 1;
		const newIndex = isLastImage ? 0 : currentIndex + 1;
		setCurrentIndex(newIndex);
	};
	return (
		<div
			id="Projects component"
			className="flex flex-[1_1_80%] flex-col border-b-[1px] border-solid border-borderColor bg-aboutBgColor p-[10px]  text-mainTextColor  sm:p-0"
		>
			<div>
				<h1 className="text-none max-w-[225px] pb-1 pt-5 text-2xl font-bold text-mainColor">
					<Typewriter
						onInit={(typewriter) => {
							typewriter.typeString(projeto.name).start();
						}}
					/>
				</h1>
				<p className="w-full text-sm">{projeto.sobre}</p>
				<br />
			</div>

			<div>
				<p className="max-w-[225px] text-xl font-bold">
					Tecnologias Utilizadas:
				</p>
				<br />
				<div className="flex w-full flex-wrap">
					{projeto.tecnologias.map((tecnologia: string, index: number) =>
						tecnologia === 'postman' ? (
              <SiPostman className="ml-3 mr-2 text-[200%] text-orange" 
              style={{ marginBottom: (index + 1) % 6 === 0 ? '1rem' : 0 }}/>

						) : tecnologia === 'scrum' ? (
							<DiScrum
								className="ml-3 mr-2 text-[250%]"
								style={{ marginBottom: (index + 1) % 6 === 0 ? '1rem' : 0 }}
							/>
						) : tecnologia === 'express' ? (
							<div
								key={tecnologia}
								className={'devicon-express-original  ml-3 mr-2 text-[200%]'}
								style={{ marginBottom: (index + 1) % 6 === 0 ? '1rem' : 0 }}
							></div>
						) : tecnologia === 'nextjs' ? (
							<div
								key={tecnologia}
								className={'devicon-nextjs-original  ml-3 mr-2 text-[200%]'}
								style={{ marginBottom: (index + 1) % 6 === 0 ? '1rem' : 0 }}
							></div>
						) : (
							<div
								key={tecnologia}
								className={`devicon-${
									tecnologia === 'github'
										? 'github-original'
										: `${tecnologia}-plain colored`
								} ml-3 mr-2 text-[200%]`}
								style={{ marginBottom: (index + 1) % 6 === 0 ? '1rem' : 0 }}
							></div>
						)
					)}
				</div>
			</div>

			<div className="group relative m-auto h-[300px] w-full max-w-[700px] px-0 py-10 sm:h-[160px] sm:max-w-[500px] sm:p-8  md:h-[460px] md:max-w-[800px]">
				<div
					style={{ backgroundImage: `url(${projeto.images[currentIndex]})` }}
					className="h-full w-full rounded-2xl bg-cover bg-center duration-500"
				></div>
				<div className="bg-black/20 absolute left-5 top-[50%] hidden -translate-x-0 translate-y-[-50%] cursor-pointer rounded-full p-2 pl-5 text-2xl text-mainTextColor group-hover:block">
					<BsChevronBarLeft onClick={prevImage} size={30} />
				</div>
				<div className="bg-black/20 absolute right-5 top-[50%] hidden -translate-x-0 translate-y-[-50%] cursor-pointer rounded-full p-2 pr-5 text-2xl text-mainTextColor group-hover:block">
					<BsChevronBarRight onClick={nextImage} size={30} />
				</div>
			</div>
			<div className="flex items-center justify-center ">
				<div className="pr-5">
					{projeto.github && (
						<a
							className="m-[25px_0] flex w-[150px] rounded-[5px] border-[3px] border-solid border-mainColor bg-mainColor p-[12px_10px] text-center text-[13px] font-bold no-underline transition-[0.5s] hover:bg-transparent hover:text-mainColor"
							href={projeto.github}
							target="_blank"
							rel="noopener noreferrer"
						>
							<GoRepoForked className="text-2xl hover:text-mainColor" />
							<span className="flex-[1_1_0] text-mainTextColor">
								Ver Repositório
							</span>
						</a>
					)}
				</div>
				<div>
					{projeto.link && (
						<a
							className="m-[25px_0] flex w-[135px] rounded-[5px] border-[3px] border-solid border-mainColor bg-mainColor p-[12px_10px] text-center text-[13px] font-bold no-underline transition-[0.5s] hover:bg-transparent hover:text-mainColor"
							href={projeto.link}
							target="_blank"
							rel="noopener noreferrer"
						>
							<AiOutlineLink className="text-2xl " />
							<span className="pl-2 text-mainTextColor">Visitar Site</span>
						</a>
					)}
				</div>
			</div>
		</div>
	);
}
