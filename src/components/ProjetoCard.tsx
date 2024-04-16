import React, { useState } from 'react';
import { AiOutlineLink } from 'react-icons/ai';
import { BsChevronBarLeft, BsChevronBarRight } from 'react-icons/bs';
import { DiScrum } from 'react-icons/di';
import { GoRepoForked } from 'react-icons/go';
import { SiPostman, SiVite } from 'react-icons/si';
import Typewriter from 'typewriter-effect';
import { PiFilePdfBold } from "react-icons/pi";
import TecnologiaIcon from './TecnologiaIcon';


export interface ProjetoType {
	nome: string;
	sobre: string;
	imagens?: string[];
	github?: string;
	link?: string;
	tecnologias: string[];
}

export default function ProjetoCard(projeto: ProjetoType) {
	const [indiceAtual, setIndiceAtual] = useState(0);

	const imagemAnterior = () => {
		if (projeto.imagens) {
			const isFirstImage = indiceAtual === 0;
			const novoIndice = isFirstImage
				? projeto.imagens.length - 1
				: indiceAtual - 1;
			setIndiceAtual(novoIndice);
		}
	};

	const proximaImagem = () => {
		if (projeto.imagens) {
			const isLastImage = indiceAtual === projeto.imagens.length - 1;
			const novoIndice = isLastImage ? 0 : indiceAtual + 1;
			setIndiceAtual(novoIndice);
		}
	};

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
				<div className="m-auto flex h-[300px] w-full max-w-[700px] items-center px-0 py-10
				 sm:h-[160px] sm:max-w-[500px] sm:p-8  md:h-[460px] md:max-w-[800px]">
					<div className=" cursor-pointer rounded-full p-2 pl-5 text-2xl text-mainTextColor group-hover:block">
						<BsChevronBarLeft onClick={imagemAnterior} size={30} />
					</div>

					<div
						style={{
							backgroundImage: `url(${projeto.imagens[indiceAtual]})`,
							backgroundSize: 'cover',
						}}
						className="h-full w-full rounded-2xl bg-cover bg-center duration-500"
					></div>
					<div className=" cursor-pointer rounded-full p-2 pr-5 text-2xl text-mainTextColor group-hover:block">
						<BsChevronBarRight onClick={proximaImagem} size={30} />
					</div>
				</div>
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
