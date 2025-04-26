
import React, { useEffect, useState } from "react";
import { cn } from "@/lib/utils";

interface CelebrationEffectProps {
  active: boolean;
  onComplete?: () => void;
}

const CelebrationEffect = ({ active, onComplete }: CelebrationEffectProps) => {
  const [confetti, setConfetti] = useState<{id: number, x: number, y: number, color: string}[]>([]);

  useEffect(() => {
    if (active) {
      const colors = ["#009B77", "#FDB813", "#FF4136"];
      const newConfetti = Array.from({ length: 50 }).map((_, i) => ({
        id: i,
        x: Math.random() * 100,
        y: Math.random() * 20,
        color: colors[Math.floor(Math.random() * colors.length)],
      }));
      
      setConfetti(newConfetti);
      
      // Clean up after animation
      const timer = setTimeout(() => {
        setConfetti([]);
        onComplete?.();
      }, 3000);
      
      return () => clearTimeout(timer);
    }
  }, [active, onComplete]);

  if (!active && confetti.length === 0) return null;

  return (
    <div className="fixed inset-0 pointer-events-none z-50">
      {confetti.map((c) => (
        <div
          key={c.id}
          className="confetti"
          style={{
            left: `${c.x}%`,
            top: `${c.y}%`,
            backgroundColor: c.color,
            animationDelay: `${Math.random() * 0.5}s`,
            animationDuration: `${0.5 + Math.random() * 1.5}s`,
          }}
        />
      ))}
      {active && (
        <div className="fixed top-1/4 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center">
          <div className="text-4xl font-bold mb-2 animate-fade-in">
            🎉 Congratulations! 🎉
          </div>
          <div className="text-xl animate-fade-in animation-delay-200">
            Big up! Your Pardna payment received!
          </div>
        </div>
      )}
    </div>
  );
};

export default CelebrationEffect;
