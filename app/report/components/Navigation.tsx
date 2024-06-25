import { CheckSquare2Icon, AlertTriangleIcon, XSquareIcon } from "lucide-react";
import { Avatar } from "@/components/ui/avatar";
import { Separator } from "@/components/ui/separator";
import { Card, CardHeader, CardContent } from "@/components/ui/card";

interface NavigationProps {
  activeOption: Option;
  clickOption: (option: Option) => void;
}

export interface Option {
  name?: string;
  label: string;
  icon?: React.FC;
  color?: string;
  description?: string;
}

const navigationTabs = [
  {
    title: "Domain Name System",
    children: [
      {
        name: "dns-zone",
        label: "DNS Zone",
        icon: CheckSquare2Icon,
        color: "green-500",
        description:
          "The global DNS infrastructure is organized as a series of hierarchical DNS zones. The root zone hosts a number of global and country TLDs, which in turn host further zones that are delegated to their customers. Each organization that controls a zone can delegate parts of its namespace to other zones. In this test we perform detailed inspection of a DNS zone, but only if the host being tested matches the zone.",
      },
      {
        name: "dns-records",
        label: "DNS Records",
        icon: AlertTriangleIcon,
        color: "yellow-500",
        description:
          "DNS records are used to map domain names to IP addresses and other resources. They are stored in a zone file on a DNS server. The most common types of DNS records are A, AAAA, CNAME, MX, NS, PTR, SOA, SRV, and TXT records. In this test we check the presence and validity of these records.",
      },
      {
        name: "dnssec",
        label: "DNSSEC",
        icon: XSquareIcon,
        color: "gray-500",
        description:
          "DNSSEC is a set of extensions to DNS that provide origin authentication and integrity protection. It uses digital signatures to ensure that the responses to DNS queries are authentic. In this test we check if DNSSEC is enabled for the domain.",
      },
      {
        name: "caa",
        label: "CAA",
        icon: XSquareIcon,
        color: "gray-500",
        description:
          "CAA (Certification Authority Authorization) is a DNS record that specifies which certificate authorities (CAs) are allowed to issue certificates for a domain. It is used to prevent unauthorized CAs from issuing certificates. In this test we check if the domain has a CAA record.",
      },
    ],
  },
  {
    title: "Email",
    children: [
      {
        name: "mail-servers",
        label: "Mail servers",
        icon: CheckSquare2Icon,
        color: "green-500",
        description:
          "An internet hostname can be served by zero or more mail servers, as specified by MX (mail exchange) DNS resource records. Each server can further resolve to multiple IP addresses, for example to handle IPv4 and IPv6 clients. Thus, in practice, hosts that wish to receive email reliably are supported by many endpoint.",
      },
      {
        label: "Secure Transport (SMTP)",
      },
      {
        name: "tls",
        label: "TLS",
        icon: AlertTriangleIcon,
        color: "yellow-500",
        description:
          "Transport Layer Security (TLS) is the most widely used encryption protocol on the Internet. In combination with valid certificates, servers can establish trusted communication channels even with users who have never visited them before. Network attackers can't uncover what is being communicated, even when they can see all the traffic.",
      },
      {
        name: "certificates",
        label: "Certificates",
        icon: XSquareIcon,
        color: "gray-500",
        description:
          "A certificate is a digital document that contains a public key, some information about the entity associated with it, and a digital signature from the certificate issuer. It’s a mechanism that enables us to exchange, store, and use public keys. Being able to reliably verify the identity of a remote server is crucial in order to achieve secure encrypted communication.",
      },
      {
        name: "mta-sts",
        label: "MTA-STS",
        icon: XSquareIcon,
        color: "gray-500",
        description:
          "SMTP Mail Transfer Agent Strict Transport Security (MTA-STS) is a mechanism enabling mail service providers to declare their ability to receive Transport Layer Security (TLS) secure SMTP connections, and to specify whether sending SMTP servers should refuse to deliver to MX hosts that do not offer TLS with a trusted server certificate.",
      },
      {
        label: "Authentication and Policy",
      },
      {
        name: "spf",
        label: "SPF",
        icon: XSquareIcon,
        color: "gray-500",
        description:
          "SMTP TLS Reporting (RFC 8460), or TLS-RPT for short, describes a reporting mechanism and format by which systems sending email can share statistics and specific information about potential failures with recipient domains. Recipient domains can then use this information to both detect potential attacks and diagnose unintentional misconfigurations. TLS-RPT can be used with DANE or MTA-STS.",
      },
      {
        name: "dmarc",
        label: "DMARC",
        icon: XSquareIcon,
        color: "gray-500",
        description:
          "Domain-based Message Authentication, Reporting, and Conformance (DMARC) is a scalable mechanism by which a mail-originating organization can express domain-level policies and preferences for message validation, disposition, and reporting, that a mail-receiving organization can use to improve mail handling.",
      },
    ],
  },
];

const Navigation: React.FC<NavigationProps> = ({
  activeOption,
  clickOption,
}) => {
  return (
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
        {navigationTabs.map((tab) => (
          <div className="mb-6" key={tab.title}>
            <h1 className="font-bold">{tab.title}</h1>
            <Separator className="my-2" />
            {tab.children.map((child) =>
              child.name ? (
                <div
                  className={`flex flex-row items-center cursor-pointer mb-1 px-2 py-2 rounded-md hover:bg-gray-100 transition-colors duration-200 ease-in-out ${
                    activeOption.name === child.name && "bg-gray-100"
                  }`}
                  key={child.name}
                  onClick={() => clickOption(child)}
                >
                  <child.icon className={`w-4 h-4 text-${child.color}`} />
                  <p className="text-sm text-gray-500 ml-2">{child.label}</p>
                </div>
              ) : (
                <h2
                  key={child.label}
                  className="font-medium text-sm text-gray-800 py-2 uppercase"
                >
                  {child.label}
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
