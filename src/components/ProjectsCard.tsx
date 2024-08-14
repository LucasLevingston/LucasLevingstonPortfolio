import React from 'react';
import { AiOutlineLink } from 'react-icons/ai';
import { GoRepoForked } from 'react-icons/go';
import Typewriter from 'typewriter-effect';
import TecnologiaIcon from './TecnologiaIcon';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import { ProjectType } from '../types/projectType';

export default function ProjectCard(projeto: ProjectType) {
	return (
		<div
			id="Projects component"
			className="sm:p- flex flex-[1_1_80%] flex-col border-b-[1px] border-solid border-borderColor
			 bg-aboutBgColor   pb-5  text-mainTextColor"
		>
			<div className="pt-5">
				<h1 className="border-l-[5px]  border-mainColor  pl-3 text-xl font-bold sm:border-l-[5px] xl:border-l-[5px]">
					<Typewriter
						onInit={(typewriter) => {
							typewriter.typeString(projeto.title).start();
						}}
					/>
				</h1>
				<p className=" pl-10 pt-3">{projeto.description}</p>
				<br />
			</div>

			<div className="pl-10">
				<p className="text-xl font-bold">Tecnologias Utilizadas:</p>
				<br />
				<div className="flex w-full flex-wrap">
					<TecnologiaIcon tecnologias={projeto.technologies} />
				</div>
			</div>
			{projeto.images && (
				<Swiper
					modules={[Pagination]}
					pagination={{ clickable: true }}
					slidesPerView={1}
					spaceBetween={50}
					scrollbar={{ draggable: true }}
					className="m-auto flex h-[300px] w-[380px] items-center px-0 py-10 sm:h-[576px] sm:w-[1024px] sm:p-8"
				>
					{projeto.images.map((image, index) => (
						<SwiperSlide key={index} virtualIndex={index}>
							<img
								src={image}
								alt={`Imagem ${index}`}
								className="h-full w-full rounded-2xl bg-cover bg-center duration-500"
							/>
						</SwiperSlide>
					))}
				</Swiper>
			)}

			<div className="flex items-center justify-center ">
				<div className="pr-5">
					{projeto.github && (
						<a
							className="m-[25px_0] flex w-[150px] rounded-[5px] border-[3px] border-solid border-mainColor bg-mainColor 
							p-[12px_10px] text-center text-[13px] font-bold no-underline transition-[0.5s] hover:bg-transparent hover:text-mainColor"
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
							className="m-[25px_0] flex w-[135px] rounded-[5px] border-[3px] border-solid border-mainColor bg-mainColor 
							p-[12px_10px] text-center text-[13px] font-bold no-underline transition-[0.5s] hover:bg-transparent hover:text-mainColor"
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
