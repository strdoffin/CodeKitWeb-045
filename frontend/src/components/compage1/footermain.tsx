import {
    FacebookIcon,
    TwitterIcon,
    LinkedinIcon,
    YoutubeIcon,
    DribbbleIcon,
} from "lucide-react";
import Image from "next/image";

export default function Footermain() {
    return (
        <footer className="bg-white text-white px-6 md:px-12 py-10">

            {/* Footer Links */}
            <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
                <div>
                    <div className="flex items-center space-x-2">
                        <Image
                            src="/image/logo_ensome.webp"
                            alt="ENSOME Logo"
                            width={120}
                            height={40}
                            className="h-auto w-auto"
                        />
                    </div>
                    
                    {/* Social Icons */}
                    <div className="flex mt-6 gap-1">
                        
                        <Image
                            src="/image/icon_facebook.webp"
                            width={120}
                            height={40}
                            className="h-auto w-auto"
                        />
                        <Image
                            src="/image/icon_twitter.webp"
                            width={120}
                            height={40}
                            className="h-auto w-auto"
                        />
                        <Image
                            src="/image/icon_linkedin.webp"
                            width={120}
                            height={40}
                            className="h-auto w-auto"
                        />
                        <Image
                            src="/image/icon_youtube.webp"
                            width={120}
                            height={40}
                            className="h-auto w-auto"
                        />
                        <Image
                            src="/image/icon_dribbble.webp"
                            width={120}
                            height={40}
                            className="h-auto w-auto"
                        />
                        <Image
                            src="/image/icon_behance.webp"
                            width={120}
                            height={40}
                            className="h-auto w-auto"
                        />
                    </div>
                </div>

                {/* Quick Links */}
                <div>
                    <h4 className="text-lg font-semibold mb-3 text-black">Quick Links</h4>
                    <ul className="text-black font-light space-y-2">
                        <li className="hover:text-blue-700 cursor-pointer">Home</li>
                        <li className="hover:text-blue-700 cursor-pointer">Solutions</li>
                        <li className="hover:text-blue-700 cursor-pointer">Blog</li>
                        <li className="hover:text-blue-700 cursor-pointer">Contacts</li>
                        <li className="hover:text-blue-700 cursor-pointer">Our team</li>
                        <li className="hover:text-blue-700 cursor-pointer">About Us</li>
                        <li className="hover:text-blue-700 cursor-pointer">Services</li>
                        <li className="hover:text-blue-700 cursor-pointer">FAQ</li>
                    </ul>
                </div>

                {/* Services */}
                <div>
                    <h4 className="text-lg font-semibold mb-3 text-black">Service</h4>
                    <ul className="text-black font-light space-y-2">
                        <li className="hover:text-blue-700 cursor-pointer">Pages</li>
                        <li className="hover:text-blue-700 cursor-pointer">Elements</li>
                        <li className="hover:text-blue-700 cursor-pointer">FAQ</li>
                        <li className="hover:text-blue-700 cursor-pointer">Pricing</li>
                        <li className="hover:text-blue-700 cursor-pointer">Site map</li>
                    </ul>
                </div>

                {/* Contact Info */}
                <div>
                    <h4 className="text-lg font-semibold mb-3 text-black">Contact Info</h4>
                    <ul className="text-black font-light space-y-2">
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
