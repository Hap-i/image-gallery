import React from "react";
import GalleryImg from "../Components/Gallery/GalleryImg";
import Sidebar from "../Components/Gallery/Sidebar";
import GalleryNavbar from "../Components/Gallery/GalleryNavbar";

function Gallery() {
  return (
    <div className="relative">
      <GalleryNavbar></GalleryNavbar>
      <Sidebar></Sidebar>
      <GalleryImg></GalleryImg>
    </div>
  );
}

export default Gallery;
