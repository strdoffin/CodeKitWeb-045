import Link from "next/link";

export default function ServicesHero() {
    return (
      <section className="relative bg-[#002B4E] py-16 px-12 text-white">
        {/* Background Grid Overlay */}
        <div className="absolute inset-0 bg-[radial-gradient(transparent_1px,#002040_1px)] bg-[size:60px_60px] opacity-20"></div>
  
        {/* Content */}
        <div className="relative max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between">
          {/* Left Section */}
          <div>
            <nav className="text-sm text-gray-400">
              <Link href="/" className="hover:text-gray-300">Home</Link> <span className="mx-2">|</span>
              <span className="text-white">Services</span>
            </nav>
            <h1 className="text-4xl md:text-5xl font-bold mt-2 text-white pt-24">Services</h1>
          </div>
  
          {/* Right Section */}
          <div className="md:w-1/2 text-right">
            <p className="text-gray-300 leading-relaxed pt-24">
              Sed ut perspiciatis unde omnis iste natus error 
              volupta accusantium doloremque laudantium, totam rem aperiam, eaque ipsa.
            </p>
          </div>
        </div>
      </section>
    );
  }
  