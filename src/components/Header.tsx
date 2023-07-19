import React from "react";
import TypewriterClass from "typewriter-effect";

export default function Header() {
  return (
    <div className="hover:text-mainTextColor">
      <div
        className="text-left min-w-[50%] bg-aboutBgColor"
        id="about-container "
      >
        <h1 className="text-4xl mb-[15px] text-bioBorderColor">
          Lucas Levingston
        </h1>
        <p
          className="text-[20px] mb-[15px] font-bold text-mainColor"
          id="title"
        >
          <TypewriterClass
            onInit={(typewriter) => {
              typewriter

                .typeString("Desenvolvedor Frond-End")
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
