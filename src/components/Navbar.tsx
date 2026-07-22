import { createSignal, onMount, onCleanup } from 'solid-js';

const navItems = [
  { id: 'hero', label: 'Home' },
  { id: 'experience', label: 'Experience' },
  { id: 'projects', label: 'Projects' },
  { id: 'skills', label: 'Skills' },
  { id: 'education', label: 'Education' },
  { id: 'contact', label: 'Contact' },
];

export const Navbar = () => {
  const [activeSection, setActiveSection] = createSignal('hero');
  const [isMobileOpen, setIsMobileOpen] = createSignal(false);
  const [isScrolled, setIsScrolled] = createSignal(false);

  onMount(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);

      // Section intersection detection
      const scrollPosition = window.scrollY + 250;
      for (const item of navItems) {
        const el = document.getElementById(item.id);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(item.id);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    onCleanup(() => window.removeEventListener('scroll', handleScroll));
  });

  const scrollTo = (id: string) => {
    setIsMobileOpen(false);
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      {/* Top Mobile/Tablet Navbar */}
      <header
        class={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled()
            ? 'bg-[#050a14]/85 backdrop-blur-md border-b border-[#00f5ff]/20 py-3 shadow-lg shadow-[#00f5ff]/5'
            : 'bg-transparent py-5'
        }`}
      >
        <div class="max-w-7xl mx-auto px-6 flex items-center justify-between">
          <a
            href="#hero"
            onClick={(e) => {
              e.preventDefault();
              scrollTo('hero');
            }}
            class="flex items-center gap-2 group"
          >
            <span class="w-8 h-8 rounded-lg bg-gradient-to-br from-[#00f5ff] to-[#bf5af2] flex items-center justify-center text-[#050a14] font-bold text-sm tracking-widest group-hover:scale-105 transition-transform">
              DS
            </span>
            <span class="font-bold tracking-tight text-white group-hover:text-[#00f5ff] transition-colors">
              DWI SURYOKO <span class="text-[#00f5ff] text-xs font-normal tracking-widest ml-1 hidden sm:inline">// DEV</span>
            </span>
          </a>

          {/* Desktop Right Horizontal Nav Links */}
          <nav class="hidden lg:flex items-center gap-8">
            {navItems.map((item) => (
              <button
                onClick={() => scrollTo(item.id)}
                class={`text-xs uppercase tracking-[0.2em] font-medium transition-colors relative py-1 ${
                  activeSection() === item.id ? 'text-[#00f5ff]' : 'text-slate-400 hover:text-white'
                }`}
              >
                {item.label}
                {activeSection() === item.id && (
                  <span class="absolute bottom-0 left-0 w-full h-[2px] bg-gradient-to-r from-[#00f5ff] to-[#bf5af2] rounded-full" />
                )}
              </button>
            ))}
          </nav>

          {/* Mobile Hamburger Toggle Button */}
          <button
            onClick={() => setIsMobileOpen(!isMobileOpen())}
            class="lg:hidden p-2 text-slate-300 hover:text-[#00f5ff] focus:outline-none"
            aria-label="Toggle Navigation Menu"
          >
            <svg class="w-6 h-6 fill-current" viewBox="0 0 24 24">
              {isMobileOpen() ? (
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12 19 6.41z"
                />
              ) : (
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M3 18h18v-2H3v2zm0-5h18v-2H3v2zm0-7v2h18V6H3z"
                />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Dropdown Drawer */}
        {isMobileOpen() && (
          <div class="lg:hidden bg-[#050a14]/95 backdrop-blur-xl border-b border-[#00f5ff]/20 px-6 py-6 space-y-4">
            {navItems.map((item) => (
              <button
                onClick={() => scrollTo(item.id)}
                class={`block w-full text-left text-sm uppercase tracking-widest font-medium py-2 px-3 rounded-lg transition-colors ${
                  activeSection() === item.id
                    ? 'bg-[#00f5ff]/10 text-[#00f5ff] border-l-2 border-[#00f5ff]'
                    : 'text-slate-300 hover:bg-white/5'
                }`}
              >
                {item.label}
              </button>
            ))}
          </div>
        )}
      </header>

      {/* Floating Right Sidebar Navigation Dots (Desktop) */}
      <aside class="hidden xl:flex fixed right-8 top-1/2 -translate-y-1/2 z-40 flex-col items-end gap-5">
        {navItems.map((item) => (
          <button
            onClick={() => scrollTo(item.id)}
            class="group flex items-center gap-3 focus:outline-none"
            aria-label={`Scroll to ${item.label}`}
          >
            <span class="opacity-0 group-hover:opacity-100 transition-opacity duration-200 text-[10px] uppercase tracking-widest font-mono text-[#00f5ff] bg-[#0a1428]/90 px-2 py-1 rounded border border-[#00f5ff]/30 backdrop-blur-sm shadow-lg pointer-events-none">
              {item.label}
            </span>
            <span
              class={`w-3 h-3 rounded-full transition-all duration-300 ${
                activeSection() === item.id
                  ? 'bg-[#00f5ff] ring-4 ring-[#00f5ff]/20 scale-125 shadow-[0_0_12px_#00f5ff]'
                  : 'bg-slate-600 group-hover:bg-[#00f5ff]/60 group-hover:scale-110'
              }`}
            />
          </button>
        ))}
      </aside>
    </>
  );
};
