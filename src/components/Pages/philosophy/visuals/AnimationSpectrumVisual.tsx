import React, { useEffect, useRef, useState } from 'react';
import knob from '../../../../assets/knob.webp';
import spectrum from '../../../../assets/spectrum-nobg.webp';
import brain from '../../../../assets/anim8-brain.webp';
import { animate, JSAnimation, svg, Timeline } from 'animejs';

const AnimationSpectrumVisual: React.FC = () => {
    const pathRef = useRef<SVGPathElement>(null);
    const circleRef = useRef<SVGImageElement>(null);
    const animationRef = useRef<JSAnimation>(null)
    const brainAnimationRef = useRef<JSAnimation>(null)
    const brainRef = useRef<SVGImageElement>(null)
    const timelineRef = useRef<Timeline>(null)
    const [progressValue, setProgressValue] = useState<number>(0)
    const [direction, setDirection] = useState<number>(1)

    useEffect(() => {
        const path = pathRef.current;
        const circle = circleRef.current;
        const brain = brainRef.current
        if (!path || !circle || !brain) return;

        animationRef.current = animate(circle, {
            ease: 'linear',
            duration: 4000,
            easing: 'easeInOutSine',
            alternate: true,
            loop: true,
            ...svg.createMotionPath(path)
        })

        brainAnimationRef.current = animate(brainRef.current!, {
            easing: 'easeInQuad',
            loop: true,
            autoplay: true,
            duration: 4000,
            onUpdate: (self: JSAnimation) => {
                setProgressValue(s => self.iterationProgress)
            },
            onLoop: () => {
                setDirection(d => d * -1)
            }
        })

        return () => {
            if (animationRef.current) animationRef.current.revert()
            if (timelineRef.current) timelineRef.current.revert()
        }
    }, []);

    return (
        <div className="relative w-full h-[30rem] md:h-[36rem] flex flex-col items-center justify-center gap-2 -mt-4 rounded-2xl overflow-visible bg-transparent">
            <div className="relative z-10 flex justify-between w-[80%] text-white/80 text-sm md:text-base font-semibold tracking-wide mb-1">
                <span className={(direction === 1 && progressValue < .33) || (direction === -1 && progressValue > .66) ? 'text-cyan-400' : ''}>Manual</span>
                <span className={progressValue >= .33 && progressValue < .66 ? 'text-cyan-400' : ''}>Automated</span>
                <span className={(direction === 1 && progressValue >= .66) || (direction === -1 && progressValue < .33) ? 'text-cyan-400' : ''}>Animated</span>
            </div>
            <svg
                viewBox="0 0 500 300"
                width="100%"
                height="100%"
            >
                <image href={brain} width="30%" x="calc(50% - 15%)" y="2%" ref={brainRef} style={{ filter: `drop-shadow(0 0 ${(direction === -1 ? (1 - progressValue) : progressValue) * 100 / 3}px cyan)` }} />
                <path ref={pathRef} d="M10 160, 460 160" stroke="lightblue" fill="none" strokeWidth="3" />
                <image href={spectrum} width="100%" y={150} />
                <image href={knob} ref={circleRef} width="40px" />
            </svg>
        </div>
    );
};

export default AnimationSpectrumVisual;