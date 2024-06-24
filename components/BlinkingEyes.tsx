"use client";
import React, { useState, useEffect } from "react";
import { Eye } from "lucide-react";

interface EyeProps {
  x: number;
  y: number;
  size: number;
  blinkInterval: number;
}
const BlinkingEye: React.FC<EyeProps> = ({ x, y, size, blinkInterval }) => {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const blink = () => {
      setIsVisible(false);
      setTimeout(() => setIsVisible(true), 200);
    };

    // Start blinking after a very short delay (50ms)
    const startDelay = setTimeout(() => {
      blink(); // Initial blink
      const intervalId = setInterval(blink, blinkInterval);
      return () => clearInterval(intervalId);
    }, 50);

    return () => clearTimeout(startDelay);
  }, [blinkInterval]);

  return (
    <div
      className={`absolute transition-opacity duration-200 ${
        isVisible ? "opacity-100" : "opacity-0"
      }`}
      style={{
        left: `${x}%`,
        top: `${y}%`,
        transform: "translate(-50%, -50%)",
      }}
    >
      <Eye size={size} className="text-gray-800" />
    </div>
  );
};

export default BlinkingEye;
