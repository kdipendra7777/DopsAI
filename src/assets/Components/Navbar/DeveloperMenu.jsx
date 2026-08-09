import { ArrowRight } from "lucide-react";

const items = [
  { title: "Dops API" },
  { title: "SDKs & Libraries" },
  { title: "Documentation" },
  { title: "Playground" },
];

export default function DeveloperMenu() {
  return (
    <div className="grid w-[820px] grid-cols-12 overflow-hidden rounded-2xl bg-white">

      <div className="col-span-4 border-r border-[#ececec]">
        <img
          src="/images/NavImage/developers.png"
          alt="Developer"
          className="h-full w-full object-cover"
        />
      </div>

      <div className="col-span-8 px-8 py-6">

        <p className="text-[10px] uppercase tracking-[0.25em] text-[#8b8b8b]">
          Developers
        </p>

        <h2 className="mt-2 text-[28px] leading-tight font-medium tracking-[-0.03em] text-[#111827]">
          Build intelligent
          <br />
          HGI applications
        </h2>

        

        <div className="mt-6 divide-y divide-[#ececec]">

          {items.map((item) => (
            <button
              key={item.title}
              className="group flex w-full items-center justify-between py-5 hover:pl-3 transition-all"
            >
              <h3 className="text-[15px] font-medium text-[#111827]">
                {item.title}
              </h3>

              <ArrowRight
                size={17}
                className="translate-x-5 opacity-0 text-[#6b7280] transition-all duration-300 group-hover:translate-x-0 group-hover:opacity-100"
              />
            </button>
          ))}

        </div>

      </div>

    </div>
  );
}