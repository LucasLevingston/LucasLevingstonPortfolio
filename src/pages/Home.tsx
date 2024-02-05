import React from 'react';
import fotoCurriculo from '../assets/FotoCurriculo.jpg';
import { BsGithub, BsInstagram, BsJournalText } from 'react-icons/bs';
import { FaFacebookSquare, FaLinkedin } from 'react-icons/fa';
import { AiFillPhone, AiOutlineMail } from 'react-icons/ai';
import Navbar from '../components/Navbar';
import Typewriter from 'typewriter-effect';

export default function Home() {
	return (
		<div className="flex flex-col ">
			<div className="min-h-[100vh] flex-[1_1_80%] items-center bg-bioBgColor p-[30px_12px] pt-8 text-center text-mainTextColor no-scrollbar hover:no-underline">
				<h2 className="mb-4 text-center text-[32px] font-bold text-bioBorderColor">
					Lucas Levingston
				</h2>
				<img
					className="mx-auto mb-6 h-[175px] w-[175px] rounded-[50%]"
					src={fotoCurriculo}
					alt="Lucas Levingston"
				/>
				<p className="min-h- mx-auto max-w-[100%] p-3 text-center text-bioBorderColor">
					Olá, meu nome é Lucas Levingston e sou
					<span className="text-mainColor">
						<Typewriter
							onInit={(typewriter) => {
								typewriter
									.typeString('Desenvolvedor Full-Stack.')
									.pauseFor(5000)
									.deleteChars(11)
									.typeString('Front-End.')
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
				<p className="p-[25px] font-bold text-mainTextColor">
					<strong>
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
					</strong>
				</p>
				<ul className="mx-auto mb-[25px] flex w-[200px] list-none justify-center border-b-[1px] border-solid pb-[25px]">
					<li className="mx-auto max-w-[60px]">
						<a
							className="text-[30px] text-mainColor transition-[1s] hover:text-[40px] hover:text-mainColor"
							href="https://github.com/LucasLevingston"
							target="_blank"
						>
							<BsGithub />
						</a>
					</li>
					<li className=" mx-auto max-w-[60px]">
						<a
							className="text-[30px] text-mainColor transition-[1s] hover:text-[40px] hover:text-mainColor"
							href="https://www.linkedin.com/in/lucas-levingston-44b851231/"
							target="_blank"
						>
							<FaLinkedin />
						</a>
					</li>
					<li className="mx-auto max-w-[60px]">
						<a
							className="text-[30px] text-mainColor transition-[1s] hover:text-[40px] hover:text-mainColor"
							href="https://www.instagram.com/lucaolevingston/?hl=pt-br"
							target="_blank"
						>
							<BsInstagram />
						</a>
					</li>
					<li className=" mx-auto max-w-[60px]">
						<a
							className="text-[30px] text-mainColor transition-[1s] hover:text-[40px] hover:text-mainColor"
							href="https://www.facebook.com/LucasLevingston"
							target="_blank"
						>
							<FaFacebookSquare />
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
				<div className="flex w-[100%] justify-center hover:text-mainColor">
					<a
						className="m-[25px_0] flex  w-[170px] justify-center rounded-[5px]  border-[3px] border-solid border-mainColor bg-mainColor p-[12px] text-[13px] font-bold text-mainTextColor no-underline transition-[0.5s] hover:bg-transparent hover:text-mainColor"
						href="https://docs.google.com/document/d/12krEMbPJzIrSUoN4tKSt3C5REMoSwNpGPSmVNa9UE9I/edit?usp=sharing"
						target="_blank"
					>
						<span className="pr-3 text-mainTextColor ">
							Ver curriculo
							{'     '}
						</span>
						<BsJournalText className="max-w-[25px]  text-[18px]  " />
					</a>
				</div>
				<Navbar />
			</div>
		</div>
	);
}
