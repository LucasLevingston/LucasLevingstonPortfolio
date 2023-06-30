import React from "react";
export interface Project {
  name: string;
  sobre: string;
  image1: string;
  image2: string;
  image3: string;
}
export default function ProjectsComponents(projeto: Project) {
  return (
    <div className="text-mainTextColor flex flex-[1_1_80%] flex-col p-[50px] bg-aboutBgColor ">
      <h1 className="text-bold">{projeto.name}</h1>
      <br />
      <p>{projeto.sobre}</p>
      <div className="w-full h full rounded-2xl bg-center bg-cover duration-500">
        <img
          className="sm:w-auto sm:h-[280px]  mb-6 mx-auto"
          src={projeto.image1}
          alt="foto 1"
        />
        <img
          className="sm:w-auto sm:h-[280px]  mb-6 mx-auto"
          src={projeto.image2}
          alt="foto 2"
        />
        <img
          className="sm:w-auto sm:h-[280px]  mb-6 mx-auto"
          src={projeto.image3}
          alt="foto 3"
        />
      </div>
    </div>
  );
}
