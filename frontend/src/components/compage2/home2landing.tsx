
import Image from "next/image";
import Link from "next/link";
import { CirclePlay } from "lucide-react";
import Dropdown from "../compage3/dropdown";
const navlist =[
    {name : "Home1",hlink : "/"},
    {name : "Home2",hlink : "/page2"},
    {name : "Home3",hlink : "/page3"},
]
export default function Home2Landing() {
  return (
    <div>
        <div className="px-5 lg:px-60 bg-[#0B1E38]">
                <div className="flex justify-between items-center w-full h-32">
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
      <div className="bg-[#0B1E38] text-white">
        {/* Hero Section */}
        <div className="container mx-auto px-6  flex flex-col py-10 xl:flex-row items-center justify-between gap-12 2xl:px-52">
          {/* Left Section */}
          <div className="max-w-xl text-center xl:text-left">
            <h1 className="text-3xl xl:text-4xl font-bold">
              Find true power in your data with Ensome
            </h1>
            <p className="mt-4 text-gray-300 text-left xl:hidden">
              Sed ut perspiciatis unde omnis iste natus error sit voluptatem
              accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
              quae ab illo inventore veritatis et quasi architecto.
            </p>
          </div>

          {/* Right Section */}
          <div className="flex flex-col items-center xl:items-start gap-4 w-1/3">
            <p className="hidden xl:block text-gray-300">
              Sed ut perspiciatis unde omnis iste natus error sit voluptatem
              accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
              quae ab illo inventore veritatis et quasi architecto.
            </p>

            <div className="flex flex-col xl:flex-row h-auto gap-6 w-full">
              <button className="bg-white text-black px-6 py-3 lg:py-2 rounded-md w-full xl:w-auto">
                Learn more
              </button>
              <button className="px-6 py-3 xl:py-2 rounded-md flex items-center justify-center gap-2 w-full xl:w-auto border border-white">
                <CirclePlay size={20} /> <p>Watch the demo</p>
              </button>
            </div>
          </div>
        </div>

        {/* Content Section */}
        <div className="bg-white text-black py-20">
          <div className="container mx-auto max-w-screen-xl px-6 xl:px-12 2xl:px-24 grid grid-cols-1 xl:grid-cols-2 gap-12 items-center">
            {/* Left Column */}
            <div className="hidden xl:flex flex-col gap-6">
              <h2 className="text-3xl font-bold">
                The newest business analytics platform
              </h2>
              <p className="text-gray-600">
                Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
                quae ab illo inventore veritatis et quasi architecto beatae
                vitae dicta sunt explicabo.
              </p>
              <button className="bg-[#185CFF] text-white px-6 py-2 text-xlrounded-md self-start">
                Discover more
              </button>
            </div>
            <div>
              <Image
                src="/image/group2.webp"
                alt="Meeting"
                width={500}
                height={300}
                className="rounded-lg w-full"
                priority
              />
            </div>
            <div className="flex flex-col gap-6 xl:hidden">
              <h2 className="text-3xl font-bold">
                The newest business analytics platform
              </h2>
              <p className="text-gray-600">
                Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
                quae ab illo inventore veritatis et quasi architecto beatae
                vitae dicta sunt explicabo.
              </p>
<button className="bg-[#185CFF] text-white px-6 py-6 text-xl rounded-md w-full self-center">
                Discover more
              </button>
            </div>

            {/* Right Column */}
            <div>
              <Image
                src="/image/group1.webp"
                alt="Team Discussion"
                width={500}
                height={300}
                className="rounded-lg w-full"
                priority
              />
            </div>
            <div className="flex flex-col gap-6">
              <h2 className="text-3xl font-bold">
                Radically new solutions for data
              </h2>
              <p className="text-gray-600">
                Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
                quae ab illo inventore veritatis et quasi architecto beatae
                vitae dicta sunt explicabo.
              </p>
              <button className="bg-[#185CFF] text-white px-6 py-6 text:xl xl:py-2 rounded-md w-full xl:w-1/3 self-center xl:self-start">
                Discover more
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
