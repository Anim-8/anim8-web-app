import GradientButton from "../../../ui/GradientButton";

const TeamInfoSection = () => {
  return (
    <div className="w-full h-full flex flex-col items-center justify-center px-8 py-20 bg-background text-center">
      <h2 className="text-2xl font-semibold text-white mb-6">Our Team</h2>

      <p className="text-base text-white max-w-2xl mb-6">
            Anim8 is built on shared vision, trust, and system-level thinking. Our team blends software precision
            with manufacturing intuition. Together, we’ve led some of the world’s most complex builds — and now
            we’re here to elevate yours. This is more than a team; it's a union of complementary minds committed
            to bringing consciousness to industry.
      </p>

      <GradientButton text="Let's talk." href="#contact" />
    </div>
  );
};

export default TeamInfoSection;
