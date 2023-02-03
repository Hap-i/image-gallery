import React, { useState } from "react";
import {
  MdOutlineArrowForwardIos,
  MdOutlineArrowBackIos,
} from "react-icons/md";

import { BsDot } from "react-icons/bs";

function Hero() {
  const [currentIndex, setcurrentIndex] = useState(0);
  const images = [
    "https://ik.imagekit.io/hapi/Hero-Section/IMG_4265.JPG",
    "https://ik.imagekit.io/hapi/Hero-Section/IMG_4478.JPG",
    "https://ik.imagekit.io/hapi/Hero-Section/IMG_4307.JPG",
  ];
  const moveLeft = () => {
    if (currentIndex === 0) {
      setcurrentIndex(images.length - 1);
    } else {
      setcurrentIndex(currentIndex - 1);
    }
  };

  const moveRight = () => {
    if (currentIndex === images.length - 1) {
      setcurrentIndex(0);
    } else {
      setcurrentIndex(currentIndex + 1);
    }
  };
  return (
    <div className=" bg-gray-500 w-full h-screen mb-96">
      <div
        style={{ backgroundImage: `url(${images[currentIndex]})` }}
        className="w-full h-2/4 md:h-full bg-cover bg-center"></div>
      <div
        className="absolute top-[50%] -translate-x-0 translate-y-[-50%] left-5
        text-2xl rounded-full text-white cursor-pointer bg-black/20 p-2
      "
        onClick={moveLeft}>
        <MdOutlineArrowBackIos></MdOutlineArrowBackIos>
      </div>
      <div
        className="absolute top-[50%] -translate-x-0 translate-y-[-50%] right-5
        text-2xl rounded-full text-white cursor-pointer bg-black/20 p-2"
        onClick={moveRight}>
        <MdOutlineArrowForwardIos></MdOutlineArrowForwardIos>
      </div>
      <div className="flex justify-center absolute top-[90%] w-full text-white">
        <BsDot size={40}></BsDot>
        <BsDot size={40}></BsDot>
        <BsDot size={40}></BsDot>
      </div>
    </div>
  );
}

export default Hero;
