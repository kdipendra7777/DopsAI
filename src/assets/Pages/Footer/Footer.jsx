import FooterCTA from "./FooterCTA";

const footerLinks = [
  {
    title: "Research",
    links: [
      "HGI Research",
      "Publications",
      "Safety",
      "Benchmarks",
      "Models",
      "Alignment",
      "Research Blog",
    ],
  },
  {
    title: "Models",
    links: [
      "Dops-1",
      "Dops-Reasoner",
      "Multimodal",
      "Embeddings",
      "Vision",
      "Speech",
      "API Models",
    ],
  },
  {
    title: "Products",
    links: [
      "Chat",
      "Workspace",
      "API Platform",
      "Enterprise",
      "Education",
      "Mobile App",
      "Pricing",
    ],
  },
  {
    title: "Business",
    links: [
      "Enterprise",
      "Startups",
      "Universities",
      "Government",
      "Healthcare",
      "Partners",
      "Contact Sales",
    ],
  },
  {
    title: "Developers",
    links: [
      "Documentation",
      "API Reference",
      "SDKs",
      "Playground",
      "Changelog",
      "Status",
      "Community",
    ],
  },
  {
    title: "Education",
    links: [
      "AI Academy",
      "Learning Paths",
      "Tutorials",
      "Certifications",
      "Student Program",
      "Research Grants",
      "Educator Resources",
    ],
  },
  {
    title: "Company",
    links: [
      "About",
      "Careers",
      "Newsroom",
      "Blog",
      "Brand Assets",
      "Contact",
      "Security",
    ],
  },
  {
    title: "Legal",
    links: [
      "Privacy Policy",
      "Terms of Use",
      "Cookie Policy",
      "Responsible AI",
      "Acceptable Use Policy",
      "Copyright",
      "Compliance",
    ],
  },
  {
    title: "Datasets",
    links: [
      "Text Datasets",
      "Image Datasets",
      "Audio Datasets",
      "Video Datasets",
      "Multimodal Datasets",
      "Benchmark Datasets",
      "Open Datasets",
    ],
  },
];

export default function Footer() {
  return (
    <footer className="relative w-full overflow-hidden bg-black">

      {/* ============================= */}
      {/* Decorative Dotted Lines */}
      {/* ============================= */}

      {/* Top */}
      <div className="pointer-events-none absolute left-0 right-0 top-8 border-t-2 border-dotted border-zinc-700" />

      <div className="pointer-events-none absolute left-0 right-0 top-30 border-t-2 border-dotted border-zinc-700" />

      <div className="pointer-events-none absolute left-0 right-0 top-170 border-t-2 border-dotted border-zinc-700" />

      {/* Bottom */}
<div className="pointer-events-none absolute bottom-12 left-0 right-0 border-t-2 border-dotted border-zinc-700" />

<div className="pointer-events-none absolute bottom-33 left-0 right-0 border-t-2 border-dotted border-zinc-700" />

      {/* Left */}
    
<div className="pointer-events-none absolute bottom-0 left-12 top-8 border-l-2 border-dotted border-zinc-700" />

      {/* Right */}
     
<div className="pointer-events-none absolute bottom-0 right-12 top-8 border-r-2 border-dotted border-zinc-700" />

      {/* ============================= */}
      {/* Main Footer */}
      {/* ============================= */}

      <div className="relative mx-auto w-full max-w-7xl px-6 py-20 lg:px-10">

        {/* Top CTA */}
        <FooterCTA />

        {/* ============================= */}
        {/* Footer Links */}
        {/* ============================= */}

        <div className="mt-20 grid grid-cols-2 gap-x-14 gap-y-14 md:grid-cols-4">
          {footerLinks.map((section) => (
            <div key={section.title}>

              <h3 className="text-sm font-semibold tracking-wide text-white">
                {section.title}
              </h3>

              <div className="mb-6 mt-3 h-px w-10 bg-zinc-700" />

              <ul className="space-y-3">
                {section.links.map((link) => (
                  <li key={link}>
                    <a
                      href="#"
                      className="group inline-flex items-center text-sm text-zinc-500 transition-all duration-300 hover:translate-x-1 hover:text-white"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* ============================= */}
        {/* Bottom Section */}
        {/* ============================= */}

        <div className="mt-24 border-t border-zinc-800 pt-8">
          <div className="flex flex-col gap-8 lg:flex-row lg:items-center lg:justify-between">

            {/* Copyright */}
            <p className="text-sm text-zinc-500">
              © {new Date().getFullYear()} DopsAI Technologies. All rights
              reserved.
            </p>

            {/* Legal */}
            <div className="flex flex-wrap gap-6 text-sm">
              <a
                href="#"
                className="text-zinc-500 transition-colors hover:text-white"
              >
                Privacy
              </a>

              <a
                href="#"
                className="text-zinc-500 transition-colors hover:text-white"
              >
                Terms
              </a>

              <a
                href="#"
                className="text-zinc-500 transition-colors hover:text-white"
              >
                Responsible AI
              </a>

              <a
                href="#"
                className="text-zinc-500 transition-colors hover:text-white"
              >
                Accessibility
              </a>

              <a
                href="#"
                className="text-zinc-500 transition-colors hover:text-white"
              >
                Security
              </a>

              <a
                href="#"
                className="text-zinc-500 transition-colors hover:text-white"
              >
                Status
              </a>
            </div>

            {/* Social */}
            <div className="flex flex-wrap gap-6 text-sm">
              <a
                href="#"
                className="text-zinc-500 transition-colors hover:text-white"
              >
                GitHub
              </a>

              <a
                href="#"
                className="text-zinc-500 transition-colors hover:text-white"
              >
                X
              </a>

              <a
                href="#"
                className="text-zinc-500 transition-colors hover:text-white"
              >
                LinkedIn
              </a>

              <a
                href="#"
                className="text-zinc-500 transition-colors hover:text-white"
              >
                Discord
              </a>

              <a
                href="#"
                className="text-zinc-500 transition-colors hover:text-white"
              >
                YouTube
              </a>
            </div>

          </div>
        </div>

      </div>
    </footer>
  );
}