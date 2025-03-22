import Navbar from "@/components/navbar";
import Image from "next/image";
export default function page() {
    return (
        <div>
            <Navbar />
            <div className="container mx-auto px-6 lg:px-20 py-20 flex items-center justify-between gap-12">
                <div className="max-w-xl">
                    <h1 className="text-5xl font-bold">
                        Find true power in your data with{" "}
                        <span className="text-[#185CFF]">Ensome</span>
                    </h1>
                </div>
                <div className="flex flex-col items-start gap-4 w-1/3">
                    <p className="mt-4 text-gray-300">
                        Sed ut perspiciatis unde omnis iste natus error sit
                        voluptatem accusantium doloremque laudantium, totam rem
                        aperiam, eaque ipsa quae ab illo inventore veritatis et
                        quasi architecto.
                    </p>
                </div>
            </div>
            <div className="w-full">
                <Image
                    className="w-full"
                    src={"/page3/bg1.svg"}
                    alt="bg"
                    width={100}
                    height={10}
                />
            </div>
            <div className="container mx-auto px-6 lg:px-20 py-20 flex items-center justify-center">
                <div className="max-w-md">
                    <h1 className="text-5xl font-bold">
                        The <span className="text-[#185CFF]">newest</span>{" "}
                        business analytics platform
                    </h1>
                </div>
                <div className="flex flex-col items-start gap-4 w-1/3">
                    <p className="mt-4 text-gray-300">
                        Sed ut perspiciatis unde omnis iste natus error sit
                        voluptatem accusantium doloremque laudantium, totam rem
                        aperiam, eaque ipsa quae ab illo inventore veritatis et
                        quasi architecto.
                    </p>
                    <div className="bg-blue-500 px-6 py-3 rounded-md text-white gap-2 ">
                        <p>Discover more</p>
                    </div>
                </div>
            </div>
            <div className="w-full flex">
                <div className="">
                    <Image className="w-full" src={'/page3/bg2.svg'} alt="" width={120} height={10} />
                </div>
                <div className="flex flex-col items-start gap-4 w-1/3">
                    <p className="mt-4 text-gray-300">
                        Sed ut perspiciatis unde omnis iste natus error sit
                        voluptatem accusantium doloremque laudantium, totam rem
                        aperiam, eaque ipsa quae ab illo inventore veritatis et
                        quasi architecto.
                    </p>
                    <div className="bg-blue-500 px-6 py-3 rounded-md text-white gap-2 ">
                        <p>Discover more</p>
                    </div>
                </div>
            </div>
            
        </div>
    );
}
