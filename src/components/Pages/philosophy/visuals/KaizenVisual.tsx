import kaizen from '../../../../assets/kaizen.webp';

const BrainBodyVisual: React.FC = () => {
  return (
    <div className="relative w-full h-[34rem] md:h-[40rem] flex items-center justify-center rounded-2xl overflow-hidden bg-transparent">
      {/* kaizen */}
      <div className="relative z-20 flex justify-center items-end w-full h-full">
        <img
          src={kaizen}
          alt="kaizen - continous improvement"
          className="h-[75%] md:h-[85%] object-contain drop-shadow-2xl"
        />
      </div>
    </div>
  );
};

export default BrainBodyVisual;
