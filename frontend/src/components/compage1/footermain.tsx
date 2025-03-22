'use client'
import Image from "next/image";
import { ChevronDown, FacebookIcon, LinkedinIcon, TwitterIcon, YoutubeIcon, DribbbleIcon } from 'lucide-react';
import Link from "next/link";
import { useState } from "react";

// Create an array with the actual icon components
const socialMedia = [
  { name: "Facebook", icon: FacebookIcon },
  { name: "Twitter", icon: TwitterIcon },
  { name: "Linkedin", icon: LinkedinIcon },
  { name: "Youtube", icon: YoutubeIcon },
  { name: "Dribbble", icon: DribbbleIcon },
];

const quicklink = [
    {name:"Home"},
    {name:"Solutions"},
    {name:"Blog"},
    {name:"Contacts"},
    {name:"Our team"},
    {name:"About Us"},
    {name:"Services"},
    {name:"FAQ"},
];

const service = [
    {name:"Pages"},
    {name:"Elements"},
    {name:"FAQ"},
    {name:"Pricing"},
    {name:"Site map"},
];

// Contact info data
const contactInfo = [
    {name: "Email", value: "ensome@info.co.us"},
    {name: "Phone", value: "+1 601-201-5580"},
    {name: "Address", value: "1642 Washington Avenue, Jackson, MS, Mississippi, 39201"}
];

export default function Footer() {
    const [showQuickLinks, setShowQuickLinks] = useState(false);
    const [showServices, setShowServices] = useState(false);
    const [showContact, setShowContact] = useState(false);
    
    return (
        <div>
            <div className="w-full grid lg:grid-cols-2 grid-cols-1 gap-10 items-center justify-center px-5 lg:px-40 py-16 bg-white">
                
                
                <div className="border-b-1 border-white lg:hidden"></div>
                <div className="lg:col-span-2">
                    <div>
                        <Image
                            src={"/image/logo_ensome.webp"}
                            alt=""
                            width={141}
                            height={46}
                        />
                        <div 
                            className="flex justify-between py-5 cursor-pointer" 
                            onClick={() => setShowQuickLinks(!showQuickLinks)}
                        >
                            <p className="text-2xl text-black">Quick link</p>
                            <ChevronDown size={30} color="black" className={`transition-transform ${showQuickLinks ? 'rotate-180' : ''}`}/>
                        </div>
                        {showQuickLinks && (
                            <div className="flex flex-col gap-5 text-black py-3 px-10">
                                {quicklink.map((item, index) => (
                                    <Link href="/" key={index} className="hover:text-gray-300">
                                        {item.name}
                                    </Link>
                                ))}
                            </div>
                        )}
                        <div className="border-b-1 border-black"></div>
                        <div 
                            className="flex justify-between py-5 cursor-pointer"
                            onClick={() => setShowServices(!showServices)}
                        >
                            <p className="text-2xl text-black">Service</p>
                            <ChevronDown size={30} color="black" className={`transition-transform ${showServices ? 'rotate-180' : ''}`}/>
                        </div>
                        {showServices && (
                            <div className="flex flex-col gap-5 text-black py-3 px-10">
                                {service.map((item, index) => (
                                    <Link href="/" key={index} className="hover:text-gray-300">
                                        {item.name}
                                    </Link>
                                ))}
                            </div>
                        )}
                        <div className="border-b-1 border-black"></div>
                        <div 
                            className="flex justify-between py-5 cursor-pointer"
                            onClick={() => setShowContact(!showContact)}
                        >
                            <p className="text-2xl text-black">Contact info</p>
                            <ChevronDown size={30} color="black" className={`transition-transform ${showContact ? 'rotate-180' : ''}`}/>
                        </div>
                        {showContact && (
                            <div className="flex flex-col gap-5 text-black py-3 px-10">
                                {contactInfo.map((item, index) => (
                                    <div key={index} className="flex flex-col">
                                        <span className="hover:text-gray-300">{item.value}</span>
                                    </div>
                                ))}
                            </div>
                        )}
                        <div className="border-b-1 border-black"></div>
                        <div className="flex justify-between py-5">
                            <p className="text-2xl text-black">Follow us</p>
                            <ul className="flex gap-2">
                                {socialMedia.map((item, index) => {
                                    const IconComponent = item.icon;
                                    return (
                                        <li key={index} className="w-10 aspect-square bg-blue-500 rounded-full flex justify-center items-center">
                                            <IconComponent size={20} color="#ffffff" />
                                        </li>
                                    );
                                })}
                            </ul>
                        </div>
                        <div className="flex gap-5 py-2 text-black">
                            <Link href="/">Privacy policy</Link>
                            <Link href="/">Terms of us</Link>
                        </div>
                        <div className="border-t-1 border-black"></div>
                        <div className="flex gap-5 py-2 text-black"><p>Ensome© 2022 All Rights Reserved</p></div>
                    </div>
                </div>
            </div>
        </div>
    );
}