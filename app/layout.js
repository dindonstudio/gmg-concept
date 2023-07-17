"use client";

import { Inter } from "next/font/google";
import { Lenis as ReactLenis, useLenis } from "@studio-freight/react-lenis";

const inter = Inter({ subsets: ["latin"] });

const metadata = {
  title: 'GMG - Concept',
  description: "Société de conseil indépendante et à taille humaine qui imagine et conçoit des outils decommunication créatifs et impactants tous secteurs confondus (immobilier, food, cosmétique, mode….).",
}

export default function RootLayout({ children }) {
  const lenis = useLenis(({ scroll }) => {


  });

  return (
   
      <html  lang="en">
          <head>

    <title>{metadata.title}</title>
        <meta name="description" content={metadata.description} />
    </head>
        <body >{children}</body>
      </html>
  );
}
