import React, { useState } from "react";
import { BsChevronBarLeft, BsChevronBarRight } from "react-icons/bs";
export interface Project {
  name: string;
  sobre: string;
  images: string[];
}

export default function ProjectsComponents(projeto: Project) {
  const [currentIndex, setCurrentIndex] = useState(2);
  const prevImage = () => {
    const isFirstImage = currentIndex === 0;
    const newIndex = isFirstImage
      ? projeto.images.length - 1
      : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const nextImage = () => {
    const isLastImage = currentIndex === projeto.images.length - 1;
    const newIndex = isLastImage ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };
  return (
    <div className="text-mainTextColor flex flex-[1_1_80%] flex-col p-[10px] sm:p-0 pt-0 bg-aboutBgColor ">
      <h1 className="text-bold text-mainColor pb-1 text-2xl 2xl:text-6xl">
        {projeto.name}
      </h1>
      <br />
      <p>{projeto.sobre}</p>
      <div className="max-w-[700px] h-[300px] md:max-w-[800px] md:h-[360px] 2xl:max-w-[1500px] 2xl:h-[600px] sm:max-w-[500px] sm:h-[160px] w-full m-auto py-16 px-0 sm:p-8  relative group">
        <div
          style={{ backgroundImage: `url(${projeto.images[currentIndex]})` }}
          className="w-full h-full rounded-2xl bg-center bg-cover duration-500"
        ></div>
        <div className="hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] left-5 text-2xl rounded-full p-2 bg-black/20 text-mainTextColor cursor-pointer">
          <BsChevronBarLeft onClick={prevImage} size={30} />
        </div>
        <div className="hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] right-5 text-2xl rounded-full p-2 bg-black/20 text-mainTextColor cursor-pointer">
          <BsChevronBarRight onClick={nextImage} size={30} />
        </div>
      </div>
    </div>
  );
}
