import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import { BsFillSendFill } from "react-icons/bs";

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_723qa9w", // Replace with your EmailJS Service ID
        "template_d52colm", // Replace with your EmailJS Template ID
        form.current,
        "E1OfYnMYFfUf_zVaU" // Replace with your EmailJS Public Key
      )
      .then(
        (result) => {
          console.log("Email Sent:", result.text);
          alert("Message sent successfully!");
        },
        (error) => {
          console.error("Error:", error.text);
          alert("Failed to send the message. Please try again.");
        }
      );
  };

  return (
    <div className=" h-[70vh]" id="contact">
      <h1 className="text-4xl text-center text-[#8c4a2c] poppins-bold-italic mt-8 ">
        Contact Us
      </h1>
      <hr className="w-1/5 mx-auto mb-5 " />
      <form ref={form} onSubmit={sendEmail} className="w-full ">
        <div className="flex flex-wrap -mx-3 mb-6 p-10">
          <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
            <label
              className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
              htmlFor="user_name"
            >
              Full Name
            </label>
            <input
              className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
              id="user_name"
              name="user_name"
              type="text"
              placeholder="Your Name"
              required
            />
          </div>
          <div className="w-full md:w-1/2 px-3">
            <label
              className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
              htmlFor="puja_or_occasion"
            >
              Puja or Occasion
            </label>
            <input
              className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
              id="puja_or_occasion"
              name="puja_or_occasion"
              type="text"
              placeholder="Occasion"
              required
            />
          </div>
          <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
            <label
              className="block uppercase mt-5 tracking-wide text-gray-700 text-xs font-bold mb-2"
              htmlFor="user_email"
            >
              Email
            </label>
            <input
              className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
              id="user_email"
              name="user_email"
              type="email"
              placeholder="Your Email"
              required
            />
          </div>
          <div className="w-full md:w-1/2 px-3">
            <label
              className="block uppercase mt-5 tracking-wide text-gray-700 font-popping text-xs font-bold mb-2"
              htmlFor="user_number"
            >
              Number
            </label>
            <input
              className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
              id="user_number"
              name="user_number"
              type="text"
              placeholder="Your Phone Number"
              required
            />
          </div>
          <div className="w-full px-3 mt-5">
            <label
              htmlFor="message"
              className="block uppercase text-gray-700 text-xs font-bold mb-2"
            >
              Message
            </label>
            <textarea
              id="message"
              name="message"
              rows="4"
              className="appearance-none h-32 w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
              placeholder="Your message here..."
              required
            ></textarea>
          </div>
        </div>
        <div className="flex flex-col items-center text-center w-full ">
          <div className="rounded-full bg-blue-700 py-1 pl-10 flex items-center w-[150px] text-white h-min">
            <button type="submit" className="focus:outline-none">
              Sumit
            </button>
            <div className="p-3 ml-3 mr-1 text-xl bg-white rounded-full text-blue-400">
              <BsFillSendFill />
            </div>
          </div>
        </div>
      </form>
    </div>
  );
};

export default Contact;
