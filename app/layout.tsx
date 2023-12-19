import './globals.css'
import type { Metadata } from 'next'
import { Poppins } from 'next/font/google'

const poppins = Poppins({
  weight: ['800', '700', '600', '500','400', '300'],
  subsets: ['latin'],
  display: 'swap',
  preload: true
})

export const metadata: Metadata = {
 icons: '/favicon.png',
  title: 'RESET FROM DIABETES',
  description: 'ResetMethod for Diabeteis patients',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={poppins.className}>{children}</body>
    </html>
  )
}
