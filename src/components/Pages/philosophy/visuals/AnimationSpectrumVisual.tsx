import React, { useEffect, useRef, useState } from 'react';
import knob from '../../../../assets/knob.webp';
import spectrum from '../../../../assets/spectrum-nobg.webp';
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
            </div>
<<<<<<< HEAD
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
=======
            <svg
                viewBox="0 0 500 300"
                width="100%"
                height="100%"
            >
                <image
                    href="/anim8-brain.webp"
                    width="30%"
                    x="calc(50% - 15%)"
                    y="10%"
                    ref={brainRef}
                    style={{
                        transform: `scale(${0.95 + direction * -1 * Math.cos(progressValue * 3) * 0.05})`,
                        transformOrigin: 'center',
                        transformBox: 'fill-box',
                        filter: `drop-shadow(0 0 ${(direction === -1 ? (1 - progressValue) : progressValue) * 100 / 3}px cyan)`
                    }}
                />
                <text x="0" y="220" fill={(direction === 1 && progressValue < 0.33) || (direction === -1 && progressValue > 0.66) ? '#22d3ee' : '#ffffff'}>
                    Manual
                </text>
                <text x="43%" y="220" fill={progressValue >= 0.33 && progressValue < 0.66 ? '#22d3ee' : '#ffffff'}>
                    Automated
                </text>
                <text x="500" textAnchor='end' y="220" fill={(direction === 1 && progressValue >= 0.66) || (direction === -1 && progressValue < 0.33) ? '#22d3ee' : '#ffffff'}>
                    Animated
                </text>
                <path ref={pathRef} d="M10 250, 460 250" stroke="lightblue" fill="none" strokeWidth="3" />
                <image href={spectrum} width="100%" y={240} />
                <image href={knob} ref={circleRef} width="40px" />
>>>>>>> 3970d3ceb99be91ad6de7cec6c2cfe0c091d7a2f
            </svg>
        </div>
    );
};

export default AnimationSpectrumVisual;
