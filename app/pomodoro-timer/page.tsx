import { Metadata } from 'next'
import Pomodoro from './pomodoro'
import SimpleHeader from '../components/simple_header'

let pageTitle = 'Pomodoro Timer'

export const metadata: Metadata = {
  title: pageTitle + ' | Fukurou Space',
  description: 'Break down your work intervals to boost productivity.',
}

export default function NumerologyCalculator() {
  return (
    <main className='max-w-screen-xl mx-auto px-6 py-12'>
      <SimpleHeader title={pageTitle} />

      <div className='mt-12'>
        <Pomodoro />

        <p className='text-justify mb-4 tracking-wide'>
          Ever feel like time slips through your fingers when you&apos;re trying to focus? The Pomodoro Technique offers
          a refreshing approach. Imagine a simple kitchen timer, ticking away for 25 focused minutes of work, followed
          by a short, refreshing 5-minute break. This is the essence of a &quot;Pomodoro&quot; - Italian for tomato,
          inspired by the original tomato-shaped kitchen timers. After four such work-break cycles, you reward yourself
          with a longer, more substantial break, typically 15-30 minutes.
        </p>

        <p className='text-justify mb-4 tracking-wide'>
          The Pomodoro Technique is created by Francesco Cirillo for a more productive way to work and study. The
          technique uses a timer to break down work into intervals, traditionally 25 minutes in length, separated by
          short breaks. Each interval is known as a pomodoro, from the Italian word for &apos;tomato&apos;, after the
          tomato-shaped kitchen timer that Cirillo used as a university student.
        </p>

        <p className='text-justify mb-4 tracking-wide'>
          This seemingly straightforward method packs a punch in boosting productivity and managing distractions. The
          structured work intervals encourage intense focus, making it easier to dive into tasks without feeling
          overwhelmed by their sheer size. The short, regular breaks prevent burnout and allow your mind to briefly
          wander, often leading to renewed clarity and creativity when you return to your work. By breaking down work
          into manageable chunks, the Pomodoro Technique helps you stay on track, improve your time estimation skills,
          and ultimately accomplish more with less mental fatigue. It&apos;s a simple yet surprisingly powerful tool to
          reclaim your focus and make the most of your time.
        </p>
      </div>
    </main>
  )
}
