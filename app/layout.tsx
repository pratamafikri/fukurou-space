import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { GiOwl } from 'react-icons/gi'
import { features, menus } from './menu'
import Link from 'next/link'
import Breadcrumb from './components/breadcrumb'
import PageTitle from './components/page-title'
import MobileNav from './components/mobile-nav'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Fukurou Space',
  description: 'code for nothing',
  robots: 'noindex, nofollow',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang='en'>
      <body className={`${inter.className}`}>
        <MobileNav />
        
        <div className='flex flex-col lg:flex-row min-h-screen'>
          {/* Desktop Sidebar */}
          <aside
            className='hidden lg:flex lg:w-1/4 flex-col border-r border-primary sticky top-0 left-0 h-screen overflow-y-auto [&::-webkit-scrollbar]:w-2
            [&::-webkit-scrollbar-track]:bg-jetblack
            [&::-webkit-scrollbar-thumb]:bg-primary/60
            hover:[&::-webkit-scrollbar-thumb]:bg-primary'>
            <div className='border-b border-primary py-6 sticky top-0 left-0 bg-jetblack px-6'>
              <h1 className='font-bold text-2xl text-center tracking-tight leading-snug flex justify-center items-center gap-2 mb-1'>
                <GiOwl /> Fukurou Space
              </h1>
              <p className='tracking-normal text-xs text-center text-neutral-400'>when boredom meets code</p>
            </div>

            <nav className='flex-1 py-6 px-3'>
              <Link
                href={menus[0].route}
                className='flex items-center gap-3 px-4 py-3 rounded-lg font-semibold text-sm hover:bg-primary/20 transition-colors duration-300 mb-2'>
                {menus[0].icon}
                {menus[0].name}
              </Link>

              <div className='my-4 border-t border-primary/30' />

              {features.map((application, index) => {
                return (
                  <Link
                    key={index}
                    href={application.route}
                    className='flex items-center gap-3 px-4 py-3 rounded-lg font-semibold text-sm hover:bg-primary/20 transition-colors duration-300 mb-1'>
                    {application.icon}
                    {application.name}
                  </Link>
                )
              })}
            </nav>
          </aside>

          {/* Main Content */}
          <main className='flex-1 flex flex-col w-full lg:w-3/4'>
            <header className='px-4 py-4 lg:px-6 lg:py-5 border-b border-primary sticky top-0 bg-jetblack/95 backdrop-blur-sm z-20'>
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
