import React from "react";
import { Link } from "react-router-dom";
import { AiFillHome } from "react-icons/ai";

export default function Navbar() {
  return (
    <nav className="">
      <ul className="flex justify-center list-none text-center gap-3">
        <li className="mx-0">
          <Link
            className="hover:bg-transparent flex-start 2xl:text-[40px] 2xl:border-[30px] 2xl:pr-28  hover:text-mainTextColor bg-mainColor border-[2px] border-mainColor rounded-[3px] border-solid no-underline transition-[0.5s] m-[25px_0] p-[12px_12px] w-[80px] text-center flex content-between"
            to="/"
          >
            <span className="text-[16px]font-bold">Home</span>

            {/* <AiFillHome className="text-[16px] mainTextColor"/> */}
          </Link>
        </li>
        <li className="mx-0">
          <Link
            className="hover:bg-transparent font-bold 2xl:text-[40px] 2xl:border-[30px] 2xl:pr-28 text-[16px] hover:text-mainTextColor bg-mainColor border-[2px] border-mainColor rounded-[5px] border-solid no-underline transition-[0.5s] m-[25px_0] p-[12px_14px] w-[80px] text-center flex"
            to="/sobre"
          >
            Sobre
          </Link>
        </li>
        <li className="mx-0">
          <Link
            className="hover:bg-transparent mx-auto font-bold 2xl:text-[40px] 2xl:border-[30px] 2xl:pr-36 text-[16px] hover:text-mainTextColor bg-mainColor border-[2px] border-mainColor rounded-[5px] border-solid no-underline transition-[0.5s] m-[25px_0] p-[12px_5px] w-[80px] text-center flex"
            to="/projetos"
          >
            Projetos
          </Link>
        </li>
      </ul>
    </nav>
  );
}
