import { ArrowRight } from "lucide-react";
import ModelsGrid from "../../Components/Models/ModelsGrid";

export default function ModelsSection() {
  return (
    <section className="w-full bg-[#f7f7f5]">

      {/* Header */}
      <div className="max-w-[1400px] mx-auto border-b border-[#e5e5e5] px-12 py-20">

        <p className="text-[12px] uppercase tracking-[0.28em] text-[#6b7280]">
          Models
        </p>

        <div className="mt-4 flex items-end justify-between">

          <div>
            <h2 className="text-[56px] leading-[1] font-medium tracking-[-0.04em] text-[#111827]">
              Built for every
              <br />
              stage of intelligence.
            </h2>

            <p className="mt-6 max-w-2xl text-[18px] leading-8 text-[#6b7280]">
              A family of AI models designed for reasoning, coding,
              multimodal understanding and the future of Artificial
              General Intelligence.
            </p>
          </div>

          <button className="hidden lg:flex items-center gap-2 text-[15px] font-medium text-[#111827] hover:gap-3 transition-all">
            Explore Models
            <ArrowRight size={17} />
          </button>

        </div>

      </div>

      {/* Full Width Models */}
      <ModelsGrid />

    </section>
  );
}