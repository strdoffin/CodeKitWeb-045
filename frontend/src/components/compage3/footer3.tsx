export default function Footer3() {
    return (
        <div>
            <div className="w-full grid lg:grid-cols-2 grid-cols-1 gap-10 items-center justify-center px-5 lg:px-40 py-16 bg-[#002B4E]">
                <div>
                    <h4 className="text-3xl text-center lg:text-start font-bold text-white mb-5">Subscribe to our newsletter</h4>
                    <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium.</p>
                </div>
                <div className="w-full flex flex-col lg:flex-row">
                    <input placeholder="Your email" type="text" className="border-[1px] w-full p-3 border-white rounded-xl placeholder-white lg:rounded-r-none lg:bg-[#C9DCEC] lg:border-0 lg:placeholder-[#002B4E]" />
                    <div className="bg-white px-2 py-3 rounded-md text-[#002B4E] text-lg text-center gap-2 w-full lg:w-fit font-semibold lg:rounded-l-none">
                        <p>Subscribe</p>
                    </div>
                </div>
            </div>
        </div>
    );
}
