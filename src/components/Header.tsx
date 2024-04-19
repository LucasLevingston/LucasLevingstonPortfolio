import React from 'react';
import { FaShareAltSquare } from 'react-icons/fa';
import Typewriter from 'typewriter-effect';

export default function Header() {
	return (
		<div className="min-w-[50%] bg-aboutBgColor text-left hover:text-mainTextColor space-y-6 border-b-2 pb-5">
			<div>

				<h1 className="text-4xl font-bold text-bioBorderColor">
					Lucas Levingston
				</h1>
				<p className="text-[20px] font-bold text-mainColor">
					<Typewriter
						onInit={(typewriter) => {
							typewriter
								.typeString('Desenvolvedor Full-Stack')
								.pauseFor(5000)
								.deleteChars(10)
								.typeString('Front-End')
								.pauseFor(5000)
								.deleteChars(9)
								.typeString('Back-End')
								.pauseFor(5000)
								.deleteChars(8)
								.typeString('Full-Stack')
								.start();
						}}
					/>
				</p>
			</div>
			<div>
				<p className="max-w-[100%]  ">
					Sou um desenvolvedor apaixonado pelo que faço.  Tenho
					<span className="text-mainColor"> 7 meses de experiência </span>e já
					atuei tanto no back end como no front end, utilizando{' '}
					<span className="text-mainColor">
						React, Typescript, Tailwind CSS, MongoDB, Prisma, Express,
						Postman, Git, GitHub, Scrum e Docker.
					</span>
				</p>
				<p className="mb-4 max-w-[100%] ">
					Atualmente estou no{' '}
					<span className="text-mainColor">8º semestre </span> do curso de
					<span className="text-mainColor"> Ciências da Computação.</span>
				</p>
			</div>
			<a
				className="flex w-[150px] items-center  justify-center rounded-[5px] border-[2px] border-mainColor bg-mainColor
				 p-3 text-center text-[16px] font-bold transition-[0.5s] hover:bg-transparent hover:text-mainColor"
				href="https://github.com/LucasLevingston"
				target="_blank"
				rel="noopener noreferrer"
			>
				<FaShareAltSquare className="text-[18px]" />
				<span className="text-mainTextColor pl-2"> Ver GitHub</span>
			</a>
		</div>
	);
}
