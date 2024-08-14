import React from 'react';
import { FaShareAltSquare } from 'react-icons/fa';
import Typewriter from 'typewriter-effect';
import { User } from '../Data/userData';

export default function Header() {
	const user = User;

	return (
		<div className="min-w-[50%] space-y-6 border-b-2 bg-aboutBgColor pb-5 text-left hover:text-mainTextColor">
			<div>
				<h1 className="text-4xl font-bold text-bioBorderColor">
					{user.completName}
				</h1>
				<div className="font-bold text-[20divx] text-mainColor">
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
				</div>
			</div>
			<div>
				{' '}
				<p
					dangerouslySetInnerHTML={{
						__html: user.description,
					}}
				/>
			</div>
			<a
				className="flex w-[150px] items-center  justify-center rounded-[5px] border-[2px] border-mainColor bg-mainColor
				 p-3 text-center text-[16px] font-bold transition-[0.5s] hover:bg-transparent hover:text-mainColor"
				href={user.gitHub}
				target="_blank"
				rel="noopener noreferrer"
			>
				<FaShareAltSquare className="text-[18px]" />
				<span className="pl-2 text-mainTextColor"> Ver GitHub</span>
			</a>
		</div>
	);
}
