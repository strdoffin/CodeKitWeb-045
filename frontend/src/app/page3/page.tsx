import Navbar from "@/components/navbar";
import Image from "next/image";
import Sponser from "./../../components/sponser";
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
                    <p className="mt-4 text-gray-400 break-words">
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
                    <p className="mt-4 text-gray-400">
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
            <div className="w-full flex  bg-[#F1F6FA]">
                <div className="">
                    <Image
                        className="w-full"
                        src={"/page3/bg2.svg"}
                        alt="bg2"
                        width={120}
                        height={10}
                    />
                </div>
                <div className=" flex flex-col justify-center p-12">
                    <div className="max-w-md flex flex-col gap-5">
                        <p className="text-4xl font-bold flex items-start ">
                            Radically new solutions for data
                        </p>
                        <div className="">
                            <p className="text-gray-400 ">
                                Sed ut perspiciatis unde omnis iste natus error
                                sit voluptatem accusantium doloremque
                                laudantium, totam rem aperiam, eaque ipsa quae
                                ab illo inventore veritatis et quasi architecto
                                beatae vitae dicta sunt explicabo.
                            </p>
                        </div>
                        <div className="bg-blue-500 px-6 py-3 rounded-md text-white gap-2 w-fit">
                            <p>Learn more</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="w-full flex flex-col items-center justify-center p-16 mx-auto">
                <div className="text-3xl font-bold flex">
                    <p>We provide services that guarantee your success</p>
                </div>
                <div className="flex w-full justify-center gap-10 mt-16">
                    <div className="flex gap-5 justify-center items-center">
                        <div>
                            <p className="text-4xl font-bold text-[#185CFF]">1830+</p>
                            <p className="text-gray-400">Project executed</p>
                        </div>
                        <div>
                            <p className="text-4xl font-bold text-[#185CFF]">834+</p>
                            <p className="text-gray-400">Satisfied customers</p>
                        </div>
                        <div>
                            <p className="text-4xl font-bold text-[#185CFF]">390</p>
                            <p className="text-gray-400">Data management</p>
                        </div>
                    </div>
                    <div className="w-1/3">
                        <p className="text-gray-400 ">
                            Sed ut perspiciatis unde omnis iste natus error sit
                            voluptatem accusantium doloremque laudantium, totam
                            rem aperiam, eaque ipsa quae ab illo inventore
                            veritatis et quasi architecto beatae vitae dicta
                            sunt explicabo.
                        </p>
                    </div>
                </div>
                <Sponser />
            </div>
            <div className="w-full flex items-center justify-center px-60 py-16 bg-[#F1F6FA]">
            <div className="">
                        <p className="text-4xl font-bold mb-10">The benefits of Ensome </p>
                        <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.</p>
                    </div>
                    <div className="grid grid-cols-2 gap-5">
                        <div className=" flex flex-col gap-5">
                            <div className="bg-white h-60 p-5">
                                <p className="text-2xl mb-4 font-semibold">Machine learning</p>
                                <p className="text-balance text-gray-400">At vero eos et accusamus et iusto odio dignissimos duciu quili blandit praesentium voluptatum ipsa quae ab illo.</p>
                            </div>
                            <div className="bg-white h-60 p-5">
                                <p className="text-2xl mb-4 font-semibold">Access control</p>
                                <p className="text-balance text-gray-400">At vero eos et accusamus et iusto odio dignissimos duciu quili blandit praesentium voluptatum ipsa quae ab illo.</p>
                            </div>
                        </div>
                        <div className=" flex flex-col gap-5">
                            <div className="bg-white h-60 mt-10 p-5">
                                <p className="text-2xl mb-4 font-semibold">Embed analytics</p>
                                <p className="text-balance text-gray-400">At vero eos et accusamus et iusto odio dignissimos duciu quili blandit praesentium voluptatum ipsa quae ab illo.</p>
                            </div>
                            <div className="bg-white h-60 p-5">
                                <p className="text-2xl mb-4 font-semibold">Data analytics</p>
                                <p className="text-balance text-gray-400">At vero eos et accusamus et iusto odio dignissimos duciu quili blandit praesentium voluptatum ipsa quae ab illo.</p>
                            </div>
                        </div>
                    </div>
            </div>

        </div>
    );
}
