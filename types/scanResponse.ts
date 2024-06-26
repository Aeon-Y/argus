export interface ScanResponse {
  domain: string;
  http_scan: HttpScan;
}

export interface HttpScan {
  url: string;
  status: string;
  redirect_chain: RedirectChainItem[];
  analysis: Analysis;
}

export interface RedirectChainItem {
  url: string;
  status_code: number;
  status_text: string;
  headers: Record<string, string>;
  content_type: string;
  server: string;
  location: string | null;
}

export interface Analysis {
  "HTTP redirects to HTTPS": string;
  "Final status code": string;
  "Number of redirects": number;
}
