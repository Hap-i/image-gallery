import React from "react";
import About from "../Components/About";
import ContactUs from "../Components/ContactUs";
import FeaturedIamge from "../Components/FeaturedIamge";
import Footer from "../Components/Footer";
import Hero from "../Components/Hero";
import HomeGallery from "../Components/HomeGallery";
import Navbar from "../Components/Navbar";
import Pricing from "../Components/Pricing";

function Home() {
  return (
    <div>
      <Navbar></Navbar>
      <Hero></Hero>
      <About></About>
      <HomeGallery></HomeGallery>
      <Pricing></Pricing>
      <ContactUs></ContactUs>
      <FeaturedIamge></FeaturedIamge>
      <Footer></Footer>
    </div>
  );
}

export default Home;
