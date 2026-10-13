import type { Metadata, Viewport } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Ledgerflow — QuickBooks MCP Platform',
  description: 'A secure workspace for connecting QuickBooks Online companies to AI-powered MCP tools.',
}

export const viewport: Viewport = {
  colorScheme: 'light',
  themeColor: '#f7f8fc',
}

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en"><body className="antialiased">{children}</body></html>
}
