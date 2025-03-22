"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { ArrowLeft, ArrowRight } from "lucide-react";

const testimonials = [
  {
    name: "Yossawat Imjai",
    position: "CEO by DYD",
    image: "/profile/dofu.jpg",
    text: "“Ut enim ad minima veniam, quis nostrum exercitationem ullam corpor suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur?”",
  },
  {
    name: "Sirisak Sueakam",
    position: "NongFill",
    image: "/profile/ssiriiji.jpg",
    text: "“Ut enim ad minima veniam, quis nostrum exercitationem ullam corpor suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur?”",
  },
  {
    name: "Napon Narkphan",
    position: "CEO by EOS",
    image: "/profile/gxnp.jpg",
    text: "“Ut enim ad minima veniam, quis nostrum exercitationem ullam corpor suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur?”",
  },
  {
    name: "Liam Smith",
    position: "CTO by InnovateX",
    image: "/profile/liam.jpg",
    text: "“Ut enim ad minima veniam, quis nostrum exercitationem ullam corpor suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur?”",
  },
  {
    name: "Emma Johnson",
    position: "Head of Design at Creatify",
    image: "/profile/emma.jpg",
    text: "“Ut enim ad minima veniam, quis nostrum exercitationem ullam corpor suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur?”",
  },
];

export default function UserComment() {
  const [index, setIndex] = useState(0);
  const [itemsPerPage, setItemsPerPage] = useState(1);

  useEffect(() => {
    const updateItemsPerPage = () => {
      setItemsPerPage(window.innerWidth >= 1280 ? 2 : 1);
    };

    updateItemsPerPage();
    window.addEventListener("resize", updateItemsPerPage);
    return () => window.removeEventListener("resize", updateItemsPerPage);
  }, []);

  const totalSlides = Math.ceil(testimonials.length / itemsPerPage);

  const nextSlide = () => {
    setIndex((prev) => (prev + 1) % totalSlides);
  };

  const prevSlide = () => {
    setIndex((prev) => (prev - 1 + totalSlides) % totalSlides);
  };

  return (
    <div className="container mx-auto px-6 py-20 max-w-screen-lg relative">
      <div className="flex justify-between items-center mb-8">
        <h2 className="text-3xl md:text-4xl font-bold">What our customers say</h2>
        <div className="flex space-x-2">
          <button
            onClick={prevSlide}
            className="p-2 md:p-3 bg-gray-200 rounded-full hover:bg-gray-300 transition"
          >
            <ArrowLeft size={20} />
          </button>
          <button
            onClick={nextSlide}
            className="p-2 md:p-3 bg-gray-200 rounded-full hover:bg-gray-300 transition"
          >
            <ArrowRight size={20} />
          </button>
        </div>
      </div>

      <div className="overflow-hidden flex justify-center">
        <div
          className="flex transition-transform duration-500"
          style={{ transform: `translateX(-${index * 100}%)` }}
        >
          {Array.from({ length: totalSlides }).map((_, slideIndex) => (
            <div
              key={slideIndex}
              className="flex flex-col xl:grid xl:grid-cols-2 gap-6 min-w-full p-4 items-center"
            >
              {testimonials
                .slice(slideIndex * itemsPerPage, (slideIndex + 1) * itemsPerPage)
                .map((testimonial, idx) => (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    transition={{ duration: 0.5 }}
                    className="p-6 bg-white border border-gray-200 shadow-lg rounded-lg flex flex-col max-w-xl mx-auto"
                  >
                    <div className="flex gap-5 items-center">
                      <Image
                        src={testimonial.image}
                        alt={testimonial.name}
                        width={80}
                        height={80}
                        className="rounded-full"
                      />
                      <div>
                        <h3 className="font-semibold">{testimonial.name}</h3>
                        <p className="text-gray-500 text-sm">{testimonial.position}</p>
                      </div>
                    </div>
                    <p className="text-gray-600 mt-4">{testimonial.text}</p>
                  </motion.div>
                ))}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
