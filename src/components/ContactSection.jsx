import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import { personalData, ContactMe  } from "../dataStore.js";
import { BiLogoLinkedin } from "react-icons/bi";
import { CiLocationOn } from "react-icons/ci";
import { FaFacebook} from "react-icons/fa";
import { IoLogoGithub, IoMdCall } from "react-icons/io";
import { MdAlternateEmail } from "react-icons/md";
import { MdOutgoingMail } from "react-icons/md";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { RiInstagramFill } from "react-icons/ri";

function ContactSection() {
  const[loading,setLoading]=useState(false)
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
    setLoading(true)
    emailjs
      .sendForm(
        process.env.REACT_APP_EmailJsServiceId,
        process.env.REACT_APP_EmailJsTemplateId,
        form.current,
        process.env.REACT_APP_EmailJsPublicKey
      )
      .then(
        () => {
          toast.success('Message successfully sent!');
          setLoading(false)
          form.current.reset();
        },
        (error) => {
          toast.error('Something went!');
          console.log(`Failed to send message: ${error.text}`);
        },
      );
  };

  return (
    <div id="contactMe" className="my-12 lg:my-16 relative mt-24 text-white">
      <ToastContainer />
      <div className="hidden lg:flex flex-col items-center absolute top-24 -right-8"
      data-aos="flip-right"
      data-aos-duration="2500"
      data-aos-delay="50"
      data-aos-easing="ease-in-out">
        <span className="bg-[#1a1443] w-fit text-white rotate-90 p-2 px-5 text-xl rounded-md">
          CONTACT
        </span>
        <span className="h-36 w-[2px] bg-[#1a1443]"></span>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center">
        <div className="max-w-full text-white rounded-lg border border-gray-600 p-4 lg:p-5"
        data-aos="zoom-in-right"
        data-aos-duration="2000"
        data-aos-delay="50"
        data-aos-easing="ease-in-out">
          <p className="text-sm text-gray-400">
            {ContactMe.description}
          </p>
          <form ref={form} onSubmit={sendEmail} className="mt-6 flex flex-col gap-4">
            <div className="flex flex-col gap-2">
              <label className="text-base">Your Name:</label>
              <input
              name="from_name"
                type="text"
                maxLength="100"
                required
                className="bg-gray-800 w-full border rounded-md border-gray-700 focus:border-green-500 transition-border duration-300 px-3 py-2 text-white outline-none"
              />
            </div>
            <div className="flex flex-col gap-2">
              <label className="text-base">Your Email:</label>
              <input
              name="from_email"
                type="email"
                maxLength="100"
                required
                className="bg-gray-800 w-full border rounded-md border-gray-700 focus:border-green-500 transition-border duration-300 px-3 py-2 text-white outline-none"
              />
            </div>
            <div className="flex flex-col gap-2">
              <label className="text-base">Your Message:</label>
              <textarea
                maxLength="500"
                name="message"
                required
                className="bg-gray-800 w-full border rounded-md border-gray-700 focus:border-green-500 transition-border duration-300 px-3 py-2 text-white outline-none"
                rows="4"
              />
            </div>
            <div className="flex flex-col items-center gap-2">
              <button className="hoverBtn flex items-center gap-1 hover:gap-3 rounded-full bg-gradient-to-r from-pink-500 to-violet-600 px-5 md:px-12 py-2.5 md:py-3 text-center text-xs md:text-sm font-medium uppercase tracking-wider text-white transition-all duration-200 ease-out cursor-pointer " type='submit' disabled={loading}>
               {loading ? 'Loading....' : <><span>Send Message</span>
                <MdOutgoingMail className="mt-1 text-lg" /></> }
              </button>
            </div>
          </form>
        </div>

        <div className="lg:w-3/4"
        data-aos="zoom-in-left"
        data-aos-duration="2000"
        data-aos-delay="50"
        data-aos-easing="ease-in-out">
          <div className="flex flex-col gap-5 lg:gap-9">
            <p className="text-sm md:text-xl flex items-center gap-3">
              <MdAlternateEmail
                className="bg-[#8b98a5] p-2 rounded-full hover:bg-[#16f2b3] hover:scale-110 transition-all duration-300 text-gray-800 cursor-pointer"
                size={36}
              />
              <span>{personalData.email}</span>
            </p>
            <p className="text-sm md:text-xl flex items-center gap-3">
              <IoMdCall
                className="bg-[#8b98a5] p-2 rounded-full hover:bg-[#16f2b3] hover:scale-110 transition-all duration-300 text-gray-800 cursor-pointer"
                size={36}
              />
              <span>{personalData.phone}</span>
            </p>
            <p className="text-sm md:text-xl flex items-center gap-3">
              <CiLocationOn
                className="bg-[#8b98a5] p-2 rounded-full hover:bg-[#16f2b3] hover:scale-110 transition-all duration-300 text-gray-800 cursor-pointer"
                size={36}
              />
              <span>{personalData.address}</span>
            </p>
          </div>
          <div className="mt-8 lg:mt-16 flex flex-wrap items-center gap-3 lg:gap-10">
            <a
              href={personalData.github}
              target="_blank"
              rel="noopener noreferrer"
            >
              <IoLogoGithub
                className="bg-[#8b98a5] p-3 rounded-full hover:bg-[#16f2b3] hover:scale-110 transition-all duration-300 text-gray-800 cursor-pointer"
                size={48}
              />
            </a>
            <a
              href={personalData.linkedIn}
              target="_blank"
              rel="noopener noreferrer"
            >
              <BiLogoLinkedin
                className="bg-[#8b98a5] p-3 rounded-full hover:bg-[#16f2b3] hover:scale-110 transition-all duration-300 text-gray-800 cursor-pointer"
                size={48}
              />
            </a>
            <a
              href={personalData.instagram}
              target="_blank"
              rel="noopener noreferrer"
            >
              <RiInstagramFill
                className="bg-[#8b98a5] p-3 rounded-full hover:bg-[#16f2b3] hover:scale-110 transition-all duration-300 text-gray-800 cursor-pointer"
                size={48}
              />
            </a>
            <a
              href={personalData.facebook}
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaFacebook
                className="bg-[#8b98a5] p-3 rounded-full hover:bg-[#16f2b3] hover:scale-110 transition-all duration-300 text-gray-800 cursor-pointer"
                size={48}
              />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ContactSection;
