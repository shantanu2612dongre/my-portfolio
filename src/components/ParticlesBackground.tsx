
import { useCallback, useEffect, useState } from "react";
import Particles from "react-tsparticles";
import { loadSlim } from "tsparticles-slim";
import type { Engine } from "tsparticles-engine";

interface ParticlesBackgroundProps {
  theme: "light" | "dark";
}

const ParticlesBackground = ({ theme }: ParticlesBackgroundProps) => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const particlesInit = useCallback(async (engine: Engine) => {
    await loadSlim(engine);
  }, []);

  if (!mounted) return null;

  return (
    <div className="fixed inset-0 -z-10">
      <Particles
        id="tsparticles"
        init={particlesInit}
        options={{
          fpsLimit: 60,
          fullScreen: {
            enable: false,
            zIndex: -1
          },
          background: {
            color: {
              value: "transparent"
            }
          },
          particles: {
            color: {
              value: theme === "dark" ? "#ffffff" : "#000000"
            },
            links: {
              color: theme === "dark" ? "#ffffff" : "#000000",
              distance: 150,
              enable: true,
              opacity: theme === "dark" ? 0.15 : 0.1,
              width: 1
            },
            collisions: {
              enable: true
            },
            move: {
              direction: "none",
              enable: true,
              outMode: "bounce",
              random: false,
              speed: 0.8,
              straight: false
            },
            number: {
              density: {
                enable: true,
                area: 800
              },
              value: 40
            },
            opacity: {
              value: theme === "dark" ? 0.2 : 0.15
            },
            shape: {
              type: "circle"
            },
            size: {
              value: { min: 1, max: 3 },
              random: true
            }
          },
          detectRetina: true
        }}
        className="w-full h-full"
      />
      <div 
        className={`absolute inset-0 ${
          theme === "dark" 
            ? "bg-gradient-to-br from-background via-background/80 to-background/50" 
            : "bg-gradient-to-br from-background via-background/90 to-background/70"
        }`} 
      />
    </div>
  );
};

export default ParticlesBackground;
