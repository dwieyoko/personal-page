import { personalData } from '../data/portfolioData';

export const ContactFooter = () => {
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer id="contact" class="pt-24 pb-12 px-6 relative z-10">
      <div class="max-w-5xl mx-auto">
        <div class="mb-16 text-center">
          <span class="text-xs font-mono tracking-[0.4em] text-[#00f5ff] uppercase opacity-80 block mb-2">
            // CONNECT & COLLABORATE
          </span>
          <h2 class="text-3xl sm:text-5xl font-black text-white mb-6">
            Let's Build Exceptional Web Systems
          </h2>
          <p class="max-w-xl mx-auto text-slate-300 text-sm sm:text-base leading-relaxed font-light mb-8">
            Interested in scaling your WordPress architecture, engineering custom backend API integrations, or building high-traffic web applications?
          </p>

          <a
            href={`mailto:${personalData.email}?subject=Inquiry%20from%20Portfolio`}
            class="inline-flex items-center gap-3 px-8 py-4 rounded-full bg-gradient-to-r from-[#00f5ff] to-[#bf5af2] text-[#050a14] font-bold text-sm uppercase tracking-widest hover:scale-105 hover:shadow-[0_0_30px_rgba(0,245,255,0.4)] transition-all duration-300 shadow-xl"
          >
            <span>Initiate Contact</span>
            <span class="text-lg">→</span>
          </a>
        </div>

        {/* Contact Info Cards */}
        <div class="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-16">
          <a
            href={`mailto:${personalData.email}`}
            class="card-3d p-6 text-center group flex flex-col items-center justify-center"
          >
            <span class="text-3xl mb-2">✉️</span>
            <span class="text-xs font-mono text-[#00f5ff] uppercase tracking-widest mb-1">Email</span>
            <span class="text-sm font-semibold text-white group-hover:text-[#00f5ff] transition-colors">
              {personalData.email}
            </span>
          </a>

          <a
            href={`tel:${personalData.phone.replace(/[^0-9+]/g, '')}`}
            class="card-3d p-6 text-center group flex flex-col items-center justify-center"
          >
            <span class="text-3xl mb-2">📞</span>
            <span class="text-xs font-mono text-[#bf5af2] uppercase tracking-widest mb-1">Phone / WhatsApp</span>
            <span class="text-sm font-semibold text-white group-hover:text-[#bf5af2] transition-colors">
              {personalData.phone}
            </span>
          </a>

          <div class="card-3d p-6 text-center flex flex-col items-center justify-center">
            <span class="text-3xl mb-2">📍</span>
            <span class="text-xs font-mono text-[#ff9f0a] uppercase tracking-widest mb-1">Location</span>
            <span class="text-sm font-semibold text-white">
              {personalData.location}
            </span>
          </div>
        </div>

        {/* Bottom Footer Bar */}
        <div class="pt-8 border-t border-[#00f5ff]/15 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-slate-400">
          <div>
            © {currentYear} <span class="text-white font-semibold">{personalData.name}</span>. All rights reserved.
          </div>

          <div class="flex items-center gap-6">
            <span>Built with SolidJS & TailwindCSS</span>
            <button
              onClick={scrollToTop}
              class="hover:text-[#00f5ff] transition-colors flex items-center gap-1"
            >
              <span>Back to top</span>
              <span>↑</span>
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};
