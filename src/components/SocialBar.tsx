import React from 'react'
import { BsGithub, BsInstagram } from 'react-icons/bs'
import { FaLinkedin, FaWhatsapp } from 'react-icons/fa'

export default function SocialBar() {
   return (
      <ul className="mx-auto flex w-[200px] list-none items-center justify-center border-b-[1px] border-solid pb-3">
         <li className="mx-auto max-w-[60px]">
            <a
               className="text-[30px] text-mainColor transition-[1s] hover:text-[40px] hover:text-mainTextColor"
               href="https://github.com/LucasLevingston"
               target="_blank"
            >
               <BsGithub className='w-8' />
            </a>
         </li>
         <li className="mx-auto max-w-[60px]">
            <a
               className="text-[30px] text-mainColor transition-[1s] hover:text-[40px] hover:text-mainTextColor"
               href="https://www.linkedin.com/in/lucas-levingston-44b851231/"
               target="_blank"
               rel="noopener noreferrer"
            >
               <FaLinkedin className='w-8' />
            </a>
         </li>
         <li className="mx-auto  max-w-[60px]">
            <a
               className="text-[30px] text-mainColor transition-[1s] hover:text-[40px] hover:text-mainTextColor"
               href="https://wa.me/message/BL2FCNM72L7GJ1"
               target="_blank"
               rel="noopener noreferrer"
            >
               <FaWhatsapp className='w-8' />
            </a>
         </li>
         <li className="mx-auto  max-w-[60px]">
            <a
               className="text-[30px] text-mainColor transition-[1s] hover:text-[40px] hover:text-mainTextColor"
               href="https://www.instagram.com/lucaolevingston/?hl=pt-br"
               target="_blank"
               rel="noopener noreferrer"
            >
               <BsInstagram className='w-8' />
            </a>
         </li>
      </ul>
   )
}
