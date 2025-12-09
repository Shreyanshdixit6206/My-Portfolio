import { motion } from 'motion/react';
import { useEffect, useState, useRef } from 'react';

export function AnimeCursor() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isClicking, setIsClicking] = useState(false);
  const [trail, setTrail] = useState<Array<{ x: number; y: number; id: string }>>([]);
  const [isMobile, setIsMobile] = useState(false);
  const counterRef = useRef(0);

  // Detect if device is mobile
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768 || 'ontouchstart' in window);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  useEffect(() => {
    // Don't run cursor effects on mobile
    if (isMobile) return;

    const updateMousePosition = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
      
      // Add to trail occasionally
      if (Math.random() > 0.7) {
        counterRef.current += 1;
        const uniqueId = `trail-${counterRef.current}-${performance.now()}`;
        setTrail(prev => [
          ...prev.slice(-15), // Keep last 15 points
          { x: e.clientX, y: e.clientY, id: uniqueId }
        ]);
      }
    };

    const handleMouseDown = () => setIsClicking(true);
    const handleMouseUp = () => setIsClicking(false);

    window.addEventListener('mousemove', updateMousePosition);
    window.addEventListener('mousedown', handleMouseDown);
    window.addEventListener('mouseup', handleMouseUp);

    return () => {
      window.removeEventListener('mousemove', updateMousePosition);
      window.removeEventListener('mousedown', handleMouseDown);
      window.removeEventListener('mouseup', handleMouseUp);
    };
  }, [isMobile]);

  // Clean up old trail points
  useEffect(() => {
    if (isMobile) return;
    
    const interval = setInterval(() => {
      setTrail(prev => {
        if (prev.length > 10) {
          return prev.slice(-10);
        }
        return prev;
      });
    }, 100);
    return () => clearInterval(interval);
  }, [isMobile]);

  // Don't render anything on mobile
  if (isMobile) return null;

  return (
    <>
      {/* Cursor trail - chakra/energy effect */}
      {trail.map((point, index) => (
        <motion.div
          key={point.id}
          className="fixed pointer-events-none z-[200] mix-blend-screen"
          style={{
            left: point.x,
            top: point.y,
          }}
          initial={{ scale: 1, opacity: 0.6 }}
          animate={{ 
            scale: 0,
            opacity: 0,
          }}
          transition={{ duration: 0.6 }}
        >
          <div 
            className="w-3 h-3 rounded-full"
            style={{
              background: `radial-gradient(circle, ${
                index % 3 === 0 ? '#D4FF00' : 
                index % 3 === 1 ? '#A8F5FF' : 
                '#FF6B9D'
              } 0%, transparent 70%)`,
            }}
          />
        </motion.div>
      ))}

      {/* Main cursor ring */}
      <motion.div
        className="fixed pointer-events-none z-[200] mix-blend-difference"
        animate={{
          x: mousePosition.x - 20,
          y: mousePosition.y - 20,
          scale: isClicking ? 0.8 : 1,
        }}
        transition={{
          type: 'spring',
          stiffness: 500,
          damping: 28,
        }}
      >
        <div className="w-10 h-10 border-2 border-white rounded-full" />
      </motion.div>
    </>
  );
}