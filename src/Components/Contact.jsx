import React from 'react'

function Contact() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-50">
      <h1 className="text-3xl font-bold mb-4">Contact Us</h1>
      <p className="text-gray-600 mb-6">
        Feel free to reach out through the form below.
      </p>
      <form className="flex flex-col gap-4 w-80">
        <input
          type="text"
          placeholder="Your Name"
          className="border p-2 rounded-md"
        />
        <input
          type="email"
          placeholder="Your Email"
          className="border p-2 rounded-md"
        />
        <textarea
          placeholder="Your Message"
          rows="4"
          className="border p-2 rounded-md"
        ></textarea>
        <button
          type="submit"
          className="bg-blue-600 text-white rounded-md p-2 hover:bg-blue-700"
        >
          Send
        </button>
      </form>
    </div>
  );
}

export default Contact