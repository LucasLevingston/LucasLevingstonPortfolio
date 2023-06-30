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
    <div className="text-mainTextColor flex flex-[1_1_80%] flex-col p-[50px] pt-0 bg-aboutBgColor ">
      <h1 className="text-bold text-mainColor text-2xl">{projeto.name}</h1>
      <br />
      <p>{projeto.sobre}</p>
      <div className="'max-w-900px h-[480px] w-full m-auto py-16 px-4 relative group">
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
