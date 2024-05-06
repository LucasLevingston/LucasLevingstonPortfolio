import React from 'react';
import { SiPostman } from 'react-icons/si';
import { DiScrum } from 'react-icons/di';

interface TecnologiasDominadasProps {
   tecnologias: string[][];
}

export const TecnologiasDominadas: React.FC<TecnologiasDominadasProps> = ({ tecnologias }) => {
   return (
      <div className="">
         <div className="flex flex-wrap pt-5 ">
            {tecnologias.map((grupo, index) => (
               <div key={index} className="mb-8 w-full sm:w-[33%]">
                  <p className="mb-4 border-l-[5px] border-solid border-mainColor pl-2 text-xl font-bold">
                     {grupo[0]}
                  </p>
                  <div className='pl-5 flex gap-x-3'>
                     {grupo.slice(1).map((tecnologia, i) => (
                        tecnologia === 'scrum' ? (
                           <DiScrum key={i}
                              className=" text-5xl text-azulBebe"
                           />) : (
                           <i
                              key={i}
                              className={
                                 tecnologia === "fastify" || tecnologia === "nextjs" ? (`devicon-${tecnologia}-plain  text-5xl`) :
                                    tecnologia === "sqlite" || tecnologia === "firebase" || tecnologia === "docker" ?
                                       (`devicon-${tecnologia}-plain-wordmark  colored  text-5xl`) :
                                       tecnologia === "express" || tecnologia === "github" || tecnologia === 'prisma' ?
                                          `devicon-${tecnologia}-original-wordmark  text-5xl` :
                                          `devicon-${tecnologia}-plain  colored  text-5xl`
                              }
                           ></i>
                        )
                     ))}
                  </div>
               </div>
            ))}
         </div>
      </div >
   );
};

