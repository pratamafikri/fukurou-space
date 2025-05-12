import Link from 'next/link'
import { MdArrowBack } from 'react-icons/md'
import { Metadata } from 'next'
import Pomodoro from './pomodoro'

export const metadata: Metadata = {
  title: 'Split Bill Calculator | Fukurou Space',
  description: 'Calculate your split bill cost.',
}

export default function NumerologyCalculator() {
  return (
    <main className='min-h-screen max-w-screen-xl mx-auto px-6 py-12'>
      <Link className='inline-flex items-center font-semibold text-primary' href='/'>
        <MdArrowBack className='mr-1 ' /> Back to HomePage
      </Link>
      <h1 className='font-bold text-5xl tracking-tight'>Pomodoro Timer</h1>

      <div className='mt-12'>
        <Pomodoro />

        <p className='text-justify'>
          The Pomodoro Technique is created by Francesco Cirillo for a more productive way to work and study. The
          technique uses a timer to break down work into intervals, traditionally 25 minutes in length, separated by
          short breaks. Each interval is known as a pomodoro, from the Italian word for &apos;tomato&apos;, after the
          tomato-shaped kitchen timer that Cirillo used as a university student.
        </p>
      </div>
    </main>
  )
}
