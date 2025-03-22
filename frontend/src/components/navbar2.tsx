import { ChevronDown } from "lucide-react"
import { CirclePlay } from "lucide-react"
import Link from "next/link"
import Image from "next/image"
export default function Navbar2() {
  return (
    <div className="flex justify-evenly items-center w-full h-32 bg-[#0B1E38]">
            <div>
                <Image src={"/image/logo_ensome.webp"} alt="" width={141} height={46} />
            </div>
            <div>
                <ul className="flex items-center gap-8 ml-auto text-white">
                    <li><button className="underline underline-offset-8">Home</button></li>
                    <li><Link href={'/'} >Solutions</Link></li>
                    <li><button className="flex items-center gap-2">Pages <ChevronDown size={20}/></button></li>
                    <li><button>Elements</button></li>
                    <li><button>Blog</button></li>
                    <li><button>Contacts</button></li>
                </ul>
            </div>
            <button className="flex justify-center items-center bg-blue-500 px-2 py-2 rounded-md text-white gap-2">
                <CirclePlay size={20} />
                <p>Watch the demo</p>
            </button>
    </div>
  )
}
