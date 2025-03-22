import Image from "next/image";
import Navbar2 from "@/components/navbar2";
import { CirclePlay } from 'lucide-react';
export default function Home2Landing() {
    return (
        <div>
            <Navbar2 />
            <div className="bg-[#0B1E38] text-white">
                {/* Hero Section */}
                <div className="container mx-auto px-6 lg:px-20 py-20 flex items-center justify-between gap-12">
                    <div className="max-w-xl">
                        <h1 className="text-4xl font-bold">
                            Find true power in your data with Ensome
                        </h1>
                    </div>
                    <div className="flex flex-col items-start gap-4 w-1/3">
                        <p className="mt-4 text-gray-300">
                            Sed ut perspiciatis unde omnis iste natus error sit
                            voluptatem accusantium doloremque laudantium, totam
                            rem aperiam, eaque ipsa quae ab illo inventore
                            veritatis et quasi architecto.
                        </p>
                        <div className="flex h-12 gap-4 w-full">
                            <button className="bg-white text-black px-6 py-2 rounded-md w-full">
                                Learn more
                            </button>
                            <button className="px-6 py-2 rounded-md flex items-center gap-2 w-full">
                                <span><CirclePlay size={20} /></span> <p>Watch the demo</p>
                            </button>
                        </div>
                    </div>
                </div>

                {/* Content Section */}
                <div className="bg-white text-black py-20">
                    <div className="container mx-auto px-6 lg:px-20 grid md:grid-cols-2 gap-12 items-center ">
                        {/* Left Column */}
                        <div className="flex flex-col gap-6 ">
                            <h2 className="text-3xl font-bold ">
                                The newest business analytics platform
                            </h2>
                            <p className="text-gray-600">
                                Sed ut perspiciatis unde omnis iste natus error
                                sit voluptatem accusantium doloremque
                                laudantium, totam rem aperiam, eaque ipsa quae
                                ab illo inventore veritatis et quasi architecto
                                beatae vitae dicta sunt explicabo.
                            </p>
                            <button className="bg-[#185CFF] text-white px-6 py-2 rounded-md self-start">
                                Learn more
                            </button>
                        </div>
                        <div>
                            <Image
                                src="/image/group2.svg"
                                alt="Meeting"
                                width={500}
                                height={300}
                                className="rounded-lg"
                            />
                        </div>

                        {/* Right Column */}
                        <div>
                            <Image
                                src="/image/group1.svg"
                                alt="Team Discussion"
                                width={500}
                                height={300}
                                className="rounded-lg"
                            />
                        </div>
                        <div className="flex flex-col gap-6">
                            <h2 className="text-3xl font-bold">
                                Radically new solutions for data
                            </h2>
                            <p className="text-gray-600">
                                Sed ut perspiciatis unde omnis iste natus error
                                sit voluptatem accusantium doloremque
                                laudantium, totam rem aperiam, eaque ipsa quae
                                ab illo inventore veritatis et quasi architecto
                                beatae vitae dicta sunt explicabo.
                            </p>
                            <button className="bg-[#185CFF] text-white px-6 py-2 rounded-md self-start">
                                Learn more
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
