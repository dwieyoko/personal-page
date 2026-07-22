import { personalData } from '../data/portfolioData';

export const Hero = () => {
  return (
    <section
      id="hero"
      class="min-h-screen flex flex-col items-center justify-center text-center px-6 pt-24 pb-16 relative z-10"
    >
      {/* Online Status Pill */}
      <div class="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#00f5ff]/10 border border-[#00f5ff]/30 text-[#00f5ff] text-xs font-mono tracking-widest uppercase mb-6 shadow-[0_0_15px_rgba(0,245,255,0.15)] backdrop-blur-sm">
        <span class="w-2 h-2 rounded-full bg-[#00f5ff] animate-ping" />
        <span class="w-2 h-2 rounded-full bg-[#00f5ff] -ml-4" />
        {personalData.tagline}
      </div>

      {/* Main Title */}
      <h1 class="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-black tracking-tight text-white mb-3 relative group">
        <span class="bg-gradient-to-r from-white via-[#00f5ff] to-[#bf5af2] bg-clip-text text-transparent drop-shadow-[0_0_35px_rgba(0,245,255,0.3)]">
          {personalData.name}
        </span>
      </h1>

      {/* Subtitle Role */}
      <p class="font-mono text-sm sm:text-base md:text-lg text-[#bf5af2] tracking-[0.25em] uppercase font-medium mb-6">
        {personalData.role}
      </p>

      {/* Divider */}
      <div class="w-32 h-[1px] bg-gradient-to-r from-transparent via-[#00f5ff] to-transparent my-4" />

      {/* Summary */}
      <p class="max-w-2xl text-slate-300 text-sm sm:text-base md:text-lg leading-relaxed font-light mb-8">
        {personalData.summary}
      </p>

      {/* Contact & Social Chips */}
      <div class="flex flex-wrap items-center justify-center gap-3 max-w-3xl">
        <a
          href={`mailto:${personalData.email}`}
          class="flex items-center gap-2 px-4 py-2 rounded-full bg-[#0a1428]/80 border border-[#00f5ff]/30 text-[#00f5ff] hover:bg-[#00f5ff]/15 hover:border-[#00f5ff] transition-all duration-300 text-xs font-mono backdrop-blur-sm shadow-md hover:-translate-y-0.5"
        >
          <span>✉️</span>
          <span>{personalData.email}</span>
        </a>

        <a
          href={`tel:${personalData.phone.replace(/[^0-9+]/g, '')}`}
          class="flex items-center gap-2 px-4 py-2 rounded-full bg-[#0a1428]/80 border border-[#00f5ff]/30 text-[#00f5ff] hover:bg-[#00f5ff]/15 hover:border-[#00f5ff] transition-all duration-300 text-xs font-mono backdrop-blur-sm shadow-md hover:-translate-y-0.5"
        >
          <span>📞</span>
          <span>{personalData.phone}</span>
        </a>

        <span class="flex items-center gap-2 px-4 py-2 rounded-full bg-[#0a1428]/80 border border-[#00f5ff]/30 text-[#00f5ff] text-xs font-mono backdrop-blur-sm">
          <span>📍</span>
          <span>{personalData.location}</span>
        </span>

        <span class="flex items-center gap-2 px-4 py-2 rounded-full bg-[#bf5af2]/10 border border-[#bf5af2]/40 text-[#bf5af2] text-xs font-mono backdrop-blur-sm font-semibold">
          <span>⚡</span>
          <span>{personalData.yearsExperience} Experience</span>
        </span>
      </div>

      {/* Scroll Down Hint Line */}
      <div class="absolute bottom-6 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-80">
        <span class="text-[10px] uppercase font-mono tracking-[0.3em] text-slate-400">Scroll Down</span>
        <div class="w-[1px] h-12 bg-gradient-to-b from-[#00f5ff] to-transparent animate-scroll-pulse" />
      </div>
    </section>
  );
};
