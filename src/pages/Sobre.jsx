import React from "react";
import Sidebar from "../components/Sidebar";
import Header from "../components/Header";
import { FaShareAltSquare } from "react-icons/fa";

export default function Home() {
  return (
    <div className="w-[100%] flex font-normal ">
      <Sidebar />
      <div className="text-mainTextColor flex flex-[1_1_80%] flex-col p-[50px] bg-aboutBgColor">
        <Header />
        <div className="flex-[1_1_80%] max-h-[100%]">
          <p className="max-w-[75%] mb-[10px]">
            Tenho 20 anos, sou estudante do sexto período de ciência da
            computação e sou desenvolvedor FullStack. Gosto de participar de
            projetos desde a{" "}
            <span className="text-mainColor">
              definição das regras de negócio e levantamento de requisitos{" "}
            </span>
            até o <span className="text-mainColor"> deploy da aplicação.</span>
          </p>
          <p className="max-w-[75%] mb-[10px]">
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
          <h2
            className="border-t-[1px] border-solid pt-[20px] border-borderColor mb-[20px] text-[32px]"
            id="skills-section-title"
          >
            Minhas Skills
          </h2>
          <p class="description">Conheca as tecnologias que domino:</p>
          <div className="flex flex-wrap mt-[25px]" id="skills-container">
            <div className="flex-[1_1_33%] max-w-[33%] mb-[35px]">
              <p className="text-[24px] mb-[25px] font-bold pl-[10px] border-l-[5px] border-solid border-mainColor">
                Front-End
              </p>
              <i className="devicon-html5-plain colored text-[35px] mr-[10px]"></i>
              <i className="devicon-css3-plain colored text-[35px] mr-[10px]"></i>
              <i className="devicon-javascript-plain colored text-[35px] mr-[10px]"></i>
              <i className="devicon-tailwindcss-plain colored text-[35px] mr-[10px]"></i>
            </div>
            <div className="flex-[1_1_33%] max-w-[33%] mb-[35px]">
              <p className="text-[24px] mb-[25px] font-bold pl-[10px] border-l-[5px] border-solid border-mainColor">
                Back-End
              </p>
              <i className="devicon-java-plain colored text-[35px] mr-[10px]"></i>
              <i className="devicon-python-plain colored text-[35px] mr-[10px]"></i>
              <i className="devicon-nodejs-plain colored text-[35px] mr-[10px]"></i>
            </div>
            <div className="flex-[1_1_33%] max-w-[33%] mb-[35px]">
              <p className="text-[24px] mb-[25px] font-bold pl-[10px] border-l-[5px] border-solid border-mainColor">
                Databases
              </p>
              <i className="devicon-postgresql-plain colored text-[35px] mr-[10px]"></i>
              <i className="devicon-mysql-plain colored text-[35px] mr-[10px]"></i>
              <i className="devicon-mongodb-plain colored text-[35px] mr-[10px]"></i>
            </div>
            <div className="flex-[1_1_33%] max-w-[33%] mb-[35px]">
              <p className="text-[24px] mb-[25px] font-bold pl-[10px] border-l-[5px] border-solid border-mainColor">
                Front-End Frameworks
              </p>
              <i className="devicon-react-plain colored text-[35px] mr-[10px]"></i>
            </div>
            <div className="flex-[1_1_33%] max-w-[33%] mb-[35px]">
              <p className="text-[24px] mb-[25px] font-bold pl-[10px] border-l-[5px] border-solid border-mainColor">
                Back-End Frameworks
              </p>
              <i className="devicon-express-original colored text-[35px] mr-[10px]"></i>
              {/* <i className="devicon-spring-plain colored text-[35px] mr-[10px]"></i> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
