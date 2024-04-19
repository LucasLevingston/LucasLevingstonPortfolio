import React from 'react'
import { BsJournalText } from 'react-icons/bs'

export function BotaoCurriculo() {
   return (
      <div className="flex w-full justify-center">
         <a
            className="flex items-center w-[170px] text-[16px] justify-center rounded-[5px]  border-[2px] 
             border-mainColor bg-mainColor p-[12px]  font-bold text-mainTextColor  transition-[0.5s] 
             hover:bg-transparent hover:text-mainColor"
            href="https://docs.google.com/document/d/12krEMbPJzIrSUoN4tKSt3C5REMoSwNpGPSmVNa9UE9I/edit?usp=sharing"
            target="_blank"
         >
            <span className="pr-2 text-mainTextColor ">
               Ver currículo
               {'     '}
            </span>
            <BsJournalText className="text-[18px]  " />
         </a>
      </div>
   )
}