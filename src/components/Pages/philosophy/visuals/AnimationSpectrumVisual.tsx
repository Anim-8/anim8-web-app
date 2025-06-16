import React, { useEffect, useRef, useState } from 'react';
import knob from '../../../../assets/knob.webp';
import spectrum from '../../../../assets/spectrum-nobg.webp';
import brain from '../../../../assets/anim8-brain.webp';
import { animate, JSAnimation, svg, Timeline } from 'animejs';

const AnimationSpectrumVisual: React.FC = () => {
    const pathRef = useRef<SVGPathElement>(null);
    const circleRef = useRef<SVGImageElement>(null);
    const animationRef = useRef<JSAnimation>(null);
    const brainAnimationRef = useRef<JSAnimation>(null);
    const brainRef = useRef<SVGImageElement>(null);
    const timelineRef = useRef<Timeline>(null);
    const [progressValue, setProgressValue] = useState<number>(0);
    const [direction, setDirection] = useState<number>(1);

    useEffect(() => {
        const path = pathRef.current;
        const circle = circleRef.current;
        const brain = brainRef.current;
        if (!path || !circle || !brain) return;

        animationRef.current = animate(circle, {
            ease: 'linear',
            duration: 4000,
            easing: 'easeInOutSine',
            alternate: true,
            loop: true,
            ...svg.createMotionPath(path),
        });

        brainAnimationRef.current = animate(brain, {
            easing: 'easeInQuad',
            loop: true,
            autoplay: true,
            duration: 4000,
            onUpdate: (self: JSAnimation) => {
                setProgressValue(self.iterationProgress);
            },
            onLoop: () => {
                setDirection(d => d * -1);
            },
        });

        return () => {
            animationRef.current?.revert();
            timelineRef.current?.revert();
        };
    }, []);

    // 🧠 Compute scale-adjusted width and x for perfect centering
    const actualProgress = direction === -1 ? 1 - progressValue : progressValue;
    const widthPercent = 20 + actualProgress * 10;
    const xPercent = 50 - widthPercent / 2;

    return (
        <div className="relative w-full flex flex-col items-center justify-center gap-2 -mt-4 rounded-2xl overflow-visible bg-transparent">
            <div className="relative z-10 flex justify-between w-[80%] text-white/80 text-sm md:text-base font-semibold tracking-wide mb-1">
                <span className={(direction === 1 && progressValue < .33) || (direction === -1 && progressValue > .66) ? 'text-cyan-400' : ''}>Manual</span>
                <span className={progressValue >= .33 && progressValue < .66 ? 'text-cyan-400' : ''}>Automated</span>
                <span className={(direction === 1 && progressValue >= .66) || (direction === -1 && progressValue < .33) ? 'text-cyan-400' : ''}>Animated</span>
            </div>
            <svg viewBox="0 0 500 300" width="100%" height="100%">
                <image
                    href={brain}
                    width={`${widthPercent}%`}
                    x={`${xPercent}%`}
                    y="2%"
                    ref={brainRef}
                    style={{
                        filter: `drop-shadow(0 0 ${actualProgress * 100 / 3}px cyan)`,
                    }}
                />
                <path ref={pathRef} d="M10 140, 460 140" stroke="transparent" fill="none" strokeWidth="3" />
                <image href={spectrum} width="100%" y={150} />
                <image href={knob} ref={circleRef} width="80px" />
            </svg>
        </div>
    );
};

export default AnimationSpectrumVisual;
