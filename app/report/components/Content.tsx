import { Card, CardHeader, CardContent } from "@/components/ui/card";
import { ScrollArea } from "@/components/ui/scroll-area";

const Content = () => {
  return (
    <Card className="col-span-3">
      <CardHeader>
        <h2 className="text-xl font-semibold">DNS Zone</h2>
        <p className="text-sm text-gray-500">
          The global DNS infrastructure is organized as a series of hierarchical
          DNS zones. The root zone hosts a number of global and country TLDs,
          which in turn host further zones that are delegated to their
          customers. Each organization that controls a zone can delegate parts
          of its namespace to other zones. In this test we perform detailed
          inspection of a DNS zone, but only if the host being tested matches
          the zone.
        </p>
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
