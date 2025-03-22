

import { CirclePlay } from "lucide-react"
import Image from 'next/image';
import Navbar from "@/components/navbar"

export default function Home() {
  return (
    <div>
        <Navbar />
        <section className="relative  text-white py-16 px-6 md:px-12">
      {/* Hero Content */}
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row-reverse items-center gap-12">
          <div className="w-full md:w-1/2">
          <Image
              src="/image/001_illustration.svg"
              alt=""
              width={845}
              height={518}
              className="rounded-lg"
          />
          </div>
        {/* Text Section */}
        <div className="w-full md:w-1/2">
          <h2 className="text-4xl md:text-5xl font-bold leading-tight text-black">
            Find true power in your data with <span className="text-blue-400">Ensome</span>
          </h2>
          <p className="mt-4 text-gray-400">
            Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.
          </p>
          <div className="mt-6 md:flex gap-2">
            <button className="bg-blue-500 text-white px-6 py-3 rounded-lg shadow-lg hover:bg-blue-60">
              Learn more
            </button>
            <button className="flex items-center px-6 py-3 text-black">
              <span className="mr-2"><CirclePlay size={24}/></span> Watch the demo
            </button>
          </div>
        </div>

        {/* Image Section (เว้นไว้ให้ใส่เอง) */}
      </div>

      {/* Brand Logos (เว้นไว้ให้ใส่เอง) */}
      <div className="mt-12 flex flex-wrap justify-center gap-8 opacity-60">
        {/* ใส่โลโก้ที่นี่ */}
      </div>
    </section>
    <footer className=" text-gray-300">
      <div className="max-w-6xl mx-auto flex flex-col items-center">
        {/* Partner Logos */}
        <div className="flex flex-wrap justify-center gap-4">
          <Image
              src="/image/wildwood.svg"
              alt=""
              width={185}
              height={132}
              className=""
          />
          <Image
              src="/image/applerush.svg"
              alt=""
              width={155}
              height={102}
              className=""
          />
          <Image
              src="/image/logo_3.svg"
              alt=""
              width={155}
              height={102}
              className=""
          />
          <Image
              src="/image/av-group.svg"
              alt=""
              width={155}
              height={102}
              className=""
          />
          <Image
              src="/image/hard2ignore.svg"
              alt=""
              width={155}
              height={102}
              className=""
          />
          <Image
              src="/image/fairtech.svg"
              alt=""
              width={155}
              height={102}
              className=""
          />
        </div>
      </div>
    </footer>
    
    </div>
  );
}
