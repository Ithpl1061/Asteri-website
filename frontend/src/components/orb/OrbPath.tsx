import React from "react";

const OrbPath = () => {
  return (
    <svg
      className="absolute top-0 left-1/2 -translate-x-1/2 h-[4000px] w-[400px] pointer-events-none"
      viewBox="0 0 400 4000"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        id="orb-path"
        d="
          M200 0
          C200 300, 350 300, 350 600
          C350 900, 100 900, 100 1200
          C100 1500, 320 1500, 320 1800
          C320 2100, 120 2100, 120 2400
          C120 2700, 340 2700, 340 3000
          C340 3300, 200 3400, 200 4000
        "
        stroke="#39FF14"
        strokeWidth="2"
        strokeLinecap="round"
        opacity="0.9"
        style={{
          filter: "drop-shadow(0 0 12px #39FF14)",
        }}
      />
    </svg>
  );
};

export default OrbPath;