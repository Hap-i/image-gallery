import React from "react";
import GalleryImg from "../Components/Gallery/GalleryImg";
import Sidebar from "../Components/Gallery/Sidebar";

function Gallery() {
  return (
    <div className="relative">
      <div className="fixed bg-slate-500 w-screen h-28">Gallery</div>
      <Sidebar></Sidebar>
      <GalleryImg></GalleryImg>
    </div>
  );
}

export default Gallery;
