// src/animations/heroAnimation.ts

interface Particle {
  x: number;
  y: number;
  radius: number;
  speed: number;
  color: string;

  draw: () => void;
  update: () => void;
}

export const initHeroAnimation = (canvasId: string): void => {
  const canvas = document.getElementById(canvasId) as HTMLCanvasElement | null;
  if (!canvas) return;
  canvas.width = window.innerWidth;
  canvas.height = 300;
  const ctx = canvas.getContext('2d');
  if (!ctx) return;

  const particles: Particle[] = [];

  const createParticle = (): Particle => {
      const particle: Particle = {
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          radius: Math.random() * 2.5 + 0.75,
          speed: Math.random() * 0.4 + 0.4,
          color: 'rgba(252, 209, 90, 0.7)',
          draw: function() {
              ctx.beginPath();
              ctx.arc(this.x, this.y, this.radius, 0, 2 * Math.PI, false);
              ctx.fillStyle = this.color;
              ctx.fill();
          },
          update: function() {
              this.y += this.speed;
              if (this.y - this.radius > canvas.height) {
                  this.y = 0 - this.radius;
              }
              this.draw();
          }
      };
      return particle;
  };

  const init = () => {
      for (let i = 0; i < 50; i++) {
          particles.push(createParticle());
      }
      animate();
  };

  const animate = () => {
      requestAnimationFrame(animate);
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      particles.forEach(particle => particle.update());
  };

  window.addEventListener('resize', () => {
      canvas.width = window.innerWidth;
      canvas.height = 300;
      particles.forEach(particle => {
          particle.x = Math.random() * canvas.width;
          particle.y = Math.random() * canvas.height;
      });
  });

  init();
};
