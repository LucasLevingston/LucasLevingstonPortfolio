import React from "react";
import fotoCurriculo from "../assets/FotoCurriculo.jpg";
import { BsInstagram } from "react-icons/bs";
import { FaFacebookSquare, FaLinkedin } from "react-icons/fa";
import { AiOutlineMail } from "react-icons/ai";
import Navbar from "./Navbar";

export default function Sidebar() {
  return (
    <div className="no-underline hover:no-underline flex flex-col text-center sm:min-h-screen h-full sm:w-1/4 w-full items-center text-mainTextColor bg-bioBgColor p-[30px_12px] border-r-[5px] border-r-mainTextColor">
      <h1 className="text-[32px] mb-4 font-bold text-bioBorderColor">
        <strong>Lucas Levingston</strong>
      </h1>
      <img
        className="w-[175px] h-[175px] rounded-[50%] mb-6 mx-auto"
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
      <Navbar />
    </div>
  );
}
