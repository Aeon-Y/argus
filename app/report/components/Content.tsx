import { Card, CardHeader, CardContent } from "@/components/ui/card";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Option } from "./Navigation";
import Http from "./Http";
import { useEffect, useState } from "react";
import { ScanResponse } from "@/types/scanResponse";
import { getScanDataFromLocalStorage } from "@/utils/format";

interface ContentProps {
  activeOption: Option;
}

const Content: React.FC<ContentProps> = ({ activeOption }) => {
  const [report, setReport] = useState<ScanResponse | null>(null);
  useEffect(() => {
    const data = getScanDataFromLocalStorage();
    setReport(data);
  }, []);

  const details = (type: string) => {
    switch (type) {
      case "http":
        return <Http data={report?.http_scan!} />;

      default:
        break;
    }
  };

  return (
    <Card className="col-span-3 flex flex-col">
      <CardHeader>
        <h2 className="text-xl font-semibold">{activeOption.label}</h2>
        <p className="text-sm text-gray-500">{activeOption.description}</p>
      </CardHeader>
      <CardContent className="flex-1 flex flex-col">
        <div
          className={`bg-green-100 border-l-4 border-green-500 text-green-700 p-4 mb-4`}
        >
          <p className="font-bold">Test passed</p>
          <p className="text-xs">
            Everything seems to be well configured. Well done.
          </p>
        </div>
        <p className="mb-2">Nameserver Names</p>
        <div className="flex-1 min-h-0">
          <ScrollArea className="h-full w-full rounded-md border">
            {details(activeOption.name!) || "No data available"}
          </ScrollArea>
        </div>
      </CardContent>
    </Card>
  );
};

export default Content;
