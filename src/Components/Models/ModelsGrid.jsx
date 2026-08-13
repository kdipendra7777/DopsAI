import { ArrowRight } from "lucide-react";
import ModelDetails from "./ModelDetails";

export default function ModelsGrid() {
  return (
    <section className="w-full bg-[#f7f7f5]">

      {/* Full Width Image */}
      <div className="relative w-full h-screen overflow-hidden">

        <img
          src="/images/NavImage/research.png"
          alt="Dops One"
          className="w-full h-full object-cover"
        />

        {/* Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/25 to-transparent" />

        {/* Content */}
        {/* Content */}
<div className="absolute bottom-20 left-20 text-white">


<h1 className="font-manrope mt-6 text-[96px] font-semibold leading-[0.95] tracking-[0.04em] text-white">
  Journey to HGI
</h1>

  <p className="font-manrope mt-6 max-w-2xl text-[21px] font-normal leading-[1.7] text-white/80">
    Our frontier intelligence model designed for advanced reasoning,
    coding, multimodal understanding and scientific discovery.
  </p>

</div>

      </div>

      {/* Details */}
      <div className="w-full border-t border-[#e5e5e5]">

        <ModelDetails/>

      </div>

    </section>
  );
}