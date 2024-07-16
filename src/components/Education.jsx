import React from 'react';
import { educations } from '../dataStore.js';
import { BsPersonWorkspace } from 'react-icons/bs';
import AnimationLottie from './helper/animation-lottie';
import GlowCard from './helper/glow-card';
import lottieFile from './lottie/study.json';
import sectionImage from '../assets/section.svg'
import blurImage from '../assets/blur-23.svg'
 
function Education() {
  return (
    <div id="education" className="relative  border-t my-12 lg:my-24 border-[#25213b]">
      <img
        src={sectionImage}
        alt="Hero"
        className="absolute top-0 -z-10 w-full"
      />
      <div className="flex justify-center -translate-y-[1px]">
        <div className="w-3/4">
          <div className="h-[1px] bg-gradient-to-r from-transparent via-violet-500 to-transparent w-full" />
        </div>
      </div>

      <div className="flex justify-center my-5 lg:py-8">
        <div className="flex items-center"
        data-aos="fade-up"
        data-aos-duration="2000"
        data-aos-delay="50"
        data-aos-easing="ease-in-out">
          <span className="w-24 h-[2px] bg-[#1a1443]"></span>
          <span className="bg-[#1a1443] w-fit text-white p-2 px-5 text-xl rounded-md">
            Educations
          </span>
          <span className="w-24 h-[2px] bg-[#1a1443]"></span>
        </div>
      </div>

      <div className="py-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16">
          <div className="flex justify-center items-start">
            <div className="w-3/4 h-3/4"
            data-aos="fade-up-right"
            data-aos-duration="2000"
            data-aos-delay="50"
            data-aos-easing="ease-in-out">
              <AnimationLottie animationPath={lottieFile} />
            </div>
          </div>

          <div>
            <div className="flex flex-col gap-6 overflow-hidden"
            data-aos="fade-up-left"
            data-aos-duration="2000"
            data-aos-delay="50"
            data-aos-easing="ease-in-out">
              {educations.map(education => (
                <GlowCard key={education.id} identifier={`education-${education.id}`}>
                  <div className="p-3 relative text-white">
                    <img
                      src={blurImage}
                      alt="Hero"
                      className="absolute bottom-0 opacity-80 w-full"
                    />
                    <div className="flex justify-center">
                      <p className="text-xs sm:text-sm text-[#16f2b3]">
                        {education.duration}
                      </p>
                    </div>
                    <div className="flex items-center gap-x-8 px-3 py-5">
                      <div className="text-violet-500 transition-all duration-300 hover:scale-125">
                        <BsPersonWorkspace size={36} />
                      </div>
                      <div>
                        <p className="text-base sm:text-xl mb-2 font-medium uppercase">
                          {education.title}
                        </p>
                        <p className="text-sm sm:text-base">{education.institution}</p>
                      </div>
                    </div>
                  </div>
                </GlowCard>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Education;
