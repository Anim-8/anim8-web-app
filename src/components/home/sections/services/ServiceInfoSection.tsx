import React from "react";
import GradientButton from "../../../ui/GradientButton";

const ServiceInfoSection = () => {
  return (
    <div className="w-full h-full flex flex-col lg:flex-row items-center justify-center px-8 py-20 gap-10 bg-background">
      
      {/* Visual Content Placeholder */}
      {/* <div className="w-full lg:w-1/2 flex items-center justify-center">
        <img
          src="/images/integration-visual.png"
          alt="Integration Visual"
          className="max-w-[500px] w-full h-auto"
        />
      </div> */}

      {/* Text Content */}
      <div className="w-full lg:w-2/5 text-center lg:text-left">
        <h2 className="text-2xl font-semibold text-primary mb-4">Our Service</h2>
        <p className="text-base text-text mb-6">
          We design, build, and deliver complete quality control and supervision systems—from diagnostic to handover.
          We combine engineering, software, and data science to turn your factory into a conscious, high-performance operation.
        </p>
        <GradientButton text="Get a Diagnostic." href="#contact" />
      </div>
    </div>
  );
};

export default ServiceInfoSection;
