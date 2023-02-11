import React from "react";
import About from "./About";
import FeaturedIamge from "./FeaturedIamge";

import Hero from "./Hero";
import HomeGallery from "./HomeGallery";
import Navbar from "./Navbar";
import Pricing from "./Pricing";

function Home() {
  return (
    <>
      <Navbar></Navbar>
      <Hero></Hero>
      <About></About>
      <HomeGallery></HomeGallery>
      <Pricing></Pricing>
      <FeaturedIamge></FeaturedIamge>
    </>
  );
}

export default Home;
