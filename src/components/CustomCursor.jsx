import { useEffect, useState } from 'react';

export default function CustomCursor() {
    const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 });
    const [circleOffset, setCircleOffset] = useState({ x: 0, y: 0 });
    const radius = 50;
    const smallCursorSize = 12;

    useEffect(() => {
        const handleMouseMove = (e) => {
        setCursorPosition({ x: e.clientX, y: e.clientY });
        };

        document.addEventListener('mousemove', handleMouseMove);

        return () => {
        document.removeEventListener('mousemove', handleMouseMove);
        };
    }, []);

    useEffect(() => {
        const moveCircle = () => {
        setCircleOffset((prevOffset) => ({
            x: prevOffset.x + (cursorPosition.x - prevOffset.x) * 0.4,
            y: prevOffset.y + (cursorPosition.y - prevOffset.y) * 0.4,
        }));

        requestAnimationFrame(moveCircle);
        };

        moveCircle();

        return () => cancelAnimationFrame(moveCircle);
    }, [cursorPosition]);

    const pointStyle = {
        top: `${cursorPosition.y}px`,
        left: `${cursorPosition.x}px`,
        transform: `translate(-${smallCursorSize / 2}px, -${smallCursorSize / 2}px)`,
    };

    const circleStyle = {
        top: `${circleOffset.y - radius}px`,
        left: `${circleOffset.x - radius}px`,
    };

    return (
        <div className="custom-cursor fixed top-0 left-0 pointer-events-none z-50">
            <div
                className="absolute ml-3.5 mt-3.5 md:w-16 2xl:w-20 md:h-16 2xl:h-20 border-2 border-gray-400 rounded-full opacity-40 drop-shadow-sm"
                style={circleStyle} // Aplicar estilo al círculo vacío
            ></div>
            <div
                className="absolute md:w-4 2xl:w-5 md:h-4 2xl:h-5 bg-gray-400 rounded-full opacity-40 drop-shadow-sm"
                style={pointStyle} // Aplicar estilo al punto gris
            ></div>
        </div>
    );
}