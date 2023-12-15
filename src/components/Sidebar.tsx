import React from 'react';
import fotoCurriculo from '../assets/FotoCurriculo.jpg';
import { BsGithub, BsInstagram, BsJournalText } from 'react-icons/bs';
import { FaFacebookSquare, FaLinkedin } from 'react-icons/fa';
import { AiOutlineMail, AiFillPhone } from 'react-icons/ai';
import Navbar from './Navbar';
import Typewriter from 'typewriter-effect';

export default function Sidebar() {
	return (
<div className="no-underline hover:no-underline sm:overflow-y-auto scrollbar no-scrollbar flex flex-col sm:fixed text-center sm:min-h-screen h-full sm:w-full md:w-1/4 items-center text-mainTextColor bg-bioBgColor p-[20px_12px] md:border-r-[5px]">
			<h1 className="text-[32px]  pt-0  mb-4 font-bold text-bioBorderColor">
				Lucas Levingston
			</h1>
			<img
				className="w-[175px] h-[175px] sm:w-28  sm:h-28 rounded-[50%] mb-6 mx-auto"
				id="bio-image"
				src={fotoCurriculo}
				alt="Lucas Levingston"
			/>
			<p className=" max-w-[100%]  font-bold p-3 text-center  mx-auto text-bioBorderColor">
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
			<p className="font-bold p-[25px] text-mainTextColor ">
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
			<ul
				id="social-container"
				className="w-[200px]  flex items-center mx-auto list-none border-b-[1px] border-solid mb-[25px] pb-[25px]"
			>
				<li className="max-w-[60px] mx-auto">
					<a
						className="text-[30px] text-mainColor hover:text-[40px] transition-[1s] hover:text-mainColor"
						href="https://github.com/LucasLevingston"
						target="_blank"
					>
						<BsGithub />
					</a>
				</li>
				<li className="max-w-[60px] mx-auto">
					<a
						className="text-[30px] text-mainColor hover:text-[40px] transition-[1s] hover:text-mainColor"
						href="https://www.linkedin.com/in/lucas-levingston-44b851231/"
						target="_blank"
						rel="noopener noreferrer"
					>
						<FaLinkedin />
					</a>
				</li>
				<li className="max-w-[60px]  mx-auto">
					<a
						className="text-[30px] text-mainColor hover:text-[40px] transition-[1s] hover:text-mainColor"
						href="https://www.instagram.com/lucaolevingston/?hl=pt-br"
						target="_blank"
						rel="noopener noreferrer"
					>
						<BsInstagram />
					</a>
				</li>
				<li className="max-w-[60px]  mx-auto">
					<a
						className="text-[30px] hover:text-[40px] transition-[1s] text-mainColor hover:text-mainColor"
						href="https://www.facebook.com/LucasLevingston"
						target="_blank"
						rel="noopener noreferrer"
					>
						<FaFacebookSquare />
					</a>
				</li>
			</ul>
			<div
				id="email-container"
				className="flex hover:text-[17px] transition-[1s] justify-center w-[100%]"
			>
				<a
					className=" text-none  flex  hover:text-mainTextColor "
					href="mailto:lucaslevingston94@gmail.com"
				>
					<AiOutlineMail className=" text-[25px] mr-[15px] max-w-[20px] text-mainColor" />
					lucaslevingston94@gmail.com
				</a>
			</div>
			<div id="phone-container" className="flex justify-center pt-4 w-full ">
				<AiFillPhone className="text-[25px]   mr-[5px] max-w-[20px] text-mainColor" />
				<p className="text-none max-w-[225px]  hover:text-mainTextColor">
					(83) 99961-6220
				</p>
			</div>

			<div className="flex justify-center w-full">
				<a
					className="hover:bg-transparent font-bold  text-[13px] hover:text-mainColor text-mainTextColor  bg-mainColor border-[3px] border-mainColor rounded-[5px] border-solid no-underline transition-[0.5s] m-[25px_0] p-[12px] w-[170px] justify-center flex"
					href="https://docs.google.com/document/d/12krEMbPJzIrSUoN4tKSt3C5REMoSwNpGPSmVNa9UE9I/edit?usp=sharing"
					id="btn-projects"
					target="_blank"
				>
					<span className="text-mainTextColor pr-2 ">
						Ver curriculo
						{'     '}
					</span>
					<BsJournalText className="text-[18px]  max-w-[25px]  " />
				</a>
			</div>
			<Navbar />
		</div>
	);
}
