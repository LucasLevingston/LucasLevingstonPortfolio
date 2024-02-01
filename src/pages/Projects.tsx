import React from "react";
import Sidebar from "../components/Sidebar";
import Header from "../components/Header";
import ProjectsComponents, { Project } from "../components/ProjectsComponents";
import { FaShareAltSquare } from "react-icons/fa";
import SP1 from "../assets/SPOTIFY1.png";
import SP2 from "../assets/SPOTIFY2.png";
import SP3 from "../assets/SPOTIFY3.png";
import CM1 from "../assets/CampoMinado1.jpg";
import CM2 from "../assets/CampoMinado2.jpg";
import CM3 from "../assets/CampoMinado3.jpg";
import CALC1 from "../assets/Calc1.jpg";
import CALC2 from "../assets/Calc2.jpg";
import CALC3 from "../assets/Calc3.jpg";
import MP1 from "../assets/MP1.png";
import MP2 from "../assets/MP2.png";
import MP3 from "../assets/MP3.png";
import F1 from "../assets/Flexibble1.jpg";
import F2 from "../assets/Flexibble2.jpg";
import F3 from "../assets/Flexibble3.jpg";
import T1 from "../assets/threads1.png";
import T2 from "../assets/threads2.png";
import T3 from "../assets/threads3.png";

const projetos: Project[] = [
  {
    name: "CRM Splen",
    sobre: "",
    images: [T1, T2, T3],
    tecnologias: [
      "React",
      "typescript",
      "tailwindcss",
      "mongodb",
      "prisma",
      "express",
      "docker",
    ],
  },
  {
    name: "Threads Clone",
    sobre: "	O Threads clone é um projeto do clone do site Threads.      ",
    images: [T1, T2, T3],
    github: "https://github.com/LucasLevingston/threads_app",
    link: "https://threads-app-nextjs13.vercel.app/",
    tecnologias: [
      "react",
      "typescript",
      "nextjs",
      "tailwindcss",
      "mongodb",
      "git",
      "github",
    ],
  },
  {
    name: "Spotify Clone",
    sobre: "	O Spotify clone é um projeto do clone do site Spotify.",
    images: [SP2, SP3, SP1],
    github: "https://github.com/LucasLevingston/spotify-clone",
    link: "https://spotify-nextjs13.vercel.app/",
    tecnologias: [
      "react",
      "typescript",
      "nextjs",
      "tailwindcss",
      "postgresql",
      "git",
      "github",
    ],
  },
  {
    name: "Flexibble",
    sobre:
      "O Flexibble é uma aplicação web que tem como objetivo ser uma plataforma colaborativa para entusiastas da programação mostrarem, colaborarem e descobrirem projetos de programação.",
    images: [F3, F2, F1],
    github: "https://github.com/LucasLevingston/grafbase_Flexibble",
    link: "https://flexibble-nexjs13.vercel.app/",
    tecnologias: [
      "react",
      "typescript",
      "nextjs",
      "graphql",
      "tailwindcss",
      "git",
      "github",
    ],
  },
  {
    name: "Meu Portfólio ",
    sobre:
      "Como forma de aprendizado, desenvolvi meu portfólio  utilizando o framework react. Utilizando a linguagem TypeScript e o Tailwind CSS para estilização. Foi meu primeiro contato com react e o pontapé para projetos futuros.",
    images: [MP1, MP2, MP3],
    github: "https://github.com/LucasLevingston/LucasLevingstonPortifolio",
    tecnologias: ["react", "typescript"],
  },
  {
    name: "Campo Minado",
    sobre:
      "Campo minado foi um projeto na linguagem Java de um jogo já existente, onde o objetivo do jogo é o usuário abrir todos os campos do jogo sem abrir nenhum campo que esteja minado, caso ele abra, irá perder o jogo. Para a abertura de campos, utilizei o padrão observer. Quando tem um campo que esteja minado, os campos vizinhos irão avisar que tem entre 1 e 4 campos minados dentre os seus vizinhos. Com isso, abrindo campo por campo, até completar o jogo. Na parte gráfica utilizei o Jbutton, onde cada campo representa um botão. Utilizei a biblioteca do JUnit para os testes da aplicação.",
    images: [CM1, CM2, CM3],
    github: "https://github.com/LucasLevingston/Campo_Minado",
    tecnologias: ["java"],
  },
  {
    name: "Calculadora",
    sobre:
      "Calculadora em Java utilizando o padrão Observer e orientação a objetos, com interface gráfica Swing e suporte para adição, subtração, multiplicação e divisão. Aplicação modular e interativa, atualizando a tela em tempo real. Exemplo de código organizado e habilidades em desenvolvimento Java.",
    images: [CALC1, CALC2, CALC3],
    github: "https://github.com/LucasLevingston/Calculadora.git",
    tecnologias: ["java"],
  },
];

export default function Projects() {
  return (
    <div className="flex flex-col sm:flex-row w-full bg-aboutBgColor h-full">
      <Sidebar />
      <div
        id="Projects"
        className="flex flex-col sm:max-w-[75%] sm:w-full  ml-auto mr-0 p-4 lg:p-12 pb-0  bg-aboutBgColor"
      >
        <Header />
        <a
          className="hover:bg-transparent font-bold text-[13px] bg-mainColor text-mainTextColor hover:text-mainColor border-[3px] border-mainColor rounded-[5px] border-solid no-underline transition-[0.5s] m-[25px_0] p-[12px_10px] ] w-[150px] text-center flex"
          href="https://github.com/LucasLevingston"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaShareAltSquare className="text-[22px]" />
          <span className=" pl-3  text-mainTextColor"> Ver GitHub</span>
        </a>
        <h2 className="border-t border-solid pt-5 text-mainTextColor border-mainTextColor mb-0 text-2xl">
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
              github={projeto.github}
              tecnologias={projeto.tecnologias}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
