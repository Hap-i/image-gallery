import React from "react";
import { FaMapMarkerAlt, FaPhoneAlt } from "react-icons/fa";
import { MdEmail, MdFacebook } from "react-icons/md";
import { AiOutlineInstagram } from "react-icons/ai";
import {
  FaFacebookSquare,
  FaInstagramSquare,
  FaWhatsappSquare,
} from "react-icons/fa";

function Footer() {
  const footerImages = [
    "https://ik.imagekit.io/hapi/All/photo-1577561535348-f9db0abab970.avif",
    "https://ik.imagekit.io/hapi/All/photo-1598089841712-8269414886e8.avif",
    "https://ik.imagekit.io/hapi/All/photo-1616605586215-199845790f43.avif",
    "https://ik.imagekit.io/hapi/All/photo-1609351231656-9285d74d363d.avif",
  ];
  return (
    <div className="bg-color-4">
      <div className="md:flex md:justify-evenly md:space-x-10 md:p-10 p-7">
        <div className="md:w-1/3 mb-10">
          <div className="text-4xl mb-3">LOGO</div>
          <div className="">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Est velit
            odio nemo, quae nobis dolor dolore quia ipsa hic eos natus tempora,
            quo architecto non soluta minima, atque placeat! Velit!
          </div>
        </div>
        <div className="md:w-1/3 mb-10">
          <div className="text-4xl mb-5">Quick Links</div>
          <div className="flex justify-around space-x-2 md:space-x-5">
            {footerImages.map((imgUrl, i) => {
              return (
                <div
                  key={i}
                  style={{ backgroundImage: `url(${imgUrl})` }}
                  className=" w-[80px]  h-[80px] md:w-[150px] md:h-[100px] bg-cover bg-center hover:opacity-80"></div>
              );
            })}
          </div>
        </div>
        <div className="md:w-1/3">
          <div className="text-4xl mb-3">Contact US</div>
          <div className="space-y-2">
            <div className="flex items-center space-x-3 text-sm">
              <FaMapMarkerAlt size={20}></FaMapMarkerAlt>
              <span>
                SLN Gents PG, channasandra New Layout, WhiteField, Bengaluru,
                560067
              </span>
            </div>
            <div className="flex items-center space-x-3 text-sm">
              <FaPhoneAlt size={20}></FaPhoneAlt>
              <span>+918328846256</span>
            </div>
            <div className="flex items-center space-x-3 text-sm">
              <MdEmail size={20}></MdEmail>
              <span>suvendusekharsahoo5@gmail.com</span>
            </div>
          </div>
          <div className="mt-10 flex space-x-3">
            <div className="cursor-pointer">
              <FaFacebookSquare size={30}></FaFacebookSquare>
            </div>
            <div className="cursor-pointer">
              <FaInstagramSquare size={30}></FaInstagramSquare>
            </div>
            <div className="cursor-pointer">
              <FaWhatsappSquare size={30}></FaWhatsappSquare>
            </div>
          </div>
          <div className="mt-2">
            Copyright © 2023 Suvendu. All Rights Reserved.
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
