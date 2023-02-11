import React, { useState } from "react";
import {
  MdOutlineArrowForwardIos,
  MdOutlineArrowBackIos,
} from "react-icons/md";

import { BsDot } from "react-icons/bs";
import { AnimatePresence, motion } from "framer-motion";

const variants = {
  initial: (direction) => {
    return {
      x: direction > 0 ? 100 : -100,
      opacity: 0,
    };
  },
  animate: {
    x: 0,
    opacity: 1,
    transition: {
      x: { type: "spring", stiffness: 300, damping: 30 },
      opacity: { duration: 0.2 },
    },
  },
  exit: (direction) => {
    return {
      x: direction > 0 ? -100 : 100,
      opacity: 0,
      transition: {
        x: { type: "spring", stiffness: 300, damping: 30 },
        opacity: { duration: 0.2 },
      },
    };
  },
};
function Hero() {
  const [currentIndex, setcurrentIndex] = useState(0);
  const [direction, setdirection] = useState(0);

  const images = [
    "https://ik.imagekit.io/hapi/Hero-Section/IMG_4265.JPG",
    "https://ik.imagekit.io/hapi/Hero-Section/IMG_4478.JPG",
    "https://ik.imagekit.io/hapi/Hero-Section/IMG_4307.JPG",
  ];
  const moveLeft = () => {
    setdirection(-1);
    if (currentIndex === 0) {
      setcurrentIndex(images.length - 1);
    } else {
      setcurrentIndex(currentIndex - 1);
    }
  };

  const moveRight = () => {
    setdirection(1);
    if (currentIndex === images.length - 1) {
      setcurrentIndex(0);
    } else {
      setcurrentIndex(currentIndex + 1);
    }
  };
  return (
    <div className="w-full md:h-screen h-96 mb-5 z-0 mx-auto">
      <AnimatePresence initial={false} custom={direction}>
        <motion.div
          variants={variants}
          animate="animate"
          initial="initial"
          exit="exit"
          custom={direction}
          key={currentIndex}
          style={{ backgroundImage: `url(${images[currentIndex]})` }}
          className="w-full h-full bg-cover bg-center relative">
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
        </motion.div>
      </AnimatePresence>
    </div>
  );
}

export default Hero;
