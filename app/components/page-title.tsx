'use client'

import { usePathname } from 'next/navigation'
import { menus, features } from '../menu'

export default function PageTitle() {
  const pathname = usePathname()

  // Combine all menu items
  const allMenuItems = [...menus, ...features]

  // Find the matching menu item based on current pathname
  const currentPage = allMenuItems.find((item) => item.route === pathname)

  return (
    <h1 className='text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight mb-8 animate-slide-in-up'>
      {currentPage?.name || 'Page Not Found'}
    </h1>
  )
}
