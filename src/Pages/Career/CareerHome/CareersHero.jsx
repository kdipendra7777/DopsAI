import HGIVisual from "../../Footer/Company/Career/HGIVisual";
import ExploreOpportunities from "../../Footer/Company/Career/ExploreOpportunities";

export default function CareersHero() {
  return (
    <section className="relative bg-black">

      {/* Top */}
      <div className="pointer-events-none absolute left-0 right-0 top-8 border-t border-dotted border-zinc-500" />

      {/* Bottom */}
      <div className="pointer-events-none absolute bottom-18 left-0 right-0 border-t border-dotted border-zinc-500" />

      <div className="pointer-events-none absolute bottom-54 left-0 right-0 border-t border-dotted border-zinc-500" />

      {/* Left */}
      <div className="pointer-events-none absolute bottom-8 left-8 top-8 border-l border-dotted border-zinc-500" />

      <div className="pointer-events-none absolute bottom-8 left-35 top-8 border-l border-dotted border-zinc-500" />

      {/* Right */}
      <div className="pointer-events-none absolute bottom-8 right-8 top-8 border-r border-dotted border-zinc-500" />

      <div className="pointer-events-none absolute bottom-8 right-65 top-8 border-r border-dotted border-zinc-500" />

      {/* Content */}
      <div className="relative mx-auto flex min-h-[760px] max-w-7xl items-center justify-center px-8 py-32">
        <div className="w-full max-w-4xl text-center">

          {/* Heading */}
          <h1 className="text-left text-6xl font-semibold leading-[0.95] tracking-[-0.06em] text-white sm:text-7xl lg:-ml-20 lg:text-[88px]">
            Build the future
            <br />
            of <span className="text-zinc-500">intelligence.</span>
          </h1>

          {/* Description */}
          <p className="mx-auto mt-25 max-w-2xl text-base leading-8 text-zinc-400 sm:text-lg lg:ml-45">
            Join us in advancing Human General Intelligence by building
            systems that learn, reason, remember, adapt, and understand
            with increasing human-like efficiency.
          </p>

          {/* HGI Visual */}
          <div className="mt-21">
            <HGIVisual />
          </div>

        </div>
      </div>

      {/* Bottom Right Button */}
     <ExploreOpportunities />

    </section>
  );
}