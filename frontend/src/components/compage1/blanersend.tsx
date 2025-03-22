export default function Blanersend() {
    return (
        <div className="bg-blue-500">
            <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 py-16">
                <div className="">
                    <h2 className="text-4xl font-semibold text-white ml-5 lg:ml-0">
                        Subscribe to our newsletter
                    </h2>
                    <p className="text-white mt-2 hidden lg:block">
                        Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                        accusantium doloremque laudantium.
                    </p>
                </div>
                <div className="relative w-[500px] h-14 hidden lg:block">
                    <input
                        type="email"
                        placeholder="Your email"
                        className="w-96 h-14 px-4 rounded-l-md text-black focus:outline-none focus:ring-white bg-blue-200"
                    />
                    <button
                        type="button"
                        className="bg-white text-black px-4 py-4 rounded-r-md transition-transform duration-200 hover:scale-105 active:scale-95"
                    >
                        Send
                    </button>
                </div>
                <div className="w-full lg:hidden">
                    <div className="w-[94%] mx-auto flex flex-col gap-3">
                        <input type="email" name="" id="" placeholder="Your email" className="w-full py-3 rounded-lg px-7 border-1 border-solid border-white outline-none bg-transparent placeholder:text-white"/>
                        <button className="bg-white text-blue-500 py-3 w-full font-bold rounded-lg">Subscribe</button>
                    </div>
                </div>
            </div>
        </div>
    );
}
