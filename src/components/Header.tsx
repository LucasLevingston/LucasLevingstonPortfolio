import React from "react";
import Typewriter from "typewriter-effect";

export default function Header() {
  return (
    <div id="Header" className="hover:text-mainTextColor">
      <div
        className="text-left min-w-[50%] bg-aboutBgColor"
      >
        <h1 className="text-4xl mb-[15px] font-bold text-bioBorderColor">
          Lucas Levingston
        </h1>
        <p
          className="text-[20px] mb-[15px] font-bold text-mainColor"
        >
          <Typewriter
            onInit={(typewriter) => {
              typewriter
                .typeString("Desenvolvedor Full-Stack")
                .pauseFor(5000)
                .deleteChars(10)
                .typeString("Front-End")
                .pauseFor(5000)
                .deleteChars(9)
                .typeString("Back-End")
                .pauseFor(5000)
                .deleteChars(8)
                .typeString("Full-Stack")
                .start();
            }}
          />
        </p>
      </div>
    </div>
  );
}
