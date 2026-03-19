import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function Contact() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_9ydevpb",   // ✅ Your Service ID
        "template_7k94fov",  // ✅ Your Template ID
        form.current,
        "571_NcNdbelASR2TA"  // ✅ Your Public Key
      )
      .then(
        () => {
          form.current.reset();

          toast.success("Message sent successfully! ✅", {
            position: "top-right",
            autoClose: 3000,
            theme: "dark",
          });
        },
        (error) => {
          console.error(error);

          toast.error("Failed to send message ❌", {
            position: "top-right",
            autoClose: 3000,
            theme: "dark",
          });
        }
      );
  };

  return (
    <section
      id="contact"
      className="flex flex-col items-center justify-center py-24 px-[12vw] md:px-[7vw] lg:px-[20vw]"
    >
      {/* Toast */}
      <ToastContainer />

      {/* Title */}
      <div className="text-center mb-12">
        <h2 className="text-4xl font-bold text-white">CONTACT</h2>
        <div className="w-24 h-1 bg-purple-500 mx-auto mt-3"></div>
        <p className="text-gray-400 mt-4">
          Reach out for any opportunities 🚀
        </p>
      </div>

      {/* Form */}
      <div className="w-full max-w-md bg-[#0d081f] p-6 rounded-lg border border-gray-700 shadow-lg">
        <h3 className="text-white text-center text-lg font-semibold mb-4">
          Connect With Me 🚀
        </h3>

        <form
          ref={form}
          onSubmit={sendEmail}
          className="flex flex-col gap-4"
        >
          <input
            type="text"
            name="user_name"
            placeholder="Your Name"
            required
            className="p-3 bg-[#131025] text-white rounded border border-gray-600 focus:border-purple-500 outline-none"
          />

          <input
            type="email"
            name="user_email"
            placeholder="Your Email"
            required
            className="p-3 bg-[#131025] text-white rounded border border-gray-600 focus:border-purple-500 outline-none"
          />

          <input
            type="text"
            name="subject"
            placeholder="Subject"
            required
            className="p-3 bg-[#131025] text-white rounded border border-gray-600 focus:border-purple-500 outline-none"
          />

          <textarea
            name="message"
            placeholder="Message"
            rows="4"
            required
            className="p-3 bg-[#131025] text-white rounded border border-gray-600 focus:border-purple-500 outline-none"
          />

          <button
            type="submit"
            className="bg-gradient-to-r from-purple-600 to-pink-500 py-3 text-white font-semibold rounded hover:scale-105 transition"
          >
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
}

export default Contact;