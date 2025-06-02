// pages/TeamPage.tsx
import React from "react";
import TeamMemberCard from "../ui/TeamMemberCard";

const TeamPage = () => {
  return (
    <div className="w-full min-h-screen bg-background px-8 py-20 flex flex-col gap-20 items-center">

      {/* 🔷 Top Section – Team Spirit */}
      <div className="flex flex-col lg:flex-row items-center justify-center max-w-6xl w-full gap-8">
        {/* Image */}
        <div className="flex-shrink-0">
          <img
            src="/images/team.png"
            alt="Team Spirit"
            className="rounded-2xl border-2 border-[#00C4FF] max-w-sm"
          />
        </div>

        {/* Text Block */}
        <div className="text-left max-w-xl">
          <h2 className="text-2xl font-semibold text-primary mb-4">Team Spirit</h2>
          <p className="text-sm text-gray-300 leading-relaxed">
            Anim8 is built on shared vision, trust, and system-level thinking. Our team blends software precision
            with manufacturing intuition. Together, we’ve led some of the world’s most complex builds — and now
            we’re here to elevate yours. This is more than a team; it's a union of complementary minds committed
            to bringing consciousness to industry.
          </p>
        </div>
      </div>

      {/* 🔷 Bottom Section – Founders' Cards */}
      <div className="flex flex-col md:flex-row gap-10 justify-center flex-wrap">
        <TeamMemberCard
          name="Roberto Calvi"
          title="Co-Founder / System Architect"
          description="Systems thinker, physicist-engineer, and intuitive strategist. Roberto is the animating soul of Anim8—blending operational excellence with a deep awareness of machine & human systems."
          imageSrc="/images/rob.png"
        />
        <TeamMemberCard
          name="Samuel Steinberg"
          title="Co-Founder / Software Lead"
          description="Expert in high-precision control, industrial tooling, and implementation at scale. Grounded, methodical, and visionary—he builds what others only imagine."
          imageSrc="/images/sam.png"
        />
      </div>
    </div>
  );
};

export default TeamPage;
