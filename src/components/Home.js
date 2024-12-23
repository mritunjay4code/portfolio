import React from "react";
import { FaLinkedinIn } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { IoMdContact } from "react-icons/io";
import { FaWhatsapp } from "react-icons/fa";

const Home = () => {
  return (
    <>
      <div className="welcome-container relative ">
        {/* Background Video */}
        <video
          autoPlay
          loop
          muted
          className="absolute top-0 left-0 w-full h-full object-cover z-0"
        >
          <source src="bg.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>

        {/* Content */}
        <div className="text-white flex items-center justify-center relative z-10">
          <div className="container flex items-center justify-between mx-20">
            {/* Left Section */}
            <div className="w-full md:w-3/5 my-10 mt-28">
              <h1 className="text-2xl font-semibold font-poppins">Hello I'm</h1>
              <h2 className="text-4xl font-bold text-cyan-400 mb-4 font-popping">
                Mritunjay Kumar
              </h2>
              <h3 className="text-2xl font-medium text-cyan-400">
                Frontend Developer
              </h3>
              <p className="text-gray-400 mt-4 text-start">
                I am a passionate Front-End Developer skilled in HTML, CSS,
                JavaScript, and React, specializing in creating responsive,
                user-friendly interfaces. With expertise in Tailwind CSS and
                performance optimization, I deliver accessible, scalable web
                applications. I focus on bridging design and functionality to
                craft exceptional, high-quality digital experiences.
              </p>

              {/* Flex container for button and social icons */}
              <div className="flex items-center mt-6 space-x-4">
                <a
                  href="/cv1.pdf" // Path to your CV file
                  download="My_CV.pdf" // Optional: Rename the file for the user
                >
                  <button className="bg-cyan-500 hover:bg-cyan-600 text-white font-semibold py-2 px-6 rounded-full">
                    Download CV
                  </button>
                </a>

                {/* Social Icons */}
                <div className="flex space-x-4">
                  <a
                    href="https://github.com/mritunjay4code"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 flex items-center justify-center bg-gray-800 rounded-full hover:bg-cyan-500"
                  >
                    <FaGithub />
                  </a>
                  <a
                    href="https://www.linkedin.com/in/mritunjay-kumar-786203218/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 flex items-center justify-center bg-gray-800 rounded-full hover:bg-cyan-500"
                  >
                    <FaLinkedinIn />
                  </a>
                  <a
                    href="https://www.naukri.com/mnjuser/profile?id=&altresid"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 flex items-center justify-center bg-gray-800 rounded-full hover:bg-cyan-500"
                  >
                    <IoMdContact />
                  </a>
                  <a
                    href="https://wa.me/+917808273334?text=Hi"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 flex items-center justify-center bg-gray-800 rounded-full hover:bg-cyan-500"
                  >
                    <FaWhatsapp />
                  </a>
                </div>
              </div>
            </div>

            {/* Right Section (Full Width on md and above) */}
            <div className="hidden md:flex justify-center items-center my-10 mt-28 w-2/5 h-full">
              <div className="rounded-full bg-gradient-to-r from-cyan-300 to-blue-100 p-1">
                <img
                  className="rounded-full w-72 xl:w-96 xl:h-96 object-cover border-4 "
                  src="pro1.png"
                  alt="Profile"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Overlay to darken the video */}
        <div className="absolute top-0 left-0 w-full h-full bg-black opacity-50 z-5"></div>
      </div>
    </>
  );
};

export default Home;
