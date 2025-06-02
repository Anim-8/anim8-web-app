import React from "react";
import GradientButton from "../../../ui/GradientButton";

const PhilosophySection = () => {
  return (
    <div className="w-full h-full flex flex-col items-center justify-center px-8 py-20 bg-background text-center">
      <h2 className="text-2xl font-semibold text-primary mb-6">Our Philosophy</h2>
      
      {/* Optional future paragraph content */}
      <p className="text-base text-text max-w-xl mb-6">
At Anim8, we believe the future of manufacturing lies in conscious, adaptive organizations. Our philosophy is grounded in clarity, truth, and continuous learning. By combining engineering, education, and elegant design, we’re reimagining what factories can become — not just more productive, but more intelligent and purposeful.      </p>
      
      <GradientButton text="Join the mouvement" href="#contact" />
    </div>
  );
};

export default PhilosophySection;
