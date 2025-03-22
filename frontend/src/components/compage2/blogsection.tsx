"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const blogPosts = [
  {
    id: 1,
    title: "Staffing software: key capabilities and top products",
    date: "22 June 2022",
    image: "/image/notebook.webp", // เปลี่ยนเป็น path รูปจริง
    link: "#",
  },
  {
    id: 2,
    title: "2022 software development trends explained with benefits",
    date: "22 June 2022",
    image: "/image/paper.webp",
    link: "#",
  },
  {
    id: 3,
    title: "Business analysis helps you in finance",
    date: "22 June 2022",
    image: "/image/team.webp",
    link: "#",
  },
];

export default function BlogSection() {
  return (
    <section className="container mx-auto px-24 py-40">
      {/* Title */}
      <h2 className="text-3xl font-bold border-b-4 border-blue-600 inline-block mb-8">
        Ensome blog
      </h2>

      {/* Blog Grid */}
      <div className="grid md:grid-cols-3 gap-6">
        {blogPosts.map((post) => (
          <motion.div
            key={post.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.3 }}
            className="bg-white rounded-lg overflow-hidden shadow-lg"
          >
            <Image src={post.image} alt={post.title} width={400} height={250} className="w-full" />
            <div className="p-4 text-left">
              <p className="text-sm text-gray-500">{post.date}</p>
              <h3 className="text-lg font-semibold mt-1">{post.title}</h3>
              <a
                href={post.link}
                className="text-blue-600 font-medium mt-2 inline-flex items-center hover:underline"
              >
                Read more →
              </a>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
