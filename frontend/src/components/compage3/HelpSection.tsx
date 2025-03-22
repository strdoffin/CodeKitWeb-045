export default function HelpSection() {
    return (
        <div>
            <div className="w-full flex flex-col gap-10 items-center justify-center px-5 lg:px-60 py-32 bg-[#F1F6FA]">
                <h4 className="text-4xl lg:text-5xl text-center font-bold">Do you need help?</h4>
                <p className="text-center text-gray-400">
                    Ut enim ad minima veniam, quis nostrum exercitationem ullam{" "}
                    corporis suscipit laboriosam, nisi ut aliquid ex ea
                    commodi.
                </p>
                <div className="bg-blue-500 px-22 py-3 rounded-md text-white text-center gap-2 w-full lg:w-fit">
                    <p>Contact us</p>
                </div>
            </div>
        </div>
    );
}
