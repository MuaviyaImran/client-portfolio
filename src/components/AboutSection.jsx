import React from "react";
import { AboutData } from "../dataStore.js";

function AboutSection() {
  return ( 
    <div id="about" className="my-12 lg:my-16 relative">
      <div
        className="hidden lg:flex flex-col items-center absolute top-16 -right-8"
        data-aos="flip-left"
        data-aos-duration="2500"
        data-aos-delay="50"
        data-aos-easing="ease-in-out"
      >
        <span className="bg-[#1a1443] w-fit text-white rotate-90 p-2 px-5 text-xl rounded-md">
          ABOUT ME
        </span>
        <span className="h-36 w-[2px] bg-[#1a1443]"></span>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16">
        <div className="order-1 lg:order-1">
          <p
            className="font-medium mb-5 text-[#16f2b3] text-xl uppercase"
            data-aos="zoom-in"
            data-aos-duration="1000"
            data-aos-delay="50"
            data-aos-easing="ease-in-out"
          >
            Who I am?
          </p>
          <p
            className="text-gray-200 text-sm lg:text-lg"
            data-aos="zoom-out"
            data-aos-duration="1000"
            data-aos-delay="50"
            data-aos-easing="ease-in-out"
          >
            {AboutData.description}
          </p>
        </div>
        <div className="flex justify-center order-2 lg:order-2">
          <img
            src={AboutData.profile}
            width={280}
            height={280}
            alt={AboutData.name}
            className="rounded-lg transition-all duration-1000 grayscale hover:grayscale-0 hover:scale-110 cursor-pointer"
            data-aos="fade-up"
            data-aos-duration="3000"
            data-aos-delay="50"
            data-aos-easing="ease-in-out"
          />
        </div>
      </div>
    </div>
  );
}

export default AboutSection;
