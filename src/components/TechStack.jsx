import React from 'react'

function TechStack() {
    return (
        <>
            <section className="bg-gradient-to-b from-orange-100 to-orange-300 py-12" id="Tech-Stack">
                {/* Container to Center the Content */}
                <div className="container mx-auto text-center">
                    {/* Title */}
                    <h2 className="text-5xl font-extrabold text-orange-700 mb-8">Tech Stack</h2>
                    {/* First Carousel Moving to the Left */}
                    <div className="overflow-hidden relative">
                        <div className="flex animate-marquee-left space-x-6">
                            {/* Loop to Generate 6 Items */}
                            <div className="bg-brown-400 py-6 px-12 rounded-lg shadow-lg">
                                <img src="icon1.png" alt="Icon 1" className="w-16 h-16" />
                            </div>
                            <div className="bg-brown-400 py-6 px-12 rounded-lg shadow-lg">
                                <img src="icon2.png" alt="Icon 2" className="w-16 h-16" />
                            </div>
                            <div className="bg-brown-400 py-6 px-12 rounded-lg shadow-lg">
                                <img src="icon3.png" alt="Icon 3" className="w-16 h-16" />
                            </div>
                            <div className="bg-brown-400 py-6 px-12 rounded-lg shadow-lg">
                                <img src="icon4.png" alt="Icon 4" className="w-16 h-16" />
                            </div>
                            <div className="bg-brown-400 py-6 px-12 rounded-lg shadow-lg">
                                <img src="icon5.png" alt="Icon 5" className="w-16 h-16" />
                            </div>
                            <div className="bg-brown-400 py-6 px-12 rounded-lg shadow-lg">
                                <img src="icon6.png" alt="Icon 6" className="w-16 h-16" />
                            </div>
                        </div>
                    </div>
                    {/* Space Between Carousels */}
                    <div className="my-8"></div>
                    {/* Second Carousel Moving to the Right */}
                    <div className="overflow-hidden relative">
                        <div className="flex animate-marquee-right space-x-6">
                            {/* Loop to Generate 6 Items */}
                            <div className="bg-brown-400 py-6 px-12 rounded-lg shadow-lg">
                                <img src="icon7.png" alt="Icon 7" className="w-16 h-16" />
                            </div>
                            <div className="bg-brown-400 py-6 px-12 rounded-lg shadow-lg">
                                <img src="icon8.png" alt="Icon 8" className="w-16 h-16" />
                            </div>
                            <div className="bg-brown-400 py-6 px-12 rounded-lg shadow-lg">
                                <img src="icon9.png" alt="Icon 9" className="w-16 h-16" />
                            </div>
                            <div className="bg-brown-400 py-6 px-12 rounded-lg shadow-lg">
                                <img src="icon10.png" alt="Icon 10" className="w-16 h-16" />
                            </div>
                            <div className="bg-brown-400 py-6 px-12 rounded-lg shadow-lg">
                                <img src="icon11.png" alt="Icon 11" className="w-16 h-16" />
                            </div>
                            <div className="bg-brown-400 py-6 px-12 rounded-lg shadow-lg">
                                <img src="icon12.png" alt="Icon 12" className="w-16 h-16" />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default TechStack