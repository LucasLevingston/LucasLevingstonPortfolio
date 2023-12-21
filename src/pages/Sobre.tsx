import React from "react";
import Sidebar from "../components/Sidebar";
import Header from "../components/Header";
import { FaShareAltSquare } from "react-icons/fa";
import { DiScrum } from "react-icons/di";
import { SiPostman } from "react-icons/si";

export default function Home() {
  return (
    <div className=" text-mainTextColor">
      <Sidebar />
      <div className="flex-1 p-[50px]  sm:max-w-[75%] ml-auto mr-0 bg-aboutBgColor">
        <Header />
        <div className="overflow-y-auto">
          <p className="max-w-[100%]  ">
            Sou um desenvolvedor apaixonado pelo que faço. Costumo dizer que
            “quem faz o que gosta vive de férias”. Por isso estou sempre
            querendo aprender algo novo que me ajude a ser um desenvolvedor cada
            vez melhor. Estou com
            <span className="text-mainColor"> 6 meses de experiência </span>e já
            atuei tanto no back end como no front end, utilizando{" "}
            <span className="text-mainColor">
              {" "}
              React, Typescript, Tailwind, Mongo, Prisma, Express e Docker.
            </span>
          </p>
          <br />
          <p className="max-w-[100%] mb-4 ">
            Atualmente estou atuando como estagiário na empresa Splendore, na
            qual desempenho a função de{" "}
            <span className="text-mainColor">Desenvolvedor Web.</span>
          </p>
          <a
            className="hover:bg-transparent font-bold text-[13px] bg-mainColor hover:text-mainColor border-[3px] border-mainColor rounded-[5px] border-solid no-underline transition-[0.5s] m-[25px_0] p-[12px_10px] ] w-[150px] text-center flex"
            href="https://github.com/LucasLevingston"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaShareAltSquare className="text-[22px]  " />
            <span className=" pl-3  text-mainTextColor"> Ver GitHub</span>
          </a>
          <h2
            className="border-t-[1px] font-bold border-solid pt-10 border-mainTextColor mb-5 text-[32px]"
          >
            Minhas Skills
          </h2>
          <div className="border-b-[1px]  border-solid pt-3  border-borderColor">
            <p className="text-2xl font-bold ">
              Conheça as tecnologias que domino:
            </p>
            <div className="flex flex-wrap mt-5">
              <div className="w-full  sm:w-[33%] mb-8">
                <p className="text-xl  mb-4 font-bold pl-2 border-l-[5px] border-solid border-mainColor">
                  Linguagens de programação
                </p>
                <i className="devicon-html5-plain colored text-4xl mr-2 ml-3"></i>
                <i className="devicon-css3-plain colored text-4xl mr-2"></i>
                <i className="devicon-javascript-plain colored text-4xl mr-2"></i>
                <i className="devicon-typescript-plain colored text-4xl mr-2"></i>
                <i className="devicon-java-plain colored text-4xl mr-2 "></i>
                <i className="devicon-python-plain colored text-4xl mr-2"></i>
              </div>

              <div className="w-full  sm:w-[33%] mb-8">
                <p className="text-xl   mb-4 font-bold pl-2 border-l-[5px] border-solid border-mainColor">
                  Front-End Frameworks
                </p>
                <i className="devicon-react-plain colored text-4xl mr-2 ml-3"></i>
                <i className="devicon-tailwindcss-plain colored text-4xl "></i>
                <i className="devicon-nextjs-original text-4xl mr-2 ml-3"></i>
              </div>
              <div className="w-full  sm:w-[33%] mb-8">
                <p className="text-xl   mb-4 font-bold pl-2 border-l-[5px] border-solid border-mainColor">
                  Back-End Frameworks
                </p>
                <i className="devicon-express-original text-4xl mr-2 ml-3"></i>
              </div>
              <div className="w-full  sm:w-[33%] mb-8">
                <p className="text-xl   mb-4 font-bold pl-2 border-l-[5px] border-solid border-mainColor">
                  Databases
                </p>
                <i className="devicon-postgresql-plain colored text-4xl mr-2 ml-3"></i>
                <i className="devicon-mysql-plain colored text-4xl mr-2"></i>
                <i className="devicon-mongodb-plain colored text-4xl mr-2"></i>
              </div>
              <div className="w-full  sm:w-[33%] mb-8 ">
                <p className="text-xl mb-4 font-bold pl-2 flex border-l-[5px] border-solid border-mainColor">
                  Ferramentas
                </p>
                <div className="flex">
                  <i className="devicon-docker-plain-wordmark colored text-4xl mr-2 ml-3"></i>
                  <i className="devicon-git-plain-wordmark colored text-4xl mr-2 ml-3"></i>
                  <i className="devicon-github-original-wordmark text-4xl mr-2 ml-3"></i>
                  <SiPostman className="text-4xl mr-2 ml-3 " />
                </div>
              </div>
              <div className="w-full  sm:w-[33%] mb-8">
                <p className="text-xl   mb-4 font-bold pl-2 border-l-[5px] border-solid border-mainColor">
                  Metodologias Ágeis{" "}
                </p>
                <div className="flex">
                  <DiScrum className=" colored text-5xl mr-2 ml-3" />
                </div>
              </div>
            </div>
          </div>
          <div className="border-b-[1px]  border-solid pt-3 border-borderColor">
            <div className="text-2xl pb-2  pt-5 font-bold ">
              Minhas experiências:
            </div>
            <div className=" xl:pb-3">
              <h3 className="text-xl  sm:border-l-[5px] font-bold border-l-[5px] border-mainColor pl-3 xl:border-l-[5px]">
                Splendore - Patos, PB (atual)
              </h3>
              <p className=" pl-10 pt-3">Inicio: 06/2023</p>
              <p className=" pl-10 pt-3">
                Cargo: Estagiário de Desenvolvedor Web
              </p>
              <p className=" pl-10 pt-3">
                Trabalho com desenvolvimento web. Desenvolvendo tanto o Back e o
                Front de aplicações utilizando React, Typescript, Tailwind,
                Mongo, Prisma, Express e Docker.
              </p>
            </div>
            <div className="pt-5 pb-5">
              <h3 className="text-xl sm:border-l-[5px] border-l-[5px] font-bold border-mainColor pl-3 xl:border-l-[5px]">
                EndoDerm - Patos, PB
              </h3>
              <p className=" pl-10 pt-3">Inicio: 06/2022 - Fim: 10/2022</p>
              <p className=" pl-10 pt-3 ">
                Cargo: Atendente de consultório médico
              </p>
              <p className=" pl-10 pt-3">
                Realizava agendamento de consultas, organização de planilhas e
                atendimento ao público.
              </p>
            </div>
          </div>
          <div>
            <div className="text-2xl pb-2  pt-5 font-bold ">Formação:</div>
            <div className=" pb-3">
              <h3 className="text-xl  sm:border-l-[5px] border-l-[5px] font-bold border-mainColor pl-3 xl:border-l-[5px]">
                Graduação em Ciências da Computação
              </h3>
              <p className=" pl-10 pt-3">
                Universidade Estadual da Paraíba (UEPB)
              </p>
              <p className=" pl-10 pt-3">
                Agosto/2020 - Agosto/2025 (previsto)
              </p>
              <p className=" pl-10 pt-3">
                Atualmente no{" "}
                <span className="text-mainColor">8º/10 semestre.</span>
              </p>
            </div>
            <div className="pt-5">
              <h3 className="text-xl  sm:border-l-[5px] border-l-[5px] font-bold border-mainColor pl-3 xl:border-l-[5px]">
                Graduação em Engenharia Civil
              </h3>
              <p className=" pl-10 pt-3">
                Centro Universitário de Patos (UNIFIP)
              </p>
              <p className=" pl-10 pt-3 lg:pb-6">
                Fevereiro/2020 - Julho/2020 (1 semestre)
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
