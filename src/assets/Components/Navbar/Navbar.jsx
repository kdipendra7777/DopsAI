import { ArrowRight } from "lucide-react";

import NavDropdown from "./NavDropdown";
import ResearchMenu from "./ResearchMenu";
import ModelsMenu from "./ModelsMenu";
import ProductsMenu from "./ProductsMenu";
import BusinessMenu from "./BusinessMenu";
import DeveloperMenu from "./DeveloperMenu";
import CompanyMenu from "./CompanyMenu";

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-[#ececec] bg-[#f7f7f5]/90 backdrop-blur-xl">

      <div className="mx-auto max-w-[1400px]">

        <div className="flex h-[68px] items-center justify-between px-8">

          {/* Left */}
          <div className="flex items-center gap-14">

            {/* Logo */}
            <a
              href="/"
              className="shrink-0 transition-opacity hover:opacity-80"
            >
            <h1 className="select-none font-geist text-[24px] font-semibold tracking-[0.02em] text-[#111827]">
  DopsHGI
</h1>
            </a>

            {/* Navigation */}
            <nav className="hidden lg:flex items-center gap-6">

              <NavDropdown title="Research">
                <ResearchMenu />
              </NavDropdown>

              <NavDropdown title="Models">
                <ModelsMenu />
              </NavDropdown>

              <NavDropdown title="Products">
                <ProductsMenu />
              </NavDropdown>

              <NavDropdown title="Business">
                <BusinessMenu />
              </NavDropdown>

              <NavDropdown title="Developers">
                <DeveloperMenu />
              </NavDropdown>

              <NavDropdown title="Company">
                <CompanyMenu />
              </NavDropdown>

            </nav>

          </div>

          {/* Right */}

          <button className="group flex h-10 items-center gap-2 rounded-full border border-[#111827] bg-[#111827] px-5 text-[13px] font-medium tracking-[-0.01em] text-white transition-all duration-300 hover:bg-black hover:shadow-lg">

            <span>Open roles</span>

            <ArrowRight
              size={15}
              strokeWidth={2}
              className="transition-transform duration-300 group-hover:translate-x-1"
            />

          </button>

        </div>

      </div>

    </header>
  );
}