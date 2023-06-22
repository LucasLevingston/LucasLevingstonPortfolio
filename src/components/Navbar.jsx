import React from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="">
      <ul className="flex justify-center list-none text-center gap-3">
        <li className="mx-0">
          <Link
            className="hover:bg-transparent flex-start font-bold text-[16px] hover:text-mainTextColor bg-mainColor border-[2px] border-mainColor rounded-[3px] border-solid no-underline transition-[0.5s] m-[25px_0] p-[12px_12px] w-[80px] text-center flex"
            to="/LucasLevingston.github.io"
          >
            {/* <img src={fotoCurriculo} alt="" /> */}Home
          </Link>
        </li>
        <li className="mx-0">
          <Link
            className="hover:bg-transparent font-bold text-[16px] hover:text-mainTextColor bg-mainColor border-[2px] border-mainColor rounded-[5px] border-solid no-underline transition-[0.5s] m-[25px_0] p-[12px_14px] w-[80px] text-center flex"
            to="/LucasLevingston.github.io/sobre"
          >
            Sobre
          </Link>
        </li>
        <li className="mx-0">
          <Link
            className="hover:bg-transparent mx-auto font-bold text-[16px] hover:text-mainTextColor bg-mainColor border-[2px] border-mainColor rounded-[5px] border-solid no-underline transition-[0.5s] m-[25px_0] p-[12px_5px] w-[80px] text-center flex"
            to="/LucasLevingston.github.io/projetos"
          >
            Projetos
          </Link>
        </li>
      </ul>
    </nav>
  );
}
