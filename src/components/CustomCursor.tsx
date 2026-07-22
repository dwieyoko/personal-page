import { createSignal, onMount, onCleanup } from 'solid-js';

export const CustomCursor = () => {
  const [pos, setPos] = createSignal({ x: -100, y: -100 });
  const [ringPos, setRingPos] = createSignal({ x: -100, y: -100 });
  const [isHovered, setIsHovered] = createSignal(false);
  const [isVisible, setIsVisible] = createSignal(false);

  let animFrameId: number;

  onMount(() => {
    let mouseX = -100;
    let mouseY = -100;
    let currentRingX = -100;
    let currentRingY = -100;

    const handleMouseMove = (e: MouseEvent) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
      setPos({ x: mouseX, y: mouseY });
      if (!isVisible()) setIsVisible(true);

      // Check if target is interactive
      const target = e.target as HTMLElement | null;
      if (target) {
        const isClickable = target.closest('a, button, input, textarea, select, .card-3d, .skill-chip, [role="button"]');
        setIsHovered(!!isClickable);
      }
    };

    const handleMouseLeave = () => {
      setIsVisible(false);
    };

    const animateRing = () => {
      // Smooth lerp for ring follower
      currentRingX += (mouseX - currentRingX) * 0.15;
      currentRingY += (mouseY - currentRingY) * 0.15;
      setRingPos({ x: currentRingX, y: currentRingY });
      animFrameId = requestAnimationFrame(animateRing);
    };

    window.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseleave', handleMouseLeave);
    animFrameId = requestAnimationFrame(animateRing);

    onCleanup(() => {
      window.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseleave', handleMouseLeave);
      cancelAnimationFrame(animFrameId);
    });
  });

  return (
    <div class={isHovered() ? 'cursor-hover' : ''}>
      <div
        class="custom-cursor transition-opacity duration-300 hidden md:block"
        style={{
          left: `${pos().x}px`,
          top: `${pos().y}px`,
          opacity: isVisible() ? 1 : 0,
        }}
      />
      <div
        class="custom-cursor-ring transition-opacity duration-300 hidden md:block"
        style={{
          left: `${ringPos().x}px`,
          top: `${ringPos().y}px`,
          opacity: isVisible() ? 1 : 0,
        }}
      />
    </div>
  );
};
