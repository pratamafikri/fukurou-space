import LifePathForm from './life-path-form'
import { Metadata } from 'next'

const pageTitle = 'Life Path Calculator'

export const metadata: Metadata = {
  title: pageTitle + ' | Fukurou space',
  description: pageTitle,
}

export default function LifePathCalculator() {
  return (
    <main className='space-y-8'>
      <LifePathForm />

      <section className='space-y-6'>
        <div className='card'>
          <h3 className='subsection-title'>What is Your Life Path?</h3>
          <p className='content-text'>
            Imagine your birthdate holds a hidden code, revealing clues about your life&apos;s journey. A Numerology Life Path Calculator
            helps you crack this code. It takes your birth day, month, and year, and through simple addition, reduces them to a single digit
            or a master number (11, 22, 33). This final number is your Life Path.
          </p>
        </div>

        <div className='card'>
          <h3 className='subsection-title'>Understanding Life Path Numbers</h3>
          <p className='content-text mb-4'>
            Think of your Life Path number as a core vibration that resonates with your being. Each number carries unique energies and
            characteristics that influence your personality and life direction:
          </p>
          <div className='space-y-3'>
            <div className='border-l-4 border-primary/60 pl-4 py-2'>
              <p className='font-semibold text-neutral-200'>Life Path 7</p>
              <p className='text-neutral-400 text-sm'>Deep thinker with a thirst for knowledge and spiritual understanding</p>
            </div>
            <div className='border-l-4 border-primary/60 pl-4 py-2'>
              <p className='font-semibold text-neutral-200'>Life Path 5</p>
              <p className='text-neutral-400 text-sm'>Values freedom, embraces change, and seeks adventure</p>
            </div>
            <div className='border-l-4 border-primary/60 pl-4 py-2'>
              <p className='font-semibold text-neutral-200'>Life Path 1</p>
              <p className='text-neutral-400 text-sm'>Natural leader with determination and independence</p>
            </div>
            <div className='border-l-4 border-primary/60 pl-4 py-2'>
              <p className='font-semibold text-neutral-200'>Master Numbers (11, 22, 33)</p>
              <p className='text-neutral-400 text-sm'>Rare and powerful numbers with elevated spiritual significance</p>
            </div>
          </div>
        </div>

        <div className='card'>
          <h3 className='subsection-title'>How It Works</h3>
          <p className='content-text mb-4'>
            The calculator performs numerological calculations effortlessly, giving you your Life Path number without manual effort. This
            number isn&apos;t a fixed prediction, but rather a blueprint highlighting your inherent talents, potential challenges, and the
            general direction your life might take.
          </p>
        </div>

        <div className='card'>
          <h3 className='subsection-title'>Self-Discovery Tool</h3>
          <p className='content-text'>
            Using a Numerology Life Path Calculator is like uncovering a personal roadmap. It offers valuable insights into your strengths,
            potential obstacles, and overarching life themes. It&apos;s a tool for self-discovery, providing a unique perspective on your
            potential and purpose as you navigate your individual path.
          </p>
        </div>
      </section>
    </main>
  )
}
