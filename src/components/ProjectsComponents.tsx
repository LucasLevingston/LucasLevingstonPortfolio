import React, { useState } from 'react';
import { AiOutlineLink } from 'react-icons/ai';
import { twMerge } from 'tailwind-merge'
import { BsChevronBarLeft, BsChevronBarRight } from 'react-icons/bs';
import { GoRepoForked } from 'react-icons/go';
import Typewriter from 'typewriter-effect';
export interface Project {
	name: string;
	sobre: string;
	images: string[];
	github?: string;
	link?: string;
	tecnologias: string[]
}

export default function ProjectsComponents(projeto: Project) {
	const [currentIndex, setCurrentIndex] = useState(2);
	const prevImage = () => {
		const isFirstImage = currentIndex === 0;
		const newIndex = isFirstImage ? projeto.images.length - 1 : currentIndex - 1;
		setCurrentIndex(newIndex);
	};

	const nextImage = () => {
		const isLastImage = currentIndex === projeto.images.length - 1;
		const newIndex = isLastImage ? 0 : currentIndex + 1;
		setCurrentIndex(newIndex);
	};
	return (
		<div className="text-mainTextColor scrollbar scrollbar-thumb-borderColor flex flex-[1_1_80%] flex-col p-[10px] sm:p-0 bg-aboutBgColor border-b-[1px]  border-solid  border-borderColor">
			<h1 className="text-bold text-mainColor pb-1 text-2xl  pt-5">
				<p className="text-none max-w-[225px] font-bold">
					<Typewriter
						onInit={(typewriter) => {
							typewriter.typeString(projeto.name).start();
						}}
					/>
				</p>
			</h1>
			<p>{projeto.sobre}</p>
			<br />
			<p  className="text-xl max-w-[225px] font-bold">
				Tecnologias Utilizadas:
			</p>
			<br />
			<div className='flex'>

			{projeto.tecnologias.map((tecnologia: string) => (
  tecnologia === "nextjs" ? (
    <div key={tecnologia} className={`devicon-${tecnologia}-original  text-4xl mr-2 ml-3`}>
    </div>
  ) : (
    <div key={tecnologia} className={`devicon-${tecnologia === "github" ? "github-original" : `${tecnologia}-plain colored`}  text-4xl mr-2 ml-3`}>
    </div>
  )
))}


</div>


			<div className="max-w-[700px] h-[300px] md:max-w-[800px] md:h-[460px] sm:max-w-[500px] sm:h-[160px] w-full m-auto py-10 px-0 sm:p-8  relative group">
				<div
					style={{ backgroundImage: `url(${projeto.images[currentIndex]})` }}
					className="w-full h-full rounded-2xl bg-center bg-cover duration-500"
				></div>
				<div className="hidden group-hover:block absolute top-[50%] pl-5 -translate-x-0 translate-y-[-50%] left-5 text-2xl rounded-full p-2 bg-black/20 text-mainTextColor cursor-pointer">
					<BsChevronBarLeft onClick={prevImage} size={30} />
				</div>
				<div className="hidden group-hover:block absolute top-[50%] pr-5 -translate-x-0 translate-y-[-50%] right-5 text-2xl rounded-full p-2 bg-black/20 text-mainTextColor cursor-pointer">
					<BsChevronBarRight onClick={nextImage} size={30} />
				</div>
			</div>
			<div id="Botoes github e link" className="flex items-center justify-center ">
				<div className="pr-5">
					{projeto.github && (
						<a
							className="hover:bg-transparent font-bold hover:text-mainColor text-[13px] bg-mainColor border-[3px] border-mainColor rounded-[5px] border-solid no-underline transition-[0.5s] m-[25px_0] p-[12px_10px] w-[150px] text-center flex"
							href={projeto.github}
							target="_blank"
							rel="noopener noreferrer"
						>
							<GoRepoForked className="hover:text-mainColor text-2xl" />
							<span className="flex-[1_1_0] text-mainTextColor">Ver Repositório</span>
						</a>
					)}
				</div>
				<div>
					{projeto.link && (
						<a
							className="hover:bg-transparent hover:text-mainColor font-bold text-[13px] bg-mainColor border-[3px] border-mainColor rounded-[5px] border-solid no-underline transition-[0.5s] m-[25px_0] p-[12px_10px] w-[135px] text-center flex"
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
