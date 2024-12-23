import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
// import { BsFillSendFill } from "react-icons/bs";

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_723qa9w",
        "template_d52colm",
        form.current,
        "E1OfYnMYFfUf_zVaU"
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
    <div className="bg-gray-200">
      <h1 className="text-4xl text-center text-[#8c4a2c] poppins-bold-italic ">
        Contact to Mail
      </h1>

      <hr class="border-t-2 border-gray-300 w-1/5 mx-auto" />
      <form ref={form} onSubmit={sendEmail} className="w-full ">
        <div className="flex flex-wrap  mb-6 p-10">
          <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
            <label
              className="block uppercase tracking-wide text-gray-700 text-xs font-semibold  font-popping mb-2"
              htmlFor="user_name"
            >
              Full Name
            </label>
            <input
              className="appearance-none block w-full bg-gray-300 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
              id="user_name"
              name="user_name"
              type="text"
              placeholder="Your Name"
              required
            />
          </div>
          <div className="w-full md:w-1/2 px-3">
            <label
              className="block uppercase tracking-wide text-gray-700 text-xs  mb-2 font-semibold  font-popping"
              htmlFor="puja_or_occasion"
            >
              Puja or Occasion
            </label>
            <input
              className="appearance-none block w-full bg-gray-300 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
              id="puja_or_occasion"
              name="puja_or_occasion"
              type="text"
              placeholder="Occasion"
              required
            />
          </div>
          <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
            <label
              className="block uppercase mt-5 tracking-wide text-gray-700 text-xs font-semibold  font-popping mb-2"
              htmlFor="user_email"
            >
              Email
            </label>
            <input
              className="appearance-none block w-full bg-gray-300 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
              id="user_email"
              name="user_email"
              type="email"
              placeholder="Your Email"
              required
            />
          </div>
          <div className="w-full md:w-1/2 px-3">
            <label
              className="block uppercase mt-5 tracking-wide text-gray-700 font-popping text-xs font-semibold  font-poppingmb-2"
              htmlFor="user_number"
            >
              Number
            </label>
            <input
              className="appearance-none block w-full bg-gray-300 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
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
              className="block uppercase  tracking-wide text-gray-700 font-popping text-xs font-semibold  font-poppingmb-2"
            >
              Message
            </label>
            <textarea
              id="message"
              name="message"
              rows="4"
              className="appearance-none h-32 w-full bg-gray-300 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
              placeholder="Your message here..."
              required
            ></textarea>
            <div className="flex justify-center items-center">
              <button
                type="submit"
                className="text-white bg-blue-700 hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 font-medium rounded-full text-sm px-5 py-2.5 text-center me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
              >
                Send Mails
              </button>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
};

export default Contact;
