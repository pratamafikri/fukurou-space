import { Metadata } from 'next'
import Link from 'next/link'
import { GiOwl } from 'react-icons/gi'
import { applications } from './menu'

export const metadata: Metadata = {
  title: 'Home | Fukurou Space',
  description: 'Fukurou Space. solving daily problem with algorithms',
}

export default function Home() {
  const sortedApplications = applications.reverse()

  return (
    <main className='min-h-screen max-w-screen-xl mx-auto px-6 py-12 flex flex-col justify-between gap-24'>
      <div>
        <div className='mb-16'>
          <h1 className='font-bold text-3xl md:text-4xl lg:text-5xl text-center tracking-tight leading-snug flex justify-center items-center gap-2 mb-2'>
            <GiOwl /> Fukurou Space
          </h1>
          <p className='tracking-normal text-center'>when boredom meets code</p>
        </div>
        <div className='grid auto-rows-fr grid-cols-2 lg:grid-cols-3 gap-4'>
          {sortedApplications.map((application, index) => {
            return (
              <Link
                key={index}
                href={application.route}
                className='border border-primary rounded-lg group shadow-md shadow-primary hover:bg-primary hover:cursor-pointer lg:hover:scale-105 transition duration-300 flex flex-col md:flex-row items-center space-x-0 space-y-4 md:space-y-0 md:space-x-4 p-4'>
                {application.icon}
                <h1 className='text-center font-semibold uppercase group-hover:text-neutral-100'>{application.name}</h1>
              </Link>
            )
          })}
        </div>
      </div>

      <footer>
        <p className='text-center'>
          Hi. I built all of these when I was in my free time. Hope it can help and entertain you.
        </p>
        <p className='text-center'>
          Sincerely yours,{' '}
          <a
            href='https://fikri-mf.vercel.app'
            rel='noferrer noopenner'
            target='_blank'
            className='font-semibold text-teal-400'>
            Fikri
          </a>
        </p>
      </footer>
    </main>
  )
}
