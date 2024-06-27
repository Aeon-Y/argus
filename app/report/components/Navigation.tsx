import { CheckSquare2Icon, AlertTriangleIcon, XSquareIcon } from "lucide-react";
import { Avatar } from "@/components/ui/avatar";
import { Separator } from "@/components/ui/separator";
import { Card, CardHeader, CardContent } from "@/components/ui/card";
import { Child, modules } from "../data/module";
import { useReport } from "./ReportProvider";

interface NavigationProps {
  activeOption: Child | undefined;
  clickOption: (option: Child) => void;
}

const Navigation: React.FC<NavigationProps> = ({
  activeOption,
  clickOption,
}) => {
  const report = useReport();
  return (
    <Card className="col-span-1">
      <CardHeader>
        <div className="flex items-center space-x-4">
          <Avatar className="w-12 h-12 rounded-sm bg-slate-400">
            {/* <AvatarImage src="../favicon.ico" /> */}
          </Avatar>
          <div>
            <h2 className="text-2xl font-bold">{report.domain}</h2>
            <p className="text-xs text-gray-500">19 Jun 2024 07:25 UTC</p>
          </div>
        </div>
      </CardHeader>
      <CardContent>
        {modules.map((tab) => (
          <div className="mb-6" key={tab.title}>
            <h1 className="font-bold">{tab.title}</h1>
            <Separator className="my-2" />
            {tab.children.map((child) =>
              child.id ? (
                <div
                  className={`flex flex-row items-center cursor-pointer mb-1 px-2 py-2 rounded-md hover:bg-gray-100 transition-colors duration-200 ease-in-out ${
                    activeOption &&
                    activeOption.id === child.id &&
                    "bg-gray-100"
                  }`}
                  key={child.id}
                  onClick={() => clickOption(child)}
                >
                  {/* <child.icon className={`w-4 h-4 text-${child.color}`} /> */}
                  <p className="text-sm text-gray-500 ml-2">{child.label}</p>
                </div>
              ) : (
                <h2
                  key={child.title}
                  className="font-medium text-sm text-gray-800 py-2 uppercase"
                >
                  {child.title}
                </h2>
              )
            )}
          </div>
        ))}
      </CardContent>
    </Card>
  );
};

export default Navigation;
