import { CirclePlay } from "lucide-react"
import Image from 'next/image';
import Navbar from "@/components/navbar"
import Usercomment from './../../components/compage1/usercomment';


export default function Home() {
  return (
    <div>
        <Navbar />
        <section className="relative text-white py-16 px-6 md:px-12">
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
        </section>
        <footer className=" text-gray-300">
        <div className="max-w-6xl mx-auto flex flex-col items-center mt-6">
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

        <div id="one-page-2" className="">
            <section className="bg-gray-50 py-20 h-[100vh]">
                <div className="max-w-6xl mx-auto px-6">
                    {/* Title */}
                    <h2 className="text-3xl font-bold text-gray-900 text-center">
                        Why our clients choose Ensome?
                    </h2>
                    <p className="text-gray-500 mt-4 max-w-2xl mx-auto text-center">
                        Doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto
                        beatae vitae dicta sunt explicabo.
                    </p>

                    {/* Feature Cards */}
                    <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-6">
                        {/* Card 1 */}
                        <div className="bg-white shadow-lg rounded-lg p-6">
                            <div className="flex items-center justify-center h-12 w-12 bg-blue-100 rounded-lg">
                                <Image
                                    src="/image/01_icon_brain_circuit.svg"
                                    alt=""
                                    width={42}
                                    height={42}
                                    className=""
                                />
                            </div>
                            <h3 className="text-xl font-semibold text-gray-900 mt-4">Machine learning</h3>
                            <p className="text-gray-500 mt-2">
                                At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores.
                            </p>
                        </div>

                        {/* Card 2 */}
                        <div className="bg-white shadow-lg rounded-lg p-6">
                            <div className="flex items-center justify-center h-12 w-12 bg-blue-100 rounded-lg">
                                <Image
                                    src="/image/02_icon_arrow_trending_lines.svg"
                                    alt=""
                                    width={42}
                                    height={42}
                                    className=""
                                />
                            </div>
                            <h3 className="text-xl font-semibold text-gray-900 mt-4">Embed analytics</h3>
                            <p className="text-gray-500 mt-2">
                                At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores.
                            </p>
                        </div>

                        {/* Card 3 */}
                        <div className="bg-white shadow-lg rounded-lg p-6">
                            <div className="flex items-center justify-center h-12 w-12 bg-blue-100 rounded-lg">
                                <Image
                                    src="/image/03_icon_key.svg"
                                    alt=""
                                    width={42}
                                    height={42}
                                    className=""
                                />
                            </div>
                            <h3 className="text-xl font-semibold text-gray-900 mt-4">Access control</h3>
                            <p className="text-gray-500 mt-2">
                                At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores.
                            </p>
                        </div>
                    </div>
                </div>
            </section>
        </div>

        <div className="bg-gray-50">
            {/* Hero Section */}
            <div className="min-h-screen bg-white">
                <main className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
                    {/* Hero Section */}
                    <div className="grid md:grid-cols-2 gap-12 items-center mb-24">
                        <div>
                            <h1 className="text-4xl font-bold text-gray-900 mb-6">
                                The newest business analytics platform
                            </h1>
                            <p className="text-gray-600 mb-8">
                                Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium,
                                totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae
                                dicta sunt explicabo.
                            </p>
                            <button
                                className="bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 px-8 rounded-md transition duration-300">
                                Learn more
                            </button>
                        </div>
                        <div className="flex justify-center relative">
                            {/* Replace with your actual image */}
                            <div className="relative">
                                {/* Main server/analytics image */}
                                <div className="w-64 h-64 bg-blue-100 rounded-lg shadow-lg"></div>

                                {/* Floating elements around the main image */}
                                <div className="absolute -top-8 right-16 w-12 h-12 bg-blue-50 rounded"></div>
                                <div className="absolute top-12 -right-12 w-20 h-20 bg-blue-50 rounded"></div>
                                <div className="absolute bottom-12 -right-8 w-16 h-16 bg-blue-50 rounded"></div>
                                <div className="absolute -bottom-6 left-20 w-16 h-16 bg-blue-50 rounded"></div>
                                <div className="absolute top-20 -left-10 w-10 h-10 bg-blue-50 rounded"></div>
                            </div>
                        </div>
                    </div>

                    {/* Second Section */}
                    <div className="grid md:grid-cols-2 gap-12 items-center mb-24">
                        <div className="flex justify-center order-2 md:order-1 relative">
                            {/* Replace with your actual image */}
                            <div className="relative">
                                {/* Main visualization image with blue curve */}
                                <div className="w-72 h-64 bg-blue-50 rounded-lg relative"></div>

                                {/* Add data visualization elements */}
                                <div className="absolute bottom-0 left-0 w-16 h-16 bg-blue-100 rounded"></div>
                                <div className="absolute -bottom-8 right-12 w-20 h-16 bg-blue-100 rounded"></div>
                                <div className="absolute top-6 right-0 w-16 h-16 bg-blue-100 rounded"></div>
                                <div className="absolute bottom-20 -left-12 w-16 h-16 bg-blue-100 rounded"></div>
                                <div className="absolute -bottom-20 -left-4 w-16 h-16 bg-white border border-blue-200 rounded">
                                </div>

                                {/* Blue curved line */}
                                <div className="absolute inset-0 flex items-center justify-center">
                                    <div className="w-4 h-40 bg-blue-600 rounded-full transform rotate-12"></div>
                                </div>
                            </div>
                        </div>
                        <div className="order-1 md:order-2">
                            <h2 className="text-4xl font-bold text-gray-900 mb-6">
                                Radically new data solutions
                            </h2>
                            <p className="text-gray-600 mb-8">
                                Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium,
                                totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae
                                dicta sunt explicabo.
                            </p>
                            <button
                                className="bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 px-8 rounded-md transition duration-300">
                                Learn more
                            </button>
                        </div>
                    </div>
                </main>
            </div>

            {/* Features Section */}
            <div className="bg-blue-50">
                <section className="py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <h2 className="text-4xl font-bold text-center text-gray-800 mb-12">
                        Glad to help your success
                    </h2>

                    <div className="grid md:grid-cols-3 gap-6 mb-12">
                        {/* Feature Card 1 */}
                        <div className="bg-white rounded-lg shadow-sm p-6">
                            <p className="text-gray-500 text-sm mb-3">22 June 2020</p>
                            <h3 className="font-bold text-xl mb-3">Sed ut perspiciatis unde omnis at vero blanditiis</h3>
                            <p className="text-gray-600 mb-6">
                                At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum
                                deleniti...
                            </p>
                            <div className="flex space-x-4">
                                <a href="#" className="text-blue-600 font-medium text-sm">Proxy</a>
                                <a href="#" className="text-blue-600 font-medium text-sm">VPN</a>
                            </div>
                        </div>

                        {/* Feature Card 2 */}
                        <div className="bg-white rounded-lg shadow-sm p-6">
                            <p className="text-gray-500 text-sm mb-3">22 June 2020</p>
                            <h3 className="font-bold text-xl mb-3">Sed ut perspiciatis unde omnis at vero blanditiis</h3>
                            <p className="text-gray-600 mb-6">
                                At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum
                                deleniti...
                            </p>
                            <div className="flex space-x-4">
                                <a href="#" className="text-blue-600 font-medium text-sm">Proxy</a>
                                <a href="#" className="text-blue-600 font-medium text-sm">VPN</a>
                            </div>
                        </div>

                        {/* Feature Card 3 */}
                        <div className="bg-white rounded-lg shadow-sm p-6">
                            <p className="text-gray-500 text-sm mb-3">22 June 2020</p>
                            <h3 className="font-bold text-xl mb-3">Sed ut perspiciatis unde omnis at vero blanditiis</h3>
                            <p className="text-gray-600 mb-6">
                                At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum
                                deleniti...
                            </p>
                            <div className="flex space-x-4">
                                <a href="#" className="text-blue-600 font-medium text-sm">Proxy</a>
                                <a href="#" className="text-blue-600 font-medium text-sm">VPN</a>
                            </div>
                        </div>
                    </div>

                    <div className="flex justify-center">
                        <button
                            className="bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 px-8 rounded-md transition duration-300">
                            Learn more
                        </button>
                    </div>
                </section>

                <Usercomment/>
                
            </div>

            {/* Statistics Section */}
            <section className="py-20 bg-blue-500 text-white text-center">
                <div className="max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-6">
                    <div>
                        <h3 className="text-3xl font-bold">1830+</h3>
                        <p>Projects Executed</p>
                    </div>
                    <div>
                        <h3 className="text-3xl font-bold">220</h3>
                        <p>Data Analytics</p>
                    </div>
                    <div>
                        <h3 className="text-3xl font-bold">390</h3>
                        <p>Data Management</p>
                    </div>
                    <div>
                        <h3 className="text-3xl font-bold">834+</h3>
                        <p>Satisfied Customers</p>
                    </div>
                </div>
            </section>

            {/* Contact Section */}
            <section className="py-20 bg-blue-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid md:grid-cols-2 gap-10 items-center">
                        {/* Left Column - Contact Information */}
                        <div className="space-y-8">
                            <div>
                                <h2 className="text-4xl font-bold text-gray-800 mb-4">
                                    Left questions? Contacts us now for a free consultation and free trial!
                                </h2>
                                <p className="text-gray-600 mb-8">
                                    Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi
                                    ut aliquid ex ea commodi.
                                </p>
                            </div>

                            <div className="space-y-6">
                                <div>
                                    <p className="text-gray-500 text-sm mb-1">Email address</p>
                                    <p className="text-gray-800 font-medium">ensome@info.co.us</p>
                                </div>

                                <div>
                                    <p className="text-gray-500 text-sm mb-1">Phone number</p>
                                    <p className="text-gray-800 font-medium">+1601-201-5580</p>
                                </div>

                                <div>
                                    <p className="text-gray-500 text-sm mb-1">Address</p>
                                    <p className="text-gray-800 font-medium">1642 Washington Avenue, Jackson, MS, Mississippi, 39201
                                    </p>
                                </div>
                            </div>
                        </div>

                        {/* Right Column - Contact Form */}
                        <div className="bg-white p-8 rounded-lg shadow-sm">
                            <h3 className="text-2xl font-bold text-gray-800 mb-6">Contact Us</h3>

                            <form className="space-y-6">
                                <div>
                                    <label htmlFor="name" className="block text-gray-500 text-sm mb-2">Name</label>
                                    <input type="text" id="name"
                                        className="w-full px-3 py-2 border-b border-gray-300 focus:outline-none focus:border-blue-500"
                                        placeholder="Andrea" />
                                </div>

                                <div>
                                    <label htmlFor="email" className="block text-gray-500 text-sm mb-2">Email</label>
                                    <input type="email" id="email"
                                        className="w-full px-3 py-2 border-b border-gray-300 focus:outline-none focus:border-blue-500"
                                        placeholder="andrea@gmail.com" />
                                </div>

                                <div>
                                    <label htmlFor="theme" className="block text-gray-500 text-sm mb-2">Theme</label>
                                    <input type="text" id="theme"
                                        className="w-full px-3 py-2 border-b border-gray-300 focus:outline-none focus:border-blue-500"
                                        placeholder="Job" />
                                </div>

                                <div>
                                    <label htmlFor="message" className="block text-gray-500 text-sm mb-2">Message</label>
                                    <input type="text" id="message"
                                        className="w-full px-3 py-2 border-b border-gray-300 focus:outline-none focus:border-blue-500"
                                        placeholder="Your message" />
                                </div>

                                <button type="submit"
                                    className="w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 px-6 rounded-md transition duration-300">
                                    Send
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
            </section>

            {/* Footer Section */}
            <footer className="w-full">
                {/* Newsletter Section */}
                <div className="w-full bg-blue-600 py-16 px-4 md:px-8">
                    <div className="max-w-6xl mx-auto">
                        <h2 className="text-white text-3xl font-bold mb-4">Subscribe to our newsletter</h2>
                        <p className="text-white mb-8 max-w-xl">
                            Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium.
                        </p>
                        <div className="flex flex-col sm:flex-row max-w-lg gap-2">
                            <input type="email" placeholder="Your email" className="flex-grow p-3 rounded-md bg-gray-100" />
                            <button className="bg-white text-gray-800 font-medium py-3 px-6 rounded-md">
                                Send
                            </button>
                        </div>
                    </div>
                </div>

                {/* Main Footer */}
                <div className="bg-gray-50 py-12 px-4 md:px-8">
                    <div className="max-w-6xl mx-auto">
                        {/* Logo and Links Section */}
                        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
                            <div className="col-span-1">
                                <Link href="/">
                                <div className="flex items-center mb-6">
                                    <img src="/logo.svg" alt="Ensome Logo" className="h-8" />
                                    <span className="ml-2 text-blue-600 font-bold text-xl">ENSOME</span>
                                </div>
                                </Link>
                            </div>

                            {/* About Column */}
                            <div className="col-span-1">
                                <h3 className="font-bold text-lg mb-4">About</h3>
                                <ul className="space-y-3">
                                    <li>
                                        <Link href="/home" className="text-gray-600 hover:text-blue-600">Home</Link>
                                    </li>
                                    <li>
                                        <Link href="/about-us" className="text-gray-600 hover:text-blue-600">About Us</Link>
                                    </li>
                                    <li>
                                        <Link href="/services" className="text-gray-600 hover:text-blue-600">Services</Link>
                                    </li>
                                    <li>
                                        <Link href="/solutions" className="text-gray-600 hover:text-blue-600">Solutions</Link>
                                    </li>
                                </ul>
                            </div>

                            {/* Information Column */}
                            <div className="col-span-1">
                                <h3 className="font-bold text-lg mb-4">Information</h3>
                                <ul className="space-y-3">
                                    <li>
                                        <Link href="/contacts" className="text-gray-600 hover:text-blue-600">Contacts</Link>
                                    </li>
                                    <li>
                                        <Link href="/our-team" className="text-gray-600 hover:text-blue-600">Our team</Link>
                                    </li>
                                    <li>
                                        <Link href="/blog" className="text-gray-600 hover:text-blue-600">Blog</Link>
                                    </li>
                                    <li>
                                        <Link href="/faq" className="text-gray-600 hover:text-blue-600">FAQ</Link>
                                    </li>
                                </ul>
                            </div>

                            {/* Service Column */}
                            <div className="col-span-1">
                                <h3 className="font-bold text-lg mb-4">Service</h3>
                                <ul className="space-y-3">
                                    <li>
                                        <Link href="/pages" className="text-gray-600 hover:text-blue-600">Pages</Link>
                                    </li>
                                    <li>
                                        <Link href="/elements" className="text-gray-600 hover:text-blue-600">Elements</Link>
                                    </li>
                                    <li>
                                        <Link href="/site-map" className="text-gray-600 hover:text-blue-600">Site map</Link>
                                    </li>
                                    <li>
                                        <Link href="/pricing" className="text-gray-600 hover:text-blue-600">Pricing</Link>
                                    </li>
                                    <li>
                                        <Link href="/faq-service" className="text-gray-600 hover:text-blue-600">FAQ</Link>
                                    </li>
                                </ul>
                            </div>
                        </div>

                        <hr className="border-gray-200 mb-12" />

                        {/* Contact and Social Section */}
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
                            <div className="col-span-1">
                                <h3 className="font-bold text-lg mb-4">Contacts</h3>
                                <div className="space-y-4">
                                    <p className="text-gray-600">+1 601-201-5580</p>
                                    <div className="flex items-center">
                                        <a href="mailto:ensome@info.co.us"
                                            className="text-gray-600 hover:text-blue-600">ensome@info.co.us</a>
                                        <svg className="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"
                                            xmlns="http://www.w3.org/2000/svg">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                                                d="M14 5l7 7m0 0l-7 7m7-7H3" />
                                        </svg>
                                    </div>
                                    <p className="text-gray-600">1642 Washington Avenue, Jackson, MS, 39201</p>
                                    <div className="flex items-center">
                                        <a href="/directions" className="text-gray-600 hover:text-blue-600">Driving directions</a>
                                        <svg className="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"
                                            xmlns="http://www.w3.org/2000/svg">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                                                d="M14 5l7 7m0 0l-7 7m7-7H3" />
                                        </svg>
                                    </div>
                                </div>
                            </div>

                            <div className="col-span-1">
                                <h3 className="font-bold text-lg mb-4">Social</h3>
                                <div className="flex space-x-4">
                                    <a href="#" className="bg-blue-600 text-white p-2 rounded-full">
                                        <span className="sr-only">Facebook</span>
                                        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                                            <path fillRule="evenodd"
                                                d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"
                                                clipRule="evenodd" />
                                        </svg>
                                    </a>
                                    <a href="#" className="bg-blue-400 text-white p-2 rounded-full">
                                        <span className="sr-only">Twitter</span>
                                        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                                            <path
                                                d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                                        </svg>
                                    </a>
                                    <a href="#" className="bg-blue-700 text-white p-2 rounded-full">
                                        <span className="sr-only">LinkedIn</span>
                                        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                                            <path fillRule="evenodd"
                                                d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"
                                                clipRule="evenodd" />
                                        </svg>
                                    </a>
                                    <a href="#" className="bg-red-600 text-white p-2 rounded-full">
                                        <span className="sr-only">YouTube</span>
                                        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                                            <path fillRule="evenodd"
                                                d="M19.812 5.418c.861.23 1.538.907 1.768 1.768C21.998 8.746 22 12 22 12s0 3.255-.418 4.814a2.504 2.504 0 0 1-1.768 1.768c-1.56.419-7.814.419-7.814.419s-6.255 0-7.814-.419a2.505 2.505 0 0 1-1.768-1.768C2 15.255 2 12 2 12s0-3.255.417-4.814a2.507 2.507 0 0 1 1.768-1.768C5.744 5 11.998 5 11.998 5s6.255 0 7.814.418ZM15.194 12 10 15V9l5.194 3Z"
                                                clipRule="evenodd" />
                                        </svg>
                                    </a>
                                    <a href="#" className="bg-red-500 text-white p-2 rounded-full">
                                        <span className="sr-only">Google</span>
                                        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                                            <path
                                                d="M12.48 10.92v3.28h7.84c-.24 1.84-.853 3.187-1.787 4.133-1.147 1.147-2.933 2.4-6.053 2.4-4.827 0-8.6-3.893-8.6-8.72s3.773-8.72 8.6-8.72c2.6 0 4.507 1.027 5.907 2.347l2.307-2.307C18.747 1.44 16.133 0 12.48 0 5.867 0 .307 5.387.307 12s5.56 12 12.173 12c3.573 0 6.267-1.173 8.373-3.36 2.16-2.16 2.84-5.213 2.84-7.667 0-.76-.053-1.467-.173-2.053H12.48z" />
                                        </svg>
                                    </a>
                                    <a href="#" className="bg-blue-700 text-white p-2 rounded-full">
                                        <span className="sr-only">Discord</span>
                                        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                                            <path
                                                d="M20.317 4.3698a19.7913 19.7913 0 00-4.8851-1.5152.0741.0741 0 00-.0785.0371c-.211.3753-.4447.8648-.6083 1.2495-1.8447-.2762-3.68-.2762-5.4868 0-.1636-.3933-.4058-.8742-.6177-1.2495a.077.077 0 00-.0785-.037 19.7363 19.7363 0 00-4.8852 1.515.0699.0699 0 00-.0321.0277C.5334 9.0458-.319 13.5799.0992 18.0578a.0824.0824 0 00.0312.0561c2.0528 1.5076 4.0413 2.4228 5.9929 3.0294a.0777.0777 0 00.0842-.0276c.4616-.6304.8731-1.2952 1.226-1.9942a.076.076 0 00-.0416-.1057c-.6528-.2476-1.2743-.5495-1.8722-.8923a.077.077 0 01-.0076-.1277c.1258-.0943.2517-.1923.3718-.2914a.0743.0743 0 01.0776-.0105c3.9278 1.7933 8.18 1.7933 12.0614 0a.0739.0739 0 01.0785.0095c.1202.099.246.1981.3728.2924a.077.077 0 01-.0066.1276 12.2986 12.2986 0 01-1.873.8914.0766.0766 0 00-.0407.1067c.3604.698.7719 1.3628 1.225 1.9932a.076.076 0 00.0842.0286c1.961-.6067 3.9495-1.5219 6.0023-3.0294a.077.077 0 00.0313-.0552c.5004-5.177-.8382-9.6739-3.5485-13.6604a.061.061 0 00-.0312-.0286zM8.02 15.3312c-1.1825 0-2.1569-1.0857-2.1569-2.419 0-1.3332.9555-2.4189 2.157-2.4189 1.2108 0 2.1757 1.0952 2.1568 2.419 0 1.3332-.9555 2.4189-2.1569 2.4189zm7.9748 0c-1.1825 0-2.1569-1.0857-2.1569-2.419 0-1.3332.9554-2.4189 2.1569-2.4189 1.2108 0 2.1757 1.0952 2.1568 2.419 0 1.3332-.946 2.4189-2.1568 2.4189Z" />
                                        </svg>
                                    </a>
                                </div>
                            </div>
                        </div>

                        <hr className="border-gray-200 mb-8" />

                        {/* Copyright Section */}
                        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
                            <div className="flex flex-col md:flex-row gap-4 md:gap-8">
                                <div className="flex items-center">
                                    <a href="/privacy-policy" className="text-gray-600 hover:text-blue-600">Privacy policy</a>
                                    <svg className="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"
                                        xmlns="http://www.w3.org/2000/svg">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                                            d="M14 5l7 7m0 0l-7 7m7-7H3" />
                                    </svg>
                                </div>
                                <div className="flex items-center">
                                    <a href="/terms-of-use" className="text-gray-600 hover:text-blue-600">Terms of us</a>
                                    <svg className="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"
                                        xmlns="http://www.w3.org/2000/svg">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                                            d="M14 5l7 7m0 0l-7 7m7-7H3" />
                                    </svg>
                                </div>
                            </div>
                            <p className="text-gray-600">© 2022 Ensome. All Rights Reserved.</p>
                        </div>
                    </div>
                </div>
            </footer>
        </div>
    </div>
  );
}
