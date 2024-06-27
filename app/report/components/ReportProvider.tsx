import { ScanResponse } from "@/types/scanResponse";
import React, { createContext, useContext } from "react";

export const ReportContext: React.Context<ScanResponse> = createContext(
  {} as ScanResponse
);

export function ReportProvider({
  children,
  report,
}: {
  children: React.ReactNode;
  report: ScanResponse;
}) {
  return (
    <ReportContext.Provider value={report}>{children}</ReportContext.Provider>
  );
}

export function useReport() {
  return useContext(ReportContext);
}
