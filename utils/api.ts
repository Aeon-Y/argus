import { ScanResponse } from "../types/scanResponse";

export async function fetchScanResponse(domain: string): Promise<ScanResponse> {
  const response = await fetch(
    `/api/scan?domain=${encodeURIComponent(domain)}`,
    {
      method: "GET",
    }
  );

  if (!response.ok) {
    throw new Error("Network response was not ok");
  }

  return response.json();
}
