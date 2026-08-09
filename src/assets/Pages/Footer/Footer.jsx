import { Link } from "react-router-dom";
import FooterCTA from "./FooterCTA";

const footerLinks = [
  {
    title: "Research",
    links: [
      { name: "HGI Research", path: "/research" },
      { name: "Publications", path: "/publications" },
      { name: "Safety", path: "/safety" },
      { name: "Benchmarks", path: "/benchmarks" },
      { name: "Models", path: "/models" },
      { name: "Alignment", path: "/alignment" },
      { name: "Research Blog", path: "/research/blog" },
    ],
  },

  {
    title: "Models",
    links: [
      { name: "Dops-1", path: "/models/dops-1" },
      { name: "Dops-Reasoner", path: "/models/dops-reasoner" },
      { name: "Multimodal", path: "/models/multimodal" },
      { name: "Embeddings", path: "/models/embeddings" },
      { name: "Vision", path: "/models/vision" },
      { name: "Speech", path: "/models/speech" },
      { name: "API Models", path: "/models/api" },
    ],
  },

  {
    title: "Products",
    links: [
      { name: "Chat", path: "/products/chat" },
      { name: "Workspace", path: "/products/workspace" },
      { name: "API Platform", path: "/products/api" },
      { name: "Enterprise", path: "/enterprise" },
      { name: "Education", path: "/education" },
      { name: "Mobile App", path: "/products/mobile" },
      { name: "Pricing", path: "/pricing" },
    ],
  },

  {
    title: "Business",
    links: [
      { name: "Enterprise", path: "/enterprise" },
      { name: "Startups", path: "/business/startups" },
      { name: "Universities", path: "/business/universities" },
      { name: "Government", path: "/business/government" },
      { name: "Healthcare", path: "/business/healthcare" },
      { name: "Partners", path: "/partners" },
      { name: "Contact Sales", path: "/contact-sales" },
    ],
  },

  {
    title: "Developers",
    links: [
      { name: "Documentation", path: "/developers/docs" },
      { name: "API Reference", path: "/developers/api-reference" },
      { name: "SDKs", path: "/developers/sdks" },
      { name: "Playground", path: "/developers/playground" },
      { name: "Changelog", path: "/developers/changelog" },
      { name: "Status", path: "/status" },
      { name: "Community", path: "/community" },
    ],
  },

  {
    title: "Education",
    links: [
      { name: "AI Academy", path: "/education/academy" },
      { name: "Learning Paths", path: "/education/learning-paths" },
      { name: "Tutorials", path: "/education/tutorials" },
      { name: "Certifications", path: "/education/certifications" },
      { name: "Student Program", path: "/education/students" },
      { name: "Research Grants", path: "/education/grants" },
      { name: "Educator Resources", path: "/education/educators" },
    ],
  },

  {
    title: "Company",
    links: [
      { name: "About", path: "/about" },
      { name: "Careers", path: "/careers" },
      { name: "Newsroom", path: "/newsroom" },
      { name: "Blog", path: "/blog" },
      { name: "Brand Assets", path: "/brand" },
      { name: "Contact", path: "/contact" },
      { name: "Security", path: "/security" },
    ],
  },

  {
    title: "Legal",
    links: [
      { name: "Privacy Policy", path: "/legal/privacy" },
      { name: "Terms of Use", path: "/legal/terms" },
      { name: "Cookie Policy", path: "/legal/cookies" },
      { name: "Responsible AI", path: "/legal/responsible-ai" },
      { name: "Acceptable Use Policy", path: "/legal/acceptable-use" },
      { name: "Copyright", path: "/legal/copyright" },
      { name: "Compliance", path: "/legal/compliance" },
    ],
  },

  {
    title: "Datasets",
    links: [
      { name: "Text Datasets", path: "/datasets/text" },
      { name: "Image Datasets", path: "/datasets/image" },
      { name: "Audio Datasets", path: "/datasets/audio" },
      { name: "Video Datasets", path: "/datasets/video" },
      { name: "Multimodal Datasets", path: "/datasets/multimodal" },
      { name: "Benchmark Datasets", path: "/datasets/benchmarks" },
      { name: "Open Datasets", path: "/datasets/open" },
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

      {/* Top CTA Separator */}
      <div className="pointer-events-none absolute left-0 right-0 top-30 border-t-2 border-dotted border-zinc-700" />

      {/* Footer Links Separator */}
      <div className="pointer-events-none absolute left-0 right-0 top-170 border-t-2 border-dotted border-zinc-700" />

      {/* Bottom */}
      <div className="pointer-events-none absolute bottom-8 left-0 right-0 border-t-2 border-dotted border-zinc-700" />

      <div className="pointer-events-none absolute bottom-33 left-0 right-0 border-t-2 border-dotted border-zinc-700" />

      {/* Left */}
      <div className="pointer-events-none absolute bottom-8 left-8 top-8 border-l-2 border-dotted border-zinc-700" />

      {/* Right */}
      <div className="pointer-events-none absolute bottom-8 right-8 top-8 border-r-2 border-dotted border-zinc-700" />

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
                  <li key={link.name}>
                    <Link
                      to={link.path}
                      className="group inline-flex items-center text-sm text-zinc-500 transition-all duration-300 hover:translate-x-1 hover:text-white"
                    >
                      {link.name}
                    </Link>
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

              <Link
                to="/legal/privacy"
                className="text-zinc-500 transition-colors hover:text-white"
              >
                Privacy
              </Link>

              <Link
                to="/legal/terms"
                className="text-zinc-500 transition-colors hover:text-white"
              >
                Terms
              </Link>

              <Link
                to="/legal/responsible-ai"
                className="text-zinc-500 transition-colors hover:text-white"
              >
                Responsible AI
              </Link>

              <Link
                to="/accessibility"
                className="text-zinc-500 transition-colors hover:text-white"
              >
                Accessibility
              </Link>

              <Link
                to="/security"
                className="text-zinc-500 transition-colors hover:text-white"
              >
                Security
              </Link>

              <Link
                to="/status"
                className="text-zinc-500 transition-colors hover:text-white"
              >
                Status
              </Link>

            </div>

            {/* Social */}
            <div className="flex flex-wrap gap-6 text-sm">

              <a
                href="https://github.com"
                target="_blank"
                rel="noreferrer"
                className="text-zinc-500 transition-colors hover:text-white"
              >
                GitHub
              </a>

              <a
                href="https://x.com"
                target="_blank"
                rel="noreferrer"
                className="text-zinc-500 transition-colors hover:text-white"
              >
                X
              </a>

              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noreferrer"
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