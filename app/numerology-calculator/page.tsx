import { MdArrowBack } from 'react-icons/md'

export default function NumerologyCalculator() {
  return (
    <main className='min-h-screen max-w-screen-xl mx-auto px-6 py-12'>
      <a className='inline-flex items-center font-semibold text-primary' href='/'>
        <MdArrowBack className='mr-1 ' /> Back to HomePage
      </a>
      <h1 className='font-bold text-5xl tracking-tight'>Numerology Life Path Calculator</h1>

      <div className='mt-12'>
        <p className='text-justify'>
          Have you ever noticed yourself glancing at the clock precisely at 11:11? Or pondering why you frequently
          encounter individuals born on the same date of the month? Or why your favored number appears unexpectedly in
          various places? Numerology comprises a potent and revered system with roots stretching back thousands of
          years. Utilizing this system, Life Path Numbers and Destiny Numbers, along with other fundamental principles
          of numerology, can be readily computed.
        </p>
        <p className='font-semibold text-3xl mt-24'>Coming Soon...</p>
        <p className='mb-24'>This feature is under construction... stay tune!</p>
        <p className='text-justify'>
          The predominant form of numerology observed nowadays stems from the teachings of the renowned ancient Greek
          scholar, Pythagoras. While recognized for his mathematical prowess, Pythagoras delved beyond mere quantitative
          analysis. He espoused the notion that the material realm was a fusion of energetic frequencies embodied by
          numbers. To elucidate this concept, he devised a system correlating letters with numerical values. This
          methodology represented an exploration of the interconnectedness of numbers, positing that everything in
          existence is harmonized by intangible energies, most effectively expressed through numerical symbolism.
        </p>
      </div>
    </main>
  )
}
