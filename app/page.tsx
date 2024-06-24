"use client";
import BlinkingEye from "@/components/BlinkingEyes";
import ScanInput from "@/components/ScanInput";
import React, { useState, useEffect, useCallback } from "react";

interface EyeProps {
  x: number;
  y: number;
  size: number;
  blinkInterval: number;
}

const ScanPage: React.FC = () => {
  const [eyes, setEyes] = useState<EyeProps[]>([]);
  const [visibleEyeCount, setVisibleEyeCount] = useState(0);
  const [isScanning, setIsScanning] = useState(false);

  const generateEyes = useCallback((): EyeProps[] => {
    const gridSize = 4; // 4x3 grid
    const cellWidth = 100 / gridSize;
    const cellHeight = 100 / 3;
    const exclusionZone = { x: 35, y: 35, width: 30, height: 30 }; // Central exclusion zone
    const newEyes: EyeProps[] = [];

    for (let i = 0; i < 3; i++) {
      for (let j = 0; j < gridSize; j++) {
        let x: number, y: number;
        do {
          x =
            j * cellWidth +
            (Math.random() * (cellWidth * 0.6) + cellWidth * 0.2);
          y =
            i * cellHeight +
            (Math.random() * (cellHeight * 0.6) + cellHeight * 0.2);
        } while (isInExclusionZone(x, y, exclusionZone));

        newEyes.push({
          x,
          y,
          size: Math.random() * 24 + 48, // Random size between 48 and 72
          blinkInterval: Math.random() * 3000 + 1000, // Random interval between 1s and 4s
        });
      }
    }
    return newEyes;
  }, []);

  const isInExclusionZone = (
    x: number,
    y: number,
    zone: { x: number; y: number; width: number; height: number }
  ): boolean => {
    return (
      x > zone.x &&
      x < zone.x + zone.width &&
      y > zone.y &&
      y < zone.y + zone.height
    );
  };

  const startScanning = useCallback(() => {
    setIsScanning(true);
    setEyes(generateEyes());
    setVisibleEyeCount(0);
  }, [generateEyes]);

  const stopScanning = useCallback(() => {
    setIsScanning(false);
    setVisibleEyeCount(0);
  }, []);

  useEffect(() => {
    if (isScanning && visibleEyeCount < 12) {
      const timer = setTimeout(() => {
        setVisibleEyeCount((prev) => prev + 1);
      }, 2500 / 12); // Distribute eye appearance over 2.5 seconds
      return () => clearTimeout(timer);
    }
  }, [isScanning, visibleEyeCount]);

  return (
    <div className="relative w-full h-screen bg-white overflow-hidden">
      {eyes.slice(0, visibleEyeCount).map((eye, index) => (
        <BlinkingEye key={index} {...eye} />
      ))}
      <ScanInput
        onScanStart={startScanning}
        onScanComplete={stopScanning}
        progress={(visibleEyeCount / 12) * 100}
        isScanning={isScanning}
      />
    </div>
  );
};

export default ScanPage;
