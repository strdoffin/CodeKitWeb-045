import { MoveRight, MoveLeft } from "lucide-react";
export default function Usercomment3() {
    return (
        <div>
            <div className="w-full flex items-center justify-center px-60 py-32">
                <div className="w-full flex justify-between">
                    <p className="text-4xl font-bold">Testimonials</p>
                    <div>
                        <button className="p-2 px-10 rounded-lg bg-gray-100">
                            <MoveLeft size={40} /> 
                        </button>
                        <button className="p-2 px-10 rounded-lg bg-gray-100">
                            <MoveRight size={40} /> 
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}
