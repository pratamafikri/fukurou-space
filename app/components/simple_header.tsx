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
      <Link className='inline-flex items-center font-semibold text-primary' href={href}>
        <MdArrowBack className='mr-1 ' /> Back
        {href === '/' ? ' to HomePage' : ''}
      </Link>
      <h1 className='font-bold text-4xl sm:text-5xl tracking-tight'>{title}</h1>
    </>
  )
}
