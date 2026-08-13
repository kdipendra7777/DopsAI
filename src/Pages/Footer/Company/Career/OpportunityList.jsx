import { AnimatePresence, motion } from "framer-motion";
import { Link } from "react-router-dom";

export default function OpportunityList({ isOpen }) {
  const opportunities = [
    {
      name: "AI Research",
      path: "/careers/ai-research",
    },
    // {
    //   name: "Research Engineering",
    //   path: "/careers/research-engineering",
    // },
    // {
    //   name: "Neuroscientist",
    //   path: "/careers/Neuroscientist",
    // },
    // {
    //   name: "Neuropsychologist",
    //   path: "/careers/Neuropsychologist",
    // },
    
    // {
    //   name: "Cognitive Scientist",
    //   path: "/careers/cognitive-scientist",
    // },
    // {
    //   name: "Psychologist",
    //   path: "/careers/psychologist",
    // },
  ];

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{
            opacity: 0,
            y: 20,
            scale: 0.96,
          }}
          animate={{
            opacity: 1,
            y: 0,
            scale: 1,
          }}
          exit={{
            opacity: 0,
            y: 20,
            scale: 0.96,
          }}
          transition={{
            duration: 0.25,
            ease: "easeOut",
          }}
          className="absolute bottom-full -right-10 mb-4 w-64"
        >
          {/* Header */}
          <div className="mb-3 px-3">
            <p className="text-[10px] font-medium uppercase tracking-[0.2em] text-zinc-500">
              Open Opportunities
            </p>
          </div>

          {/* Opportunities */}
          <div className="space-y-1">
            {opportunities.map((opportunity, index) => (
              <motion.div
                key={opportunity.name}
                initial={{
                  opacity: 0,
                  x: -8,
                }}
                animate={{
                  opacity: 1,
                  x: 0,
                }}
                transition={{
                  delay: index * 0.04,
                  duration: 0.2,
                }}
              >
                <Link
                  to={opportunity.path}
                  className="group flex items-center gap-3 px-3 py-2.5 text-sm text-zinc-500 transition-all duration-200 hover:text-white"
                >
                  {/* Bullet */}
                  <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-zinc-600 transition-all duration-200 group-hover:bg-white" />

                  {/* Opportunity */}
                  <span>{opportunity.name}</span>

                  {/* Arrow */}
                  <span className="ml-auto translate-x-[-4px] opacity-0 transition-all duration-200 group-hover:translate-x-0 group-hover:opacity-100">
                    →
                  </span>
                </Link>
              </motion.div>
            ))}
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}