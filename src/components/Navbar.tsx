import React from 'react';
import { Link } from 'react-router-dom';

let colorInicio: string = 'bg-mainColor';
let colorSobre: string = 'bg-mainColor';
let colorProjects: string = 'bg-mainColor';
function corInicio() {
	colorInicio = 'bg-transparent';
	colorSobre = 'bg-mainColor';
	colorProjects = 'bg-mainColor';
}
function corSobre() {
	colorSobre = 'bg-transparent';
	colorInicio = 'bg-mainColor';
	colorProjects = 'bg-mainColor';
}
function corProjects() {
	colorProjects = 'bg-transparent';
	colorSobre = 'bg-mainColor';
	colorInicio = 'bg-mainColor';
}

if (window.location.pathname === '/') {
	colorInicio = 'bg-transparent';
	colorSobre = 'bg-mainColor';
	colorProjects = 'bg-mainColor';
}
if (window.location.pathname === '/sobre') {
	colorSobre = 'bg-transparent';
	colorInicio = 'bg-mainColor';
	colorProjects = 'bg-mainColor';
} else if (window.location.pathname === '/projetos') {
	colorProjects = 'bg-transparent';
	colorInicio = 'bg-mainColor';
	colorSobre = 'bg-mainColor';
}

export default function Navbar() {
	return (
		<div >
			<div className="flex list-none lg:flex-row justify-center gap-3 no-underline text-center font-bold md:flex-col">
				<button >
					<Link
						className={`flex justify-center text-[16px] hover:bg-transparent hover:text-mainColor ${colorSobre}
						  w-[80px] rounded-[5px] border-[2px] border-mainColor  p-[12px_12px]  transition-[0.5s]`}
						to="/sobre"
						onClick={corSobre}
					>
						Sobre
					</Link>
				</button>
				<button>
					<Link
						className={` flex justify-center text-[16px]  hover:bg-transparent  hover:text-mainColor ${colorInicio}
						 w-[80px]  rounded-[5px] border-[2px] border-mainColor p-[12px_12px]  transition-[0.5s]`}
						to="/"
						onClick={corInicio}
					>
						Inicio
					</Link>
				</button>
				<li >
					<Link
						className={` flex justify-center text-[16px] hover:bg-transparent hover:text-mainColor ${colorProjects}
						 w-[80px] rounded-[5px] border-[2px] border-mainColor  p-[12px_12px]  transition-[0.5s]`}
						to="/projetos"
						onClick={corProjects}
					>
						Projetos
					</Link>
				</li>
			</div>
		</div>
	);
}
