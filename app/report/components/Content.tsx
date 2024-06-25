import { Card, CardHeader, CardContent } from "@/components/ui/card";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Option } from "./Navigation";

interface ContentProps {
  activeOption: Option;
}

const Content: React.FC<ContentProps> = ({ activeOption }) => {
  return (
    <Card className="col-span-3">
      <CardHeader>
        <h2 className="text-xl font-semibold">{activeOption.label}</h2>
        <p className="text-sm text-gray-500">{activeOption.description}</p>
      </CardHeader>
      <CardContent>
        <div
          className={`bg-green-100 border-l-4 border-green-500 text-green-700 p-4 mb-4`}
        >
          <p className="font-bold">Test passed</p>
          <p className="text-xs">
            Everything seems to be well configured. Well done.
          </p>
        </div>
        <p className="mb-2">Nameserver Names</p>
        <ScrollArea className="h-64 w-full rounded-md border"></ScrollArea>
      </CardContent>
    </Card>
  );
};

export default Content;
