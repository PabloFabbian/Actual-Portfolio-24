import React from 'react';
import { motion } from 'framer-motion';

function MobileProjectNav({ currentProject, onNext, onPrevious, setDirection }) {
    return (
        <div className="flex justify-between items-center w-full mt-0">
            <button
                onClick={() => {
                    setDirection(-1);
                    onPrevious();
                }}
                className="text-[#FFD275] text-3xl px-4 -mt-1.5"
            >
                &#8249;
            </button>

            <div className="flex flex-col items-center text-center mx-0 mt-2">
                <motion.h3
                    className="text-4xl md:text-6xl font-lt-soul text-[#FFD275]"
                    key={currentProject.name}
                    initial={{ opacity: 0, x: 100 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5 }}
                >
                    {currentProject.name}
                </motion.h3>
                <motion.p
                    className="text-pretty text-md text-[#FFD275] mt-2"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.5 }}
                    style={{
                        transitionDelay: '0.5s',
                    }}
                >
                    {currentProject.description}
                </motion.p>
            </div>

            <button
                onClick={() => {
                    setDirection(1);
                    onNext();
                }}
                className="text-[#FFD275] text-3xl px-4 -mt-1.5"
            >
                &#8250;
            </button>
        </div>
    );
}

export default MobileProjectNav;