import React, { useState } from "react";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
   
    alert(`Thank you, ${formData.name}! Your message has been sent.`);
    setFormData({ name: "", email: "", phone: "", message: "" });
  };

  return (
    <div className="font-sans bg-white text-[#333] px-6 py-12 max-w-7xl mx-auto">
      <div className="flex flex-col md:flex-row gap-12">
       
        <div className="md:w-1/2 space-y-4">
         
          <div className="mt-6 rounded-lg overflow-hidden shadow">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2938.142400850594!2d-83.71196268454086!3d42.30431697918956!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x883cadf7cb870cb3%3A0x153c67f740c885d0!2s2300%20Traverwood%20Dr%2C%20Ann%20Arbor%2C%20MI%2048105%2C%20USA!5e0!3m2!1sen!2sma!4v1719932932037!5m2!1sen!2sma"
              width="100%"
              height="350"
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="rounded"
              title="Google Map"
            ></iframe>
          </div>
        </div>
        <div className="md:w-1/2">
          <h2 className="text-2xl font-bold mb-6">Send Us a Message</h2>
          <form className="space-y-5" onSubmit={handleSubmit}>
            <input
              type="text"
              name="name"
              placeholder="Name"
              value={formData.name}
              onChange={handleChange}
              required
              className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
            <input
              type="email"
              name="email"
              placeholder="Email"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
            <input
              type="tel"
              name="phone"
              placeholder="Phone"
              value={formData.phone}
              onChange={handleChange}
              className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
            <textarea
              name="message"
              placeholder="Message"
              value={formData.message}
              onChange={handleChange}
              required
              className="w-full px-4 py-2 border border-gray-300 rounded h-32 resize-none focus:outline-none focus:ring-2 focus:ring-blue-400"
            ></textarea>
            <button
              type="submit"
              className="bg-stone-950 text-white px-14 py-2 rounded-xl  hover:bg-red-500 transition w-full md:w-auto"
            >
              SEND
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
