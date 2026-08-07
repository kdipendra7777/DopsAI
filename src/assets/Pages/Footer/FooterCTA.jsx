import FooterSignIn from "./FooterSignIn";

export default function FooterCTA() {
  return (
    <section className="border-b border-zinc-800 pb-20">
      <div className="grid items-center gap-16 lg:grid-cols-2">
        {/* Left */}
        <div>
          <div className="flex items-center gap-3">
            <img
              src="/logo.png"
              alt="DopsAI Logo"
              className="h-10 w-10 object-contain"
            />

            <span className="text-3xl font-semibold text-white">
              DopsAI
            </span>
          </div>
<h2 className="mt-6 whitespace-nowrap text-5xl font-semibold leading-tight text-white lg:text-6xl">
  Innovation Intelligence
  <br />
  of Future
</h2>

          <p className="mt-6 max-w-xl text-lg leading-8 text-zinc-400">
            Build, research and deploy next-generation AI systems with
            cutting-edge models and developer tools.
          </p>
        </div>

        {/* Right */}
        <div className="flex justify-center lg:justify-end">

          <FooterSignIn/>
        
        </div>
      </div>
    </section>
  );
}