import React from "react";

function Pricing() {
  return (
    <div id="pricing">
      <div className="text-4xl text-center mb-10 mt-20">Our Plans</div>
      <div className="space-y-14 mb-10 lg:flex lg:justify-center lg:space-y-0 lg:space-x-28 lg:mx-36">
        <div className="bg-slate-200 text-center w-2/3 mx-auto shadow-xl shadow-black/40">
          <div className="pt-7 text-xl font-medium">WEDDING</div>
          <div className="mt-3 text-4xl font-light">
            9999
            <span className="font-normal text-base relative bottom-4">INR</span>
          </div>
          <div className="mt-5 space-y-1">
            <ul>Pre wedding</ul>
            <ul>Bridal</ul>
            <ul>Groom Dressup</ul>
          </div>
          <div className="mt-7 pb-7">
            <button className="bg-green-500 p-2">Enquire Now</button>
          </div>
        </div>
        <div className="bg-slate-200 text-center w-2/3 mx-auto shadow-xl shadow-black/40 relative">
          <div className="pt-7 text-xl font-medium">Rituals</div>
          <div className="mt-3 text-4xl font-light">
            5999
            <span className="font-normal text-base relative bottom-4">INR</span>
          </div>
          <div className="mt-5 space-y-1 pb-28">
            <ul>Pre wedding</ul>
            <ul>Groom Dressup</ul>
          </div>
          <div className="absolute pb-7 top-[90%] -translate-x-[50%] translate-y-[-50%] left-[50%]">
            <button className="bg-green-500 p-2">Enquire Now</button>
          </div>
        </div>
        <div className="bg-slate-200 text-center w-2/3 mx-auto shadow-xl shadow-black/40">
          <div className="pt-7 text-xl font-medium">CANDID</div>
          <div className="mt-3 text-4xl font-light">
            1999
            <span className="font-normal text-base relative bottom-4">INR</span>
          </div>
          <div className="mt-5 space-y-1">
            <ul>Pre wedding</ul>
            <ul>Bridal</ul>
            <ul>Groom Dressup</ul>
          </div>
          <div className="mt-7 pb-7">
            <button className="bg-green-500 p-2">Enquire Now</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Pricing;
