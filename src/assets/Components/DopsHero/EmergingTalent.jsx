import TalentShowcase from "./TalentShowcase.jsx";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

export default function EmergingTalent() {
  return (
    <section className="w-full min-h-screen bg-[#f7f7f5]">
      <div className="max-w-[1400px] mx-auto border-l border-r border-[#e5e5e5] min-h-screen flex flex-col">


        {/* *****************************NOTIFICATION START********************************* */}

<div className="w-full max-w-full overflow-hidden bg-black text-zinc-300">
  <Link
    to="/careers"
    className="block w-full max-w-full cursor-pointer overflow-hidden"
  >
    <motion.p
      className="w-max  font-light whitespace-nowrap text-zinc-300"
      animate={{
        x: ["100vw", "-100%"],
      }}
      transition={{
        duration: 30,
        repeat: Infinity,
        ease: "linear",
      }}
    >
      We’re hiring — Join DopsHGI and work at the frontier of Human General Intelligence. We’re looking for exceptional researchers, engineers, and builders to help create systems that learn, reason, remember, adapt, and understand—bringing artificial intelligence closer to the fundamental capabilities of human intelligence.
    </motion.p>
  </Link>
</div>

{/* *****************************NOTIFICATION END********************************* */}


        {/* Top Section */}
        <div className="grid grid-cols-12 border-b border-[#e5e5e5] min-h-[240px]">
          <div className="col-span-12 lg:col-span-7 flex items-center px-12 py-16">

            <div>
              <h2 className="text-[48px] leading-[0.95] font-medium tracking-tight text-[#0f172a]">
                Imagine future
              </h2>

              <h3 className="text-[38px] leading-[1] font-normal text-[#6b7a99] mt-3 whitespace-nowrap">
                with Human General Intelligence
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
              Advancing Human General Intelligence by developing systems
              capable of learning, reasoning, remembering, adapting, and understanding
              with increasing human-like efficiency. Our mission is to move beyond
              data-intensive approaches to AI and advance toward the fundamental
              principles and capabilities that underpin human intelligence.

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