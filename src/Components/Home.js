import React from "react";
import About from "./About";

import Hero from "./Hero";
import HomeGallery from "./HomeGallery";
import Navbar from "./Navbar";

function Home() {
  return (
    <>
      <Navbar></Navbar>
      <Hero></Hero>
      <About></About>
      <HomeGallery></HomeGallery>
    </>
  );
}

export default Home;
