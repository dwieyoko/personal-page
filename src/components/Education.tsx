import { educations } from '../data/portfolioData';

export const Education = () => {
  return (
    <section id="education" class="py-24 px-6 max-w-5xl mx-auto relative z-10">
      <div class="mb-16">
        <span class="text-xs font-mono tracking-[0.4em] text-[#00f5ff] uppercase opacity-80 block mb-2">
          // ACADEMIC CREDENTIALS
        </span>
        <h2 class="text-3xl sm:text-4xl font-extrabold text-white relative inline-block title-underline pb-2">
          Education & Background
        </h2>
      </div>

      <div class="grid grid-cols-1 gap-6">
        {educations.map((edu) => (
          <div class="card-3d p-8 relative overflow-hidden group">
            <div class="flex flex-wrap items-start justify-between gap-4 mb-4">
              <div class="flex items-center gap-3">
                <span class="text-3xl p-3 rounded-2xl bg-[#00f5ff]/10 border border-[#00f5ff]/20">
                  🎓
                </span>
                <div>
                  <h3 class="text-xl font-bold text-white group-hover:text-[#00f5ff] transition-colors">
                    {edu.degree}
                  </h3>
                  <p class="text-sm font-mono text-[#ff9f0a] mt-0.5">
                    {edu.institution}
                  </p>
                </div>
              </div>

              <div class="flex flex-col items-end gap-2">
                <span class="px-3 py-1 rounded-full text-xs font-mono bg-[#00f5ff]/10 border border-[#00f5ff]/30 text-[#00f5ff]">
                  {edu.period}
                </span>
                {edu.gradeBadge && (
                  <span class="px-2.5 py-0.5 rounded text-[11px] font-mono bg-[#bf5af2]/15 text-[#bf5af2] border border-[#bf5af2]/30">
                    {edu.gradeBadge}
                  </span>
                )}
              </div>
            </div>

            <p class="text-slate-300 text-sm leading-relaxed font-light mt-4 pt-4 border-t border-[#00f5ff]/10">
              {edu.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};
