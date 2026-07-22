import { CustomCursor } from './components/CustomCursor';
import { ParticleCanvas } from './components/ParticleCanvas';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Experience } from './components/Experience';
import { Projects } from './components/Projects';
import { Skills } from './components/Skills';
import { Education } from './components/Education';
import { ContactFooter } from './components/ContactFooter';

function App() {
  return (
    <div class="relative min-h-screen bg-[#050a14] text-[#e0f0ff] selection:bg-[#00f5ff]/20 selection:text-[#00f5ff] overflow-x-hidden font-['Poppins',sans-serif]">
      {/* Interactive Cyberpunk Particle Canvas */}
      <ParticleCanvas />

      {/* Custom Lerp Mouse Follower */}
      <CustomCursor />

      {/* Main Responsive Navigation */}
      <Navbar />

      {/* Application Sections */}
      <main class="relative z-10 space-y-12">
        <Hero />
        <Experience />
        <Projects />
        <Skills />
        <Education />
      </main>

      {/* Contact & Footer */}
      <ContactFooter />
    </div>
  );
}

export default App;
