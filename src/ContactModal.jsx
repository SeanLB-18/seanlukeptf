import React, { useState, useEffect } from "react";
import emailjs from "@emailjs/browser";
import { socialLink } from "./socialLink";

const ContactModal = ({ isOpen, onClose }) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
    honeypot: "",
  });

  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState(""); 

  const resetForm = () => {
    setFormData({
      name: "",
      email: "",
      message: "",
      honeypot: "",
    });
  };

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
      document.documentElement.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
      document.documentElement.style.overflow = "unset";
      resetForm();
      setStatus("");
      setLoading(false);
    }
  }, [isOpen]);

  
  useEffect(() => {
    if (status) {
      const timer = setTimeout(() => setStatus(""), 3000);
      return () => clearTimeout(timer);
    }
  }, [status]);

  if (!isOpen) return null;

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (formData.honeypot) {
      console.warn("Spam detected, not sending email.");
      resetForm();
      onClose();
      return;
    }

    setLoading(true);
    setStatus("");

    emailjs
      .send(
        "service_tyrfguw", 
        "template_rxikh2g", 
        {
          name: formData.name,
          email: formData.email,
          message: formData.message,
        },
        "fZNE7SD1lqCZSgvaT" 
      )
      .then(
        () => {
          setStatus("Message sent successfully!");
          setLoading(false);
          resetForm();
        },
        () => {
          setStatus("Failed to send message. Please try again.");
          setLoading(false);
        }
      );
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center z-50 bg-black/70 backdrop-blur-sm px-8 md:px-2">
      <div className="rounded-sm shadow-lg w-full md:max-w-md p-6 max-w-sm relative bg-gradient-to-r from-gray-700/30 via-gray-800/50 to-gray-700/30 backdrop-blur-lg">
        <button
          onClick={onClose}
          className="absolute top-3 right-3 text-gray-300 cursor-pointer"
        >
          ✕
        </button>
        <h2 className="text-xl font-semibold mb-4 font-[SecondFont] tracking-wider bg-gradient-to-r from-backgroundiff to-whitediff text-transparent bg-clip-text text-shadow-lg/3">
          Drop Me a Message
        </h2>

        <form onSubmit={handleSubmit} className="space-y-5">
         
          <input
            type="text"
            name="honeypot"
            value={formData.honeypot}
            onChange={handleChange}
            className="hidden"
            autoComplete="off"
            tabIndex="-1"
          />

          <input
            type="text"
            name="name"
            placeholder="Name"
            value={formData.name}
            onChange={handleChange}
            className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-gray-700 outline-none"
            required
          />
          <input
            type="email"
            name="email"
            placeholder="Email"
            value={formData.email}
            onChange={handleChange}
            className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-gray-700 outline-none"
            required
          />
          <textarea
            name="message"
            placeholder="Message"
            value={formData.message}
            onChange={handleChange}
            className="w-full px-4 py-5 border rounded-lg focus:ring-2 focus:ring-gray-700 outline-none"
            rows="4"
            required
          ></textarea>

          <div className="flex flex-col space-y-2 mb-2 tracking-widest text-whitediff/80">
            <h2>seanluke500@gmail.com</h2>
            <h2>09265928663 / 09288573557</h2>
            <div className="flex space-x-3 mb-2">
              {socialLink.map((link, index) => (
                <a
                  key={index}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img
                    src={link.picture}
                    alt="social"
                    draggable="false"
                    className="h-10 w-10 object-contain opacity-80 "
                  />
                </a>
              ))}
            </div>
          </div>

          <button
            type="submit"
            disabled={loading}
            className="w-full bg-gradient-to-r from-gray-900/30 via-gray-200/15 to-gray-600/30 text-white py-3 rounded-lg cursor-pointer disabled:opacity-50"
          >
            {loading ? "Sending..." : "Send Message"}
          </button>

          {status && (
            <p className="text-center text-sm mt-2 transition-opacity duration-500">
              {status}
            </p>
          )}
        </form>
      </div>
    </div>
  );
};

export default ContactModal;
