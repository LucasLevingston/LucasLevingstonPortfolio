import React from 'react';
import { AiOutlineLink } from 'react-icons/ai';
import { GoRepoForked } from 'react-icons/go';
import Typewriter from 'typewriter-effect';
import TecnologiaIcon from './TecnologiaIcon';
import { Swiper, SwiperSlide, } from 'swiper/react';
import { Virtual } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

export interface ProjetoType {
	nome: string;
	sobre: string;
	imagens?: string[];
	github?: string;
	link?: string;
	tecnologias: string[];
}

export default function ProjetoCard(projeto: ProjetoType) {
	return (
		<div
			id="Projects component"
			className="flex flex-[1_1_80%] flex-col pb-5 border-b-[1px] border-solid border-borderColor
			 bg-aboutBgColor   text-mainTextColor  sm:p-"
		>
			<div className="pt-5">
				<h1 className="border-l-[5px]  border-mainColor  pl-3 text-xl font-bold sm:border-l-[5px] xl:border-l-[5px]">
					<Typewriter
						onInit={(typewriter) => {
							typewriter.typeString(projeto.nome).start();
						}}
					/>
				</h1>
				<p className=" pl-10 pt-3">{projeto.sobre}</p>
				<br />
			</div>

			<div>
				<p className=" pl-10 text-xl font-bold">Tecnologias Utilizadas:</p>
				<br />
				<div className="flex w-full flex-wrap pl-7">
					<TecnologiaIcon tecnologias={projeto.tecnologias} />

				</div>
			</div>
			{projeto.imagens && (
				<Swiper
					modules={[Virtual]}
					pagination={{ clickable: true, }}
					slidesPerView={1}
					spaceBetween={50}
					scrollbar={{ draggable: true }}

					className='m-auto flex  items-center px-0 py-10 sm:p-8 sm:w-[1280px] sm:h-[720px] h-[300px] w-[380px]'
				>
					{projeto.imagens.map((imagem, index) => (
						<SwiperSlide key={index} virtualIndex={index}>
							<img src={imagem} alt={`Imagem ${index}`} className='h-full w-full rounded-2xl bg-cover bg-center duration-500' />
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
