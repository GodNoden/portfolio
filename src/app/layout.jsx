import NavBar from '@/components/NavBar'
import './globals.css'
import { Montserrat } from 'next/font/google'
import Footer from '@/components/Footer'

const inter = Montserrat({
  subsets: ['latin'],
  variable: '--font-mont',
})

export const metadata = {
  title: 'Noe\'s Portfolio',
  description: 'Page to showcase my projects and abilities',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${inter.variable} font-mont bg-light w-full min-h-screen `}>
      <body className={inter.className}>
        <NavBar />
        {children}
        <Footer />
      </body>
    </html>
  )
}
