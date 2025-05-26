import React from 'react';

function ProjectHeader({ isMobile, chevronSVG }) {
    return (
        <div className={`bg-[#F3D5B5] overflow-hidden ${isMobile ? 'h-16' : 'h-[150px]'} -mt-2 md:mt-0`} id="Projects">
            <svg
                viewBox="0 0 500 150"
                preserveAspectRatio="none"
                className="h-full w-full"
            >
                <defs>
                    <linearGradient id="customGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                        <stop offset="0%" style={{ stopColor: '#7C4A3A' }} />
                        <stop offset="100%" style={{ stopColor: '#5A3A2C' }} />
                    </linearGradient>
                </defs>
                <path
                    d="M-43.73,193.92 C128.38,-52.77 372.17,-43.89 562.36,206.75 L246.89,203.80 L233.92,202.80 Z"
                    style={{ stroke: 'none', fill: 'url(#customGradient)' }}
                />
            </svg>
        </div>
    );
}

export default ProjectHeader;