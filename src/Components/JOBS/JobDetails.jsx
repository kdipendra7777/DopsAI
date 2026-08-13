import { Link } from "react-router-dom";

export default function JobDetails() {
  const responsibilities = [
    "Research new approaches to learning, reasoning, memory, and adaptation.",
    "Design, implement, and evaluate experiments across large-scale intelligent systems.",
    "Develop and investigate novel architectures for Human General Intelligence.",
    "Work closely with researchers and engineers to turn ideas into working systems.",
    "Communicate research findings through technical reports, experiments, and publications.",
  ];

  const requirements = [
    "Strong foundations in machine learning, deep learning, or related fields.",
    "Experience building, training, or evaluating modern AI systems.",
    "Strong Python and PyTorch experience.",
    "Ability to independently formulate research questions and investigate them rigorously.",
    "Strong mathematical and analytical thinking.",
  ];

  const niceToHave = [
    "Continual learning",
    "Reinforcement learning",
    "World models",
    "Multimodal learning",
    "Cognitive science",
    "Neuroscience",
    "AI safety and interpretability",
  ];

  const technologies = [
    "Python",
    "PyTorch",
    "Transformers",
    "CUDA",
    "Distributed Systems",
  ];

  return (
    <section className="relative min-h-screen overflow-hidden bg-black text-white">

      {/* ========================================= */}
      {/* Decorative Grid */}
      {/* ========================================= */}

      <div className="pointer-events-none absolute left-0 right-0 top-8 border-t border-dotted border-zinc-500" />

       <div className="pointer-events-none absolute left-0 right-0 top-20 border-t border-dotted border-zinc-500" />

      <div className="pointer-events-none absolute bottom-8 left-0 right-0 border-t border-dotted border-zinc-500" />

        <div className="pointer-events-none absolute bottom-110 left-0 right-0 border-t border-dotted border-zinc-500" />

      <div className="pointer-events-none absolute bottom-8 left-30 top-8 border-l border-dotted border-zinc-500" />

      <div className="pointer-events-none absolute bottom-8 right-30 top-8 border-r border-dotted border-zinc-500" />

      {/* ========================================= */}
      {/* Main */}
      {/* ========================================= */}

      <div className="relative mx-auto max-w-7xl px-6 pb-24 pt-24 sm:px-8 lg:px-12 lg:pt-32">

        {/* ========================================= */}
        {/* Breadcrumb */}
        {/* ========================================= */}

        <div className="mb-16 flex items-center gap-3 text-[10px] font-medium uppercase tracking-[0.25em] text-zinc-600">
          <Link
            to="/careers"
            className="transition-colors duration-300 hover:text-white"
          >
            Careers
          </Link>

          <span className="text-zinc-800">/</span>

          <span>AI Research</span>
        </div>

        {/* ========================================= */}
        {/* Hero */}
        {/* ========================================= */}

        <div className="border-b border-zinc-900 pb-20">

          <div className="grid gap-14 lg:grid-cols-[1fr_280px] lg:items-end">

            {/* Hero Content */}
            <div>

              <div className="mb-7 flex items-center gap-3">
                <span className="h-px w-8 bg-zinc-700" />

               
              </div>

              <h1 className="max-w-5xl text-5xl font-semibold leading-[0.92] tracking-[-0.065em] sm:text-7xl lg:text-[96px]">
                AI Research
                <br />
                <span className="text-zinc-600">
                  Scientist
                </span>
              </h1>

              <p className="mt-10 max-w-2xl text-base leading-8 text-zinc-400 sm:text-lg">
                Help us advance Human General Intelligence by developing
                systems that learn, reason, remember, adapt, and understand
                across complex environments.
              </p>

            </div>

            {/* Apply */}
            <div className="lg:flex lg:justify-end">

              <Link
                to="/careers/apply/ai-research"
                className="group inline-flex h-12 items-center gap-4 border border-zinc-700 bg-white px-7 text-sm font-medium text-black transition-all duration-300 hover:bg-zinc-200"
              >
                Apply for this role

                <span className="transition-transform duration-300 group-hover:translate-x-1">
                  →
                </span>
              </Link>

            </div>

          </div>

          {/* ========================================= */}
          {/* Job Meta */}
          {/* ========================================= */}

          <div className="mt-20 grid border-t border-zinc-900 pt-8 sm:grid-cols-2 lg:grid-cols-4">

            <div className="border-b border-zinc-900 py-5 sm:border-r sm:pr-8 lg:border-b-0">
              <p className="text-[9px] uppercase tracking-[0.25em] text-zinc-600">
                Employment
              </p>

              <p className="mt-3 text-sm text-zinc-300">
                Full-time
              </p>
            </div>

            <div className="border-b border-zinc-900 py-5 sm:pl-8 lg:border-b-0 lg:border-r lg:pl-8">
              <p className="text-[9px] uppercase tracking-[0.25em] text-zinc-600">
                Location
              </p>

              <p className="mt-3 text-sm text-zinc-300">
                Bengaluru / Remote
              </p>
            </div>

            <div className="border-b border-zinc-900 py-5 sm:border-r sm:pl-8 lg:border-b-0">
              <p className="text-[9px] uppercase tracking-[0.25em] text-zinc-600">
                Team
              </p>

              <p className="mt-3 text-sm text-zinc-300">
                HGI Research
              </p>
            </div>

            <div className="py-5 sm:pl-8">
              <p className="text-[9px] uppercase tracking-[0.25em] text-zinc-600">
                Experience
              </p>

              <p className="mt-3 text-sm text-zinc-300">
                2+ years
              </p>
            </div>

          </div>
        </div>

        {/* ========================================= */}
        {/* Body */}
        {/* ========================================= */}

        <div className="grid gap-20 py-24 lg:grid-cols-[minmax(0,1fr)_280px] lg:gap-28">

          {/* ========================================= */}
          {/* Main Content */}
          {/* ========================================= */}

          <main className="max-w-3xl space-y-20">

            {/* About */}
            <section>

              <p className="mb-4 text-[10px] font-medium uppercase tracking-[0.25em] text-zinc-600">
                01
              </p>

              <h2 className="text-3xl font-semibold tracking-[-0.04em]">
                About the role
              </h2>

              <div className="mt-7 space-y-5 text-[15px] leading-8 text-zinc-400">

                <p>
                  You will work at the intersection of machine learning,
                  cognitive science, and intelligent systems. Your work will
                  contribute directly to our effort to develop models that move
                  beyond narrow pattern recognition toward more general forms
                  of intelligence.
                </p>

                <p>
                  You will have the freedom to explore ambitious research
                  questions, design experiments, build prototypes, and work
                  alongside researchers and engineers across the organization.
                </p>

              </div>

            </section>

            {/* Responsibilities */}
            <section>

              <p className="mb-4 text-[10px] font-medium uppercase tracking-[0.25em] text-zinc-600">
                02
              </p>

              <h2 className="text-3xl font-semibold tracking-[-0.04em]">
                What you'll do
              </h2>

              <div className="mt-8 space-y-5">

                {responsibilities.map((item) => (
                  <div
                    key={item}
                    className="group flex gap-4 text-[15px] leading-7 text-zinc-400"
                  >
                    <span className="mt-3 h-1.5 w-1.5 shrink-0 rounded-full bg-zinc-700 transition-colors duration-300 group-hover:bg-white" />

                    <p className="transition-colors duration-300 group-hover:text-zinc-300">
                      {item}
                    </p>
                  </div>
                ))}

              </div>

            </section>

            {/* Requirements */}
            <section>

              <p className="mb-4 text-[10px] font-medium uppercase tracking-[0.25em] text-zinc-600">
                03
              </p>

              <h2 className="text-3xl font-semibold tracking-[-0.04em]">
                What we're looking for
              </h2>

              <div className="mt-8 space-y-5">

                {requirements.map((item) => (
                  <div
                    key={item}
                    className="group flex gap-4 text-[15px] leading-7 text-zinc-400"
                  >
                    <span className="mt-3 h-1.5 w-1.5 shrink-0 rounded-full bg-zinc-700 transition-colors duration-300 group-hover:bg-white" />

                    <p className="transition-colors duration-300 group-hover:text-zinc-300">
                      {item}
                    </p>
                  </div>
                ))}

              </div>

            </section>

            {/* Nice to Have */}
            <section>

              <p className="mb-4 text-[10px] font-medium uppercase tracking-[0.25em] text-zinc-600">
                04
              </p>

              <h2 className="text-3xl font-semibold tracking-[-0.04em]">
                Nice to have
              </h2>

              <div className="mt-8 grid gap-x-8 gap-y-4 sm:grid-cols-2">

                {niceToHave.map((item) => (
                  <div
                    key={item}
                    className="flex items-center gap-3 text-sm text-zinc-400"
                  >
                    <span className="h-1 w-1 rounded-full bg-zinc-700" />

                    {item}
                  </div>
                ))}

              </div>

            </section>

          </main>

          {/* ========================================= */}
          {/* Sidebar */}
          {/* ========================================= */}

          <aside className="lg:pt-2">

            <div className="sticky top-10 space-y-12">

              {/* Technologies */}
              <div>

                <p className="text-[9px] font-medium uppercase tracking-[0.25em] text-zinc-600">
                  Technologies
                </p>

                <div className="mt-5 flex flex-wrap gap-2">

                  {technologies.map((tech) => (
                    <span
                      key={tech}
                      className="border border-zinc-800 px-3 py-2 text-[11px] text-zinc-400 transition-colors duration-300 hover:border-zinc-600 hover:text-white"
                    >
                      {tech}
                    </span>
                  ))}

                </div>

              </div>

              {/* Department */}
              <div className="border-t border-zinc-900 pt-7">

                <p className="text-[9px] font-medium uppercase tracking-[0.25em] text-zinc-600">
                  Department
                </p>

                <p className="mt-3 text-sm text-zinc-300">
                  HGI Research
                </p>

              </div>

              {/* Location */}
              <div className="border-t border-zinc-900 pt-7">

                <p className="text-[9px] font-medium uppercase tracking-[0.25em] text-zinc-600">
                  Location
                </p>

                <p className="mt-3 text-sm text-zinc-300">
                  Bengaluru / Remote
                </p>

              </div>

              {/* Work Type */}
              <div className="border-t border-zinc-900 pt-7">

                <p className="text-[9px] font-medium uppercase tracking-[0.25em] text-zinc-600">
                  Work Type
                </p>

                <p className="mt-3 text-sm text-zinc-300">
                  Research · Full-time
                </p>

              </div>

            </div>

          </aside>

        </div>

        {/* ========================================= */}
        {/* Final CTA */}
        {/* ========================================= */}

        <section className="relative overflow-hidden border-t border-zinc-900 py-24">

          {/* subtle glow */}
          <div className="pointer-events-none absolute left-1/2 top-1/2 h-72 w-72 -translate-x-1/2 -translate-y-1/2 rounded-full bg-white/[0.025] blur-3xl" />

          <div className="relative flex flex-col gap-8 sm:flex-row sm:items-end sm:justify-between">

            <div>

              <p className="mb-4 text-[10px] font-medium uppercase tracking-[0.25em] text-zinc-600">
                Your next challenge
              </p>

              <h2 className="max-w-xl text-4xl font-semibold leading-tight tracking-[-0.05em] sm:text-5xl">
                Help us build intelligence
                <span className="text-zinc-600">
                  {" "}closer to human capability.
                </span>
              </h2>

            </div>

            <Link
              to="/careers/apply/ai-research"
              className="group inline-flex h-12 shrink-0 items-center gap-4 border border-zinc-700 bg-white px-7 text-sm font-medium text-black transition-all duration-300 hover:bg-zinc-200"
            >
              Apply now

              <span className="transition-transform duration-300 group-hover:translate-x-1">
                →
              </span>
            </Link>

          </div>

        </section>

      </div>
    </section>
  );
}