import {
    BrainCog,
    ChartArea,
    ChartNoAxesCombined,
    KeyRound,
} from "lucide-react";
export default function Stat3() {
    return (
        <div className="px-5 py-16 lg:px-24 xl:px-60 bg-[#F1F6FA]">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
                <div className="flex justify-end items-center ">
                    <div className="w-full lg:max-w-md ">
                        <p className="text-4xl font-bold mb-10 ">
                            The benefits of Ensome{" "}
                        </p>
                        <p className="text-gray-400">
                            Sed ut perspiciatis unde omnis iste natus error sit
                            voluptatem accusantium doloremque laudantium, totam
                            rem aperiam, eaque ipsa quae ab illo inventore
                            veritatis et quasi architecto beatae vitae.
                        </p>
                    </div>
                </div>
                <div className="grid lg:grid-cols-2 grid-cols-1  gap-5 ">
                    <div className=" flex flex-col gap-5">
                        <div className="bg-white h-60 p-5">
                            <BrainCog
                                size={40}
                                className="text-[#185CFF]"
                            />
                            <p className="text-2xl mb-4 font-semibold">
                                Machine learning
                            </p>
                            <p className="text-balance text-gray-400">
                                At vero eos et accusamus et iusto odio
                                dignissimos duciu quili blandit praesentium
                                voluptatum ipsa quae ab illo.
                            </p>
                        </div>
                        <div className="bg-white h-60 p-5">
                            <KeyRound
                                size={40}
                                className="text-[#185CFF]"
                            />
                            <p className="text-2xl mb-4 font-semibold">
                                Access control
                            </p>
                            <p className="text-balance text-gray-400">
                                At vero eos et accusamus et iusto odio
                                dignissimos duciu quili blandit praesentium
                                voluptatum ipsa quae ab illo.
                            </p>
                        </div>
                    </div>
                    <div className=" flex flex-col gap-5">
                        <div className="bg-white h-60 mt-10 p-5">
                            <ChartNoAxesCombined
                                size={40}
                                className="text-[#185CFF]"
                            />
                            <p className="text-2xl mb-4 font-semibold">
                                Embed analytics
                            </p>
                            <p className="text-balance text-gray-400">
                                At vero eos et accusamus et iusto odio
                                dignissimos duciu quili blandit praesentium
                                voluptatum ipsa quae ab illo.
                            </p>
                        </div>
                        <div className="bg-white h-60 p-5">
                            <ChartArea
                                size={40}
                                className="text-[#185CFF]"
                            />
                            <p className="text-2xl mb-4 font-semibold">
                                Data analytics
                            </p>
                            <p className="text-balance text-gray-400">
                                At vero eos et accusamus et iusto odio
                                dignissimos duciu quili blandit praesentium
                                voluptatum ipsa quae ab illo.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
