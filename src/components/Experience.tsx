import { experiences } from '../data/portfolioData';

export const Experience = () => {
  return (
    <section id="experience" class="py-24 px-6 max-w-5xl mx-auto relative z-10">
      <div class="mb-16">
        <span class="text-xs font-mono tracking-[0.4em] text-[#00f5ff] uppercase opacity-80 block mb-2">
          // CAREER PATH
        </span>
        <h2 class="text-3xl sm:text-4xl font-extrabold text-white relative inline-block title-underline pb-2">
          Work Experience
        </h2>
      </div>

      <div class="relative border-l-2 border-[#00f5ff]/20 ml-4 sm:ml-8 pl-6 sm:pl-10 space-y-12">
        {experiences.map((exp) => (
          <div class="relative group">
            {/* Timeline Pulsing Node */}
            <div class="absolute -left-[31px] sm:-left-[47px] top-1.5 w-4 h-4 rounded-full bg-[#050a14] border-2 border-[#00f5ff] shadow-[0_0_10px_#00f5ff] group-hover:scale-125 group-hover:bg-[#00f5ff] transition-all duration-300">
              <div class="w-full h-full rounded-full bg-[#00f5ff] animate-ping opacity-75" />
            </div>

            {/* 3D Glass Experience Card */}
            <div class="card-3d p-6 sm:p-8">
              <div class="flex flex-wrap items-center justify-between gap-2 mb-4">
                <div>
                  <h3 class="text-xl sm:text-2xl font-bold text-white group-hover:text-[#00f5ff] transition-colors">
                    {exp.role}
                  </h3>
                  <div class="flex items-center gap-2 mt-1">
                    <span class="font-mono text-sm font-semibold text-[#ff9f0a]">
                      {exp.company}
                    </span>
                    <span class="text-slate-500 text-xs">•</span>
                    <span class="text-slate-400 text-xs">{exp.location}</span>
                  </div>
                </div>

                <span class="px-3 py-1 rounded-full text-xs font-mono bg-[#00f5ff]/10 border border-[#00f5ff]/30 text-[#00f5ff]">
                  {exp.period}
                </span>
              </div>

              {/* Bullet Points */}
              <ul class="space-y-2.5 mb-6 text-slate-300 text-sm leading-relaxed">
                {exp.description.map((bullet) => (
                  <li class="flex items-start gap-2.5">
                    <span class="text-[#00f5ff] font-bold text-sm shrink-0">▸</span>
                    <span>{bullet}</span>
                  </li>
                ))}
              </ul>

              {/* Technologies Used */}
              <div class="flex flex-wrap gap-2 pt-4 border-t border-[#00f5ff]/10">
                {exp.technologies.map((tech) => (
                  <span class="text-[11px] font-mono px-2.5 py-1 rounded bg-[#0a1428] text-slate-300 border border-[#00f5ff]/20">
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
