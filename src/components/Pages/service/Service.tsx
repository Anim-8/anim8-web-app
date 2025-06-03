import { animate, createScope, Scope, createTimeline, Timeline, svg } from 'animejs';
import { useEffect, useRef } from 'react';
import Diamond from '../../ui/Diamond';
import Rectangle from '../../ui/Rectangle';
import cortexImage from '../../../assets/Cortex1.svg'
import ellipseImage from '../../../assets/ellipse.webp'

const cortexPaths = [
  { d: 'M 70 500 L 70 125 L 270 125', stroke: "skyblue" },
  { d: 'M 280 175 L 140 250 L 140 500', stroke: "orange" },
  { d: 'M 210 500 L 210 270 L 330 200', stroke: "skyblue" },
  { d: 'M 330 225 L 280 290 L 280 500', stroke: "orange" },
  { d: 'M 350 500 L 350 225', stroke: "skyblue" },
  { d: 'M 370 225 L 420 290 L 420 500', stroke: "orange" },
  { d: 'M 490 500 L 490 270 L 370 200', stroke: "skyblue" },
  { d: 'M 420 175 L 560 250 L 560 500', stroke: "orange" },
  { d: 'M 630 500 L 630 125 L 430 125', stroke: "skyblue" },
]

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

const Service = () => {
  const root = useRef(null);
  const scope = useRef<Scope>(null);
  const timeline = useRef<Timeline>(null)
  const exchangeTimeline = useRef<Timeline>(null)
  const ballRef = useRef<SVGCircleElement | null>(null);
  const pathRef = useRef<SVGPathElement | null>(null);
  const rectRefs = useRef<(SVGRectElement | null)[]>([]);
  const diamondRefs = useRef<(SVGRectElement | null)[]>([]);
  const arrowPaths = useRef<(SVGPathElement | null)[]>([])
  const updatePathBall = useRef<SVGCircleElement | null>(null)

  useEffect(() => {
    if (!ballRef.current || !pathRef.current || !updatePathBall.current) return
    scope.current = createScope({ root }).add(self => {

      const ball = ballRef.current!
      const updateBall = updatePathBall.current!

      timeline.current = createTimeline({
        duration: 16000
      })

      // for each step, go forward x*2 to go to the next rectangle. pause, then move
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
        width="800px"
        height="800px"
        preserveAspectRatio="xMidYMid meet"
        style={{ background: '#000000' }}
      >
        {cortexPaths.map((p, i) => <path key={p.d + i} {...p} fill='none' id={`path-${i}`} ref={(el: SVGPathElement) => { arrowPaths.current[i] = el }} />)}
        <image href={cortexImage} width="200" height="200" x="calc(50% - 100px)" y="20" />
        
        <g transform={`translate(0, ${stationYOffset})`}>
          <path ref={pathRef} d={pathD} fill="none" stroke="gray" strokeWidth={1} id="motionPath" />
          {
          positions.map((pos, i) =>
            pos.isStep ? <Rectangle ref={(el: SVGRectElement) => rectRefs.current[i] = el} key={`step-${i}`} cx={pos.cx} cy={pos.cy} /> :
              <Diamond key={`gate-${i}`} cx={pos.cx} cy={pos.cy} ref={(el: SVGRectElement) => diamondRefs.current[i] = el} />
          )
        }
        </g>
        <circle ref={ballRef} r="5" fill="gold" cx={stepSpacing} cy={cy + stationYOffset} />
        <image href={ellipseImage} width="100%" height="200px" y="520" />
        <circle ref={updatePathBall} r="5" fill="skyblue" style={{"filter": "blur(2px)"}} />
      </svg>
    </div>
    </div>
  )
}

export default Service;