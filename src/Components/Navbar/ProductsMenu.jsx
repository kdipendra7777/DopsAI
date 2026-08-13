import { ArrowRight } from "lucide-react";

const items = [
  { title: "ChatHGI" },
  { title: "Dops API" },
  { title: "Developer Platform" },
  { title: "Enterprise Solutions" },
];

export default function ProductsMenu() {
  return (
    <div className="grid w-[820px] grid-cols-12 overflow-hidden rounded-2xl bg-white">

      {/* Left */}
      <div className="col-span-4 border-r border-[#ececec]">
        <img
          src="/images/NavImage/product.png"
          alt="Products"
          className="h-full w-full object-cover"
        />
      </div>

      {/* Right */}
      <div className="col-span-8 px-8 py-6">

        <p className="text-[10px] uppercase tracking-[0.25em] text-[#8b8b8b]">
          Products
        </p>

        <h2 className="mt-2 text-[28px] leading-tight font-medium tracking-[-0.03em] text-[#111827]">
          HGI products built
          <br />
          for every workflow
        </h2>

    

        <div className="mt-6 divide-y divide-[#ececec]">

          {items.map((item) => (
            <button
              key={item.title}
              className="group flex w-full items-center justify-between py-5 transition-all duration-300 hover:pl-3"
            >

              <h3 className="text-[15px] font-medium text-[#111827] transition-colors duration-300 group-hover:text-black">
                {item.title}
              </h3>

              <div className="flex w-8 justify-end overflow-hidden">
                <ArrowRight
                  size={17}
                  className="translate-x-5 opacity-0 text-[#6b7280] transition-all duration-300 group-hover:translate-x-0 group-hover:opacity-100"
                />
              </div>

            </button>
          ))}

        </div>

      </div>

    </div>
  );
}