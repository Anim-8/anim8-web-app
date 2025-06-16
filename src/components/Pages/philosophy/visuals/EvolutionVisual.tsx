import { animate, JSAnimation, svg } from 'animejs';
import React, { useEffect, useRef } from 'react'
import Glow from '../../../ui/Glow';

const width = 400
const height = 300

const rectangles = [
    { x: 40, y: 7, width: 80, height: 30, fill: "var(--color-cyan-500)", stroke: "white", label: "Hardware", hasConnection: true, x2: width / 2, y2: height / 2 },
    { x: 280, y: 7, width: 80, height: 30, fill: "var(--color-cyan-500)", stroke: "white", label: "Software", hasConnection: true, x2: width / 2, y2: height / 2 },
    { x: width / 2 - 40, y: height / 2 - 15, width: 80, height: 30, fill: "var(--color-cyan-500)", stroke: "white", label: "Anim8", hasConnection: true, x2: width / 2, y2: height - 15 },
    { x: width / 2 - 40, y: height - 30, width: 80, height: 30, fill: "var(--color-cyan-500)", stroke: "white", label: "Solutions" }
];

const linePaths = [
    `M 80,37 L ${width / 2},${height / 2} L ${width / 2},${height - 15}`,
    `M ${width - 80},37 L ${width / 2},${height / 2} L ${width / 2},${height - 15}`,
    `M 80,37 C 200,60 160,100 ${width / 2},${height / 2} L ${width / 2},${height - 15}`,
    `M 80,37 C 100,60 60,100 ${width / 2},${height / 2} L ${width / 2},${height - 15}`,
    `M ${width - 80},37 C 200,60 230,100 ${width / 2},${height / 2} L ${width / 2},${height - 15}`,
    `M ${width - 80},37 C 320,60 340,100 ${width / 2},${height / 2} L ${width / 2},${height - 15}`,
]

const balls = [1, 2, 3, 4, 5, 6]


const EvolutionVisual: React.FC = () => {
    const ballRefs = useRef<SVGCircleElement[]>([])
    const paths = useRef<(SVGPathElement | null)[]>([])
    const animations = useRef<(JSAnimation | null)[]>([])
    // add a loop with a loop delay to give separation

    useEffect(() => {
        if (!ballRefs.current?.length) return

        for (let i = 0; i < paths.current.length; i++) {
            animations.current[i] = animate(ballRefs.current[i], {
                autoplay: true,
                loop: true,
                loopDelay: 1000,
                duration: 5000,
                ease: 'easeInOut',
                alternate: true,
                onUpdate: (self: JSAnimation) => {
                    if (ballRefs.current[i]) {
                        ballRefs.current[i].style.opacity = self.iterationProgress <= 0.5 ? (self.iterationProgress * 0.95).toString() : "0.5"
                    }
                },
                ...svg.createMotionPath(paths.current[i]!)
            })
        }
        return () => {
            animations.current.forEach(a => a?.revert())
        }
    }, [])
    return (
        <svg viewBox={`0 0 ${width} ${height}`} width="100%" height="100%" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid meet">
            <defs>
                <mask id="rectMask">
                    <rect x="0" y="0" width="100%" height="100%" fill="white" />
                    {rectangles.map((rect, idx) => (
                        <rect
                            key={idx}
                            x={rect.x}
                            y={rect.y}
                            width={rect.width}
                            height={rect.height}
                            fill="black"
                            rx={8}
                            ry={8}
                        />
                    ))}
                </mask>
            </defs>

            <g mask="url(#rectMask)">
                {linePaths.map((path, i) => <path ref={(el: SVGPathElement) => { paths.current[i] = el }} key={i} d={path} fill="none" stroke="var(--color-cyan-500)" strokeWidth="1" filter="url(#glow)" />)}
                {balls.map((ball, i) => <circle ref={(el: SVGCircleElement) => { ballRefs.current[i] = el }} key={ball} r={5} fill='var(--color-cyan-500)' style={{ "filter": "blur(2px)" }} />)}
            </g>

            {/* Draw your translucent rectangles and text on top *after* the masked content */}
            {rectangles.map((rect, idx) => (
                <g key={idx}>
                    <rect
                        x={rect.x}
                        y={rect.y}
                        width={rect.width}
                        height={rect.height}
                        fill="rgba(0,0,0,0.4)"
                        stroke={rect.stroke}
                        strokeWidth={0.3}
                        rx={8}
                        ry={8}
                        opacity={0.4}
                    />
                    <text
                        x={rect.x + rect.width / 2}
                        y={rect.y + rect.height / 2}
                        textAnchor="middle"
                        dominantBaseline="middle"
                        fill="var(--color-cyan-500)"
                        fontSize="12"
                    >
                        {rect.label}
                    </text>
                </g>
            ))}
            <Glow />
        </svg>
    )
}

export default EvolutionVisual