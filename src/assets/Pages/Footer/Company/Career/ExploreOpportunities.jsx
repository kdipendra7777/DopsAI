import { motion } from "framer-motion";
import { useState } from "react";
import OpportunityList from "./OpportunityList";

export default function ExploreOpportunities() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div
      className="absolute bottom-30 right-11"
      onMouseEnter={() => setIsOpen(true)}
      onMouseLeave={() => setIsOpen(false)}
    >
      {/* Opportunity List */}
      <OpportunityList isOpen={isOpen} />

      {/* Check Here */}
      <motion.div
        animate={{
          y: [0, -5, 0],
          opacity: [0.5, 1, 0.5],
        }}
        transition={{
          duration: 1.4,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="mb-3 flex flex-col items-center text-white"
      >
        <span className="mb-1 text-[9px] font-medium uppercase tracking-[0.25em] text-zinc-500">
          Check Here
        </span>
      </motion.div>

      {/* Main Button */}
      <motion.a
        href="#open-positions"
        whileHover={{
          scale: 1.02,
        }}
        whileTap={{
          scale: 0.98,
        }}
        className="inline-flex h-12 items-center justify-center rounded-md border border-zinc-700 bg-black px-8 text-sm font-medium text-white transition-colors duration-300 hover:border-zinc-500 hover:bg-zinc-900"
      >
        Explore Opportunities
      </motion.a>
    </div>
  );
}