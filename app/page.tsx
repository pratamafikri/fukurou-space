import { Metadata } from 'next'
import Link from 'next/link'
import dynamic from 'next/dynamic'

const LiveClock = dynamic(() => import('./components/live-clock'), { ssr: false })
import { features } from './menu'

export const metadata: Metadata = {
  title: 'Home | Fukurou Space',
  description: 'Fukurou Space. everyday instruments for the curious mind',
}

const toolMeta: Record<string, { description: string }> = {
  '/pomodoro-timer': { description: 'Time your focus sessions' },
  '/bmi-calculator': { description: 'Calculate your body mass index' },
  '/unit-converter': { description: 'Convert between any units' },
  '/budget-planner': { description: 'Master the 50/30/20 rule' },
  '/life-path-calculator': { description: 'Discover your numerology path' },
}

const shelf1 = ['/pomodoro-timer', '/bmi-calculator', '/unit-converter']
const shelf2 = ['/budget-planner', '/life-path-calculator']

function ToolCard({ route }: { route: string }) {
  const feature = features.find((f) => f.route === route)
  const meta = toolMeta[route]
  if (!feature || !meta) return null

  return (
    <Link
      href={route}
      className='group block p-6 rounded-lg transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:shadow-primary/15'>
      <div className='text-primary mb-4 flex justify-center'>{feature.icon}</div>
      <h3 className='font-display text-lg text-center text-neutral-100 group-hover:text-primary transition-colors duration-300'>
        {feature.name}
      </h3>
      <p className='text-sm text-neutral-500 text-center mt-2'>{meta.description}</p>
    </Link>
  )
}

export default function Home() {
  return (
    <main className='space-y-16 sm:space-y-24 pb-16 sm:pb-24'>
      {/* Hero */}
      <section className='text-center pt-8 sm:pt-16 space-y-6'>
        <LiveClock />
        <div className='space-y-3'>
          <h1 className='font-display text-2xl sm:text-3xl text-primary tracking-tight'>
            Fukurou Space
          </h1>
          <p className='text-sm sm:text-base text-neutral-500 tracking-wide'>
            everyday instruments for the curious mind
          </p>
        </div>
      </section>

      {/* Shelf 1 — 3 tools */}
      <section className='shelf-shadow'>
        <div className='shelf pt-8'>
          <div className='grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6'>
            {shelf1.map((route) => (
              <ToolCard key={route} route={route} />
            ))}
          </div>
        </div>
      </section>

      {/* Shelf 2 — 2 tools */}
      <section className='shelf-shadow'>
        <div className='shelf pt-8'>
          <div className='grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 max-w-2xl mx-auto'>
            {shelf2.map((route) => (
              <ToolCard key={route} route={route} />
            ))}
          </div>
        </div>
      </section>

      {/* Footer shelf */}
      <section className='shelf-shadow'>
        <div className='shelf pt-8'>
          <p className='text-center text-sm text-neutral-500'>
            built by{' '}
            <a
              href='https://fikri-mf.vercel.app'
              target='_blank'
              rel='noopener noreferrer'
              className='text-primary hover:text-primary/80 transition-colors duration-300'>
              Fikri
            </a>
          </p>
        </div>
      </section>
    </main>
  )
}
