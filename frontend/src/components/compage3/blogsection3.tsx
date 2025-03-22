"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { useState } from "react";
import Link from "next/link";
import { ArrowLeft, ArrowRight } from "lucide-react";

const blogPosts = [
    {
        id: 1,
        title: "Staffing software: key capabilities and top products",
        date: "22 June 2022",
        image: "/image/notebook.svg",
        link: "#",
    },
    {
        id: 2,
        title: "2022 software development trends explained with benefits",
        date: "22 June 2022",
        image: "/image/paper.svg",
        link: "#",
    },
    {
        id: 3,
        title: "Business analysis helps you in finance",
        date: "22 June 2022",
        image: "/image/team.svg",
        link: "#",
    },
    {
        id: 4,
        title: "How AI is revolutionizing customer service",
        date: "23 June 2022",
        image: "/image/ai.svg",
        link: "#",
    },
    {
        id: 5,
        title: "The future of remote work and collaboration tools",
        date: "24 June 2022",
        image: "/image/remote.svg",
        link: "#",
    },
    {
        id: 6,
        title: "Cybersecurity trends to watch in 2023",
        date: "25 June 2022",
        image: "/image/security.svg",
        link: "#",
    },
];

export default function BlogSection3() {
    const [index, setIndex] = useState(0);
    const itemsPerPage = 3;
    const totalSlides = Math.ceil(blogPosts.length / itemsPerPage);

    const nextSlide = () => {
        setIndex((prev) => (prev + 1) % totalSlides);
    };

    const prevSlide = () => {
        setIndex((prev) => (prev - 1 + totalSlides) % totalSlides);
    };

    return (
        <section className="container mx-auto px-6 md:px-16 lg:px-24 py-20 relative">
            <div className="flex justify-between">
                <h2 className="text-3xl font-bold border-b-4 border-blue-600 inline-block mb-8">
                    Ensome Blog
                </h2>
                <div className="flex space-x-5 items-center">
                    <button
                        onClick={prevSlide}
                        className="p-3 bg-gray-200 rounded-full hover:bg-gray-300 transition"
                    >
                        <ArrowLeft size={20} />
                    </button>
                    <button
                        onClick={nextSlide}
                        className="p-3 bg-gray-200 rounded-full hover:bg-gray-300 transition"
                    >
                        <ArrowRight size={20} />
                    </button>
                </div>
            </div>

            <div className="overflow-hidden">
                <div
                    className="flex transition-transform duration-500"
                    style={{ transform: `translateX(-${index * 100}%)` }}
                >
                    {Array.from({ length: totalSlides }).map(
                        (_, slideIndex) => (
                            <div
                                key={slideIndex}
                                className="grid grid-cols-3 gap-6 min-w-full p-10"
                            >
                                {blogPosts
                                    .slice(
                                        slideIndex * itemsPerPage,
                                        (slideIndex + 1) * itemsPerPage
                                    )
                                    .map((post, idx) => (
                                        <motion.div
                                            key={idx}
                                            initial={{ opacity: 0, y: 20 }}
                                            animate={{ opacity: 1, y: 0 }}
                                            exit={{ opacity: 0, y: -20 }}
                                            transition={{ duration: 0.5 }}
                                            className="bg-white rounded-lg overflow-hidden shadow-lg p-6"
                                        >
                                            <Image
                                                src={post.image}
                                                alt={post.title}
                                                width={400}
                                                height={250}
                                                className="w-full object-cover"
                                            />
                                            <div className="p-4 text-left">
                                                <p className="text-sm text-gray-500">
                                                    {post.date}
                                                </p>
                                                <h2 className="text-lg font-semibold mt-1">
                                                    {post.title}
                                                </h2>
                                                <Link
                                                    href={post.link}
                                                    className="text-blue-600 font-medium mt-2 inline-flex items-center hover:underline"
                                                >
                                                    Read more →
                                                </Link>
                                            </div>
                                        </motion.div>
                                    ))}
                            </div>
                        )
                    )}
                </div>
            </div>
        </section>
    );
}
