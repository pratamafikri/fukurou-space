import Link from 'next/link'
import { features, menus } from '../menu'

interface NavLinksProps {
  onClick?: () => void
}

export default function NavLinks({ onClick }: NavLinksProps) {
  return (
    <>
      <Link
        href={menus[0].route}
        onClick={onClick}
        className='flex items-center gap-3 px-4 py-3 rounded-lg font-semibold text-sm hover:bg-primary/20 transition-colors duration-300 mb-2'>
        {menus[0].icon}
        {menus[0].name}
      </Link>

      <div className='my-4 border-t border-primary/30' />

      {features.map((application) => (
        <Link
          key={application.route}
          href={application.route}
          onClick={onClick}
          className='flex items-center gap-3 px-4 py-3 rounded-lg font-semibold text-sm hover:bg-primary/20 transition-colors duration-300 mb-1'>
          {application.icon}
          {application.name}
        </Link>
      ))}
    </>
  )
}
