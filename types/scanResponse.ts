export interface ScanResponse {
  domain: string;
  www_http: WWWHttp;
  www_https: undefined;
  www_tls: undefined;
  www_certificates: undefined;
}

export let TestStatus: "pass" | "warning" | "fail";

export interface WWWHttp {
  url: string;
  status: typeof TestStatus;
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
