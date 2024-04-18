import React from 'react';
import fotoCurriculo from '../assets/FotoCurriculo.jpg';
import { BsGithub, BsInstagram, BsJournalText } from 'react-icons/bs';
import { FaLinkedin, FaWhatsapp } from 'react-icons/fa';
import { AiOutlineMail, AiFillPhone } from 'react-icons/ai';
import Navbar from './Navbar';
import Typewriter from 'typewriter-effect';
import { BotaoCurriculo } from './BotaoCurriculo';

export default function Sidebar() {
	return (
		<div
			id="Sidebar"
			className="flex h-full flex-col items-center overflow-y-auto bg-bioBgColor p-[20px_12px] text-center text-mainTextColor no-underline scrollbar no-scrollbar hover:no-underline sm:fixed sm:min-h-screen sm:w-full md:w-1/4 md:border-r-[5px]"
		>
			<h1 className="mb-4  pt-0  text-[32px] font-bold text-bioBorderColor">
				Lucas Levingston
			</h1>
			<img
				className="mx-auto mb-6 h-[175px]  w-[175px] rounded-[50%] sm:h-28 sm:w-28"
				src={fotoCurriculo}
				alt="Lucas Levingston"
			/>
			<p className=" mx-auto  max-w-[100%] p-3 text-center  font-bold text-bioBorderColor">
				Olá, meu nome é Lucas Levingston e sou{' '}
				<span className="text-mainColor">
					{' '}
					<Typewriter
						onInit={(typewriter) => {
							typewriter
								.typeString('Desenvolvedor Full-Stack.')
								.pauseFor(5000)
								.deleteChars(11)
								.typeString('Frond-End.')
								.pauseFor(5000)
								.deleteChars(10)
								.typeString('Back-End.')
								.pauseFor(5000)
								.deleteChars(9)
								.typeString('Full-Stack.')
								.start();
						}}
					/>
				</span>
			</p>
			<p className="p-[25px] font-bold text-mainTextColor ">
				<Typewriter
					onInit={(typewriter) => {
						typewriter
							.typeString('Seja bem-vindo!')
							.pauseFor(2500)
							.deleteAll()
							.typeString('Seja bem-vindo!')
							.pauseFor(2500)
							.deleteAll()
							.typeString('Seja bem-vindo!')
							.pauseFor(2500)
							.start();
					}}
				/>
			</p>
			<ul className="mx-auto  mb-[25px] flex w-[200px] list-none items-center border-b-[1px] border-solid pb-[25px]">
				<li className="mx-auto max-w-[60px]">
					<a
						className="text-[30px] text-mainColor transition-[1s] hover:text-[40px] hover:text-mainTextColor"
						href="https://github.com/LucasLevingston"
						target="_blank"
					>
						<BsGithub />
					</a>
				</li>
				<li className="mx-auto max-w-[60px]">
					<a
						className="text-[30px] text-mainColor transition-[1s] hover:text-[40px] hover:text-mainTextColor"
						href="https://www.linkedin.com/in/lucas-levingston-44b851231/"
						target="_blank"
						rel="noopener noreferrer"
					>
						<FaLinkedin />
					</a>
				</li>
				<li className="mx-auto  max-w-[60px]">
					<a
						className="text-[30px] text-mainColor transition-[1s] hover:text-[40px] hover:text-mainTextColor"
						href="https://wa.me/message/BL2FCNM72L7GJ1"
						target="_blank"
						rel="noopener noreferrer"
					>
						<FaWhatsapp />
					</a>
				</li>
				<li className="mx-auto  max-w-[60px]">
					<a
						className="text-[30px] text-mainColor transition-[1s] hover:text-[40px] hover:text-mainTextColor"
						href="https://www.instagram.com/lucaolevingston/?hl=pt-br"
						target="_blank"
						rel="noopener noreferrer"
					>
						<BsInstagram />
					</a>
				</li>
			</ul>
			<div className="flex w-[100%] justify-center transition-[1s] hover:text-[17px]">
				<a
					className=" text-none  flex  hover:text-mainTextColor "
					href="mailto:lucaslevingston94@gmail.com"
				>
					<AiOutlineMail className=" mr-[15px] max-w-[20px] text-[25px] text-mainColor" />
					lucaslevingston94@gmail.com
				</a>
			</div>
			<div className="flex w-full justify-center pt-4 ">
				<AiFillPhone className="mr-[5px]   max-w-[20px] text-[25px] text-mainColor" />
				<p className="text-none max-w-[225px]  hover:text-mainTextColor">
					(83) 99961-6220
				</p>
			</div>

			<BotaoCurriculo />
			<Navbar />
		</div>
	);
}
