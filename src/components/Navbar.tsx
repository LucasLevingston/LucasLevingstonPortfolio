import React from 'react';
import { Link } from 'react-router-dom';

let colorHome: string = 'bg-mainColor';
let colorSobre: string = 'bg-mainColor';
let colorProjects: string = 'bg-mainColor';
function corHome() {
	colorHome = 'bg-transparent';
	colorSobre = 'bg-mainColor';
	colorProjects = 'bg-mainColor';
}
function corSobre() {
	colorSobre = 'bg-transparent';
	colorHome = 'bg-mainColor';
	colorProjects = 'bg-mainColor';
}
function corProjects() {
	colorProjects = 'bg-transparent';
	colorSobre = 'bg-mainColor';
	colorHome = 'bg-mainColor';
}

if (window.location.pathname === '/') {
	colorHome = 'bg-transparent';
	colorSobre = 'bg-mainColor';
	colorProjects = 'bg-mainColor';
}
if (window.location.pathname === '/sobre') {
	colorSobre = 'bg-transparent';
	colorHome = 'bg-mainColor';
	colorProjects = 'bg-mainColor';
} else if (window.location.pathname === '/projetos') {
	colorProjects = 'bg-transparent';
	colorHome = 'bg-mainColor';
	colorSobre = 'bg-mainColor';
}

export default function Navbar() {
	return (
		<div className="">
			<ul className="flex list-none justify-center gap-3 text-center md:flex-col  lg:flex-row">
				<li className="mx-0">
					<Link
						className={`text-[16px] font-bold  hover:bg-transparent hover:text-mainTextColor ${colorSobre} m-[25px_0] flex w-[80px] rounded-[5px] border-[2px] border-solid border-mainColor  p-[12px_15px] text-center no-underline transition-[0.5s] md:my-1`}
						to="/sobre"
						onClick={corSobre}
					>
						Sobre
					</Link>
				</li>
				<li className="mx-0">
					<Link
						className={`flex-start text-center font-bold hover:bg-transparent hover:text-mainTextColor ${colorHome} m-[25px_0] flex w-[72px] content-between rounded-[3px] border-[2px] border-solid border-mainColor p-[12px_12px] text-center no-underline transition-[0.5s] md:my-1`}
						to="/"
						onClick={corHome}
					>
						{/* <AiFillHome className="text-xl mainTextColor" / */}
						<span className="text-[16px]font-bold">Home</span>
					</Link>
				</li>
				<li className="mx-0">
					<Link
						className={`hover:text- mx-auto text-[16px] font-bold hover:bg-transparent ${colorProjects} m-[25px_0] flex w-[80px] rounded-[5px] border-[2px] border-solid border-mainColor p-[12px_7px] text-center no-underline transition-[0.5s] hover:text-mainTextColor md:my-1`}
						to="/projetos"
						onClick={corProjects}
					>
						Projetos
					</Link>
				</li>
			</ul>
		</div>
	);
}
