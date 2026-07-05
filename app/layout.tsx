import './globals.css'
import type { Metadata } from 'next'
import { Inter, DM_Serif_Display, JetBrains_Mono } from 'next/font/google'
import { GiOwl } from 'react-icons/gi'
import Link from 'next/link'
import Breadcrumb from './components/breadcrumb'
import PageTitle from './components/page-title'
import MobileNav from './components/mobile-nav'
import NavLinks from './components/nav-links'

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' })
const dmSerif = DM_Serif_Display({ weight: '400', subsets: ['latin'], variable: '--font-display' })
const jetbrains = JetBrains_Mono({ subsets: ['latin'], variable: '--font-mono' })

export const metadata: Metadata = {
  title: 'Fukurou Space',
  description: 'code for nothing',
  robots: 'noindex, nofollow',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang='en'>
      <body className={`${inter.variable} ${dmSerif.variable} ${jetbrains.variable} font-sans`}>
        <MobileNav />
        
        <div className='flex flex-col lg:flex-row min-h-screen'>
          {/* Desktop Sidebar */}
            <aside
            className='hidden lg:flex lg:w-1/4 flex-col border-r border-primary/30 sticky top-0 left-0 h-screen overflow-y-auto [&::-webkit-scrollbar]:w-2
            [&::-webkit-scrollbar-track]:bg-canvas
            [&::-webkit-scrollbar-thumb]:bg-primary/40
            hover:[&::-webkit-scrollbar-thumb]:bg-primary/70'>
            <div className='border-b border-primary py-6 sticky top-0 left-0 bg-canvas px-6'>
              <div className='owl-glow flex justify-center items-center mb-1'>
                <GiOwl className='h-8 w-8 text-primary' />
              </div>
              <h1 className='font-display text-2xl text-center tracking-tight leading-snug text-primary'>
                Fukurou Space
              </h1>
              <p className='tracking-normal text-xs text-center text-neutral-400 mt-1'>when boredom meets code</p>
            </div>

            <nav className='flex-1 py-6 px-3'>
              <NavLinks />
            </nav>
          </aside>

          {/* Main Content */}
          <main className='flex-1 flex flex-col w-full lg:w-3/4'>
            <header className='px-4 py-4 lg:px-6 lg:py-5 border-b border-primary/30 sticky top-0 bg-canvas/95 backdrop-blur-sm z-20'>
              <Breadcrumb />
            </header>
            
            <div className='flex-1 mx-auto w-full px-4 py-6 lg:px-6 lg:py-8 max-w-7xl'>
              <PageTitle />
              {children}
            </div>
          </main>
        </div>
      </body>
    </html>
  )
}
