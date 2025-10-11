import React from "react";

const Contact = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-[#111] text-white px-4">
      <h1 className="text-3xl font-bold mb-4">Contact Us</h1>
      <p className="text-gray-400 mb-6 text-center">
        Feel free to reach out through the form below.
      </p>

      <form className="flex flex-col gap-4 w-full max-w-md bg-[#1a1a1a] p-6 rounded-2xl shadow-lg">
        {/* Name */}
        <div>
          <label className="block mb-2 text-sm font-semibold">Name</label>
          <input
            type="text"
            placeholder="Your Name"
            className="w-full bg-[#222] rounded-lg px-3 py-2 text-gray-300 outline-none focus:ring-2 focus:ring-blue-600"
          />
        </div>

        {/* Email */}
        <div>
          <label className="block mb-2 text-sm font-semibold">Email</label>
          <input
            type="email"
            placeholder="Your Email"
            className="w-full bg-[#222] rounded-lg px-3 py-2 text-gray-300 outline-none focus:ring-2 focus:ring-blue-600"
          />
        </div>

        {/* Subject */}
        <div>
          <label className="block mb-2 text-sm font-semibold">Subject</label>
          <input
            type="text"
            placeholder="Subject"
            className="w-full bg-[#222] rounded-lg px-3 py-2 text-gray-300 outline-none focus:ring-2 focus:ring-blue-600"
          />
        </div>

        {/* Phone */}
        <div>
          <label className="block mb-2 text-sm font-semibold">Phone Number</label>
          <input
            type="tel"
            placeholder="+91"
            className="w-full bg-[#222] rounded-lg px-3 py-2 text-gray-300 outline-none focus:ring-2 focus:ring-blue-600"
          />
        </div>

        {/* Message */}
        <div>
          <label className="block mb-2 text-sm font-semibold">Message</label>
          <textarea
            rows="4"
            placeholder="Write your message..."
            className="w-full bg-[#222] rounded-lg px-3 py-2 text-gray-300 outline-none focus:ring-2 focus:ring-blue-600 resize-none"
          ></textarea>
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          className="mt-4 w-full bg-blue-600 hover:bg-blue-700 transition-all py-2 rounded-lg font-semibold"
        >
          Send Message
        </button>
      </form>
    </div>
  );
};

export default Contact;
