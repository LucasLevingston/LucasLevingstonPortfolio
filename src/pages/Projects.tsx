import React from "react";
import Sidebar from "../components/Sidebar";
import Header from "../components/Header";
import ProjectsComponents, { Project } from "../components/ProjectsComponents";
import { FaShareAltSquare } from "react-icons/fa";
import CRM1 from "../assets/CRM1.png";
import CRM2 from "../assets/CRM2.png";
import CRM3 from "../assets/CRM3.png";
import CM1 from "../assets/CampoMinado1.jpg";
import CM2 from "../assets/CampoMinado2.jpg";
import CM3 from "../assets/CampoMinado3.jpg";
import CALC1 from "../assets/Calc1.jpg";
import CALC2 from "../assets/Calc2.jpg";
import MP1 from "../assets/MP1.png";
import MP2 from "../assets/MP2.png";
import MP3 from "../assets/MP3.png";

const projetos: Project[] = [
  {
    name: "CRM",
    sobre:
      "Este projeto está sendo desenvolvido no estágio. É um sistema de CRM, responsável pela integração dos dados obtidos pelos vendedores e armazenando os mesmos no banco de dados mongoDB com uma automação de envio de mensagens de texto para vendas, desde a entrada de dados de um cliente utilizando uma interface desenvolvida em React até a automação do envio de mensagens de WhatsApp. Javascript é a linguagem utilizada tanto no frontend quanto no backend, usando React e Node (com Express) respectivamente. Também foi utilizada a biblioteca Tailwind. Eu juntamente com minha equipe também entramos na área de Engenharia para desenvolvimento do projeto, utilizando diagrama de casos de uso, diagrama de classe, etc.",
    images: [CRM1, CRM2, CRM3],
    link: "",
  },
  {
    name: "Campo Minado",
    sobre:
      "Campo minado foi um projeto na linguagem Java de um jogo já existente, onde o objetivo do jogo é o usuário abrir todos os campos do jogo sem abrir nenhum campo que esteja minado, caso ele abra, irá perder o jogo. Para a abertura de campos, utilizei o padrão observer. Quando tem um campo que esteja minado, os campos vizinhos irão avisar que tem entre 1 e 4 campos minados dentre os seus vizinhos. Com isso, abrindo campo por campo, até completar o jogo. Na parte gráfica utilizei o Jbutton, onde cada campo representa um botão. Utilizei a biblioteca do JUnit para os testes da aplicação.",
    images: [CM1, CM2, CM3],

    link: "https://github.com/LucasLevingston/Campo_Minado",
  },
  {
    name: "Meu Portfólio ",
    sobre:
      "Como forma de aprendizado, desenvolvi meu portfólio  utilizando o framework React. Utilizando a linguagem TypeScript e o Tailwind CSS para estilização. Foi meu primeiro contato com React e o pontapé para projetos futuros.",
    images: [MP1, MP2, MP3],
    link: "https://github.com/LucasLevingston/LucasLevingstonPortifolio",
  },
  {
    name: "Calculadora",
    sobre:
      "Calculadora em Java utilizando o padrão Observer e orientação a objetos, com interface gráfica Swing e suporte para adição, subtração, multiplicação e divisão. Aplicação modular e interativa, atualizando a tela em tempo real. Exemplo de código organizado e habilidades em desenvolvimento Java.",
    images: [CALC1, CALC2],
    link: "https://github.com/LucasLevingston/Calculadora.git",
  },
];

export default function Projects() {
  return (
    <div className="flex flex-col sm:flex-row w-full bg-aboutBgColor h-full">
      <Sidebar />
      <div className="flex flex-col sm:max-w-[75%]  ml-auto mr-0 p-8 lg:p-12 pb-0  bg-aboutBgColor">
        <Header />
        <a
          className="hover:bg-transparent font-bold text-[13px] bg-mainColor border-[3px] border-mainColor rounded-[5px] border-solid no-underline transition-[0.5s] m-[25px_0] p-[12px_10px] w-[150px] text-center flex"
          href="https://github.com/LucasLevingston"
          id="btn-projects"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaShareAltSquare className="text-[18px]  ml-[2px] max-w-[20px]  text-mainTextColor" />
          <span className="flex-[1_1_0]  text-mainTextColor  ">Ver GitHub</span>
        </a>
        <h2
          className="border-t border-solid pt-5 text-mainTextColor border-mainTextColor mb-0 text-2xl"
          id="skills-section-title"
        >
          Meus Projetos
        </h2>
        <div>
          {projetos.map((projeto) => (
            <ProjectsComponents
              key={projeto.name}
              name={projeto.name}
              sobre={projeto.sobre}
              images={projeto.images}
              link={projeto.link}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
