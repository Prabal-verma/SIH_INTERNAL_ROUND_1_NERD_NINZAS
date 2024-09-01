"use client";
import React, { useRef } from "react";
import emailjs from '@emailjs/browser';
import { ToastContainer, toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
export default function ContactUs() {

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_4gu18c8', 'template_lkfxei9', form.current, 'QkINLoBgFSgpXL08-')
      .then((result) => {
        toast.success("Message sent successfully!", {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        });
        e.target.reset();
      }, (error) => {
        toast.error("Failed to send message, please try again.", {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        });
      });
  };
  return (
    <main className="relative py-10 bg-gray-900">
      <ToastContainer />
      <div className="relative z-10 max-w-screen-xl mx-auto text-gray-600 sm:px-4 md:px-8">
        <div className="max-w-lg space-y-3 px-4 sm:mx-auto sm:text-center sm:px-0">
          <p className="text-white text-3xl font-semibold sm:text-4xl">Contact us</p>
          <p className="text-gray-300">We’d love to hear from you! Whether you have questions, feedback, or need support, please use the contact form below or reach out to us via the provided contact details.</p>
        </div>
        <div className="mt-12 mx-auto px-4 p-8 sm:px-8 sm:rounded-xl bg-opacity-80 bg-[#ffffff] backdrop-filter backdrop-blur-lg shadow-lg" style={{ maxWidth: '600px' }}>
          <form ref={form} onSubmit={sendEmail} className="space-y-5">
            <div>
              <label className="font-medium text-black">Full name</label>
              <input
                type="text"
                name="user_name"
                required
                className="w-full mt-2 px-3 py-2 text-black bg-transparent outline-none border focus:border-gray-900 shadow-sm rounded-lg border-gray-600" 
              />
            </div>
            <div>
              <label className="font-medium text-black">Email</label>
              <input
                type="email"
                name="user_email"
                required
                className="w-full mt-2 px-3 py-2 text-gray-500 bg-transparent outline-none border focus:border-gray-800 shadow-sm rounded-lg border-gray-600"
              />
            </div>
            <div>
              <label className="font-medium text-black">Message</label>
              <textarea
                name="message"
                required
                className="w-full mt-2 h-36 px-3 py-2 resize-none appearance-none bg-transparent outline-none border focus:border-gray-800 shadow-sm rounded-lg border-gray-600"
              ></textarea>
            </div>
            <button className="w-full px-4 py-2 text-white font-medium bg-gray-800 hover:bg-gray-700 active:bg-gray-900 rounded-lg duration-150">
              Submit
            </button>
          </form>
        </div>
      </div>
      <div
        className="absolute inset-0 blur-[118px] max-w-lg h-[800px] mx-auto sm:max-w-3xl sm:h-[400px]"
        style={{
          background:
            "linear-gradient(106.89deg, rgba(192, 132, 252, 0.11) 15.73%, rgba(14, 165, 233, 0.41) 15.74%, rgba(232, 121, 249, 0.26) 56.49%, rgba(79, 70, 229, 0.4) 115.91%)",
        }}
      ></div>
    </main>
  );
}
