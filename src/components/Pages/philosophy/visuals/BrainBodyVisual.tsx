import humanoid from '../../../../assets/humanoid-nobg.webp';
import starfield from '../../../../assets/starfield.webp';

const BrainBodyVisual: React.FC = () => {
  return (
    <div className="relative w-full h-[34rem] md:h-[40rem] flex items-center justify-center rounded-2xl overflow-hidden bg-transparent">

      {/* Background Gradient + Starfield */}
      <div className="absolute inset-0 z-0 bg-gradient-to-br from-indigo-900/40 to-black animate-gradientPulse">
        <div
          className="absolute inset-0 bg-cover opacity-20 animate-panStars"
          style={{ backgroundImage: `url(${starfield})` }}
        />
      </div>

      {/* Glow Aura Behind Humanoid */}
      <div className="absolute z-10 w-[300px] h-[300px] md:w-[400px] md:h-[400px] bg-cyan-400 rounded-full opacity-30 blur-[100px]" />

      {/* Humanoid */}
      <div className="relative z-20 flex justify-center items-end w-full h-full">
        <img
          src={humanoid}
          alt="Humanoid Nervous System Visualization"
          className="h-[75%] md:h-[85%] object-contain drop-shadow-2xl"
        />
      </div>
    </div>
  );
};

export default BrainBodyVisual;
