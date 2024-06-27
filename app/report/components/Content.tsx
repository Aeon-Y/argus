import { Card, CardHeader, CardContent } from "@/components/ui/card";
import Http from "./Http";
import { useContext } from "react";
import { Child } from "../data/module";
import { ReportContext } from "../layout";

interface ContentProps {
  activeOption: Child | undefined;
}

const Content: React.FC<ContentProps> = ({ activeOption }) => {
  const report = useContext(ReportContext);

  const details = (type: string) => {
    switch (type) {
      case "www-http":
        return <Http data={report?.http_scan!} />;

      default:
        break;
    }
  };

  if (!activeOption)
    return (
      <Card className="col-span-3 flex flex-col">
        <CardHeader>
          <h2 className="text-xl font-semibold uppercase">Overview</h2>
        </CardHeader>
        <CardContent className="flex-1 flex items-center justify-center">
          <p className="text-gray-500">details</p>
        </CardContent>
      </Card>
    );

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
        <div className="flex-1 min-h-0">
          {details(activeOption.id!) || "No data available"}
        </div>
      </CardContent>
    </Card>
  );
};

export default Content;
