import { Metadata } from 'next'
import Pomodoro from './pomodoro'

const pageTitle = 'Pomodoro Timer'

export const metadata: Metadata = {
  title: pageTitle + ' | Fukurou Space',
  description: 'Break down your work intervals to boost productivity.',
}

export default function PomodoroTimer() {
  return (
    <main className='space-y-8'>
      <Pomodoro />

      <section className='space-y-6'>
        <div className='card'>
          <h3 className='subsection-title'>What is the Pomodoro Technique?</h3>
          <p className='content-text'>
            Ever feel like time slips through your fingers when you&apos;re trying to focus? The Pomodoro Technique offers a refreshing
            approach. Imagine a simple kitchen timer, ticking away for 25 focused minutes of work, followed by a short, refreshing 5-minute
            break. This is the essence of a &quot;Pomodoro&quot; - Italian for tomato, inspired by the original tomato-shaped kitchen timers.
          </p>
        </div>

        <div className='card'>
          <h3 className='subsection-title'>How It Works</h3>
          <p className='content-text mb-4'>
            The Pomodoro Technique was created by Francesco Cirillo to provide a more productive way to work and study. The technique
            breaks down work into intervals, traditionally 25 minutes in length, separated by short breaks. After four such work-break
            cycles, you reward yourself with a longer, more substantial break of 15-30 minutes.
          </p>
          <div className='space-y-3'>
            <div className='bg-jetblack/50 border border-primary/20 rounded-lg p-4'>
              <p className='font-semibold text-primary mb-1'>Focus Block: 25 minutes</p>
              <p className='text-sm text-neutral-400'>Intense work on a single task</p>
            </div>
            <div className='bg-jetblack/50 border border-primary/20 rounded-lg p-4'>
              <p className='font-semibold text-primary mb-1'>Short Break: 5 minutes</p>
              <p className='text-sm text-neutral-400'>Rest and recharge</p>
            </div>
            <div className='bg-jetblack/50 border border-primary/20 rounded-lg p-4'>
              <p className='font-semibold text-primary mb-1'>Long Break: 15-30 minutes</p>
              <p className='text-sm text-neutral-400'>After completing 4 pomodoros</p>
            </div>
          </div>
        </div>

        <div className='card'>
          <h3 className='subsection-title'>Why It Works</h3>
          <p className='content-text mb-4'>
            This seemingly straightforward method packs a punch in boosting productivity and managing distractions:
          </p>
          <ul className='space-y-2 text-neutral-300 text-sm sm:text-base'>
            <li className='flex gap-3'>
              <span className='text-primary flex-shrink-0'>✓</span>
              <span>Structured work intervals encourage intense focus</span>
            </li>
            <li className='flex gap-3'>
              <span className='text-primary flex-shrink-0'>✓</span>
              <span>Makes tasks feel less overwhelming</span>
            </li>
            <li className='flex gap-3'>
              <span className='text-primary flex-shrink-0'>✓</span>
              <span>Prevents burnout with regular breaks</span>
            </li>
            <li className='flex gap-3'>
              <span className='text-primary flex-shrink-0'>✓</span>
              <span>Improves time estimation skills</span>
            </li>
            <li className='flex gap-3'>
              <span className='text-primary flex-shrink-0'>✓</span>
              <span>Minimizes context switching and distractions</span>
            </li>
          </ul>
        </div>
      </section>
    </main>
  )
}
