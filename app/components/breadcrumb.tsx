'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { features, menus } from '../menu'

export default function Breadcrumb() {
  const pathname = usePathname()

  // Generate breadcrumb items from pathname
  const generateBreadcrumbs = () => {
    const paths = pathname.split('/').filter(Boolean)
    const breadcrumbs = [{ name: 'Home', path: '/' }]

    // Create a mapping of routes to names from menu
    const routeNameMap = new Map()
    menus.forEach((menu) => {
      routeNameMap.set(menu.route, menu.name)
    })
    features.forEach((feature) => {
      routeNameMap.set(feature.route, feature.name)
    })

    let currentPath = ''
    paths.forEach((path) => {
      currentPath += `/${path}`
      // Look up the name from menu first, otherwise convert from kebab-case
      const name =
        routeNameMap.get(currentPath) ||
        path
          .split('-')
          .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
          .join(' ')
      breadcrumbs.push({ name, path: currentPath })
    })

    return breadcrumbs
  }

  const breadcrumbs = generateBreadcrumbs()

  return (
    <nav className='text-xs sm:text-sm text-neutral-400' aria-label='Breadcrumb'>
      <ol className='flex flex-wrap items-center gap-1 sm:gap-2'>
        {breadcrumbs.map((breadcrumb, index) => (
          <li key={breadcrumb.path} className='flex items-center gap-1 sm:gap-2 truncate'>
            {index > 0 && <span className='text-neutral-500 flex-shrink-0'>/</span>}
            {index === breadcrumbs.length - 1 ? (
              <span className='font-semibold text-primary truncate'>
                {breadcrumb.name}
              </span>
            ) : (
              <Link
                href={breadcrumb.path}
                className='text-neutral-400 hover:text-primary transition-colors duration-300 truncate'>
                {breadcrumb.name}
              </Link>
            )}
          </li>
        ))}
      </ol>
    </nav>
  )
}
