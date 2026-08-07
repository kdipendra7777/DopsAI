import FooterCTA from "./FooterCTA";
const footerLinks = [
  {
    title: "Research",
    links: [
      "AGI Research",
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
];

export default function Footer() {
  return (
    <footer className="border-t border-zinc-800 bg-[#050505] text-white">
      <div className="mx-auto max-w-7xl px-6 py-24">
        {/* Top CTA */}
        <FooterCTA/>

        {/* Footer Links */}
        <div className="mt-20 grid grid-cols-2 gap-x-14 gap-y-14 md:grid-cols-4">
          {footerLinks.map((section) => (
            <div key={section.title}>
              <h3 className="text-sm font-semibold tracking-wide text-white">
                {section.title}
              </h3>

              <div className="mt-3 mb-6 h-px w-10 bg-zinc-700" />

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

        {/* Bottom */}
        <div className="mt-24 border-t border-zinc-800 pt-8">
          <div className="flex flex-col gap-8 lg:flex-row lg:items-center lg:justify-between">
            <p className="text-sm text-zinc-500">
              © {new Date().getFullYear()} DopsAI Technologies. All rights
              reserved.
            </p>

            <div className="flex flex-wrap gap-6 text-sm">
              <a href="#" className="text-zinc-500 hover:text-white">
                Privacy
              </a>

              <a href="#" className="text-zinc-500 hover:text-white">
                Terms
              </a>

              <a href="#" className="text-zinc-500 hover:text-white">
                Responsible AI
              </a>

              <a href="#" className="text-zinc-500 hover:text-white">
                Accessibility
              </a>

              <a href="#" className="text-zinc-500 hover:text-white">
                Security
              </a>

              <a href="#" className="text-zinc-500 hover:text-white">
                Status
              </a>
            </div>

            <div className="flex gap-6 text-sm">
              <a href="#" className="text-zinc-500 hover:text-white">
                GitHub
              </a>

              <a href="#" className="text-zinc-500 hover:text-white">
                X
              </a>

              <a href="#" className="text-zinc-500 hover:text-white">
                LinkedIn
              </a>

              <a href="#" className="text-zinc-500 hover:text-white">
                Discord
              </a>

              <a href="#" className="text-zinc-500 hover:text-white">
                YouTube
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}