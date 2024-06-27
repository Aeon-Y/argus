import React from "react";
import { HttpScan } from "@/types/scanResponse";
import { ScrollArea } from "@/components/ui/scroll-area";

interface HeaderProps {
  label: string;
  value: string;
}

const HeaderRow: React.FC<HeaderProps> = ({ label, value }) => (
  <div className="grid grid-cols-6 text-white font-mono text-sm">
    <span className="font-medium text-right mr-4 overflow-auto">
      {label.replace(/(?:^|\s|-)\S/g, (match) => match.toUpperCase())}
    </span>
    <span className="col-span-5 break-words">{value}</span>
  </div>
);

interface HttpProps {
  data: HttpScan;
}
const Http: React.FC<HttpProps> = ({ data }) => {
  return (
    <div>
      <p className="mb-2">URL:{data.url}</p>
      <ScrollArea className="h-full w-full rounded-md border">
        {data.redirect_chain.map((redirect, index) => (
          <div
            key={redirect.url}
            className="bg-white shadow-md rounded-lg overflow-hidden"
          >
            <div className="p-4">
              <h2 className="font-semibold flex items-center">
                <span className="flex-shrink-0 w-6 h-6 rounded-full bg-gray-600 text-white flex items-center justify-center font-bold text-sm">
                  {index + 1}
                </span>

                <span className="ml-2 font-bold">{redirect.url}</span>
              </h2>
              <p className="ml-8 text-sm text-gray-600">
                HTTP/1.1 {redirect.status_code} {redirect.status_text}
              </p>
            </div>
            <div className="bg-gray-800 rounded-lg p-4 ml-12 mr-4">
              {Object.entries(redirect.headers).map((header) => (
                <HeaderRow
                  key={header[0]}
                  label={header[0]}
                  value={header[1] || ""}
                />
              ))}
            </div>
          </div>
        ))}
      </ScrollArea>
    </div>
  );
};

export default Http;
