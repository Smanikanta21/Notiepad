import React from 'react';

export default function Contact() {
    return (
      <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-blue-100 to-purple-100 p-6">
        <h1 className="text-4xl font-bold text-blue-600 mb-8 animate-pulse">Get in Touch</h1>
        <form className="w-full max-w-lg bg-white shadow-lg rounded-lg p-8 space-y-6">
          <div>
            <label className="block text-blue-700 font-semibold mb-2">Name</label>
            <input type="text" placeholder="Your Name" className="w-full px-4 py-2 border rounded-md " />
          </div>
          <div>
            <label className="block text-blue-700 font-semibold mb-2">Email</label>
            <input type="email" placeholder="you@example.com" className="w-full px-4 py-2 border rounded-md " />
          </div>
          <div>
            <label className="block text-blue-700 font-semibold mb-2">Message</label>
            <textarea  placeholder="Your message" className="w-full px-4 py-2 border rounded-md "></textarea>
          </div>
          <button type="submit" className="w-full py-2 bg-purple-500 text-white font-bold rounded-md hover:bg-purple-600 transition">Send Message</button>
        </form>
      </div>
    );
}