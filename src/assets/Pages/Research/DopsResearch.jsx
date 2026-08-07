import ResearchHighlightCard from "./ResearchHighlightCard";

export default function DopsResearch() {
  return (
    <section className="bg-black">
      {/* Hero */}
      <div className="relative h-[760px] w-full overflow-hidden">
        <img
          src="/images/Research/research.png"
          alt="Research"
          className="h-full w-full object-cover"
        />

        {/* Overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/85 via-black/45 to-transparent" />

        {/* Content */}
        <div className="absolute inset-0">
          <div className="relative mx-auto h-full max-w-[1500px] px-8 py-10">
            {/* Heading */}
            <div className="max-w-[700px]">
              <h1 className="text-[72px] font-light leading-[1.05] tracking-[-0.05em] text-white">
                <span className="block">
                  Building the future
                </span>

                <span className="mt-3 block">
                  of intelligence.
                </span>
              </h1>
            </div>

            {/* Bottom Left Card */}
            <div className="absolute bottom-10 left-8">
              <ResearchHighlightCard />
            </div>
          </div>
        </div>
      </div>

      {/* Cards */}
    </section>
  );
}