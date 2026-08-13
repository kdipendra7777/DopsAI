import { ArrowRight } from "lucide-react";

const models = [
  "Dops One",
  "Dops Mini",
  "Dops Vision",
  "Dops Research",
];

export default function ModelDetails() {
  return (
    <div className="w-full border-t border-[#e5e5e5]">

      <div className="grid grid-cols-12">

        {/* Left */}
        <div className="col-span-8 border-r border-[#e5e5e5] p-16">

          <p className="text-[13px] uppercase tracking-[0.25em] text-[#6b7280]">
            Frontier Intelligence
          </p>

          <h2 className="mt-4 text-[52px] leading-tight font-medium tracking-[-0.04em] text-[#111827]">
            Built for reasoning,
            <br />
            planning and HGI.
          </h2>

          <p className="mt-8 max-w-3xl text-[20px] leading-9 text-[#6b7280]">
            Dops One combines reasoning, coding, multimodal perception and
            long-context understanding to power the next generation of
            Human General Intelligence systems.
          </p>

        </div>

        {/* Right */}
        <div className="col-span-4 p-16">

          <p className="mb-6 text-[12px] uppercase tracking-[0.22em] text-[#9ca3af]">
            Available Models
          </p>

          <div className="divide-y divide-[#ececec]">

            {models.map((model) => (
              <button
                key={model}
                className="group flex w-full items-center justify-between py-5 text-left transition-all hover:pl-2"
              >
                <span className="text-[18px] font-medium text-[#111827]">
                  {model}
                </span>

                <ArrowRight
                  size={18}
                  className="text-[#9ca3af] transition-all duration-300 group-hover:translate-x-1"
                />
              </button>
            ))}

          </div>

        </div>

      </div>

    </div>
  );
}