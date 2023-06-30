import React from "react";
import fotoCurriculo from "../assets/FotoCurriculo.jpg";
import { BsInstagram, BsJournalText } from "react-icons/bs";
import { FaFacebookSquare, FaLinkedin } from "react-icons/fa";
import { AiOutlineMail } from "react-icons/ai";
import Navbar from "./Navbar";

export default function Sidebar() {
  return (
    <div className="no-underline hover:no-underline flex flex-col  sm:fixed text-center sm:min-h-screen h-full sm:w-1/4 w-full items-center text-mainTextColor bg-bioBgColor p-[30px_12px] border-r-[5px] border-r-mainTextColor">
      <h1 className="text-[32px] mb-4 font-bold text-bioBorderColor">
        <strong>Lucas Levingston</strong>
      </h1>
      <img
        className="w-[175px] h-[175px] sm:w-28 sm:h-28 rounded-[50%] mb-6 mx-auto"
        id="bio-image"
        src={fotoCurriculo}
        alt="Lucas Levingston"
      />
      <p className="max-w-[100%] p-3 text-center mx-auto text-bioBorderColor">
        Olá, meu nome é Lucas Levingston e sou{" "}
        <span className="text-mainColor">Desenvolvedor Full Stack.</span>
        <p className="font-bold p-[25px] text-mainTextColor">
          <strong>Seja bem-vindo!</strong>
        </p>
      </p>
      <ul
        id="social-container"
        className="w-[200px] flex items-center mx-auto list-none border-b-[1px] border-solid mb-[25px] pb-[25px]"
      >
        <li className="max-w-[60px] mx-auto">
          <a
            className="text-[30px] text-mainColor hover:text-mainColor"
            href="https://www.instagram.com/lucaolevingston/?hl=pt-br"
            target="_blank"
            rel="noopener noreferrer"
          >
            <BsInstagram />
          </a>
        </li>
        <li className="max-w-[60px] mx-auto">
          <a
            className="text-[30px] text-mainColor hover:text-mainColor"
            href="https://www.linkedin.com/in/lucas-levingston-44b851231/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaLinkedin />
          </a>
        </li>
        <li className=" max-w-[60px] mx-auto">
          <a
            className="text-[30px] text-mainColor hover:text-mainColor"
            href="https://www.facebook.com/LucasLevingston"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaFacebookSquare />
          </a>
        </li>
      </ul>
      <div id="email-container" className="flex justify-center w-full">
        <AiOutlineMail className="text-[25px] mr-[5px] max-w-[20px] text-mainColor" />
        <a
          className="text-none max-w-[225px] hover:text-mainTextColor"
          href="mailto:lucaslevingston94@gmail.com"
        >
          lucaslevingston94@gmail.com
        </a>
      </div>
      {/* download curriculo */}
      <div className="flex justify-center w-full">
        <a
          className="hover:bg-transparent font-bold text-[13px]  bg-mainColor border-[3px] border-mainColor rounded-[5px] border-solid no-underline transition-[0.5s] m-[25px_0] p-[12px_10px] w-[150px] text-center flex"
          href="https://docs.google.com/document/d/12krEMbPJzIrSUoN4tKSt3C5REMoSwNpGPSmVNa9UE9I/edit?usp=sharing"
          id="btn-projects"
          target="_blank"
        >
          <span className="flex-[1_1_0] text-mainTextColor">
            Ver curriculo
            {"     "}
          </span>
          <BsJournalText className="text-[18px] ml-[3px] max-w-[20px] fontbo text-mainTextColor" />
        </a>
      </div>
      <Navbar />
    </div>
  );
}
