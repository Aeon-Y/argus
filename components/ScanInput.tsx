import React from "react";

interface ScanInputProps {
  onScanStart: () => void;
  onScanComplete: () => void;
  progress: number;
  isScanning: boolean;
}

const ScanInput: React.FC<ScanInputProps> = ({
  onScanStart,
  onScanComplete,
  progress,
  isScanning,
}) => {
  const handleScan = () => {
    onScanStart();
    setTimeout(onScanComplete, 5000);
  };

  return (
    <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64">
      <div className="relative w-full h-12 bg-gray-200 rounded-md overflow-hidden">
        <input
          type="text"
          placeholder="Enter text to scan"
          disabled={isScanning}
          className="w-full h-full px-4 bg-transparent text-gray-800 focus:outline-none"
        />
        <button
          onClick={handleScan}
          disabled={isScanning}
          className={`absolute top-0 right-0 h-full px-4 bg-gray-800 text-white transition-all duration-300 ease-in-out 
            ${isScanning ? "w-full rounded-md" : "w-24 rounded-r-md"}
            ${!isScanning && "hover:bg-gray-700 active:bg-gray-600"}`}
        >
          {isScanning ? (
            <div className="w-full h-full absolute top-0 left-0 flex items-center justify-center">
              <div
                className="absolute top-0 left-0 h-full bg-gray-600 transition-all duration-100 ease-linear"
                style={{ width: `${progress}%` }}
              />
              <span className="relative z-10 text-white font-semibold">
                SCANNING {Math.round(progress)}%
              </span>
            </div>
          ) : (
            "SCAN"
          )}
        </button>
      </div>
    </div>
  );
};

export default ScanInput;
