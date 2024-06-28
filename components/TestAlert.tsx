import React from "react";
import { TestStatus } from "@/types/scanResponse";

interface TestAlertProps {
  result: typeof TestStatus;
}

const TestAlert: React.FC<TestAlertProps> = ({ result }) => {
  const colorVariants = {
    fail: "bg-gray-100 border-gray-500 text-gray-700",
    warning: "bg-yellow-100 border-yellow-500 text-yellow-700",
    pass: "bg-green-100 border-green-500 text-green-700",
  };

  return (
    <div className={`border-l-4 p-4 mb-4 ${colorVariants[result]}`}>
      <p className="font-bold">Test passed</p>
      <p className="text-xs">
        Everything seems to be well configured. Well done.
      </p>
    </div>
  );
};

export default TestAlert;
