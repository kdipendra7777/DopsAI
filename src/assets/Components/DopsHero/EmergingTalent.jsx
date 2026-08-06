import TalentShowcase from "./TalentShowcase.jsx";

export default function EmergingTalent() {
  return (
    <section className="w-full min-h-screen bg-[#f7f7f5]">
      <div className="max-w-[1400px] mx-auto border-l border-r border-[#e5e5e5] min-h-screen flex flex-col">

        {/* Top Section */}
        <div className="grid grid-cols-12 border-b border-[#e5e5e5] min-h-[240px]">
          <div className="col-span-12 lg:col-span-7 flex items-center px-12 py-16">
            <div>
              <h2 className="text-[48px] leading-[0.95] font-medium tracking-tight text-[#0f172a]">
                Imagine future
              </h2>

              <h3 className="text-[38px] leading-[1] font-normal text-[#6b7a99] mt-3 whitespace-nowrap">
                live with artificial general intelligence
              </h3>
            </div>
          </div>

          <div className="hidden lg:block col-span-5"></div>
        </div>

        {/* Bottom Section */}
        <div className="grid grid-cols-12 flex-1">

          {/* Left Text */}
          <div className="col-span-12 lg:col-span-4 border-r border-[#e5e5e5] px-12 py-12 flex items-start">
            <p className="text-[20px] leading-relaxed text-[#55627d] max-w-sm">
              We're advancing Artificial General Intelligence by solving its
  hardest problems—from persistent memory and continual learning
  to autonomous reasoning and embodied intelligence.
            </p>
          </div>

          {/* Right Showcase */}
          <div className="col-span-12 lg:col-span-8">
            <TalentShowcase />
          </div>

        </div>

      </div>
    </section>
  );
}