import './globals.css'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

const color = "rose";

export const metadata = {
  title: 'Todo app',
  description: 'My first next.js app',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${inter.className}
      bg-cyan-950 text-cyan-100 container mx-auto p-4`}>{children}</body>
    </html>
  )
}
