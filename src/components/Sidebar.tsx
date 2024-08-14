import React from 'react';
import fotoCurriculo from '../assets/FotoCurriculo.jpg';
import { AiOutlineMail, AiFillPhone } from 'react-icons/ai';
import Navbar from './Navbar';
import Typewriter from 'typewriter-effect';
import { BotaoCurriculo } from './BotaoCurriculo';
import SocialBar from './SocialBar';
import { User } from '../Data/userData';

export default function Sidebar({ home }: { home?: boolean }) {
	const user = User;
	function formatPhoneNumber(phoneNumber: string): string {
		const match = phoneNumber.match(/^(\d{2})(\d{5})(\d{4})$/);
		if (match) {
			return `(${match[1]}) ${match[2]}-${match[3]}`;
		}
		return phoneNumber;
	}
	return (
		<div
			id="Sidebar"
			className={
				'flex h-full w-full flex-col items-center gap-8 overflow-y-auto bg-bioBgColor p-[20px_12px] text-center text-mainTextColor no-underline scrollbar no-scrollbar hover:no-underline sm:fixed sm:min-h-screen ' +
				(home ? 'h-screen w-full' : 'sm:w-1/4') +
				' md:border-r-[5px]'
			}
		>
			<h1 className="text-[32px] font-bold text-bioBorderColor">{user.name}</h1>
			<img
				className="mx-auto h-[175px]  w-[175px] rounded-[50%] sm:h-28 sm:w-28"
				src={user.profilePicture}
				alt="Lucas Levingston"
			/>
			<div className=" mx-auto  max-w-[100%] text-center  font-bold text-bioBorderColor">
				Olá, meu nome é {user.name} e sou{' '}
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
			</div>
			<div className="font-bold text-mainTextColor ">
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
			</div>
			<SocialBar />
			<div>
				<div className="flex w-[100%] justify-center transition-[1s] hover:text-[17px]">
					<a
						className=" text-none  flex  hover:text-mainTextColor "
						href="mailto:lucaslevingston94@gmail.com"
					>
						<AiOutlineMail className=" mr-[15px] max-w-[20px] text-[25px] text-mainColor" />
						{user.email}{' '}
					</a>
				</div>
				<div className="flex w-full justify-center">
					<AiFillPhone className="mr-[5px]   max-w-[20px] text-[25px] text-mainColor" />
					<p className="text-none max-w-[225px]  hover:text-mainTextColor">
						{formatPhoneNumber(user.phone)}
					</p>
				</div>
			</div>

			<BotaoCurriculo />
			<Navbar />
		</div>
	);
}
