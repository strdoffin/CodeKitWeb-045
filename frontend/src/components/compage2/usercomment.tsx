"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
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
];

export default function UserComment() {
  const [index, setIndex] = useState(0);

  const nextSlide = () => {
    setIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevSlide = () => {
    setIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <div className="container mx-auto px-4 py-12 relative">
      {/* Title + Navigation */}
      <div className="flex justify-between items-center mb-8">
        <h2 className="text-2xl font-bold border-b-4 border-blue-600 inline-block">
          What our customers say
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

      {/* Testimonials Grid (2 columns) */}
      <div className="grid grid-cols-2 gap-6">
        <AnimatePresence mode="wait">
          {[0, 1].map((offset) => {
            const currentIndex = (index + offset) % testimonials.length;
            return (
              <motion.div
                key={currentIndex}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.5 }}
                className="p-6 bg-white shadow-lg rounded-lg text-center flex flex-col items-center"
              >
                <Image
                  src={testimonials[currentIndex].image}
                  alt={testimonials[currentIndex].name}
                  width={80}
                  height={80}
                  className="rounded-full mb-4"
                />
                <h3 className="font-semibold">{testimonials[currentIndex].name}</h3>
                <p className="text-gray-500 text-sm">{testimonials[currentIndex].position}</p>
                <p className="text-gray-600 mt-4">{testimonials[currentIndex].text}</p>
              </motion.div>
            );
          })}
        </AnimatePresence>
      </div>
    </div>
  );
}
