import Image from "next/image";
export default function Blogsectionmain() {
    return (
        <div>
            <section className="bg-gray-50 py-20">
                <div className="max-w-6xl mx-auto px-6">
                    <h2 className="text-3xl font-bold text-gray-900 text-center">
                        Why our clients choose Ensome?
                    </h2>
                    <p className="text-gray-500 mt-4 max-w-2xl mx-auto text-center">
                        Doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto
                        beatae vitae dicta sunt explicabo.
                    </p>

                    <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-6">
                        <div className="bg-white shadow-lg rounded-lg p-6">
                            <div className="flex items-center justify-center h-12 w-12 bg-blue-100 rounded-lg">
                                <Image
                                    src="/image/01_icon_brain_circuit.webp"
                                    alt=""
                                    width={42}
                                    height={42}
                                    className=""
                                />
                            </div>
                            <h3 className="text-xl font-semibold text-gray-900 mt-4">Machine learning</h3>
                            <p className="text-gray-500 mt-2">
                                At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores.
                            </p>
                        </div>

                        <div className="bg-white shadow-lg rounded-lg p-6">
                            <div className="flex items-center justify-center h-12 w-12 bg-blue-100 rounded-lg">
                                <Image
                                    src="/image/02_icon_arrow_trending_lines.webp"
                                    alt=""
                                    width={42}
                                    height={42}
                                    className=""
                                />
                            </div>
                            <h3 className="text-xl font-semibold text-gray-900 mt-4">Embed analytics</h3>
                            <p className="text-gray-500 mt-2">
                                At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores.
                            </p>
                        </div>

                        <div className="bg-white shadow-lg rounded-lg p-6">
                            <div className="flex items-center justify-center h-12 w-12 bg-blue-100 rounded-lg">
                                <Image
                                    src="/image/key.webp"
                                    alt=""
                                    width={42}
                                    height={42}
                                    className=""
                                />
                            </div>
                            <h3 className="text-xl font-semibold text-gray-900 mt-4">Access control</h3>
                            <p className="text-gray-500 mt-2">
                                At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores.
                            </p>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}
