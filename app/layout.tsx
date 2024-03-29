import { ClerkProvider } from '@clerk/nextjs'
import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { ThemeProvider } from '@/providers/theme-provider'
import { cn } from '@/lib/utils'
import { Toaster } from '@/components/ui/toaster'
import ModalProvider from './provider/modal-provider'


const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'My Companion',
  description: 'Ai Companion APP',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {


  return (
    <ClerkProvider>
      <html lang="en" suppressHydrationWarning>
        <body className={cn(" bg-secondary", inter.className)}>
          <ThemeProvider attribute="class" forcedTheme="dark" enableSystem>
            <ModalProvider />
            {children}
            <Toaster />
          </ThemeProvider>
        </body>
      </html>
    </ClerkProvider>
  )
}
