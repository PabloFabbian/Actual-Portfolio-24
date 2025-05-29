import React from 'react';
import { motion } from 'framer-motion';

function MobileProjectNav({ currentProject, onNext, onPrevious }) {
    return (
        <div className="flex justify-between items-center w-full mt-0 px-4">
            <button
                onClick={onPrevious}
                className="text-[#FFD275] text-4xl px-4 py-6 active:scale-95 transition-transform"
                aria-label="Previous project"
            >
                &#8249;
            </button>

            <div className="flex flex-col items-center text-center mx-0 mt-2 flex-1">
                <motion.h3
                    className="text-4xl md:text-6xl font-lt-soul text-[#FFD275]"
                    key={currentProject.name}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.3 }}
                >
                    {currentProject.name}
                </motion.h3>
                <motion.p
                    className="text-pretty text-md text-[#FFD275] mt-2 px-4"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.3 }}
                >
                    {currentProject.description}
                </motion.p>
            </div>

            <button
                onClick={onNext}
                className="text-[#FFD275] text-4xl px-4 py-6 active:scale-95 transition-transform"
                aria-label="Next project"
            >
                &#8250;
            </button>
        </div>
    );
}

export default MobileProjectNav;