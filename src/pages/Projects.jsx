import React from "react";
import Sidebar from "../components/Sidebar";
import Header from "../components/Header";
import ProjectComponents from "../components/ProjectsComponents";
import { FaShareAltSquare } from "react-icons/fa";

export default function Projects(name, sobre, imagem1, imagem2, imagem3) {
  return (
    <div className="w-[100%] flex font-normal ">
      <Sidebar />
      <div className="text-mainTextColor flex flex-col flex-[1_1_80%] p-[50px] bg-aboutBgColor">
        <Header />
        {/* Projects: */}
        {/* <ProjectComponents /> */}
        <a
          className="hover:bg-transparent font-bold text-[13px] bg-mainColor border-[3px] border-mainColor rounded-[5px] border-solid no-underline transition-[0.5s] m-[25px_0] p-[12px_10px] w-[150px] text-center flex"
          href="https://github.com/LucasLevingston"
          id="btn-projects"
        >
          <FaShareAltSquare className="text-[18px] ml-[2px] max-w-[20px] text-mainTextColor" />
          <span className="text-mainTextColor"> Ver repositórios</span>
        </a>
        <h2
          className="border-t-[1px] border-solid pt-[20px] border-borderColor mb-[20px] text-[32px]"
          id="skills-section-title"
        ></h2>
      </div>
    </div>
  );
}
