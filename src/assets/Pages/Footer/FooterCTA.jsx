import FooterSignIn from "./FooterSignIn";

export default function FooterCTA() {
  return (
    <section className="relative w-full py-24">
      <div className="mx-auto w-full max-w-7xl px-6 lg:px-10">
        <div className="grid items-center gap-16 lg:grid-cols-2">

          {/* Left Section */}
          <div className="min-w-0 lg:-ml-12">
            {/* Logo + Brand */}
            <div className="flex items-center gap-3">
              <img
                src="/logo.png"
                alt="DopsAI Logo"
                className="h-10 w-10 shrink-0 object-contain"
              />

              <span className="text-3xl font-semibold text-white">
                DopsAI
              </span>
            </div>

            {/* Heading */}
            <h2 className="mt-6 text-5xl font-semibold leading-tight text-white lg:text-6xl">
              Innovation Intelligence
              <br />
              of Future
            </h2>

            {/* Description */}
            <p className="mt-6 max-w-xl text-lg leading-8 text-zinc-400">
              Build, research and deploy next-generation AI systems with
              cutting-edge models and developer tools.
            </p>
          </div>

          {/* Right Section */}
          <div className="flex min-w-0 justify-center lg:justify-end">
            <FooterSignIn />
          </div>

        </div>
      </div>
    </section>
  );
}