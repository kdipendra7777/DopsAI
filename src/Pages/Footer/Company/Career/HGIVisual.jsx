import { motion } from "framer-motion";

export default function HGIVisual() {
  const nodes = [
    { left: "18%", delay: 0 },
    { left: "34%", delay: 0.4 },
    { left: "50%", delay: 0.8 },
    { left: "66%", delay: 1.2 },
    { left: "82%", delay: 1.6 },
  ];

  return (
    <div className="relative mx-auto h-44 w-full max-w-4xl overflow-hidden">

      {/* Ambient Glow */}
      <motion.div
        className="absolute left-1/2 top-1/2 h-32 w-32 -translate-x-1/2 -translate-y-1/2 rounded-full bg-white/[0.04] blur-3xl"
        animate={{
          scale: [1, 1.35, 1],
          opacity: [0.3, 0.7, 0.3],
        }}
        transition={{
          duration: 3,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      {/* Main Signal */}
      <div className="absolute left-[18%] right-[18%] top-1/2 h-px -translate-y-1/2 bg-zinc-800" />

      {/* Animated Signal Beam */}
      <motion.div
        className="absolute left-[18%] top-1/2 h-px w-[20%] -translate-y-1/2 bg-gradient-to-r from-transparent via-white to-transparent"
        animate={{
          x: ["0%", "320%"],
          opacity: [0, 1, 0],
        }}
        transition={{
          duration: 2.5,
          repeat: Infinity,
          ease: "linear",
        }}
      />

      <motion.div
        className="absolute right-[18%] top-1/2 h-px w-[20%] -translate-y-1/2 bg-gradient-to-r from-transparent via-white to-transparent"
        animate={{
          x: ["0%", "-320%"],
          opacity: [0, 1, 0],
        }}
        transition={{
          duration: 2.5,
          repeat: Infinity,
          delay: 1.2,
          ease: "linear",
        }}
      />

      {/* Nodes */}
      {nodes.map((node, index) => (
        <motion.div
          key={index}
          className="absolute top-1/2 h-2 w-2 -translate-x-1/2 -translate-y-1/2 rounded-full bg-zinc-600"
          style={{ left: node.left }}
          animate={{
            scale: [1, 1.8, 1],
            opacity: [0.35, 1, 0.35],
            boxShadow: [
              "0 0 0px rgba(255,255,255,0)",
              "0 0 14px rgba(255,255,255,0.6)",
              "0 0 0px rgba(255,255,255,0)",
            ],
          }}
          transition={{
            duration: 2,
            delay: node.delay,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      ))}

      {/* Central Intelligence Core */}
      <motion.div
        className="absolute left-1/2 top-1/2 flex h-20 w-20 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border border-zinc-600 bg-black"
        animate={{
          scale: [1, 1.06, 1],
          borderColor: [
            "rgba(82,82,91,1)",
            "rgba(255,255,255,0.7)",
            "rgba(82,82,91,1)",
          ],
          boxShadow: [
            "0 0 0px rgba(255,255,255,0)",
            "0 0 35px rgba(255,255,255,0.12)",
            "0 0 0px rgba(255,255,255,0)",
          ],
        }}
        transition={{
          duration: 2.5,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      >
        {/* Inner Core */}
        <motion.div
          className="h-3 w-3 rounded-full bg-white"
          animate={{
            scale: [1, 1.5, 1],
            opacity: [0.7, 1, 0.7],
            boxShadow: [
              "0 0 4px rgba(255,255,255,0.3)",
              "0 0 18px rgba(255,255,255,0.9)",
              "0 0 4px rgba(255,255,255,0.3)",
            ],
          }}
          transition={{
            duration: 1.8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />

        {/* Core Ring */}
        <motion.div
          className="absolute inset-2 rounded-full border border-dotted border-zinc-700"
          animate={{ rotate: 360 }}
          transition={{
            duration: 12,
            repeat: Infinity,
            ease: "linear",
          }}
        />
      </motion.div>

      {/* Learning Label */}
      <motion.span
        className="absolute left-[10%] top-3 text-[9px] uppercase tracking-[0.22em] text-zinc-600"
        animate={{
          color: ["#52525b", "#a1a1aa", "#52525b"],
        }}
        transition={{
          duration: 3,
          repeat: Infinity,
          delay: 0,
        }}
      >
        Learning
      </motion.span>

      {/* Reasoning Label */}
      <motion.span
        className="absolute right-[10%] top-3 text-[9px] uppercase tracking-[0.22em] text-zinc-600"
        animate={{
          color: ["#52525b", "#a1a1aa", "#52525b"],
        }}
        transition={{
          duration: 3,
          repeat: Infinity,
          delay: 1,
        }}
      >
        Reasoning
      </motion.span>

      {/* Memory Label */}
      <motion.span
        className="absolute bottom-3 left-[32%] text-[9px] uppercase tracking-[0.22em] text-zinc-600"
        animate={{
          color: ["#52525b", "#a1a1aa", "#52525b"],
        }}
        transition={{
          duration: 3,
          repeat: Infinity,
          delay: 0.6,
        }}
      >
        Memory
      </motion.span>

      {/* Adaptation Label */}
      <motion.span
        className="absolute bottom-3 right-[30%] text-[9px] uppercase tracking-[0.22em] text-zinc-600"
        animate={{
          color: ["#52525b", "#a1a1aa", "#52525b"],
        }}
        transition={{
          duration: 3,
          repeat: Infinity,
          delay: 1.6,
        }}
      >
        Adaptation
      </motion.span>

    </div>
  );
}