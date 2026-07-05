import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Home | Fukurou Space',
  description: 'Fukurou Space. solving daily problem with algorithms',
}

export default function Home() {
  return (
    <main className='space-y-8'>
      <div className='py-12 px-4 sm:px-0'>
        <div className='space-y-6'>
          <div className='card'>
            <h2 className='section-title text-primary'>Welcome to Fukurou Space 🦉</h2>
            <p className='content-text'>
              A collection of useful tools and calculators built during my free time. Each application is designed to solve everyday 
              problems with elegant algorithms and intuitive interfaces.
            </p>
          </div>

          <div className='card'>
            <h3 className='subsection-title'>What&apos;s Inside?</h3>
            <ul className='space-y-3'>
              <li className='flex gap-3'>
                <span className='text-primary flex-shrink-0'>→</span>
                <span className='content-text m-0'><strong>Budget Planner:</strong> Master the 50/30/20 budgeting rule</span>
              </li>
              <li className='flex gap-3'>
                <span className='text-primary flex-shrink-0'>→</span>
                <span className='content-text m-0'><strong>BMI Calculator:</strong> Track your body mass index</span>
              </li>
              <li className='flex gap-3'>
                <span className='text-primary flex-shrink-0'>→</span>
                <span className='content-text m-0'><strong>Life Path Calculator:</strong> Discover your numerology</span>
              </li>
              <li className='flex gap-3'>
                <span className='text-primary flex-shrink-0'>→</span>
                <span className='content-text m-0'><strong>Pomodoro Timer:</strong> Boost productivity with time blocking</span>
              </li>
              <li className='flex gap-3'>
                <span className='text-primary flex-shrink-0'>→</span>
                <span className='content-text m-0'><strong>Unit Converter:</strong> Convert between different units</span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <footer className='px-4 sm:px-0'>
        <div className='space-y-3 text-center'>
          <p className='content-text'>
            Hi. I built all of these when I was in my free time. Hope it can help and entertain you.
          </p>
          <p className='text-neutral-400'>
            Sincerely yours,{' '}
            <a
              href='https://fikri-mf.vercel.app'
              rel='noopener noreferrer'
              target='_blank'
              className='font-semibold text-primary hover:text-primary/80 transition-colors duration-300'>
              Fikri
            </a>
          </p>
        </div>
      </footer>
    </main>
  )
}
