"use client";

import { motion } from "framer-motion";
import { Mail, Phone, MapPin } from "lucide-react";

export default function ContactSection() {
  return (
    <section className="container mx-auto px-6 md:px-12 lg:px-24 py-20">
      <div className="grid grid-cols-1 xl:grid-cols-2 gap-12 items-center">
        {/* Contact Info */}
        <div className="max-w-md mx-auto xl:mx-0">
          <h2 className="text-3xl font-bold border-b-4 border-blue-600 inline-block mb-4">
            Contact information
          </h2>
          <p className="text-gray-500 mb-6">
            Fill up the form and our Team will get back to you within 25 hours.
          </p>
          <div className="space-y-4 text-gray-700">
            <p className="flex items-center gap-3">
              <Mail className="text-blue-600 w-5 h-5" /> ensome@info.co.us
            </p>
            <p className="flex items-center gap-3">
              <Phone className="text-blue-600 w-5 h-5" /> +1 601-201-5580
            </p>
            <p className="flex items-center gap-3">
              <MapPin className="text-blue-600 w-5 h-5" /> 1642 Washington Ave,
              Jackson, MS
            </p>
          </div>
        </div>

        {/* Contact Form */}
        <form className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-gray-700 max-w-lg mx-auto xl:mx-0 w-full">
          <div>
            <label className="block text-sm text-gray-500">Name</label>
            <input
              type="text"
              placeholder="Andrea"
              className="w-full border-b border-gray-300 py-2 outline-none focus:border-blue-600"
            />
          </div>
          <div>
            <label className="block text-sm text-gray-500">Email</label>
            <input
              type="email"
              placeholder="andrea@gmail.com"
              className="w-full border-b border-gray-300 py-2 outline-none focus:border-blue-600"
            />
          </div>
          <div className="col-span-1 sm:col-span-2">
            <label className="block text-sm text-gray-500">Theme</label>
            <input
              type="text"
              placeholder="Job"
              className="w-full border-b border-gray-300 py-2 outline-none focus:border-blue-600"
            />
          </div>
          <div className="col-span-1 sm:col-span-2">
            <label className="block text-sm text-gray-500">Message</label>
            <textarea
              placeholder="Your message"
              className="w-full border-b border-gray-300 py-2 outline-none focus:border-blue-600"
              rows={3}
            />
          </div>

          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="col-span-1 sm:col-span-2 sm:w-auto sm:ml-auto bg-blue-600 text-white font-medium py-2 px-6 rounded-md mt-4 hover:bg-white hover:text-blue-600 hover:border hover:border-blue-600 transition-all w-full"
          >
            Send
          </motion.button>
        </form>
      </div>
    </section>
  );
}
