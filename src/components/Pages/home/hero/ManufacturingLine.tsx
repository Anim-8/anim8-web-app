import React, { useEffect, useState, useRef } from 'react';
import { animate } from 'animejs';
import ArcRail from './ArcRail';
import carImage from '../../../../assets/car.webp'

const getResponsiveConfig = () => {
  const isMobile = window.innerWidth < 768;
  return {
    carSlots: isMobile ? 7 : 11,
    curveRadius: isMobile ? 2000 : 3000,
    totalAngleSpanRad: isMobile ? 0.35 : 0.25,
    carVisualWidth: isMobile ? 48 : 64,
    carVisualHeight: isMobile ? 30 : 40,
    arcRailOffset: isMobile ? 5 : 10,
  };
};

const getArcPosition = (index: number, total: number, containerSize: { width: number, height: number }, config: any) => {
  const angle_offset = -config.totalAngleSpanRad / 2;
  const angle_rad = angle_offset + (index / (total - 1)) * config.totalAngleSpanRad;
  const arc_x = config.curveRadius * Math.sin(angle_rad);
  const arc_y = config.curveRadius * (1 - Math.cos(angle_rad));
  const arcMaxYDisplacement = config.curveRadius * (1 - Math.cos(config.totalAngleSpanRad / 2));
  const posX = containerSize.width / 2 + arc_x - config.carVisualWidth / 2;
  // 🧠 Here's the conditional Y positioning
  const posY = window.innerWidth < 768
    ? config.arcRailOffset + arc_y + config.carVisualHeight * 2.2 // 🔹 mobile logic
    : (containerSize.height / 2) - (arcMaxYDisplacement / 2) + arc_y - config.carVisualHeight / 2; // 🔹 desktop logic
  const rotation_deg = 0;
  return { posX, posY, rotation_deg };
};

type AnimationPhase = 'pulsing' | 'stopping' | 'rotating' | 'waiting';

