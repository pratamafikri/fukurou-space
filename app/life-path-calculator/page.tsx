import LifePathForm from './life-path-form'
import SimpleHeader from '../components/simple_header'
import { Metadata } from 'next'

let pageTitle = 'Life Path Calculator'

export const metadata: Metadata = {
  title: pageTitle + ' | Fukurou space',
  description: pageTitle,
}

export default function NumerologyCalculator() {
  return (
    <main className='min-h-screen max-w-screen-xl mx-auto px-6 py-12'>
      <SimpleHeader title={pageTitle} />

      <div className='mt-12'>
        <LifePathForm />
        <p className='text-justify mb-2'>
          Imagine your birthdate holds a hidden code, revealing clues about your life&apos;s journey. A Numerology Life
          Path Calculator helps you crack this code. It takes your birth day, month, and year, and through simple
          addition, reduces them to a single digit or a master number (11, 22, 33). This final number is your Life Path.
        </p>
        <p className='text-justify mb-2'>
          Think of your Life Path number as a core vibration that resonates with your being. Each number, from 1 to 9
          and the master numbers, carries unique energies and characteristics. For example, a Life Path 7 often
          indicates a deep thinker with a thirst for knowledge, while a Life Path 5 suggests someone who values freedom
          and embraces change.
        </p>
        <p className='text-justify mb-2'>
          The calculator swiftly performs these calculations, giving you your Life Path number without manual effort.
          This number isn&apos;t a fixed prediction, but rather a blueprint highlighting your inherent talents,
          potential challenges, and the general direction your life might take. It&apos;s a lens through which you can
          better understand yourself and your tendencies.
        </p>
        <p className='text-justify'>
          Using a Numerology Life Path Calculator is like uncovering a personal roadmap. It offers valuable insights
          into your strengths, potential obstacles, and overarching life themes. It&apos;s a tool for self-discovery,
          providing a unique perspective on your potential and purpose as you navigate your individual path.
        </p>
      </div>
    </main>
  )
}
