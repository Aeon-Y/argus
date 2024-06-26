import { ScanResponse } from "@/types/scanResponse";

export function getScanDataFromLocalStorage(): ScanResponse | null {
  const rawData = localStorage.getItem(`scanResult`);
  if (!rawData) return null;
  return JSON.parse(rawData);
}
