import { skillCategories } from '../data/portfolioData';

export const Skills = () => {
  const getDotColor = (status: 'cyan' | 'purple' | 'orange') => {
    switch (status) {
      case 'cyan':
        return 'bg-[#00f5ff] shadow-[0_0_8px_#00f5ff]';
      case 'purple':
        return 'bg-[#bf5af2] shadow-[0_0_8px_#bf5af2]';
      case 'orange':
        return 'bg-[#ff9f0a] shadow-[0_0_8px_#ff9f0a]';
    }
  };

  return (
    <section id="skills" class="py-24 px-6 max-w-6xl mx-auto relative z-10">
      <div class="mb-16">
        <span class="text-xs font-mono tracking-[0.4em] text-[#00f5ff] uppercase opacity-80 block mb-2">
          // TECHNICAL MATRIX
        </span>
        <h2 class="text-3xl sm:text-4xl font-extrabold text-white relative inline-block title-underline pb-2">
          Skills & Stack
        </h2>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
        {skillCategories.map((cat) => (
          <div class="card-3d p-6 sm:p-8">
            <h3 class="text-lg font-bold text-white mb-6 flex items-center gap-2 border-b border-[#00f5ff]/15 pb-3">
              <span class="w-2 h-2 rounded-full bg-[#00f5ff]" />
              {cat.title}
            </h3>

            <div class="flex flex-wrap gap-3">
              {cat.skills.map((skill) => (
                <div class="skill-chip flex items-center gap-2 px-3.5 py-2 rounded-xl bg-[#0a1428]/90 border border-[#00f5ff]/20 text-slate-200 text-xs font-mono hover:border-[#00f5ff] hover:text-white hover:bg-[#00f5ff]/10 transition-all duration-300 backdrop-blur-sm cursor-default">
                  <span class={`w-2 h-2 rounded-full shrink-0 ${getDotColor(skill.status)}`} />
                  <span>{skill.name}</span>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
