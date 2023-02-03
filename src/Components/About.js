import React from "react";
function About() {
  return (
    <div className="">
      <div className="text-center text-6xl font-bold mb-12">Who we are</div>
      <div className="">
        <div className="text-center font-semibold mb-5">
          Creating Memories That Remains Fresh Forever..
        </div>
        <div className="text-center text-lg md:w-3/5  mx-auto">
          We are a team of professional photographers & videographers who have
          covered 100+ indian wedding shoots we focus on creating memories with
          latest styles and flair.
        </div>
      </div>
      <div>
        <div className="grid grid-cols-2 lg:grid-cols-3 gap-y-10 text-center md:w-2/3 mx-auto m-5 p-5">
          <div className="bg-slate-200 h-[180px] w-[150px] md:h-56 md:w-56 mx-auto md:p-3">
            <lord-icon
              src="https://cdn.lordicon.com/mxddzdmt.json"
              trigger="hover"
              style={{ width: "120px", height: "120px" }}></lord-icon>
            <div className="md:text-lg text-sm">Latest Equipment</div>
          </div>
          <div className="bg-slate-200 h-[180px] w-[150px] md:h-56 md:w-56 mx-auto md:p-3">
            <lord-icon
              src="https://cdn.lordicon.com/ouunjdko.json"
              trigger="hover"
              colors="outline:#121331,primary:#3a3347,secondary:#646e78,tertiary:#e8e230"
              style={{ width: "120px", height: "120px" }}></lord-icon>
            <div className="md:text-lg text-sm">Indoor/Outdoor shooting</div>
          </div>
          <div className="bg-slate-200 h-[180px] w-[150px] md:h-56 md:w-56 mx-auto md:p-3">
            <lord-icon
              src="https://cdn.lordicon.com/ujmqspux.json"
              trigger="hover"
              colors="outline:#121331,primary:#646e78,secondary:#08a88a,tertiary:#ebe6ef"
              style={{ width: "120px", height: "120px" }}></lord-icon>
            <div className="md:text-lg text-sm">Afforadable Price</div>
          </div>
          <div className="bg-slate-200 h-[180px] w-[150px] md:h-56 md:w-56 mx-auto md:p-3">
            <lord-icon
              src="https://cdn.lordicon.com/iejknaed.json"
              trigger="hover"
              style={{ width: "120px", height: "120px" }}></lord-icon>
            <div className="md:text-lg text-sm">Fast Delivery</div>
          </div>
          <div className="bg-slate-200 h-[180px] w-[150px] md:h-56 md:w-56 mx-auto md:p-3">
            <lord-icon
              src="https://cdn.lordicon.com/jefnhaqh.json"
              trigger="hover"
              style={{ width: "120px", height: "120px" }}></lord-icon>
            <div className="md:text-lg text-sm">Experienced Team</div>
          </div>
          <div className="bg-slate-200 h-[180px] w-[150px] md:h-56 md:w-56 mx-auto md:p-3">
            <lord-icon
              src="https://cdn.lordicon.com/xhitaejr.json"
              trigger="hover"
              colors="outline:#131432,primary:#3a3347,secondary:#08a88a,secondary 2:#eee966"
              style={{ width: "120px", height: "120px" }}></lord-icon>
            <div className="md:text-lg text-sm">Video Editing</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
