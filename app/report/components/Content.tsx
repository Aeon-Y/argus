import { Card, CardHeader, CardContent } from "@/components/ui/card";
import Http from "./Http";
import { Child } from "../data/module";
import TestAlert from "@/components/TestAlert";
import { useReport } from "./ReportProvider";

interface ContentProps {
  activeOption: Child | undefined;
}

const Content: React.FC<ContentProps> = ({ activeOption }) => {
  const report = useReport();

  const details = (type: string) => {
    switch (type) {
      case "www_http":
        return <Http data={report?.www_http!} />;
      case "www_https":
        return <Http data={report?.www_https!} />;
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
        <TestAlert result={report[activeOption.id!]!.status} />

        <div className="flex-1 min-h-0">
          {details(activeOption.id!) || "No data available"}
        </div>
      </CardContent>
    </Card>
  );
};

export default Content;
