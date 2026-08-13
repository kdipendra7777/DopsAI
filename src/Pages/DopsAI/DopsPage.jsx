import EmergingTalent from "../../Components/DopsHero/EmergingTalent";
import Navbar from "../../Components/Navbar/Navbar";
import Footer from "../Footer/Footer";
import ModelsSection from "../ModelsSection/ModelsSection";
import DopsResearch from "../Research/DopsResearch";

export default function DopsPage() {
  return (
    <>
      {/* ================= MOBILE WARNING ================= */}
    <div className="relative flex min-h-screen items-center justify-center bg-[#050505] px-6 text-center md:hidden">

  {/* Full Screen Dotted Lines */}

  {/* Top */}
  <span className="pointer-events-none absolute left-0 top-10 w-full border-t border-dotted border-white/25" />
   <span className="pointer-events-none absolute left-0 top-20 w-full border-t border-dotted border-white/25" />

  {/* Right */}
  <span className="pointer-events-none absolute right-10 top-0 h-full border-r border-dotted border-white/25" />

  {/* Bottom */}
  <span className="pointer-events-none absolute bottom-10 left-0 w-full border-b border-dotted border-white/25" />

  {/* Left */}
  <span className="pointer-events-none absolute left-10 top-0 h-full border-l border-dotted border-white/25" />

  {/* Content */}
  <div className="relative z-10 w-full max-w-sm px-7 py-10">

    {/* Icon */}
<div className="mx-auto mb-7 flex h-20 w-20 items-center justify-center rounded-2xl border border-white/10 bg-white/[0.04] shadow-[0_0_40px_rgba(255,255,255,0.05)]">
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.5"
    className="h-10 w-10 text-white"
  >
    <rect
      x="3"
      y="4"
      width="18"
      height="13"
      rx="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M8 21h8M12 17v4"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
</div>
    

    <h1 className="mb-5 text-3xl font-semibold leading-tight tracking-tight text-white">
      Please Open on
      <span className="block text-gray-400">
        Laptop or Desktop
      </span>
    </h1>

    

    

  </div>
</div>

      {/* ================= DESKTOP CONTENT ================= */}
      <div className="hidden md:block">
        <EmergingTalent />
        <Navbar />
        <ModelsSection />
        <DopsResearch />
        <Footer />
      </div>
    </>
  );
}