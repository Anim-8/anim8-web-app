import React, { useEffect, useRef } from 'react';
import knob from '../../../../assets/knob.webp';
import spectrum from '../../../../assets/spectrum-nobg.webp';
import { animate, JSAnimation, svg } from 'animejs';

const AnimationSpectrumVisual: React.FC = () => {
    const pathRef = useRef<SVGPathElement>(null);
    const circleRef = useRef<SVGImageElement>(null);
    const animationRef = useRef<JSAnimation>(null)

    useEffect(() => {
        const path = pathRef.current;
        const circle = circleRef.current;
        if (!path || !circle) return;

        animationRef.current = animate(circle, {
            ease: 'linear',
            duration: 4000,
            easing: 'easeInOutSine',
            alternate: true,
            loop: true,
            ...svg.createMotionPath(path)
        })

        return () => {
            if (animationRef.current) animationRef.current.revert()
        }
    }, []);

    return (
        <div className="relative w-full h-[30rem] md:h-[36rem] flex flex-col items-center justify-center gap-2 -mt-4 rounded-2xl overflow-visible bg-transparent">
            <svg
                viewBox="0 0 500 300"
                width="100%"
                height="100%"
            >
                <path ref={pathRef} d="M40 165, 460 165" stroke="lightblue" fill="none" strokeWidth="3" />
                <image href={spectrum} width="100%" y={150} />
                <image href={knob} ref={circleRef} width="30px" />
            </svg>
        </div>
    );
};

export default AnimationSpectrumVisual;