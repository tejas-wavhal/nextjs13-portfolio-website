import Navbar from '@/components/server/Navbar'
import './globals.css'
import { Inter } from 'next/font/google'
import Footer from '@/components/server/Footer'
import Providers from '../theme/providers.js'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Tejas Portfolio',
  description: 'Tejas Portfolio',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-white dark:bg-black duration-700`}>
        <Providers>
          <Navbar />
          {children}
          <Footer />
        </Providers>
      </body>
    </html>
  )
}
