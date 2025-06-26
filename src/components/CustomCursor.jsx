import { useEffect, useState, useCallback, useRef } from 'react';

export default function CustomCursor() {
    const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 });
    const [circleOffset, setCircleOffset] = useState({ x: 0, y: 0 });
    const [isVisible, setIsVisible] = useState(false);
    const [isHovering, setIsHovering] = useState(false);
    const [hoverType, setHoverType] = useState('default');
    const [isInDevTools, setIsInDevTools] = useState(false);
    
    const animationFrameRef = useRef();
    const lastTimeRef = useRef(0);
    const targetRef = useRef({ x: 0, y: 0 });
    const visibilityTimeoutRef = useRef();
    
    const radius = 40;
    const smallCursorSize = 16;
    const smoothingFactor = 0.2;
    const throttleTime = 5;

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

    // Detectar si el cursor está en un área "externa" como DevTools
    const detectDevToolsArea = useCallback((x, y) => {
        const viewportWidth = document.documentElement.clientWidth;
        const viewportHeight = document.documentElement.clientHeight;
        const windowWidth = window.innerWidth;
        const windowHeight = window.innerHeight;
        
        // Si las dimensiones son diferentes, probablemente hay DevTools abierto
        const hasDevTools = windowWidth !== viewportWidth || windowHeight !== viewportHeight;
        
        // Verificar si está fuera del área del documento pero dentro de la ventana
        const isOutsideDocument = x < 0 || y < 0 || x > viewportWidth || y > viewportHeight;
        const isInsideWindow = x >= 0 && y >= 0 && x <= windowWidth && y <= windowHeight;
        
        return hasDevTools && isOutsideDocument && isInsideWindow;
    }, []);

    const handleMouseMove = useCallback((e) => {
        const now = Date.now();
        if (now - lastTimeRef.current < throttleTime) return;
        
        lastTimeRef.current = now;
        
        // Limpiar timeout de visibilidad si existe
        if (visibilityTimeoutRef.current) {
            clearTimeout(visibilityTimeoutRef.current);
        }
        
        // Verificar si el cursor está realmente dentro del viewport
        const isInViewport = e.clientY >= 0 && e.clientX >= 0 && 
                            e.clientX <= window.innerWidth && 
                            e.clientY <= window.innerHeight;
        
        if (!isInViewport) {
            setIsVisible(false);
            return;
        }
        
        // Actualizar posición
        targetRef.current = { x: e.clientX, y: e.clientY };
        setCursorPosition({ x: e.clientX, y: e.clientY });
        
        // Detectar si está en DevTools
        const inDevTools = detectDevToolsArea(e.clientX, e.clientY);
        setIsInDevTools(inDevTools);
        
        // Mostrar cursor
        setIsVisible(true);
        
        // Solo detectar hover si no está en DevTools
        if (!inDevTools) {
            const elementUnderCursor = document.elementFromPoint(e.clientX, e.clientY);
            if (elementUnderCursor) {
                const hoverState = detectHoverElement(elementUnderCursor);
                setIsHovering(hoverState.isHovering);
                setHoverType(hoverState.type);
            }
        } else {
            // Resetear estado de hover en DevTools
            setIsHovering(false);
            setHoverType('default');
        }
    }, [detectHoverElement, detectDevToolsArea]);

    const handleMouseLeave = useCallback((e) => {
        // Si el mouse se va a null (fuera del navegador) o a la barra de marcadores
        if (e.relatedTarget === null || e.clientY < 0) {
            setIsVisible(false);
        } else {
            // Usar timeout para evitar parpadeo en otros casos
            visibilityTimeoutRef.current = setTimeout(() => {
                setIsVisible(false);
            }, 150);
        }
    }, []);

    const handleMouseEnter = useCallback(() => {
        if (visibilityTimeoutRef.current) {
            clearTimeout(visibilityTimeoutRef.current);
        }
        setIsVisible(true);
    }, []);

    // Detectar cuando el foco cambia (útil para DevTools)
    const handleFocusChange = useCallback(() => {
        if (document.hasFocus()) {
            setIsVisible(true);
        }
    }, []);

    // Detectar cambios en el tamaño de la ventana (DevTools opening/closing)
    const handleResize = useCallback(() => {
        // Pequeño delay para permitir que las dimensiones se actualicen
        setTimeout(() => {
            const hasDevTools = window.innerWidth !== document.documentElement.clientWidth || 
                               window.innerHeight !== document.documentElement.clientHeight;
            
            if (hasDevTools) {
                setIsVisible(true);
            }
        }, 100);
    }, []);

    useEffect(() => {
        const options = { passive: true, capture: true };
        
        // Event listeners principales
        document.addEventListener('mousemove', handleMouseMove, options);
        document.addEventListener('mouseleave', handleMouseLeave);
        document.addEventListener('mouseenter', handleMouseEnter);
        
        // Event listeners adicionales para DevTools
        window.addEventListener('focus', handleFocusChange);
        window.addEventListener('blur', handleFocusChange);
        window.addEventListener('resize', handleResize);
        
        // Listener global en window para capturar eventos fuera del documento
        const globalMouseMove = (e) => {
            // Verificar si el mouse está fuera del viewport
            const isOutsideBrowser = e.clientY < 0 || e.clientX < 0 || 
                                    e.clientX > window.innerWidth || 
                                    e.clientY > window.innerHeight;
            
            if (isOutsideBrowser) {
                setIsVisible(false);
                return;
            }
            
            // Solo procesar si el evento viene de fuera del documento pero dentro del viewport
            if (e.target === window || !document.contains(e.target)) {
                handleMouseMove(e);
            }
        };
        
        window.addEventListener('mousemove', globalMouseMove, { passive: true, capture: true });

        return () => {
            document.removeEventListener('mousemove', handleMouseMove);
            document.removeEventListener('mouseleave', handleMouseLeave);
            document.removeEventListener('mouseenter', handleMouseEnter);
            window.removeEventListener('focus', handleFocusChange);
            window.removeEventListener('blur', handleFocusChange);
            window.removeEventListener('resize', handleResize);
            window.removeEventListener('mousemove', globalMouseMove);
            
            if (visibilityTimeoutRef.current) {
                clearTimeout(visibilityTimeoutRef.current);
            }
        };
    }, [handleMouseMove, handleMouseLeave, handleMouseEnter, handleFocusChange, handleResize]);

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

    // No renderizar si no es visible
    if (!isVisible) return null;

    const getCircleStyles = () => {
        const baseSize = isHovering && !isInDevTools ? 80 : radius * 2;
        let baseOpacity = isHovering && !isInDevTools ? 0.6 : 0.7;
        
        // Reducir opacidad si está en DevTools
        if (isInDevTools) {
            baseOpacity *= 0.4;
        }
        
        let borderColor = 'border-gray-400';
        let backgroundColor = '';
        
        if (!isInDevTools) {
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
        const baseSize = isHovering && !isInDevTools ? 12 : smallCursorSize;
        let baseOpacity = isHovering && !isInDevTools ? 0.7 : 0.4;
        
        // Reducir opacidad si está en DevTools
        if (isInDevTools) {
            baseOpacity *= 0.4;
        }
        
        return {
            width: `${baseSize}px`,
            height: `${baseSize}px`,
            opacity: baseOpacity
        };
    };

    const getPointColorClass = () => {
        return isHovering && !isInDevTools ? 'bg-orange-400/70' : 'bg-gray-400';
    };

    const pointStyle = {
        transform: `translate3d(${cursorPosition.x - (isHovering && !isInDevTools ? 6 : smallCursorSize / 2)}px, ${cursorPosition.y - (isHovering && !isInDevTools ? 6 : smallCursorSize / 2)}px, 0)`,
        willChange: 'transform',
        transition: 'width 0.2s ease, height 0.2s ease, opacity 0.2s ease',
        ...getPointStyles()
    };

    const circleStyle = {
        transform: `translate3d(${circleOffset.x - (isHovering && !isInDevTools ? 40 : radius)}px, ${circleOffset.y - (isHovering && !isInDevTools ? 40 : radius)}px, 0)`,
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