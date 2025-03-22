import Image from "next/image";
import Sponser from "../sponser";
import Link from "next/link";
import { CirclePlay } from "lucide-react";
import Dropdown from './dropdown';
const navlist =[
    {name : "Home1",hlink : "/"},
    {name : "Home2",hlink : "/page2"},
    {name : "Home3",hlink : "/page3"},
]
export default function Home3landing() {

    return (
        <div>
            <div className="px-5 lg:px-60">
                <div className="flex justify-between items-center w-full h-32 ">
                    <div>
                        <Image
                            src={"/image/logo_ensome.webp"}
                            alt=""
                            width={141}
                            height={46}
                        />
                    </div>
                    <div className="hidden lg:block">
                        <ul className="flex items-center gap-8 ml-auto text-gray-400">
                            {navlist.map((v,index)=>(
                                <li key={index}>
                                    <Link href={v.hlink} className="hover:text-black">{v.name}</Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    <button className="hidden xl:flex  justify-center items-center bg-blue-500 px-2 py-2 rounded-md text-white gap-2">
                        <CirclePlay size={20} />
                        <p>Watch the demo</p>
                    </button>
                    <div className="xl:hidden z-50 relative">
                        <Dropdown />
                    </div>
                </div>
            </div>
            <div className="px-5 lg:px-60 mt-10">
                <div className="grid grid-cols-1 lg:grid-cols-2 ">
                    <div className="max-w-xl">
                        <div className="text-3xl lg:text-5xl font-bold">
                            Find true power in your data with
                            <span className="text-[#185CFF]"> Ensome</span>
                        </div>
                    </div>
                    <div className="max-w-md">
                        <p className="mt-4 text-gray-400 text-sm xl:text-base">
                            Sed ut perspiciatis unde omnis iste natus error sit
                            voluptatem accusantium doloremque laudantium, totam
                            rem aperiam, eaque ipsa quae ab illo inventore
                            veritatis et quasi architecto beatae vitae dicta
                            sunt explicabo.
                        </p>
                    </div>
                </div>
                <div className="bg-white rounded-full p-2 absolute mt-10 right-14 xl:right-[44%]">
                    <div className="flex justify-center items-center w-30 aspect-square rounded-full bg-[#185CFF] p-2">
                        <div className="w-full h-full rounded-full flex justify-center items-center border-[1px] border-white text-white">
                            <p>Learn more</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="w-full h-96 xl:h-full mt-24">
                <Image
                    src="/page3/bg1.webp"
                    alt="bg"
                    width={1920}
                    height={1080}
                    className="w-full h-full object-cover xl:object-fill"
                    priority
                />
            </div>

            <div className="px-5 lg:px-60 py-20">
                <div className="grid grid-cols-1 lg:grid-cols-2">
                    <div className="w-full lg:max-w-md">
                        <h1 className="text-4xl lg:text-5xl font-bold">
                            The <span className="text-[#185CFF]">newest</span>{" "}
                            business analytics platform
                        </h1>
                    </div>
                    <div className="flex flex-col items-start gap-4">
                        <p className="mt-4 text-gray-400">
                            Sed ut perspiciatis unde omnis iste natus error sit
                            voluptatem accusantium doloremque laudantium, totam
                            rem aperiam, eaque ipsa quae ab illo inventore
                            veritatis et quasi architecto.
                        </p>
                        <div className="w-full lg:w-fit text-center bg-blue-500 px-6 py-3 rounded-md text-white gap-2 ">
                            <p>Discover more</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="w-full grid grid-cols-1 lg:grid-cols-2  bg-[#F1F6FA]">
                <div className="">
                    <Image
                        className="w-full"
                        src={"/page3/bg2.webp"}
                        alt="bg2"
                        width={960}
                        height={10}
                        priority
                    />
                </div>
                <div className=" flex flex-col justify-center px-5 py-12 lg:p-12">
                    <div className="w-full lg:max-w-md flex flex-col gap-5">
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
                        <div className="bg-blue-500 px-6 py-3 rounded-md text-white text-center gap-2 w-full lg:w-fit">
                            <p>Learn more</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="w-full flex flex-col items-center justify-center px-5 lg:px-60 py-20">
                <div className="text-4xl  font-bold text-center">
                    <p>We provide services that guarantee your success</p>
                </div>
                <div className="grid grid-cols-1 xl:grid-cols-2 w-full justify-center gap-10 mt-16">
                    <div className="flex gap-5 justify-center items-center text-center lg:text-start">
                        <div>
                            <p className="text-4xl font-bold text-[#185CFF]">
                                1830+
                            </p>
                            <p className="text-gray-400">Project executed</p>
                        </div>
                        <div>
                            <p className="text-4xl font-bold text-[#185CFF]">
                                834+
                            </p>
                            <p className="text-gray-400">Satisfied customers</p>
                        </div>
                        <div>
                            <p className="text-4xl font-bold text-[#185CFF]">
                                390
                            </p>
                            <p className="text-gray-400">Data management</p>
                        </div>
                    </div>
                    <div className="text-center lg:text-start">
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
        </div>
    );
}
