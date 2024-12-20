import React from "react";
import { FaLinkedinIn } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa";

const Home = () => {
  return (
    <>
      <div className="welcome-container w-full h-[100vh] relative " id="home">
        <div className="bg-gray-700 text-white h-screen flex items-center justify-center">
          <div className="container flex items-center justify-between mx-20">
            {/* Left Section */}
            <div className="w-1/2">
              <h1 className="text-4xl font-semibold font-poppins">Hello I'm</h1>
              <h2 className="text-5xl font-bold text-cyan-400 mb-4">
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
                <button className="bg-cyan-500 hover:bg-cyan-600 text-white font-semibold py-2 px-6 rounded-full">
                  Download CV
                </button>
                {/* Social Icons */}
                <div className="flex space-x-4">
                  <a
                    href="#"
                    className="w-10 h-10 flex items-center justify-center bg-gray-800 rounded-full hover:bg-cyan-500"
                  >
                    <FaGithub />
                  </a>
                  <a
                    href="#"
                    className="w-10 h-10 flex items-center justify-center bg-gray-800 rounded-full hover:bg-cyan-500"
                  >
                    <FaLinkedinIn />
                  </a>
                  <a
                    href="#"
                    className="w-10 h-10 flex items-center justify-center bg-gray-800 rounded-full hover:bg-cyan-500"
                  >
                    <FaTwitter />
                  </a>
                  <a
                    className="w-10 h-10 flex items-center justify-center bg-gray-800 rounded-full hover:bg-cyan-500"
                    href="https://wa.me/+917808273334?text=URL_ENCODED_MESSAGE"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FaWhatsapp />
                  </a>
                </div>
              </div>
            </div>

            {/* Right Section */}
            <div className="w-1/2 flex justify-center items-center relative ml-20">
              <div className="rounded-full bg-gradient-to-r from-cyan-500 to-blue-500 p-1">
                <img
                  className="rounded-full w-96 h-96 object-cover border-4 border-gray-900 "
                  src="pro.jpeg"
                  alt="Profile"
                />
              </div>
            </div>
          </div>
        </div>
        {/* <div className="bg-green-500 py-10">
        <div className="w-full flex justify-center">
          <ul className="flex justify-center space-x-8 text-white text-3xl">
            <li className="hover:text-cyan-500">
              <IoHomeSharp />
            </li>
            <li className="hover:text-cyan-500">
              <IoMdContact />
            </li>
            <li className="hover:text-cyan-500">
              <FaMessage />
            </li>
            <li className="hover:text-cyan-500">
              <IoBagAdd />
            </li>
          </ul>
        </div>
      </div> */}
      </div>
    </>
  );
};

export default Home;
