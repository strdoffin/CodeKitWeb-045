"use client";
import { AlignJustify, X, ChevronDown, ChevronUp } from "lucide-react";
import Link from "next/link";
import { useState } from "react";

export default function Dropdown() {
    const navlist = [
        { name: "Home1", hlink: "/page1" },
        { name: "Home2", hlink: "/page2" },
        { name: "Home3", hlink: "/page3" },
    ];

    const [drop, setDrop] = useState(false);
    const [drophome, setDropHome] = useState(false);

    const handleclick = () => {
        setDrop(!drop);
    };
    const handleclickhome = () => {
        setDropHome(!drophome);
    };



    return (
        <div className="relative">
            <button onClick={handleclick}>
                {drop ? (
                    <X
                        size={30}
                        color="black"
                    />
                ) : (
                    <AlignJustify
                        size={30}
                        color="#185CFF"
                    />
                )}
            </button>

            {drop && (
                <div className="fixed top-28 left-0 w-full h-[calc(100vh-4rem)] z-40 bg-white flex p-5">
                    <nav className="w-full flex flex-col space-y-8 text-xl">
                        <button
                            
                            className="flex justify-between font-bold   w-full"
                        >
                            <p>Home</p>
                            <button onClick={handleclickhome}>
                                {drophome ? (
                                    <ChevronUp
                                        size={30}
                                        color="black"
                                    />
                                ) : (
                                    <ChevronDown
                                        size={30}
                                        color="black"
                                    />
                                )}
                            </button>
                        </button>
                        {drophome &&
                            navlist.map((v, index) => (
                                <Link
                                    key={index}
                                    href={v.hlink}
                                    className=" hover:text-gray-200 text-base px-5"
                                    onClick={handleclick}
                                >
                                    {v.name}
                                </Link>
                            ))}
                        <div className="border-t-1"></div>
                    </nav>
                </div>
            )}
        </div>
    );
}
