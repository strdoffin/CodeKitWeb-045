import Image from "next/image";
export default function Heromain() {
    return (
        <div className="bg-gray-50">
            {/* Hero Section */}
            <div className="bg-white mt-7 lg:mt-0">
                <main className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16 mt-[25vh] md:mt-[15vh] lg:mt-0">
                    {/* Hero Section */}
                    <div className="flex flex-col-reverse md:flex-row gap-12 items-center mb-24">
                        {/* รูปภาพจะขึ้นก่อนข้อความใน Mobile */}


                        {/* ข้อความ */}
                        <div className="md:w-1/2">
                            <h1 className="text-4xl font-bold text-gray-900 mb-6">
                                The newest business analytics platform
                            </h1>
                            <p className="text-gray-600 mb-8">
                                Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium,
                                totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae
                                dicta sunt explicabo.
                            </p>
                            <button className="bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 px-8 rounded-md transition duration-300 w-full md:w-fit">
                                Learn more
                            </button>
                        </div>
                        <div className="flex justify-center relative md:w-1/2">
                            <div className="relative">
                                <Image
                                    src="/image/002_illustration.webp"
                                    alt=""
                                    width={590}
                                    height={400}
                                    className=""
                                />
                            </div>
                        </div>
                    </div>


                    <div className="flex md:flex-row flex-col gap-12 items-center mb-24">
                        <div className="flex justify-center relative md:w-1/2">
                            <div className="relative">
                                <Image
                                    src="/image/003_llustration.webp"
                                    alt=""
                                    width={590}
                                    height={400}
                                    className=""
                                />
                            </div>
                        </div>
                        {/* ข้อความ */}
                        <div className="md:w-1/2">
                            <h1 className="text-4xl font-bold text-gray-900 mb-6">
                                The newest business analytics platform
                            </h1>
                            <p className="text-gray-600 mb-8">
                                Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium,
                                totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae
                                dicta sunt explicabo.
                            </p>
                            <button className="bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 px-8 rounded-md transition duration-300 w-full md:w-fit">
                                Learn more
                            </button>
                        </div>
                    </div>

                </main>
            </div>
        </div>
    );
}
