import Image from "next/image";
export default function Sponser() {
    return (
        <footer className=" text-gray-300">
            <div className="max-w-6xl mx-auto flex flex-col items-center mt-6">
                <div className="flex flex-wrap justify-center gap-4">
                    <Image
                        src="/image/wildwood.svg"
                        alt=""
                        width={185}
                        height={132}
                        className=""
                    />
                    <Image
                        src="/image/applerush.svg"
                        alt=""
                        width={155}
                        height={102}
                        className=""
                    />
                    <Image
                        src="/image/logo_3.svg"
                        alt=""
                        width={155}
                        height={102}
                        className=""
                    />
                    <Image
                        src="/image/av-group.svg"
                        alt=""
                        width={155}
                        height={102}
                        className=""
                    />
                    <Image
                        src="/image/hard2ignore.svg"
                        alt=""
                        width={155}
                        height={102}
                        className=""
                    />
                    <Image
                        src="/image/fairtech.svg"
                        alt=""
                        width={155}
                        height={102}
                        className=""
                    />
                </div>
            </div>
        </footer>
    );
}
