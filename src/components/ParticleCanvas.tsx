import { onMount, onCleanup } from 'solid-js';

interface Particle {
  x: number;
  y: number;
  vx: number;
  vy: number;
  radius: number;
  color: string;
}

export const ParticleCanvas = () => {
  let canvasRef: HTMLCanvasElement | undefined;
  let animFrameId: number;

  onMount(() => {
    if (!canvasRef) return;
    const ctx = canvasRef.getContext('2d');
    if (!ctx) return;

    let width = (canvasRef.width = window.innerWidth);
    let height = (canvasRef.height = window.innerHeight);

    const colors = ['#00f5ff', '#bf5af2', '#ff9f0a', '#00f5ff88'];
    const particleCount = Math.min(Math.floor((width * height) / 12000), 110);
    const particles: Particle[] = [];

    let mouseX = -1000;
    let mouseY = -1000;

    for (let i = 0; i < particleCount; i++) {
      particles.push({
        x: Math.random() * width,
        y: Math.random() * height,
        vx: (Math.random() - 0.5) * 0.6,
        vy: (Math.random() - 0.5) * 0.6,
        radius: Math.random() * 1.5 + 1,
        color: colors[Math.floor(Math.random() * colors.length)],
      });
    }

    const handleResize = () => {
      if (!canvasRef) return;
      width = canvasRef.width = window.innerWidth;
      height = canvasRef.height = window.innerHeight;
    };

    const handleMouseMove = (e: MouseEvent) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
    };

    window.addEventListener('resize', handleResize);
    window.addEventListener('mousemove', handleMouseMove);

    const render = () => {
      ctx.clearRect(0, 0, width, height);

      // Update & Draw Particles
      for (let i = 0; i < particles.length; i++) {
        const p = particles[i];
        p.x += p.vx;
        p.y += p.vy;

        if (p.x < 0 || p.x > width) p.vx *= -1;
        if (p.y < 0 || p.y > height) p.vy *= -1;

        // Draw particle node
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
        ctx.fillStyle = p.color;
        ctx.shadowBlur = 8;
        ctx.shadowColor = p.color;
        ctx.fill();
        ctx.shadowBlur = 0;

        // Connect particles within distance
        for (let j = i + 1; j < particles.length; j++) {
          const p2 = particles[j];
          const dx = p.x - p2.x;
          const dy = p.y - p2.y;
          const dist = Math.sqrt(dx * dx + dy * dy);

          if (dist < 120) {
            ctx.beginPath();
            ctx.moveTo(p.x, p.y);
            ctx.lineTo(p2.x, p2.y);
            const opacity = (1 - dist / 120) * 0.15;
            ctx.strokeStyle = `rgba(0, 245, 255, ${opacity})`;
            ctx.lineWidth = 0.8;
            ctx.stroke();
          }
        }

        // Mouse connection laser
        const mdx = p.x - mouseX;
        const mdy = p.y - mouseY;
        const mdist = Math.sqrt(mdx * mdx + mdy * mdy);
        if (mdist < 150) {
          ctx.beginPath();
          ctx.moveTo(p.x, p.y);
          ctx.lineTo(mouseX, mouseY);
          const opacity = (1 - mdist / 150) * 0.25;
          ctx.strokeStyle = `rgba(191, 90, 242, ${opacity})`;
          ctx.lineWidth = 1;
          ctx.stroke();
        }
      }

      animFrameId = requestAnimationFrame(render);
    };

    render();

    onCleanup(() => {
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('mousemove', handleMouseMove);
      cancelAnimationFrame(animFrameId);
    });
  });

  return (
    <div class="fixed inset-0 pointer-events-none z-0 overflow-hidden">
      <canvas ref={canvasRef} class="absolute inset-0 w-full h-full" />
      
      {/* Background Animated Ambient Blur Glows */}
      <div class="absolute -top-32 -left-32 w-96 h-96 bg-[#00f5ff]/10 rounded-full blur-[100px] animate-orb1" />
      <div class="absolute top-1/2 -right-32 w-[30rem] h-[30rem] bg-[#bf5af2]/10 rounded-full blur-[120px] animate-orb2" />
      <div class="absolute -bottom-32 left-1/3 w-96 h-96 bg-[#ff9f0a]/08 rounded-full blur-[110px] animate-orb1" />
    </div>
  );
};
