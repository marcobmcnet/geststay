import './globals.css'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'GestStay',
  description: 'Gestione Soste Camper',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="it">
      <body className="bg-slate-50 text-slate-900 antialiased min-h-screen flex flex-col">
        {children}
      </body>
    </html>
  )
}