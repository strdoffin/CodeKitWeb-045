export default function Contactsmain() {
    return (
        <section className="py-20 bg-blue-50">
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid md:grid-cols-2 gap-10 items-center">
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
                                <p className="text-gray-800 font-bold">ensome@info.co.us</p>
                            </div>

                            <div>
                                <p className="text-gray-500 text-sm mb-1">Phone number</p>
                                <p className="text-gray-800 font-bold">+1601-201-5580</p>
                            </div>

                            <div>
                                <p className="text-gray-500 text-sm mb-1">Address</p>
                                <p className="text-gray-800 font-bold">1642 Washington Avenue, Jackson, MS, Mississippi, 39201
                                </p>
                            </div>
                        </div>
                    </div>

                    <button className="py-4 w-full rounded-lg bg-blue-500 text-white font-bold md:hidden">
                        Contact Us
                    </button>
                    <div className="bg-white p-8 rounded-lg shadow-sm hidden md:block">
                        <h3 className="text-2xl font-bold text-gray-800 mb-6">Contact Us</h3>

                        <form className="space-y-6">
                            <div>
                                <label htmlFor="name" className="block text-gray-500 text-sm mb-2">Name</label>
                                <input type="text" id="name"
                                    className="w-full px-3 py-2 border-b border-gray-300 focus:outline-none focus:border-blue-500 placeholder-black "
                                    placeholder="Andrea" />
                            </div>

                            <div>
                                <label htmlFor="email" className="block text-gray-500 text-sm mb-2">Email</label>
                                <input type="email" id="email"
                                    className="w-full px-3 py-2 border-b border-gray-300 focus:outline-none focus:border-blue-500 placeholder-black "
                                    placeholder="andrea@gmail.com" />
                            </div>

                            <div>
                                <label htmlFor="theme" className="block text-gray-500 text-sm mb-2">Theme</label>
                                <input type="text" id="theme"
                                    className="w-full px-3 py-2 border-b border-gray-300 focus:outline-none focus:border-blue-500 placeholder-black "
                                    placeholder="Job" />
                            </div>

                            <div>
                                <label htmlFor="message" className="block text-gray-500 text-sm mb-2">Message</label>
                                <input type="text" id="message"
                                    className="w-full px-3 py-2 border-b border-gray-300 focus:outline-none focus:border-blue-500 placeholder-black "
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
    );
}
