"use client";
import { Inter } from "next/font/google";
import { Lenis as ReactLenis, useLenis } from "@studio-freight/react-lenis";

const inter = Inter({ subsets: ["latin"] });

// export const metadata = {
//   title: 'GMG - Concept',
//   description: "Société de conseil indépendante et à taille humaine qui imagine et conçoit des outils decommunication créatifs et impactants tous secteurs confondus (immobilier, food, cosmétique, mode….).",
// }

export default function RootLayout({ children }) {
  const lenis = useLenis(({ scroll }) => {

  });
  return (
    <ReactLenis root options={{ lerp: 0.08, wheelMultiplier: 0.8 }}>
      <html lang="en">
        <body className={inter.className}>{children}</body>
      </html>
    </ReactLenis>
  );
}
