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
      <img src={projeto.image1} alt="" />
      <img src={projeto.image2} alt="" />
      <img src={projeto.image3} alt="" />
    </div>
  );
}
