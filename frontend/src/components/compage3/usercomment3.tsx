"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { ArrowLeft, ArrowRight } from "lucide-react";

const testimonials = [
  {
    name: "Alex Bern",
    position: "CEO by PixelPerfect",
    image: "/images/alex.jpg",
    text: "Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur?",
  },
  {
    name: "Ruben Chifundo",
    position: "CEO by NOX",
    image: "/images/ruben.jpg",
    text: "Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur?",
  },
  {
    name: "Yossawat Imjai",
    position: "CEO by EOS",
    image: "/images/ruben.jpg" ,
    text: "Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur?",
  },
  {
    name: "Liam Smith",
    position: "CTO by InnovateX",
    image: "/images/liam.jpg",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
  {
    name: "Emma Johnson",
    position: "Head of Design at Creatify",
    image: "/images/emma.jpg",
    text: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
  }
];

export default function UserComment() {
  const [index, setIndex] = useState(0);
  const itemsPerPage = 3;
  const totalSlides = Math.ceil(testimonials.length / itemsPerPage);

  const nextSlide = () => {
    setIndex((prev) => (prev + 1) % totalSlides);
  };

  const prevSlide = () => {
    setIndex((prev) => (prev - 1 + totalSlides) % totalSlides);
  };

  return (
    <div className="container mx-auto px-4 py-12 relative">
      <div className="flex justify-between items-center mb-8">
        <h2 className="text-4xl font-bold">
        Testimonials 
        </h2>
        <div className="flex space-x-2">
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
        <div className="flex transition-transform duration-500" style={{ transform: `translateX(-${index * 100}%)` }}>
          {Array.from({ length: totalSlides }).map((_, slideIndex) => (
            <div key={slideIndex} className="grid grid-cols-3 gap-6 min-w-full">
              {testimonials.slice(slideIndex * itemsPerPage, (slideIndex + 1) * itemsPerPage).map((testimonial, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.5 }}
                  className="p-6 bg-white shadow-lg rounded-lg text-center flex flex-col items-center"
                >
                  <Image
                    src={testimonial.image}
                    alt={testimonial.name}
                    width={80}
                    height={80}
                    className="rounded-full mb-4"
                  />
                  <h3 className="font-semibold">{testimonial.name}</h3>
                  <p className="text-gray-500 text-sm">{testimonial.position}</p>
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