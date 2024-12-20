import React, { useRef } from "react";
import emailjs from "@emailjs/browser";

const About = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "your_service_id", // Replace with your EmailJS Service ID
        "your_template_id", // Replace with your EmailJS Template ID
        form.current,
        "your_public_key" // Replace with your EmailJS Public Key
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
    <div id="about" className="bg-gray-100 py-10 px-6">
      <h2 className="text-3xl font-bold mb-6">About Me</h2>
      <p className="text-gray-700 mb-6">
        Welcome to my portfolio! Feel free to contact me through the form below.
      </p>

      <form
        ref={form}
        onSubmit={sendEmail}
        className="bg-white shadow-md p-6 rounded-lg"
      >
        <div className="mb-4">
          <label htmlFor="user_name" className="block text-gray-700">
            Name
          </label>
          <input
            type="text"
            name="user_name"
            id="user_name"
            required
            className="w-full border border-gray-300 rounded-lg p-2"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="user_email" className="block text-gray-700">
            Email
          </label>
          <input
            type="email"
            name="user_email"
            id="user_email"
            required
            className="w-full border border-gray-300 rounded-lg p-2"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="message" className="block text-gray-700">
            Message
          </label>
          <textarea
            name="message"
            id="message"
            rows="4"
            required
            className="w-full border border-gray-300 rounded-lg p-2"
          ></textarea>
        </div>
        <button
          type="submit"
          className="bg-cyan-500 text-white px-4 py-2 rounded-lg hover:bg-cyan-600"
        >
          Send Message
        </button>
      </form>
    </div>
  );
};

export default About;
