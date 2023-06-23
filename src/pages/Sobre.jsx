import React from "react";
import Sidebar from "../components/Sidebar";
import Header from "../components/Header";
import { FaShareAltSquare } from "react-icons/fa";

export default function Home() {
  return (
    <div className="w-full flex flex-col sm:flex-row h-full">
      <Sidebar />
       <div className="flex-1 p-[50px] bg-aboutBgColor">
        <Header />
        <div className="overflow-y-auto">
          <p className="max-w-[75%] mb-[10px]">
            Tenho 20 anos, sou estudante do sexto período de ciência da
            computação e sou desenvolvedor FullStack. Gosto de participar de
            projetos desde a{" "}
            <span className="text-mainColor">
              definição das regras de negócio e levantamento de requisitos{" "}
            </span>
            até o <span className="text-mainColor">deploy da aplicação.</span>
          </p>
          <p className="max-w-[75%] mb-4">
            Atualmente estou atuando como estagiário na empresa Splendore, na
            qual desempenho a função de{" "}
            <span className="text-mainColor">Desenvolvedor Web.</span>
          </p>
          <a
            className="hover:bg-transparent font-bold text-[13px]  bg-mainColor border-[3px] border-mainColor rounded-[5px] border-solid no-underline transition-[0.5s] m-[25px_0] p-[12px_10px] w-[150px] text-center flex"
            href="https://github.com/LucasLevingston"
            id="btn-projects"
          >
            <FaShareAltSquare className="text-[18px] ml-[2px] max-w-[20px] text-mainTextColor" />
            <span className="flex-[1_1_0] text-mainTextColor">
              {" "}
              Ver repositórios
            </span>
          </a>
          <h2 className="border-t-[1px] border-solid pt-5 border-borderColor mb-5 text-[32px]" id="skills-section-title">
            Minhas Skills
          </h2>
          <p className="description">Conheça as tecnologias que domino:</p>
          <div className="flex flex-wrap mt-5" id="skills-container">
            <div className="w-full sm:w-[33%] mb-8">
              <p className="text-2xl mb-4 font-bold pl-2 border-l-[5px] border-solid border-mainColor">
                Front-End
              </p>
              <i className="devicon-html5-plain colored text-4xl mr-2"></i>
              <i className="devicon-css3-plain colored text-4xl mr-2"></i>
              <i className="devicon-javascript-plain colored text-4xl mr-2"></i>
              <i className="devicon-tailwindcss-plain colored text-4xl mr-2"></i>
            </div>
            <div className="w-full sm:w-[33%] mb-8">
              <p className="text-2xl mb-4 font-bold pl-2 border-l-[5px] border-solid border-mainColor">
                Back-End
              </p>
              <i className="devicon-java-plain colored text-4xl mr-2"></i>
              <i className="devicon-python-plain colored text-4xl mr-2"></i>
              <i className="devicon-nodejs-plain colored text-4xl mr-2"></i>
            </div>
            <div className="w-full sm:w-[33%] mb-8">
              <p className="text-2xl mb-4 font-bold pl-2 border-l-[5px] border-solid border-mainColor">
                Databases
              </p>
              <i className="devicon-postgresql-plain colored text-4xl mr-2"></i>
              <i className="devicon-mysql-plain colored text-4xl mr-2"></i>
              <i className="devicon-mongodb-plain colored text-4xl mr-2"></i>
            </div>
            <div className="w-full sm:w-[33%] mb-8">
              <p className="text-2xl mb-4 font-bold pl-2 border-l-[5px] border-solid border-mainColor">
                Front-End Frameworks
              </p>
              <i className="devicon-react-plain colored text-4xl mr-2"></i>
            </div>
            <div className="w-full sm:w-[33%] mb-8">
              <p className="text-2xl mb-4 font-bold pl-2 border-l-[5px] border-solid border-mainColor">
                Back-End Frameworks
              </p>
              <i className="devicon-express-original colored text-4xl mr-2"></i>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
