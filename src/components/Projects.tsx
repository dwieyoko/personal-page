import { projects } from '../data/portfolioData';

export const Projects = () => {
  return (
    <section id="projects" class="py-24 px-6 max-w-6xl mx-auto relative z-10">
      <div class="mb-16">
        <span class="text-xs font-mono tracking-[0.4em] text-[#00f5ff] uppercase opacity-80 block mb-2">
          // FEATURED WORKS
        </span>
        <h2 class="text-3xl sm:text-4xl font-extrabold text-white relative inline-block title-underline pb-2">
          Systems & Projects
        </h2>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
        {projects.map((proj) => (
          <div class="card-3d p-8 flex flex-col justify-between group">
            {/* Background Translucent Number Watermark */}
            <span class="absolute top-4 right-6 text-6xl font-black font-mono text-[#00f5ff]/05 group-hover:text-[#00f5ff]/15 transition-colors pointer-events-none select-none">
              {proj.number}
            </span>

            <div>
              <div class="flex items-center gap-3 mb-4">
                <span class="text-3xl p-2 rounded-xl bg-[#00f5ff]/10 border border-[#00f5ff]/20">
                  {proj.icon}
                </span>
                <div>
                  <h3 class="text-xl font-bold text-white group-hover:text-[#00f5ff] transition-colors leading-tight">
                    {proj.title}
                  </h3>
                  <p class="text-xs font-mono text-[#bf5af2] mt-0.5">
                    {proj.subtitle}
                  </p>
                </div>
              </div>

              <p class="text-slate-300 text-sm leading-relaxed mb-6 font-light">
                {proj.description}
              </p>
            </div>

            <div>
              {/* Tech Stack Pills */}
              <div class="flex flex-wrap gap-2 mb-6">
                {proj.tags.map((tag) => (
                  <span class="text-[11px] font-mono px-2.5 py-1 rounded-full bg-[#00f5ff]/08 border border-[#00f5ff]/25 text-[#00f5ff]">
                    {tag}
                  </span>
                ))}
              </div>

              {/* Action Buttons */}
              <div class="flex items-center gap-4 pt-4 border-t border-[#00f5ff]/10">
                {proj.demoUrl && (
                  <a
                    href={proj.demoUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    class="inline-flex items-center gap-1.5 text-xs font-mono font-semibold text-[#00f5ff] hover:text-white transition-colors"
                  >
                    <span>Live Architecture</span>
                    <span class="text-base">↗</span>
                  </a>
                )}
                {proj.githubUrl && (
                  <a
                    href={proj.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    class="inline-flex items-center gap-1.5 text-xs font-mono text-slate-400 hover:text-[#00f5ff] transition-colors"
                  >
                    <span>View Repository</span>
                    <span class="text-base">⎘</span>
                  </a>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
