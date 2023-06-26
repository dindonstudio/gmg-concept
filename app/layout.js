
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'GMG - Concept',
  description: "Société de conseil indépendante et à taille humaine qui imagine et conçoit des outils decommunication créatifs et impactants tous secteurs confondus (immobilier, food, cosmétique, mode….).",
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  )
}
