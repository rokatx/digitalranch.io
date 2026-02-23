import type { Metadata } from 'next'
import { Inter, JetBrains_Mono } from 'next/font/google'
import './globals.css'
import { Navbar } from '@/components/layout/Navbar'
import { Footer } from '@/components/layout/Footer'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
})

const jetbrainsMono = JetBrains_Mono({
  subsets: ['latin'],
  variable: '--font-mono',
})

export const metadata: Metadata = {
  title: 'Digital Ranch Technologies LLC',
  description:
    'Technology solutions for the agricultural and ranch industries. Home of RANCHGRIT — comprehensive ranch management software.',
  keywords: [
    'ranch management',
    'agriculture technology',
    'ag-tech',
    'cattle management',
    'livestock software',
    'RANCHGRIT',
    'Digital Ranch Technologies',
  ],
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${inter.variable} ${jetbrainsMono.variable}`}>
      <body className="font-sans">
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  )
}
