import React from "react";

interface OrbLineProps {
  height?: string;
  width?: string;
  vertical?: boolean;
}

const OrbLine = ({
  height = "300px",
  width = "2px",
  vertical = true,
}: OrbLineProps) => {
  return (
    <div
      className="relative overflow-hidden"
      style={{
        height: vertical ? height : width,
        width: vertical ? width : height,
        background:
          "linear-gradient(to bottom, rgba(57,255,20,0.1), #39FF14, rgba(57,255,20,0.1))",
        boxShadow: "0 0 12px rgba(57,255,20,0.8)",
      }}
    />
  );
};

export default OrbLine;