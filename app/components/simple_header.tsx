import Link from 'next/link'
import { MdArrowBack } from 'react-icons/md'

interface SimpleHeaderProps {
  title: string
  link?: string
}

export default function SimpleHeader({ title, link }: SimpleHeaderProps) {
  const href = link || '/'

  return (
    <>
      <Link className='inline-flex items-center gap-1 font-semibold text-primary hover:text-primary/80 transition-colors duration-300 mb-6' href={href}>
        <MdArrowBack className='h-5 w-5' />
        <span className='text-sm'>Back {href === '/' ? 'to Home' : ''}</span>
      </Link>
      <h1 className='text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight mb-6'>{title}</h1>
    </>
  )
}
