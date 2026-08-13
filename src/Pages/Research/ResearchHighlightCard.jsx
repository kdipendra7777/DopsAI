import { ArrowRight } from "lucide-react";

const researchItems = [
  "HGI Research",
  "Publications",
  "HGI Safety",
  "Research Blog",
];

export default function ResearchHighlightCard() {
  return (
    <div className="inline-block">
      {/* Main CTA */}
      <div className="flex items-center gap-3 text-white">
        <h3 className="text-2xl font-semibold tracking-tight">
          Read Latest Research
        </h3>

        <ArrowRight
          size={22}
          className="transition-transform duration-300 hover:translate-x-1"
        />
      </div>

      {/* Research List */}
      <div className="mt-5 space-y-3 border-l border-zinc-700 pl-4">
        {researchItems.map((item) => (
          <a
            key={item}
            href="#"
            className="block text-sm text-zinc-400 transition-all duration-300 hover:translate-x-1 hover:text-white"
          >
            {item}
          </a>
        ))}
      </div>

      {/* Read All Papers */}
      <a
        href="#"
        className="group mt-6 inline-flex items-center gap-2 text-sm font-medium text-white transition-all duration-300 hover:gap-3"
      >
        Read all papers

        <ArrowRight
          size={18}
          className="transition-transform duration-300 group-hover:translate-x-1"
        />
      </a>
    </div>
  );
}