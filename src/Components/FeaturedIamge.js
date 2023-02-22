import React from "react";
import { AiOutlineInstagram } from "react-icons/ai";
import { MdFacebook } from "react-icons/md";
import { RxDotFilled } from "react-icons/rx";
import { BsWhatsapp } from "react-icons/bs";

function FeaturedIamge() {
  const featuredImages = [
    "https://ik.imagekit.io/hapi/All/photo-1577561535348-f9db0abab970.avif",
    "https://ik.imagekit.io/hapi/All/photo-1598089841712-8269414886e8.avif",
    "https://ik.imagekit.io/hapi/All/photo-1616605586215-199845790f43.avif",
    "https://ik.imagekit.io/hapi/All/photo-1609351231656-9285d74d363d.avif",
    "https://ik.imagekit.io/hapi/All/photo-1604807110053-614d8b181259.avif",
    "https://ik.imagekit.io/hapi/All/photo-1614951649373-32cc2e957fdd.avif",
    "https://ik.imagekit.io/hapi/Wedding/photo-1551854716-8b811be39e7e.avif",
    "https://ik.imagekit.io/hapi/Wedding/photo-1587271339318-2e78fdf79586.avif",
    "https://ik.imagekit.io/hapi/Wedding/photo-1542042161784-26ab9e041e89.avif",
    "https://ik.imagekit.io/hapi/Wedding/photo-1630526720753-aa4e71acf67d.avif",
    "https://ik.imagekit.io/hapi/Wedding/photo-1611106211090-8f3c79eb8552.avif",
    "https://ik.imagekit.io/hapi/Potrait/photo-1583397758920-86c1cb75b8fe.avif",
    "https://ik.imagekit.io/hapi/Potrait/photo-1596378232746-1dfcefb7bcf1.avif",
    "https://ik.imagekit.io/hapi/Potrait/photo-1583397758707-927fca9208a9.avif",
    "https://ik.imagekit.io/hapi/Potrait/photo-1571366992791-2ad2078656cb.avif",
    "https://ik.imagekit.io/hapi/Potrait/photo-1612681051163-6c1ad652d143.avif",
    "https://ik.imagekit.io/hapi/Potrait/photo-1607346256330-dee7af15f7c5.avif",
  ];
  return (
    <>
      <div className="relative mt-10">
        <div className="text-center text-4xl mb-10">Featured Images</div>
        <div className="flex overflow-x-hidden">
          <div className="whitespace-nowrap flex animate-marquee">
            {featuredImages.map((imgUrl, i) => {
              return (
                <div
                  key={i}
                  style={{ backgroundImage: `url(${imgUrl})` }}
                  className=" w-[150px]  h-[150px] md:w-[200px] md:h-[200px] bg-cover bg-center"></div>
              );
            })}
          </div>
          <div className="whitespace-nowrap flex animate-marquee aria-hidden:true">
            {featuredImages.map((imgUrl, i) => {
              return (
                <div
                  key={i}
                  style={{ backgroundImage: `url(${imgUrl})` }}
                  className="w-[150px] h-[150px] md:w-[200px] md:h-[200px] bg-cover bg-center"></div>
              );
            })}
          </div>
        </div>
        {/* <div>
        <button className="bg-black text-white p-2 rounded-sm relative bottom-24 md:bottom-28 left-1/2 translate-x-[-50%]">
        Follow me
        </button>
      </div> */}
      </div>
      <div className="bg-black w-full h-10 flex justify-center items-center md:space-x-5 space-x-1">
        <div className="text-white cursor-pointer flex items-center space-x-1 hover:text-blue-500">
          <MdFacebook></MdFacebook>
          <span>Facebook</span>
        </div>
        <div className="text-white">
          <RxDotFilled></RxDotFilled>
        </div>
        <div className="text-white cursor-pointer flex items-center space-x-1 hover:text-pink-500">
          <AiOutlineInstagram></AiOutlineInstagram>
          <span>Instagram</span>
        </div>
        <div className="text-white">
          <RxDotFilled></RxDotFilled>
        </div>
        <div className="text-white cursor-pointer flex items-center space-x-1 hover:text-green-500">
          <BsWhatsapp></BsWhatsapp>
          <span>Whatsapp</span>
        </div>
      </div>
    </>
  );
}

export default FeaturedIamge;
