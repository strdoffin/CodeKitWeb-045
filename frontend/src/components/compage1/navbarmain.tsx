import Image from "next/image";
import Link from "next/link";
import { CirclePlay } from "lucide-react";
import Dropdown from "../compage3/dropdown";
const navlist =[
    {name : "Home1",hlink : "/page1"},
    {name : "Home2",hlink : "/page2"},
    {name : "Home3",hlink : "/page3"},
]

export default function Navbarmain() {
    return (
        <div className="px-5 lg:px-35">
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
                        {navlist.map((v, index) => (
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
    )
}