let moduleId: "www_http" | "www_https" | "www_tls" | "www_certificates";

export interface Child {
  id?: typeof moduleId;
  label?: string;
  title?: string;
  description?: string;
}

interface Module {
  title: string;
  children: Child[];
}

export const modules: Module[] = [
  {
    title: "WWW",
    children: [
      {
        title: "PROTOCOLS",
      },
      {
        id: "www_http",
        label: "HTTP (80)",
        description:
          "To observe your HTTP implementation, we submit a request to the homepage of your site on port 80, follow all redirections (even when they take us to other domain names), and record the returned HTTP headers.",
      },
      {
        id: "www_https",
        label: "HTTP (443)",
        description:
          "To observe your HTTPS implementation, we submit a request to the homepage of your site on port 443, follow all redirections (even when they take us to other domain names), and record the returned HTTP headers. We use the most recent set of headers returned from the tested hostname for further tests such as HSTS and HPKP.",
      },
      // {
      //   title: "SECURE TRANSPORT",
      // },
      // {
      //   id: "www_tls",
      //   label: "TLS",
      //   description:
      //     "Transport Layer Security (TLS) is the most widely used encryption protocol on the Internet. In combination with valid certificates, servers can establish trusted communication channels even with users who have never visited them before. Network attackers can't uncover what is being communicated, even when they can see all the traffic.",
      // },
      // {
      //   id: "www_certificates",
      //   label: "Certificates",
      //   description:
      //     "A certificate is a digital document that contains a public key, some information about the entity associated with it, and a digital signature from the certificate issuer. It’s a mechanism that enables us to exchange, store, and use public keys. Being able to reliably verify the identity of a remote server is crucial in order to achieve secure encrypted communication.",
      // },
    ],
  },
];
