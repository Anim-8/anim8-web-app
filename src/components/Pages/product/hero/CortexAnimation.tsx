import { animate, createScope, Scope, createTimeline, Timeline, svg } from 'animejs';
import { useEffect, useRef } from 'react';
import Gate from '../../../ui/Gate';
import Station from '../../../ui/Station';
import cortexImage from '../../../../assets/cortex.svg'
import car from '../../../../assets/car.webp'

const cortexPaths = [
  {
    d: 'M 70 500 C 70 300, 120 150, 270 125',
    stroke: 'var(--color-blue-glow)',
  },
    {
    d: 'M 140 500 C 140 350, 200 200, 280 175',
    stroke: 'var(--color-orange-highlight)',
    },
  {
    d: 'M 210 500 C 210 370, 250 300, 330 200',
    stroke: 'var(--color-blue-glow)',
  },
  {
    d: 'M 280 500 C 280 350, 290 290, 330 225',
    stroke: 'var(--color-orange-highlight)',
  },
  {
    d: 'M 350 500 C 350 400, 350 300, 350 225',
    stroke: 'var(--color-blue-glow)',
  },
  {
    d: 'M 420 500 C 420 350, 390 290, 370 225',
    stroke: 'var(--color-orange-highlight)',
  },
  {
    d: 'M 490 500 C 480 360, 430 300, 370 200',
    stroke: 'var(--color-blue-glow)',
  },
  {
    d: 'M 560 500 C 560 350, 510 250, 420 175',
    stroke: 'var(--color-orange-highlight)',
  },
  {
    d: 'M 630 500 C 630 300, 530 150, 430 125',
    stroke: 'var(--color-blue-glow)',
  },
];


/*

- Look into morph -> https://animejs.com/documentation/svg/morphto
*/

const count = 5;
const viewBoxWidth = 700;
const viewBoxHeight = 700;
const stepSpacing = viewBoxWidth / (count * 2); // alternating steps/gates
const cy = viewBoxHeight / 2;
const stationYOffset = 150

const positions = Array.from({ length: count * 2 - 1 }, (_, i) => ({
  cx: stepSpacing * (i + 1),
  cy,
  isStep: i % 2 === 0,
}));


const pathD = positions.map((p, i) => `${i === 0 ? 'M' : 'L'} ${p.cx} ${p.cy}`).join(' ');

const CortexAnimation = () => {
  const root = useRef(null);
  const scope = useRef<Scope>(null);
  const timeline = useRef<Timeline>(null)
  const exchangeTimeline = useRef<Timeline>(null)
  const ballRef = useRef<SVGImageElement | null>(null);
  const pathRef = useRef<SVGPathElement | null>(null);
  const rectRefs = useRef<(SVGRectElement | null)[]>([]);
  const diamondRefs = useRef<(SVGRectElement | null)[]>([]);
  const arrowPaths = useRef<(SVGPathElement | null)[]>([])
  const updatePathBall = useRef<SVGCircleElement | null>(null);

  useEffect(() => {
    if (!ballRef.current || !pathRef.current || !updatePathBall.current) return
    scope.current = createScope({ root }).add(self => {

      const ball = ballRef.current!
      const updateBall = updatePathBall.current!

      timeline.current = createTimeline({
        duration: 16000
      })

      // for each step, go forward x*2 to go to the next station. pause, then move
      for (let i = 0; i < count; i++) {
        const x = stepSpacing * i
        timeline.current.add(ball, {
          delay: i <= 1 ? 0 : 2000,
          duration: 2000,
          x: x * 2,
          onBegin: () => {
            console.log("beginning step", i)
            rectRefs.current[i * 2]!.style.fill = "purple"
          },
          onComplete: () => {
            console.log("completing step.", i)
            if (rectRefs.current[i * 2] && rectRefs.current[i * 2] !== null) {
              rectRefs.current[i * 2]!.style.fill = "green"
            }
            if (i > 0) {
              diamondRefs.current[i * 2 - 1]!.style.fill = "green"
            }
          }
        })
      }

      exchangeTimeline.current = createTimeline({ duration: 18000 })

      for (let i = 0; i < cortexPaths.length; i++) {
        const motionPath = svg.createMotionPath(arrowPaths.current[i]!)
        exchangeTimeline.current.add(updateBall, {
          autoplay: true,
          ease: 'linear',
          duration: 2000,
          ...motionPath,
          onBegin: () => {
            updateBall.style.opacity = "1"
            console.log("begin")
          },
          onComplete: () => {
            updateBall.style.opacity = "0"
          }
        })
      }
      
      timeline.current.play()
      exchangeTimeline.current.play()


    });

    // Properly cleanup all anime.js instances declared inside the scope
    return () => {
      if (scope.current) {
        scope.current.revert()
      }
    }

  }, []);

  return (
    <div>
      <button onClick={() => timeline.current?.restart()}>Restart</button>
      <div ref={root}>
      <svg
        viewBox={`0 0 ${viewBoxWidth} ${viewBoxHeight}`}
        width="1000px"
        height="800px"
        preserveAspectRatio="xMidYMid meet"
      >
          <ellipse
            cx={viewBoxWidth / 2}
            cy={viewBoxHeight - 180}
            rx={350}
            ry={35}
            fill="var(--color-blue-glow))"
            filter="drop-shadow(0 0 25px var(--color-blue-glow))"
        />
        {cortexPaths.map((p, i) => (
        <path
            key={p.d + i}
            d={p.d}
            stroke={p.stroke}
            strokeWidth={2}
            fill="none"
            strokeLinecap="round"
            filter="drop-shadow(0 0 6px var(--color-blue-glow))"
            ref={(el: SVGPathElement) => {
            arrowPaths.current[i] = el;
            }}
        />
        ))}
        <image href={cortexImage} width="200" height="200" x="calc(50% - 100px)" y="20" />
        
        <g transform={`translate(0, ${stationYOffset})`}>
          <path ref={pathRef} d={pathD} fill="none" stroke="gray" strokeWidth={1} id="motionPath" />
          {
          positions.map((pos, i) =>
            pos.isStep ? <Station ref={(el: SVGRectElement) => rectRefs.current[i] = el} key={`step-${i}`} cx={pos.cx} cy={pos.cy} /> :
              <Gate key={`gate-${i}`} cx={pos.cx} cy={pos.cy} ref={(el: SVGRectElement) => diamondRefs.current[i] = el} />
          )
        }
        </g>
        <image 
            href={car} 
            ref={ballRef}   
            width="40"
            height="20"
            x={stepSpacing - 20} // offset to center
            y={cy + stationYOffset - 10}
            style={{ transition: 'transform 0.3s ease-out' }}/>

        <circle ref={updatePathBall} r="5" fill="skyblue" style={{"filter": "blur(2px)"}} />
      </svg>
    </div>
    </div>
  )
}

export default CortexAnimation;