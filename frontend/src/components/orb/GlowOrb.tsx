import React from "react";

interface GlowOrbProps {
  size?: number;
  color?: string;
  className?: string;
}

const GlowOrb = ({
  size = 22,
  color = "#39FF14",
  className = "",
}: GlowOrbProps) => {
  return (
    <div
      className={`relative rounded-full ${className}`}
      style={{
        width: `${size}px`,
        height: `${size}px`,
        background: color,
        boxShadow: `
          0 0 10px ${color},
          0 0 20px ${color},
          0 0 40px ${color},
          0 0 80px ${color}
        `,
      }}
    >
      <div
        className="absolute inset-0 rounded-full animate-ping"
        style={{
          background: color,
          opacity: 0.4,
        }}
      />
    </div>
  );
};

export default GlowOrb;