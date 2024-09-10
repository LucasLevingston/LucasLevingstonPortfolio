import React from 'react';
import { BsGithub, BsInstagram } from 'react-icons/bs';
import { FaLinkedin, FaWhatsapp } from 'react-icons/fa';
import { userEn } from '../data/userData';

export default function SocialBar() {
	const user = userEn;
	return (
		<ul className="mx-auto flex w-[200px] list-none items-center justify-center border-b-[1px] border-solid pb-3">
			<li className="mx-auto max-w-[60px]">
				<a
					className="text-[30px] text-mainColor transition-[1s] hover:text-mainTextColor"
					href={user.gitHub}
					target="_blank"
				>
					<BsGithub className="w-8" />
				</a>
			</li>
			<li className="mx-auto max-w-[60px]">
				<a
					className="text-[30px] text-mainColor transition-[1s] hover:text-mainTextColor"
					href={user.linkedin}
					target="_blank"
					rel="noopener noreferrer"
				>
					<FaLinkedin className="w-8" />
				</a>
			</li>
			<li className="mx-auto max-w-[60px]">
				<a
					className="text-[30px] text-mainColor transition-[1s] hover:text-mainTextColor"
					href={user.whatsapp}
					target="_blank"
					rel="noopener noreferrer"
				>
					<FaWhatsapp className="w-8" />
				</a>
			</li>
			<li className="mx-auto max-w-[60px]">
				<a
					className="text-[30px] text-mainColor transition-[1s] hover:text-mainTextColor"
					href={user.instagram}
					target="_blank"
					rel="noopener noreferrer"
				>
					<BsInstagram className="w-8" />
				</a>
			</li>
		</ul>
	);
}
