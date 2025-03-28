import Image from "next/image";
import { CirclePlay } from 'lucide-react';
export default function Home1landing() {
    return (
        <div className="">
            <section className="relative text-white py-16 px-6 md:px-12">
                <div className="max-w-6xl mx-auto flex flex-col md:flex-row-reverse items-center gap-12">
                    <div className="w-full md:w-1/2">
                        <Image
                            src="/image/001_illustration.webp"
                            alt=""
                            width={845}
                            height={518}
                            className="rounded-lg"
                        />
                    </div>
                    <div className="w-full md:w-1/2">
                        <h2 className="text-4xl md:text-5xl font-bold leading-tight text-black">
                            Find true power in your data with <span className="text-blue-400">Ensome</span>
                        </h2>
                        <p className="mt-4 text-gray-400">
                            Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.
                        </p>
                        <div className="mt-6 lg:flex-row gap-2 flex flex-col">
                            <button className="bg-blue-500 text-white py-3 rounded-lg shadow-lg hover:bg-blue-60 lg:py-3 w-full lg:px-6">
                                learn more
                            </button>
                            <button className="flex items-center px-6 py-3 text-blue-500 border-1 border-solid rounded-lg w-full lg:text-black lg:border-none justify-center">
                                <span className="mr-2"><CirclePlay size={24} /></span> Watch the demo
                            </button>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}
