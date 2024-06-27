"use client";
import { ScanResponse } from "@/types/scanResponse";
import { getScanDataFromLocalStorage } from "@/utils/format";
import React, { createContext, useEffect, useState } from "react";
export const ReportContext: React.Context<ScanResponse> = createContext(
  {} as ScanResponse
);

const ReportLayout = ({ children }: { children: React.ReactNode }) => {
  const [report, setReport] = useState<ScanResponse>();
  useEffect(() => {
    const data = getScanDataFromLocalStorage();
    if (!data) return;
    setReport(data);
  }, []);
  return (
    <div className="mx-auto p-4 h-full flex flex-col">
      <header className="flex justify-between items-center mb-4">
        <h1 className="text-2xl font-bold">Public Report | {report?.domain}</h1>
      </header>
      {report && (
        <ReportContext.Provider value={report}>
          <main className="flex-1 grid grid-cols-4 gap-4">{children}</main>
        </ReportContext.Provider>
      )}
    </div>
  );
};

export default ReportLayout;
