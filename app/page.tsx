import Link from 'next/link'
import { GiBlackHoleBolas } from 'react-icons/gi'

export default function Home() {
  const applications = [
    {
      name: 'Budget Planner',
      route: '/budget-planner',
    },
    {
      name: 'BMI Calculator',
      route: '/bmi-calculator',
    },
    // {
    //   name: 'Numerology Life Path Calculator',
    //   route: '/numerology-calculator',
    // },
    {
      name: 'Split Bill Calculator',
      route: '/split-bill-calculator'
    },
  ]

  const sortedApplications = applications.reverse()

  return (
    <main className='min-h-screen max-w-screen-xl mx-auto px-6 py-12 flex flex-col justify-between gap-24'>
      <div>
        <div className='mb-16'>
          <h1 className='font-bold text-3xl md:text-4xl lg:text-5xl text-center tracking-tight leading-snug flex justify-center items-center gap-2 mb-2'>
            Fukurou Space <GiBlackHoleBolas />
          </h1>
          <p className='tracking-normal text-center'>solving daily problem with algorithm</p>
        </div>
        <div className='grid auto-rows-fr grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2 lg:gap-4'>
          {sortedApplications.map((application, index) => {
            return (
              <Link
                key={index}
                href={application.route}
                className='border rounded-lg p-8 group hover:bg-neutral-100 hover:cursor-pointer lg:hover:scale-105 transition duration-300 flex items-center justify-center'>
                <h1 className='text-center font-semibold text-2xl uppercase group-hover:text-jetblack'>
                  {application.name}
                </h1>
              </Link>
            )
          })}
        </div>
      </div>

      <footer>
        <p className='text-center'>Hi. I built all these tools when I was in my free time. I hope it can help you.</p>
        <p className='text-center'>
          Sincerely yours,{' '}
          <a
            href='https://fikri-mf.vercel.app'
            rel='noferrer noopenner'
            target='_blank'
            className='font-semibold text-teal-400'>
            Fikri
          </a>{' '}
          [2024]
        </p>
      </footer>
    </main>
  )
}
