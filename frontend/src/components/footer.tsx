import {
  FacebookIcon,
  TwitterIcon,
  LinkedinIcon,
  YoutubeIcon,
  DribbbleIcon,
} from "lucide-react";
import Image from "next/image";

export default function Footer3() {
  return (
    <footer className="bg-[#0B1E38] text-white py-16 px-6 md:px-12">
      {/* Subscribe Section */}
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
        <div>
          <h2 className="text-4xl font-semibold">
            Subscribe to our newsletter
          </h2>
          <p className="text-gray-400 mt-2">
            Sed ut perspiciatis unde omnis iste natus error sit voluptatem
            accusantium doloremque laudantium.
          </p>
        </div>
        <div className="relative w-[500px] h-14 flex">
          <input
            type="email"
            placeholder="Your email"
            className="w-96 h-14 px-4 rounded-l-md text-black focus:outline-none focus:ring-white bg-blue-200"
          />
          <button
            type="button"
            className="bg-white text-black px-4 rounded-r-md transition-transform duration-200 hover:scale-105 active:scale-95"
          >
            Send
          </button>
        </div>
      </div>

      <hr className="border-gray-700 my-8" />

      {/* Footer Links */}
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
        <div>
          <div className="flex items-center space-x-2">
            <Image
              src="/image/logo.webp"
              alt="ENSOME Logo"
              width={120}
              height={40}
              className="h-auto w-auto"
            />{" "}
          </div>
          <p className="text-gray-400 text-sm mt-2">
            Quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi
            ut aliquid ex ea commodi.
          </p>
          {/* Social Icons */}
          <div className="flex space-x-3 mt-4">
            <div className="bg-white p-2 rounded-full hover:bg-[#0B253A] transition-colors duration-200  cursor-pointer">
              <FacebookIcon className="text-[#0B253A] hover:text-white w-6 h-6" />
            </div>
            <div className="bg-white p-2 rounded-full hover:bg-[#0B253A] transition-colors duration-200 cursor-pointer">
              <TwitterIcon className="text-[#0B253A] hover:text-white w-6 h-6" />
            </div>
            <div className="bg-white p-2 rounded-full hover:bg-[#0B253A] transition-colors duration-200 cursor-pointer">
              <LinkedinIcon className="text-[#0B253A] hover:text-white w-6 h-6" />
            </div>
            <div className="bg-white p-2 rounded-full hover:bg-[#0B253A] transition-colors duration-200 cursor-pointer">
              <YoutubeIcon className="text-[#0B253A] hover:text-white w-6 h-6" />
            </div>
            <div className="bg-white p-2 rounded-full hover:bg-[#0B253A] transition-colors duration-200 cursor-pointer">
              <DribbbleIcon className="text-[#0B253A] hover:text-white w-6 h-6" />
            </div>
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <h4 className="text-lg font-semibold mb-3">Quick Links</h4>
          <ul className="text-gray-400 space-y-2">
            <li className="hover:text-white cursor-pointer">Home</li>
            <li className="hover:text-white cursor-pointer">Solutions</li>
            <li className="hover:text-white cursor-pointer">Blog</li>
            <li className="hover:text-white cursor-pointer">Contacts</li>
            <li className="hover:text-white cursor-pointer">Our team</li>
            <li className="hover:text-white cursor-pointer">About Us</li>
            <li className="hover:text-white cursor-pointer">Services</li>
            <li className="hover:text-white cursor-pointer">FAQ</li>
          </ul>
        </div>

        {/* Services */}
        <div>
          <h4 className="text-lg font-semibold mb-3">Service</h4>
          <ul className="text-gray-400 space-y-2">
            <li className="hover:text-white cursor-pointer">Pages</li>
            <li className="hover:text-white cursor-pointer">Elements</li>
            <li className="hover:text-white cursor-pointer">FAQ</li>
            <li className="hover:text-white cursor-pointer">Pricing</li>
            <li className="hover:text-white cursor-pointer">Site map</li>
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h4 className="text-lg font-semibold mb-3">Contact Info</h4>
          <ul className="text-gray-400 space-y-2">
            <li>ensome@info.co.us</li>
            <li>+1 601-201-5580</li>
            <li>1642 Washington Avenue, Jackson, MS, Missisippi, 39201</li>
          </ul>
        </div>
      </div>

      <hr className="border-gray-700 my-8" />

      {/* Footer Bottom */}
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between text-gray-400 text-sm mt-8">
        <p>© Ensome 2022 All Rights Reserved</p>
        <div className="flex space-x-4">
          <span className="hover:text-white cursor-pointer">
            Privacy Policy
          </span>
          <span className="hover:text-white cursor-pointer">Terms of Use</span>
        </div>
      </div>
    </footer>
  );
}
