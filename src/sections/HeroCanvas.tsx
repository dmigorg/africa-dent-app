import { useEffect, useRef } from 'react';

interface Particle {
  x: number;
  y: number;
  size: number;
  speedX: number;
  speedY: number;
  opacity: number;
  color: string;
}

const HeroCanvas = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const particlesRef = useRef<Particle[]>([]);
  const mouseRef = useRef({ x: 0, y: 0 });
  const animationRef = useRef<number>();

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resize();
    window.addEventListener('resize', resize);

    const colors = ['rgba(91, 189, 220, ', 'rgba(255, 206, 84, ', 'rgba(144, 238, 144, '];

    for (let k = 0; k < 20; k++) {
      particlesRef.current.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        size: Math.random() * 8 + 4,
        speedX: (Math.random() - 0.5) * 0.5,
        speedY: (Math.random() - 0.5) * 0.5,
        opacity: Math.random() * 0.5 + 0.2,
        color: colors[Math.floor(Math.random() * colors.length)],
      });
    }

    const handleMouseMove = (k: MouseEvent) => {
      mouseRef.current = {
        x: k.clientX,
        y: k.clientY,
      };
    };
    window.addEventListener('mousemove', handleMouseMove, { passive: true });

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      particlesRef.current.forEach((k, yt) => {
        const nt = mouseRef.current.x - k.x;
        const ot = mouseRef.current.y - k.y;
        const Et = Math.sqrt(nt * nt + ot * ot);

        if (Et < 150) {
          const Ot = (150 - Et) / 150;
          k.x -= nt * Ot * 0.02;
          k.y -= ot * Ot * 0.02;
        }

        k.x += k.speedX;
        k.y += k.speedY;

        if (k.x < 0) k.x = canvas.width;
        if (k.x > canvas.width) k.x = 0;
        if (k.y < 0) k.y = canvas.height;
        if (k.y > canvas.height) k.y = 0;

        ctx.beginPath();
        ctx.arc(k.x, k.y, k.size, 0, Math.PI * 2);
        ctx.fillStyle = `${k.color}${k.opacity})`;
        ctx.fill();

        particlesRef.current.slice(yt + 1).forEach((Ot) => {
          const pt = Math.sqrt(Math.pow(k.x - Ot.x, 2) + Math.pow(k.y - Ot.y, 2));
          if (pt < 120) {
            ctx.beginPath();
            ctx.moveTo(k.x, k.y);
            ctx.lineTo(Ot.x, Ot.y);
            ctx.strokeStyle = `rgba(91, 189, 220, ${0.1 * (1 - pt / 120)})`;
            ctx.lineWidth = 1;
            ctx.stroke();
          }
        });
      });

      animationRef.current = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener('resize', resize);
      window.removeEventListener('mousemove', handleMouseMove);
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 z-0"
      style={{
        background: 'linear-gradient(135deg, #e8f7fc 0%, #d4f0f7 30%, #fff8e7 70%, #f0f9ff 100%)',
      }}
    />
  );
};

export default HeroCanvas;
