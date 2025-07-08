import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

// Adicione esta parte de metadados
export const metadata: Metadata = {
  title: 'Strada Express - Fretes de Cargas Secas',
  description: 'Transporte de cargas secas de até 2 toneladas com agilidade e segurança. Atuamos em Indaiatuba e região.',
  icons: {
    icon: '/favicon.ico', // Adicione um favicon na pasta public
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-BR">
      <body className={inter.className}>{children}</body>
    </html>
  )
}