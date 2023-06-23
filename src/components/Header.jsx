import React from "react";

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
          <span class="highlight">Desenvolvedor Full-Stack</span>
        </p>
      </div>
    </div>
  );
}
