import React from "react";
import Sidebar from "../components/Sidebar";
import Header from "../components/Header";
// import ProjectComponents from "../components/ProjectsComponents";
import { FaShareAltSquare } from "react-icons/fa";

export default function Projects() {
  return (
    <div className="flex flex-col lg:flex-row">
      <Sidebar />
      <div className="flex flex-col flex-auto p-12 bg-aboutBgColor">
        <Header />
        <a
          className="hover:bg-transparent font-bold text-[13px] bg-mainColor border-[3px] border-mainColor rounded-[5px] border-solid no-underline transition-[0.5s] m-[25px_0] p-[12px_10px] w-[150px] text-center flex"
          href="https://github.com/LucasLevingston"
          id="btn-projects"
        >
          <FaShareAltSquare className="text-[18px] ml-[2px] max-w-[20px] text-mainTextColor" />
          <span className="text-mainTextColor"> Ver repositórios</span>
        </a>
        <h2 className="border-t border-solid pt-5 border-borderColor mb-5 text-2xl" id="skills-section-title">
         
        </h2>
      </div>
    </div>
  );
}
