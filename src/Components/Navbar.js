import React, { useState } from "react";
import { AiOutlineMenu } from "react-icons/ai";

function Navbar() {
  const [color, setcolor] = useState(false);
  const changeColor = () => {
    if (window.scrollY >= 90) {
      setcolor(true);
    } else {
      setcolor(false);
    }
  };
  window.addEventListener("scroll", changeColor);
  return (
    <div
      className={
        color ? "fixed w-full bg-slate-500 text-white" : "fixed w-full"
      }>
      <div className="mx-auto bg-transparent flex items-center justify-between md:justify-around h-12">
        <div>Logo</div>
        <div className="cursor-pointer z-10 md:hidden">
          <AiOutlineMenu></AiOutlineMenu>
        </div>
        <div className="hidden md:flex md:space-x-8">
          <div className="cursor-pointer">About</div>
          <div className="cursor-pointer">Service</div>
          <div className="cursor-pointer">Gallery</div>
          <div className="cursor-pointer">Pricing</div>
          <div className="cursor-pointer">Contact</div>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
