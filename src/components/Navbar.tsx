import React from "react";
import { Link } from "react-router-dom";

let colorHome: string = "bg-mainColor";
let colorSobre: string = "bg-mainColor";
let colorProjects: string = "bg-mainColor";
function corHome() {
  colorHome = "bg-transparent";
  colorSobre = "bg-mainColor";
  colorProjects = "bg-mainColor";
}
function corSobre() {
  colorSobre = "bg-transparent";
  colorHome = "bg-mainColor";
  colorProjects = "bg-mainColor";
}
function corProjects() {
  colorProjects = "bg-transparent";
  colorSobre = "bg-mainColor";
  colorHome = "bg-mainColor";
}

if (window.location.pathname === "/") {
  colorHome = "bg-transparent";
  colorSobre = "bg-mainColor";
  colorProjects = "bg-mainColor";
}
if (window.location.pathname === "/sobre") {
  colorSobre = "bg-transparent";
  colorHome = "bg-mainColor";
  colorProjects = "bg-mainColor";
} else if (window.location.pathname === "/projetos") {
  colorProjects = "bg-transparent";
  colorHome = "bg-mainColor";
  colorSobre = "bg-mainColor";
}

export default function Navbar() {
  return (
    <div className="">
      <ul className="flex justify-center list-none text-center md:flex-col lg:flex-row  gap-3">
        <li className="mx-0">
          <Link
            className={`hover:bg-transparent font-bold  text-[16px] hover:text-mainTextColor ${colorSobre} border-[2px] border-mainColor rounded-[5px] border-solid no-underline transition-[0.5s] m-[25px_0]  p-[12px_15px] w-[80px] md:my-1 text-center flex`}
            to="/sobre"
            onClick={corSobre}
          >
            Sobre
          </Link>
        </li>
        <li className="mx-0">
          <Link
            className={`hover:bg-transparent flex-start text-center hover:text-mainTextColor font-bold ${colorHome} border-[2px] border-mainColor rounded-[3px] border-solid no-underline transition-[0.5s] m-[25px_0] p-[12px_12px] w-[72px] md:my-1 text-center flex content-between`}
            to="/"
            onClick={corHome}
          >
            {/* <AiFillHome className="text-xl mainTextColor" / */}
            <span className="text-[16px]font-bold">Home</span>
          </Link>
        </li>
        <li className="mx-0">
          <Link
            className={`hover:bg-transparent mx-auto font-bold text-[16px] hover:text- ${colorProjects} hover:text-mainTextColor border-[2px] border-mainColor rounded-[5px] border-solid no-underline transition-[0.5s] m-[25px_0] p-[12px_7px] md:my-1 w-[80px] text-center flex`}
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
