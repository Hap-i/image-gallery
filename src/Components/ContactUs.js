import React, { useRef } from "react";
import { FaMapMarkerAlt, FaPhoneAlt } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import emailjs from "@emailjs/browser";

function ContactUs() {
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();
    emailjs
      .sendForm(
        "service_0djjhfm",
        "template_7a8xjor",
        form.current,
        "JecrbHu8XnamrDjyf"
      )
      .then(
        (result) => {
          form.current.reset();
        },
        (error) => {
          form.current.reset();
        }
      );
  };
  return (
    <div id="Contact-us">
      <div className="text-center text-4xl mb-10">Contact us</div>
      <div className="lg:border-[3px] lg:rounded-3xl lg:flex lg:justify-center lg:items-center lg:space-x-10 lg:w-3/4 mx-auto h-auto lg:p-10">
        <div className="w-1/2 hidden lg:block">
          <img src="./contact-us.svg" alt="" />
          <div className="flex justify-around mt-10 space-x-5 ">
            <div className="flex items-center space-x-3 text-sm">
              <FaMapMarkerAlt size={30}></FaMapMarkerAlt>
              <span>
                SLN Gents PG, channasandra New Layout, WhiteField, Bengaluru,
                560067
              </span>
            </div>
            <div className="space-y-2">
              <div className="flex items-center space-x-3 text-sm">
                <FaPhoneAlt size={20}></FaPhoneAlt>
                <span>+918328846256</span>
              </div>
              <div className="flex items-center space-x-3 text-sm">
                <MdEmail size={20}></MdEmail>
                <span>suvendusekharsahoo5@gmail.com</span>
              </div>
            </div>
          </div>
        </div>
        <div className="lg:w-1/2">
          <div className="flex justify-center lg:flex-none">
            <form ref={form} onSubmit={sendEmail} className="space-y-5">
              <div>
                <div className="font-medium text-lg mb-1">Name</div>
                <input
                  type="text"
                  name="from_name"
                  className="w-80 h-10 bg-[#F3F4F6] p-2 outline-none pl-3"
                />
              </div>
              <div>
                <div className="font-medium text-lg mb-1">Phone</div>
                <input
                  type="tel"
                  name="from_number"
                  className="w-80 h-10 bg-[#F3F4F6] p-2 outline-none pl-3"
                />
              </div>
              <div>
                <div className="font-medium text-lg mb-1">Message</div>
                <textarea
                  name="message"
                  className="w-80 h-40 bg-[#F3F4F6] resize-none p-2 outline-none pl-3"
                />
              </div>
              <div className="flex justify-center lg:justify-start">
                <button
                  type="submit"
                  className="bg-[#FF7B54] px-10 py-1 text-xl text-white">
                  Send
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ContactUs;
