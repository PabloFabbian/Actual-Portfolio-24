import { useEffect, useState, useCallback, useRef } from 'react';

export default function CustomCursor() {
    const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 });
    const [circleOffset, setCircleOffset] = useState({ x: 0, y: 0 });
    const [isVisible, setIsVisible] = useState(true);
    const [isHovering, setIsHovering] = useState(false);
    const [hoverType, setHoverType] = useState('default');
    
    const animationFrameRef = useRef();
    const lastTimeRef = useRef(0);
    const targetRef = useRef({ x: 0, y: 0 });
    
    const radius = 40;
    const smallCursorSize = 16;
    const smoothingFactor = 0.15;
    const throttleTime = 16;

    const detectHoverElement = useCallback((element) => {
        if (!element) return { isHovering: false, type: 'default' };
        
        const checkElement = (el, depth = 0) => {
            if (!el || depth > 5) return { isHovering: false, type: 'default' };
            
            const interactiveSelectors = [
                'a', 'button', 'input', 'textarea', 'select',
                '[role="button"]', '[tabindex]', '.cursor-pointer'
            ];
            
            const isInteractive = interactiveSelectors.some(selector => 
                el.matches && el.matches(selector)
            );
            
            if (isInteractive) {
                if (el.matches('a')) return { isHovering: true, type: 'link' };
                if (el.matches('button')) return { isHovering: true, type: 'button' };
                if (el.matches('input, textarea, select')) return { isHovering: true, type: 'input' };
                return { isHovering: true, type: 'interactive' };
            }
            
            const classes = el.className || '';
            const clickableClasses = [
                'hover:', 'group-hover:', 'cursor-pointer', 'clickable',
                'project-item', 'project-card', 'interactive'
            ];
            
            const hasClickableClass = clickableClasses.some(cls => 
                classes.includes(cls)
            );
            
            if (hasClickableClass) {
                return { isHovering: true, type: 'hover-effect' };
            }
            
            if (el.onclick || el.addEventListener) {
                const hasClickHandler = el.getAttribute('onclick') || 
                                      el.style.cursor === 'pointer' ||
                                      classes.includes('cursor-pointer');
                if (hasClickHandler) {
                    return { isHovering: true, type: 'interactive' };
                }
            }
            
            return checkElement(el.parentElement, depth + 1);
        };
        
        return checkElement(element);
    }, []);

    const handleMouseMove = useCallback((e) => {
        const now = Date.now();
        if (now - lastTimeRef.current < throttleTime) return;
        
        lastTimeRef.current = now;
        targetRef.current = { x: e.clientX, y: e.clientY };
        setCursorPosition({ x: e.clientX, y: e.clientY });
        
        const elementUnderCursor = document.elementFromPoint(e.clientX, e.clientY);
        const hoverState = detectHoverElement(elementUnderCursor);
        
        setIsHovering(hoverState.isHovering);
        setHoverType(hoverState.type);
    }, [detectHoverElement]);

    const handleMouseLeave = useCallback(() => setIsVisible(false), []);
    const handleMouseEnter = useCallback(() => setIsVisible(true), []);

    useEffect(() => {
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

    useEffect(() => {
        const animateCircle = () => {
            setCircleOffset((prevOffset) => {
                const dx = targetRef.current.x - prevOffset.x;
                const dy = targetRef.current.y - prevOffset.y;
                
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
    }, []);

    if (!isVisible) return null;

    const getCircleStyles = () => {
        const baseSize = isHovering ? 80 : radius * 2;
        const baseOpacity = isHovering ? 0.6 : 0.7;
        
        let borderColor = 'border-gray-400';
        let backgroundColor = '';
        
        switch (hoverType) {
            case 'link':
                borderColor = 'border-orange-400';
                backgroundColor = 'bg-orange-400/20';
                break;
            case 'button':
                borderColor = 'border-orange-400';
                backgroundColor = 'bg-orange-400/20';
                break;
            case 'input':
                borderColor = 'border-orange-400';
                backgroundColor = 'bg-orange-400/20';
                break;
            case 'hover-effect':
            case 'interactive':
                borderColor = 'border-orange-400';
                backgroundColor = 'bg-orange-400/20';
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
        const baseSize = isHovering ? 12 : smallCursorSize;
        const baseOpacity = isHovering ? 0.7 : 0.4;
        
        return {
            width: `${baseSize}px`,
            height: `${baseSize}px`,
            opacity: baseOpacity
        };
    };

    const getPointColorClass = () => {
        return isHovering ? 'bg-orange-400/70' : 'bg-gray-400';
    };

    const pointStyle = {
        transform: `translate3d(${cursorPosition.x - (isHovering ? 6 : smallCursorSize / 2)}px, ${cursorPosition.y - (isHovering ? 6 : smallCursorSize / 2)}px, 0)`,
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
                className={`absolute rounded-full drop-shadow-sm transition-colors duration-200 ${getPointColorClass()}`}
                style={pointStyle}
            />
        </div>
    );
}