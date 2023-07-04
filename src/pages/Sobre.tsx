import React from "react";
import Sidebar from "../components/Sidebar";
import Header from "../components/Header";
import { FaShareAltSquare } from "react-icons/fa";

export default function Home() {
  return (
    <div className="w-full flex flex-col sm:flex-row h-full text-mainTextColor">
      <Sidebar />
      <div className="flex-1 p-[50px]  sm:max-w-[75%] ml-auto mr-0 bg-aboutBgColor">
        <Header />
        <div className="overflow-y-auto">
          <p className="max-w-[100%] mb-[10px] m-[5px] 2xl:pr-0 2xl:text-[40px] 2xl:leading-[60px]">
            Tenho 20 anos, sou estudante do sexto período de ciência da
            computação e sou desenvolvedor FullStack. Gosto de participar de
            projetos desde a{" "}
            <span className="text-mainColor">
              definição das regras de negócio e levantamento de requisitos{" "}
            </span>
            até o <span className="text-mainColor">deploy da aplicação.</span>
          </p>
          <p className="max-w-[100%] mb-4 2xl:text-[40px] 2xl:leading-[60px]">
            Atualmente estou atuando como estagiário na empresa Splendore, na
            qual desempenho a função de{" "}
            <span className="text-mainColor">Desenvolvedor Web.</span>
          </p>
          <a
            className="hover:bg-transparent font-bold text-[13px] bg-mainColor border-[3px] border-mainColor rounded-[5px] border-solid no-underline transition-[0.5s] m-[25px_0] p-[12px_10px] 2xl:w-[400px] w-[150px] text-center flex"
            href="https://github.com/LucasLevingston"
            id="btn-projects"
          >
            <FaShareAltSquare className="text-[18px] 2xl:text-[40px] ml-[2px] max-w-[20px] 2xl:max-w-[40px] text-mainTextColor" />
            <span className="flex-[1_1_0]  text-mainTextColor 2xl:text-[40px] 2xl:leading-[60px]">
              {" "}
              Ver GitHub
            </span>
          </a>
          <h2
            className="border-t-[1px] 2xl:text-7xl border-solid pt-10 border-borderColor mb-5 text-[32px]"
            id="skills-section-title"
          >
            Minhas Skills
          </h2>
          <p className="text-2xl 2xl:text-6xl 2xl:pb-2 2xl:pt-10">
            Conheça as tecnologias que domino:
          </p>
          <div className="flex flex-wrap mt-5" id="skills-container">
            <div className="w-full 2xl:p-5 sm:w-[33%] mb-8">
              <p className="text-xl  2xl:text-5xl mb-4 font-bold pl-2 border-l-[5px] border-solid 2xl:border-l-[10px] border-mainColor">
                Front-End
              </p>
              <i className="devicon-html5-plain colored text-4xl mr-2 ml-3 2xl:text-8xl"></i>
              <i className="devicon-css3-plain colored text-4xl mr-2 2xl:text-8xl"></i>
              <i className="devicon-javascript-plain colored text-4xl mr-2 2xl:text-8xl"></i>
              <i className="devicon-typescript-plain colored text-4xl mr-2 2xl:text-8xl"></i>
              <i className="devicon-tailwindcss-plain colored text-4xl mr-2 2xl:text-8xl"></i>
            </div>
            <div className="w-full 2xl:p-5 sm:w-[33%] mb-8">
              <p className="text-xl  2xl:text-5xl mb-4 font-bold pl-2 border-l-[5px] border-solid 2xl:border-l-[10px] border-mainColor">
                Back-End
              </p>
              <i className="devicon-java-plain colored text-4xl mr-2 ml-3 2xl:text-8xl"></i>
              <i className="devicon-python-plain colored text-4xl mr-2 2xl:text-8xl"></i>
              <i className="devicon-nodejs-plain colored text-4xl mr-2 2xl:text-8xl"></i>
            </div>
            <div className="w-full 2xl:p-5 sm:w-[33%] mb-8">
              <p className="text-xl  2xl:text-5xl mb-4 font-bold pl-2 border-l-[5px] border-solid 2xl:border-l-[10px] border-mainColor">
                Databases
              </p>
              <i className="devicon-postgresql-plain colored text-4xl mr-2 ml-3 2xl:text-8xl"></i>
              <i className="devicon-mysql-plain colored text-4xl mr-2 2xl:text-8xl"></i>
              <i className="devicon-mongodb-plain colored text-4xl mr-2 2xl:text-8xl"></i>
            </div>
            <div className="w-full 2xl:p-5 sm:w-[33%] mb-8">
              <p className="text-xl  2xl:text-5xl mb-4 font-bold pl-2 border-l-[5px] border-solid 2xl:border-l-[10px] border-mainColor">
                Front-End Frameworks
              </p>
              <i className="devicon-react-plain colored text-4xl mr-2 ml-3 2xl:text-8xl"></i>
            </div>
            <div className="w-full 2xl:p-5 sm:w-[33%] mb-8">
              <p className="text-xl  2xl:text-5xl mb-4 font-bold pl-2 border-l-[5px] border-solid 2xl:border-l-[10px] border-mainColor">
                Back-End Frameworks
              </p>
              <i className="devicon-express-original colored text-4xl mr-2 ml-3 2xl:text-8xl"></i>
            </div>
            <div className="w-full 2xl:p-5 sm:w-[33%] mb-8">
              <p className="text-xl  2xl:text-5xl mb-4 font-bold pl-2 2xl:border-l-[10px] border-l-[5px] border-solid border-mainColor">
                Ferramentas
              </p>
              <i className="devicon-docker-plain-wordmark colored text-4xl mr-2 ml-3 2xl:text-8xl"></i>
            </div>
          </div>
          <div>
            <div className="text-2xl pb-2 2xl:text-6xl 2xl:pb-10 2xl:pt-7">
              Minhas experiências:
            </div>
            <div className="2xl:pb-8 xl:pb-3">
              <h3 className="text-xl 2xl:text-5xl sm:border-l-[5px] border-l-[5px] 2xl:border-l-[10px] border-mainColor pl-3 xl:border-l-[5px]">
                Splendore - Patos, PB (atual)
              </h3>
              <p className="2xl:text-4xl pl-10 pt-3">Inicio: 06/2023</p>
              <p className="2xl:text-4xl pl-10 pt-3">
                Cargo: Estagiário de Desenvolvedor Web
              </p>
            </div>
            <div className=" 2xl:pb-8 xl:pb-3">
              <h3 className="text-xl 2xl:text-5xl sm:border-l-[5px] border-l-[5px] 2xl:border-l-[10px] border-mainColor pl-3 xl:border-l-[5px]">
                EndoDerm - Patos, PB
              </h3>
              <p className="2xl:text-4xl pl-10 pt-3">
                Inicio: 06/2022 - Fim: 10/2022
              </p>
              <p className="2xl:text-4xl pl-10 pt-3 lg:pb-6">
                Cargo: Atendente de consultório médico
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
