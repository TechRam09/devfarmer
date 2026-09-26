const steps = [
  { title: "Discovery", desc: "We understand your goals and vision." },
  { title: "Planning", desc: "We outline the roadmap and define milestones." },
  { title: "Design", desc: "We craft a sleek, intuitive, and modern experience." },
  { title: "Development", desc: "We build with precision using the latest tech stack." },
  { title: "Launch", desc: "We deploy, test, and ensure everything runs flawlessly." },
];

export default function ProcessSteps() {
  return (
    <section id="process" className="scroll-mt-24 bg-white py-20 md:py-28">
      <div className="site-container">
        <div className="max-w-2xl">
          <p className="text-sm font-semibold uppercase text-emerald-700">
            How we do it
          </p>
          <h2 className="mt-3 text-3xl font-bold text-slate-950 sm:text-4xl">
            A clear path from first conversation to launch
          </h2>
          <p className="mt-4 max-w-xl text-base leading-relaxed text-slate-600">
            Each stage keeps the work focused, visible, and connected to your goals.
          </p>
        </div>

        <ol className="mt-12 grid border-t border-slate-200 md:grid-cols-2 xl:grid-cols-5">
          {steps.map((step, index) => (
            <li key={step.title} className="border-b border-slate-200 py-6 pr-6">
              <p className="text-sm font-semibold text-blue-700">
                {String(index + 1).padStart(2, "0")}
              </p>
              <h3 className="mt-4 text-lg font-semibold text-slate-950">
                {step.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-slate-600">
                {step.desc}
              </p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}