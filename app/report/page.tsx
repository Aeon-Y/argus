import React from "react";
import { Card, CardHeader, CardContent } from "@/components/ui/card";
import { ScrollArea } from "@/components/ui/scroll-area";
import { CheckSquare2Icon, AlertTriangleIcon, XSquareIcon } from "lucide-react";
import { Avatar } from "@/components/ui/avatar";
import { Separator } from "@/components/ui/separator";

const ReportPage = async () => {
  return (
    <>
      <Card className="col-span-1">
        <CardHeader>
          <div className="flex items-center space-x-4">
            <Avatar className="w-12 h-12 rounded-sm bg-slate-400">
              {/* <AvatarImage src="../favicon.ico" /> */}
            </Avatar>
            <div>
              <h2 className="text-2xl font-bold">www.example.com</h2>
              <p className="text-xs text-gray-500">19 Jun 2024 07:25 UTC</p>
            </div>
          </div>
        </CardHeader>
        <CardContent>
          <div className="mb-6">
            <h1 className="font-bold">Domain Name System</h1>
            <Separator className="my-2" />
            <div className="flex flex-row items-center mb-2">
              <CheckSquare2Icon className="text-green-500 w-4 h-4" />
              <p className="text-sm text-gray-500 ml-2">DNS Zone</p>
            </div>
            <div className="flex flex-row items-center mb-2">
              <AlertTriangleIcon className="text-yellow-500 w-4 h-4" />
              <p className="text-sm text-gray-500 ml-2">DNS Records</p>
            </div>
            <div className="flex flex-row items-center mb-2">
              <XSquareIcon className="text-gray-500 w-4 h-4" />
              <p className="text-sm text-gray-500 ml-2">DNSSEC</p>
            </div>
            <div className="flex flex-row items-center mb-2">
              <XSquareIcon className="text-gray-500 w-4 h-4" />
              <p className="text-sm text-gray-500 ml-2">CAA</p>
            </div>
          </div>
          <div className="mb-6">
            <h1 className="font-bold">Email</h1>
            <Separator className="my-2" />
            <div className="flex flex-row items-center mb-2">
              <CheckSquare2Icon className="text-green-500 w-4 h-4" />
              <p className="text-sm text-gray-500 ml-2">Mail servers</p>
            </div>
            <h2 className="font-medium text-sm text-gray-800 py-2 uppercase">
              Secure Transport (SMTP)
            </h2>
            <div className="flex flex-row items-center mb-2">
              <AlertTriangleIcon className="text-yellow-500 w-4 h-4" />
              <p className="text-sm text-gray-500 ml-2">TLS</p>
            </div>
            <div className="flex flex-row items-center mb-2">
              <XSquareIcon className="text-gray-500 w-4 h-4" />
              <p className="text-sm text-gray-500 ml-2">Certificates</p>
            </div>
            <div className="flex flex-row items-center mb-2">
              <XSquareIcon className="text-gray-500 w-4 h-4" />
              <p className="text-sm text-gray-500 ml-2">MTA-STS</p>
            </div>
            <div className="flex flex-row items-center mb-2">
              <XSquareIcon className="text-gray-500 w-4 h-4" />
              <p className="text-sm text-gray-500 ml-2">TLS-RPT</p>
            </div>
            <h2 className="font-medium text-sm text-gray-800 py-2 uppercase">
              Authentication and Policy
            </h2>
            <div className="flex flex-row items-center mb-2">
              <AlertTriangleIcon className="text-yellow-500 w-4 h-4" />
              <p className="text-sm text-gray-500 ml-2">TLS</p>
            </div>
            <div className="flex flex-row items-center mb-2">
              <XSquareIcon className="text-gray-500 w-4 h-4" />
              <p className="text-sm text-gray-500 ml-2">Certificates</p>
            </div>
            <div className="flex flex-row items-center mb-2">
              <XSquareIcon className="text-gray-500 w-4 h-4" />
              <p className="text-sm text-gray-500 ml-2">SPF</p>
            </div>
            <div className="flex flex-row items-center mb-2">
              <XSquareIcon className="text-gray-500 w-4 h-4" />
              <p className="text-sm text-gray-500 ml-2">DMARC</p>
            </div>
          </div>
        </CardContent>
      </Card>

      <Card className="col-span-3">
        <CardHeader>
          <h2 className="text-xl font-semibold">DNS Zone</h2>
          <p className="text-sm text-gray-500">
            The global DNS infrastructure is organized as a series of
            hierarchical DNS zones. The root zone hosts a number of global and
            country TLDs, which in turn host further zones that are delegated to
            their customers. Each organization that controls a zone can delegate
            parts of its namespace to other zones. In this test we perform
            detailed inspection of a DNS zone, but only if the host being tested
            matches the zone.
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
    </>
  );
};

export default ReportPage;