const ManufacturingLine: React.FC = () => {
  const [config, setConfig] = useState(getResponsiveConfig());
  const [cars, setCars] = useState(() => Array.from({ length: config.carSlots }, (_, i) => i));
  const nextCarIdCounter = useRef(config.carSlots);
  const [containerSize, setContainerSize] = useState({ width: 0, height: 0 });
  const lineContainerRef = useRef<HTMLDivElement>(null);
  const [animationPhase, setAnimationPhase] = useState<AnimationPhase>('pulsing');
  const glowAnimationRef = useRef<any>(null);
  const isAnimatingRef = useRef(false);

  // Handle responsive config changes
  useEffect(() => {
    const handleResize = () => {
      const newConfig = getResponsiveConfig();
      setConfig(newConfig);
      setCars(Array.from({ length: newConfig.carSlots }, (_, i) => i));
      nextCarIdCounter.current = newConfig.carSlots;
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    if (lineContainerRef.current) {
      setContainerSize({
        width: lineContainerRef.current.offsetWidth,
        height: lineContainerRef.current.offsetHeight,
      });
    }
  }, [config]);

  // Handle glow animation
  useEffect(() => {
    const glowTargets = document.querySelectorAll('.glow-strip');
    if (glowTargets.length === 0) return;
    
    if (glowAnimationRef.current) {
      glowAnimationRef.current.pause();
      glowAnimationRef.current = null;
    }

    switch (animationPhase) {
      case 'pulsing':
        glowAnimationRef.current = animate(glowTargets, {
          opacity: [0.3, 1],
          duration: 800,
          easing: 'easeInOutSine',
          direction: 'alternate',
          loop: true,
        });
        break;
      case 'stopping':
        if (glowAnimationRef.current) {
          glowAnimationRef.current.pause();
        }
        animate(glowTargets, {
          opacity: 0.3,
          duration: 300,
          easing: 'easeOutQuad',
        });
        break;
    }

    return () => {
      if (glowAnimationRef.current) {
        glowAnimationRef.current.pause();
      }
    };
  }, [animationPhase]);

  // Handle main animation cycle
  useEffect(() => {
    if (isAnimatingRef.current) return;

    let timeout: NodeJS.Timeout | null = null;

    const runAnimationCycle = () => {
      switch (animationPhase) {
        case 'pulsing':
          timeout = setTimeout(() => setAnimationPhase('stopping'), 4000);
          break;

        case 'stopping':
          timeout = setTimeout(() => setAnimationPhase('rotating'), 500);
          break;

        case 'rotating':
          isAnimatingRef.current = true;
          
          // Create new car array with new car at front
          const newCars = [nextCarIdCounter.current, ...cars.slice(0, config.carSlots - 1)];
          nextCarIdCounter.current++;

          const carElements = document.querySelectorAll('.car-tile');
          
          // Animate each car to the next position
          const animations = Array.from(carElements).map((carElement, index) => {
            const nextIndex = (index + 1) % config.carSlots;
            const targetPosition = getArcPosition(nextIndex, config.carSlots, containerSize, config);
            
            return animate(carElement, {
              left: targetPosition.posX,
              top: targetPosition.posY,
              rotate: targetPosition.rotation_deg,
              opacity: index === config.carSlots - 1 ? 0 : 1,
              duration: 1200,
              easing: 'easeInOutQuad',
            });
          });

          // Wait for all animations to complete
          Promise.all(animations).then(() => {
            // Update the cars state and reset positions
            setCars(newCars);
            isAnimatingRef.current = false;
            setAnimationPhase('waiting');
          });
          break;

        case 'waiting':
          timeout = setTimeout(() => setAnimationPhase('pulsing'), 1000);
          break;
      }
    };

    runAnimationCycle();

    return () => {
      if (timeout) {
        clearTimeout(timeout);
      }
    };
  }, [animationPhase, cars, containerSize, config]);

  // Cleanup on unmount
  useEffect(() => {
    return () => {
      if (glowAnimationRef.current) {
        glowAnimationRef.current.pause();
      }
    };
  }, []);

  return (
    <div 
      ref={lineContainerRef} 
      className="absolute bottom-[10vh] md:bottom-[17vh] z-10 flex justify-center items-center w-[95vw] md:w-[85vw] max-w-[1300px] h-[12vh] md:h-[15vh] max-h-[120px] md:max-h-[150px] left-1/2 transform -translate-x-1/2"
    >
      <div className="absolute inset-0 rounded-lg blur-md" style={{ backgroundImage: 'radial-gradient(circle, rgba(10, 15, 20, 1) 36%, rgba(10, 15, 20, 0) 97%)' }}></div>

      {containerSize.width > 0 && (
        <div style={{ position: 'absolute', left: 0, top: `${config.arcRailOffset}px`, width: `${containerSize.width}px`, height: `${containerSize.height}px`, overflow: 'hidden' }}>
          <ArcRail width={containerSize.width} height={containerSize.height} />
        </div>
      )}

      <div className="relative z-1 w-full h-full">
        {containerSize.width > 0 && cars.map((id, index) => {
          const { posX, posY, rotation_deg } = getArcPosition(index, config.carSlots, containerSize, config);
          return (
            <div 
              key={id} 
              className="car-tile flex flex-col items-center" 
              style={{ 
                position: 'absolute', 
                left: `${posX}px`, 
                top: `${posY}px`, 
                transform: `rotate(${rotation_deg}deg)`,
                transition: 'none' // Disable CSS transitions to avoid conflicts
              }}
            >
              <img 
                src={carImage} 
                alt={`Car ${id}`} 
                className="object-contain z-10" 
                style={{ 
                  width: `${config.carVisualWidth}px`, 
                  height: 'auto' 
                }}
              />
            </div>
          );
        })}
      </div>

      <div className="absolute top-0 left-0 z-0 w-full h-full pointer-events-none">
        {containerSize.width > 0 && Array.from({ length: config.carSlots }).map((_, index) => {
          const { posX, posY, rotation_deg } = getArcPosition(index, config.carSlots, containerSize, config);
          return (
            <div 
              key={`glow-${index}`} 
              className="glow-strip bg-blue-400 rounded-full blur-sm absolute" 
              style={{ 
                width: `${config.carVisualWidth}px`,
                height: window.innerWidth < 768 ? '6px' : '8px',
                left: `${posX}px`, 
                top: `${posY + config.carVisualHeight + 4}px`, 
                transform: `rotate(${rotation_deg}deg)`, 
                opacity: 0.3 
              }} 
            />
          );
        })}
      </div>
    </div>
  );
};

export default ManufacturingLine;