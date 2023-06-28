import './globals.css'
import { Inter } from 'next/font/google'
import Head from 'next/head';

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Emmett Baker | Software Engineer',
  description: 'Emmett Baker is a Software Engineer based in the Baltimore, MD. This is his portfolio.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  )
}
