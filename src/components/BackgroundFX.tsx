import React, { useEffect, useRef } from 'react';

export const BackgroundFX: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId: number;
    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    const handleResize = () => {
      if (!canvas) return;
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };

    window.addEventListener('resize', handleResize);

    interface Particle {
      x: number;
      y: number;
      radius: number;
      color: string;
      vx: number;
      vy: number;
      alpha: number;
      decay: number;
      type: 'gold' | 'petal';
      angle: number;
      angularSpeed: number;
    }

    const particles: Particle[] = [];
    const particleCount = 50;

    for (let i = 0; i < particleCount; i++) {
      const isPetal = i % 3 === 0;
      particles.push({
        x: Math.random() * width,
        y: Math.random() * height,
        radius: isPetal ? Math.random() * 4 + 2 : Math.random() * 2 + 0.8,
        color: isPetal ? 'rgba(255, 255, 255,' : 'rgba(212, 175, 55,',
        vx: (Math.random() - 0.5) * 0.3,
        vy: isPetal ? Math.random() * 0.4 + 0.2 : -(Math.random() * 0.4 + 0.1),
        alpha: Math.random() * 0.6 + 0.2,
        decay: Math.random() * 0.004 + 0.002,
        type: isPetal ? 'petal' : 'gold',
        angle: Math.random() * Math.PI * 2,
        angularSpeed: (Math.random() - 0.5) * 0.015,
      });
    }

    const render = () => {
      ctx.clearRect(0, 0, width, height);

      // Subtle warm church sunlight gradient
      const gradient = ctx.createRadialGradient(
        width / 2,
        0,
        0,
        width / 2,
        0,
        Math.max(width, height) * 0.9
      );
      gradient.addColorStop(0, 'rgba(250, 235, 195, 0.45)');
      gradient.addColorStop(0.5, 'rgba(253, 251, 247, 0.2)');
      gradient.addColorStop(1, 'rgba(253, 251, 247, 0)');
      ctx.fillStyle = gradient;
      ctx.fillRect(0, 0, width, height);

      particles.forEach((p) => {
        p.x += p.vx;
        p.y += p.vy;
        p.angle += p.angularSpeed;

        p.alpha += p.decay;
        if (p.alpha > 0.75 || p.alpha < 0.15) {
          p.decay = -p.decay;
        }

        if (p.y < -20) p.y = height + 20;
        if (p.y > height + 20) p.y = -20;
        if (p.x < -20) p.x = width + 20;
        if (p.x > width + 20) p.x = -20;

        ctx.save();
        ctx.translate(p.x, p.y);
        ctx.rotate(p.angle);

        if (p.type === 'petal') {
          ctx.beginPath();
          ctx.ellipse(0, 0, p.radius * 2, p.radius, p.angle, 0, Math.PI * 2);
          ctx.fillStyle = `${p.color} ${p.alpha * 0.75})`;
          ctx.shadowColor = 'rgba(212, 175, 55, 0.3)';
          ctx.shadowBlur = 4;
          ctx.fill();
        } else {
          ctx.beginPath();
          ctx.arc(0, 0, p.radius, 0, Math.PI * 2);
          ctx.fillStyle = `${p.color} ${p.alpha})`;
          ctx.shadowColor = 'rgba(212, 175, 55, 0.6)';
          ctx.shadowBlur = p.radius * 3;
          ctx.fill();
        }

        ctx.restore();
      });

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      window.removeEventListener('resize', handleResize);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none z-0 opacity-80"
      aria-hidden="true"
    />
  );
};
