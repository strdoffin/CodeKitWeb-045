import { CirclePlay } from "lucide-react"
import Image from 'next/image';
import Navbar from "@/components/navbar"

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

                {/* Testimonials Section */}
                <section className="py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex justify-between items-center mb-12">
                        <h2 className="text-4xl font-bold text-gray-800">
                            Trusted by the best<br />in the business
                        </h2>

                        <div className="flex space-x-4">
                            <button className="bg-white hover:bg-gray-100 p-3 rounded-md shadow-sm">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-gray-400" fill="none"
                                    viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                                </svg>
                            </button>
                            <button className="bg-white hover:bg-gray-100 p-3 rounded-md shadow-sm">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-gray-800" fill="none"
                                    viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                                </svg>
                            </button>
                        </div>
                    </div>

                    <div className="grid md:grid-cols-2 gap-6">
                        {/* Testimonial 1 */}
                        <div className="bg-white rounded-lg shadow-sm p-8">
                            <div className="mb-6">
                                {/* Placeholder for profile image */}
                                <div className="w-16 h-16 rounded-full bg-gray-200 mb-6"></div>

                                <p className="text-gray-600 mb-4">
                                    "Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi
                                    ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate
                                    velit esse quam nihil molestiae consequatur, vel illum."
                                </p>
                            </div>

                            <div>
                                <p className="font-bold">Alex Bern</p>
                                <p className="text-gray-500 text-sm">CEO by PixelPerfect</p>
                            </div>
                        </div>

                        {/* Testimonial 2 */}
                        <div className="bg-white rounded-lg shadow-sm p-8">
                            <div className="mb-6">
                                {/* Placeholder for profile image */}
                                <div className="w-16 h-16 rounded-full bg-gray-200 mb-6"></div>

                                <p className="text-gray-600 mb-4">
                                    "Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi
                                    ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate
                                    velit esse quam nihil molestiae consequatur, vel illum."
                                </p>
                            </div>

                            <div>
                                <p className="font-bold">Alex Bern</p>
                                <p className="text-gray-500 text-sm">CEO by NOX</p>
                            </div>
                        </div>
                    </div>
                </section>
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
            <section className="py-20 text-center">
                <h2 className="text-2xl font-bold">Left questions? Contact us now</h2>
                <div className="mt-6 flex flex-wrap justify-center gap-6">
                    <div className="bg-white p-6 rounded-lg shadow-md max-w-md">
                        <p className="text-gray-600">Email: example@info.com</p>
                        <p className="text-gray-600">Phone: +1 601-201-5580</p>
                    </div>
                    <div className="bg-white p-6 rounded-lg shadow-md max-w-md">
                        <form>
                            <input type="text" placeholder="Your Name" className="w-full mb-4 p-2 border rounded" />
                            <input type="email" placeholder="Your Email" className="w-full mb-4 p-2 border rounded" />
                            <textarea placeholder="Your Message" className="w-full p-2 border rounded"></textarea>
                            <button className="mt-4 bg-blue-500 text-white py-2 px-6 rounded">Send</button>
                        </form>
                    </div>
                </div>
            </section>

            {/* Footer Section */}
            <footer className="bg-blue-500 text-white py-10 text-center">
                <h2 className="text-xl font-bold">Subscribe to our newsletter</h2>
                <form className="mt-4 flex justify-center">
                    <input type="email" className="px-4 py-2 rounded-l-lg text-black" placeholder="Your email" />
                    <button className="bg-black px-6 py-2 rounded-r-lg">Send</button>
                </form>
            </footer>
        </div>
    </div>
  );
}
