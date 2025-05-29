import { useEffect, useState, useCallback, useRef } from 'react';

export default function CustomCursor() {
    const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 });
    const [circleOffset, setCircleOffset] = useState({ x: 0, y: 0 });
    const [isVisible, setIsVisible] = useState(true);
    const [isHovering, setIsHovering] = useState(false);
    const [hoverType, setHoverType] = useState('default');
    
    // Referencias para controlar la animación
    const animationFrameRef = useRef();
    const lastTimeRef = useRef(0);
    const targetRef = useRef({ x: 0, y: 0 });
    
    const radius = 40;
    const smallCursorSize = 16;
    const smoothingFactor = 0.15;
    const throttleTime = 16;

    // Detectar elementos interactivos
    const detectHoverElement = useCallback((element) => {
        if (!element) return { isHovering: false, type: 'default' };
        
        // Selectores de elementos interactivos
        const interactiveSelectors = [
            'a', 'button', 'input', 'textarea', 'select',
            '[role="button"]', '[tabindex]', '.cursor-pointer'
        ];
        
        // Verificar si el elemento es interactivo
        const isInteractive = interactiveSelectors.some(selector => 
            element.matches && element.matches(selector)
        );
        
        if (isInteractive) {
            // Determinar tipo de hover basado en el elemento
            if (element.matches('a')) return { isHovering: true, type: 'link' };
            if (element.matches('button')) return { isHovering: true, type: 'button' };
            if (element.matches('input, textarea, select')) return { isHovering: true, type: 'input' };
            return { isHovering: true, type: 'interactive' };
        }
        
        // Verificar elementos padre (útil para elementos con hover de Tailwind)
        const parent = element.parentElement;
        if (parent) {
            const parentClasses = parent.className || '';
            if (parentClasses.includes('hover:') || parentClasses.includes('group-hover:')) {
                return { isHovering: true, type: 'hover-effect' };
            }
        }
        
        return { isHovering: false, type: 'default' };
    }, []);

    // Throttled mouse move handler con detección de hover
    const handleMouseMove = useCallback((e) => {
        const now = Date.now();
        if (now - lastTimeRef.current < throttleTime) return;
        
        lastTimeRef.current = now;
        targetRef.current = { x: e.clientX, y: e.clientY };
        setCursorPosition({ x: e.clientX, y: e.clientY });
        
        // Detectar elemento bajo el cursor
        const elementUnderCursor = document.elementFromPoint(e.clientX, e.clientY);
        const hoverState = detectHoverElement(elementUnderCursor);
        
        setIsHovering(hoverState.isHovering);
        setHoverType(hoverState.type);
    }, [detectHoverElement]);

    const handleMouseLeave = useCallback(() => setIsVisible(false), []);
    const handleMouseEnter = useCallback(() => setIsVisible(true), []);

    useEffect(() => {
        // Usar passive listeners para mejor rendimiento
        const options = { passive: true };
        
        document.addEventListener('mousemove', handleMouseMove, options);
        document.addEventListener('mouseleave', handleMouseLeave, options);
        document.addEventListener('mouseenter', handleMouseEnter, options);

        return () => {
            document.removeEventListener('mousemove', handleMouseMove);
            document.removeEventListener('mouseleave', handleMouseLeave);
            document.removeEventListener('mouseenter', handleMouseEnter);
        };
    }, [handleMouseMove, handleMouseLeave, handleMouseEnter]);

    // Animación del círculo optimizada
    useEffect(() => {
        const animateCircle = () => {
            setCircleOffset((prevOffset) => {
                const dx = targetRef.current.x - prevOffset.x;
                const dy = targetRef.current.y - prevOffset.y;
                
                // Solo animar si hay diferencia significativa
                if (Math.abs(dx) < 0.5 && Math.abs(dy) < 0.5) {
                    return prevOffset;
                }
                
                return {
                    x: prevOffset.x + dx * smoothingFactor,
                    y: prevOffset.y + dy * smoothingFactor,
                };
            });
            
            animationFrameRef.current = requestAnimationFrame(animateCircle);
        };

        animationFrameRef.current = requestAnimationFrame(animateCircle);

        return () => {
            if (animationFrameRef.current) {
                cancelAnimationFrame(animationFrameRef.current);
            }
        };
    }, []); // Sin dependencias para evitar recrear el efecto

    // Early return si no es visible
    if (!isVisible) return null;

    // Estilos dinámicos basados en el estado de hover
    const getCircleStyles = () => {
        const baseSize = isHovering ? 80 : radius * 2;
        const baseOpacity = isHovering ? 0.6 : 0.7;
        
        let borderColor = 'border-gray-400';
        let backgroundColor = '';
        
        switch (hoverType) {
            case 'link':
                borderColor = 'border-blue-400';
                backgroundColor = 'bg-blue-400/20';
                break;
            case 'button':
                borderColor = 'border-green-400';
                backgroundColor = 'bg-green-400/20';
                break;
            case 'input':
                borderColor = 'border-purple-400';
                backgroundColor = 'bg-purple-400/20';
                break;
            case 'hover-effect':
            case 'interactive':
                borderColor = 'border-yellow-400';
                backgroundColor = 'bg-yellow-400/20';
                break;
            default:
                borderColor = 'border-gray-400';
                break;
        }
        
        return {
            width: `${baseSize}px`,
            height: `${baseSize}px`,
            opacity: baseOpacity,
            borderColor: borderColor,
            backgroundColor: backgroundColor
        };
    };

    const getPointStyles = () => {
        const baseSize = isHovering ? 8 : smallCursorSize;
        const baseOpacity = isHovering ? 0.7 : 0.4;
        
        return {
            width: `${baseSize}px`,
            height: `${baseSize}px`,
            opacity: baseOpacity
        };
    };

    // Usar transform para mejor rendimiento que top/left
    const pointStyle = {
        transform: `translate3d(${cursorPosition.x - (isHovering ? 4 : smallCursorSize / 2)}px, ${cursorPosition.y - (isHovering ? 4 : smallCursorSize / 2)}px, 0)`,
        willChange: 'transform',
        transition: 'width 0.2s ease, height 0.2s ease, opacity 0.2s ease',
        ...getPointStyles()
    };

    const circleStyle = {
        transform: `translate3d(${circleOffset.x - (isHovering ? 40 : radius)}px, ${circleOffset.y - (isHovering ? 40 : radius)}px, 0)`,
        willChange: 'transform',
        transition: 'width 0.3s ease, height 0.3s ease, opacity 0.3s ease, border-color 0.3s ease',
        ...getCircleStyles()
    };

    return (
        <div className="custom-cursor fixed top-0 left-0 pointer-events-none z-50" role="presentation">
            <div
                className={`absolute border-2 rounded-full drop-shadow-sm ${getCircleStyles().borderColor} ${getCircleStyles().backgroundColor}`}
                style={circleStyle}
            />
            <div
                className="absolute bg-gray-400 rounded-full drop-shadow-sm"
                style={pointStyle}
            />
        </div>
    );
}