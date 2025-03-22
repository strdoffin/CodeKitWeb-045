import Image from "next/image";
export default function Heromain() {
    return (
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
                                <Image
                                    src="/image/002_illustration.webp"
                                    alt=""
                                    width={590}
                                    height={400}
                                    className=""
                                />
                                {/* Floating elements around the main image */}
                                
                            </div>
                        </div>
                    </div>

                    {/* Second Section */}
                    <div className="grid md:grid-cols-2 gap-12 items-center mb-24">
                        <div className="flex justify-center order-2 md:order-1 relative">
                            <Image
                                src="/image/003_llustration.webp"
                                alt=""
                                width={590}
                                height={590}
                                className=""
                            />
                            <div className="relative">
                            
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
        </div>
    );
}
