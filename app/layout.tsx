import type { Metadata } from 'next'
import { Toaster } from '@/components/ui/toaster'

import './globals.css'

export const metadata: Metadata = {
  title: 'Send me BTC',
  description: 'Generate a bitcoin payment request from a new wallet',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body>
        {children}
        <Toaster />
      </body>
    </html>
  )
}
