import React, { useState } from "react";
import { AiOutlineMenu } from "react-icons/ai";
import { HashLink } from "react-router-hash-link";

function GalleryNavbar({ transparent }) {
  const [color, setcolor] = useState(false);
  const changeColor = () => {
    if (window.scrollY >= 90) {
      setcolor(true);
    } else {
      setcolor(false);
    }
  };
  window.addEventListener("scroll", changeColor);

  const scrollWithOffset = (el) => {
    const yCoordinate = el.getBoundingClientRect().top + window.pageYOffset;
    const yOffset = -50;
    window.scrollTo({ top: yCoordinate + yOffset, behavior: "smooth" });
  };
  return (
    <div
      className="fixed w-full z-10 bg-color-2 text-white"
      // : transparent
      // ? "fixed w-full z-10"
      // : "fixed w-full z-10 bg-color-2 text-white"
    >
      <div className="mx-auto bg-transparent flex items-center justify-between md:justify-around h-12">
        <div className="text-lg font-medium">Logo</div>
        <div className="cursor-pointer z-10 md:hidden">
          <AiOutlineMenu></AiOutlineMenu>
        </div>
        <div className="hidden md:flex md:space-x-8 text-lg font-medium">
          <HashLink
            scroll={(el) => scrollWithOffset(el)}
            to="/#aboutTag"
            className="cursor-pointer">
            About
          </HashLink>
          {/* <HashLink className="cursor-pointer">Service</HashLink> */}
          <HashLink
            scroll={(el) => scrollWithOffset(el)}
            to="/#Home-Gallery"
            className="cursor-pointer">
            Gallery
          </HashLink>
          <HashLink
            scroll={(el) => scrollWithOffset(el)}
            to="/#pricing"
            className="cursor-pointer">
            Pricing
          </HashLink>
          <HashLink
            scroll={(el) => scrollWithOffset(el)}
            to="/#Contact-us"
            className="cursor-pointer">
            Contact
          </HashLink>
        </div>
      </div>
    </div>
  );
}

export default GalleryNavbar;
