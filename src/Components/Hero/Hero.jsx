import AnimatedHeroText from "../AnimatedHeroText/AnimatedHeroText";

function Hero() {
  return (
    <section
      id="home"
      className="scroll-mt-24 bg-[#f7f9fc] pb-16 pt-28 lg:min-h-[90dvh] lg:py-24">
      <div className="site-container grid items-center gap-10 lg:grid-cols-[0.9fr_1.1fr]">
        <div className="max-w-2xl">
          <p className="text-sm font-semibold uppercase text-[#7161ef]">
            Web, software, and digital products
          </p>
          <h1 className="mt-5 text-3xl font-bold leading-tight text-slate-950 md:text-4xl">
            We build digital products that move businesses forward.
          </h1>
          <p className="mt-5 max-w-xl text-base leading-relaxed text-slate-600 md:text-lg">
            Websites, SaaS, software, and digital experiences designed around real
            business problems.
          </p>
          <div className="mt-8 flex flex-wrap items-center gap-5">
            <a
              href="#contact"
              className="inline-flex min-h-12 items-center justify-center rounded-md bg-[#7161ef] px-6 py-3 font-semibold text-white transition-colors hover:bg-[#5d4dda]">
              Start a project
            </a>
            <a
              href="#projects"
              className="font-semibold text-[#7161ef] underline decoration-2 underline-offset-4 hover:text-[#5d4dda]">
              View our work
            </a>
          </div>
        </div>

        <div className="relative mx-auto w-full max-w-3xl">
          <img
            src="/macbook.png"
            alt="Website and software preview on a laptop"
            className="mx-auto h-auto w-full object-contain"
            fetchPriority="high"
          />
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-0 flex items-center justify-center overflow-hidden">
            <div className="w-[58%]">
              <AnimatedHeroText />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
