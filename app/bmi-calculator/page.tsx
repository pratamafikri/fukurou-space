import BMIForm from './bmi-form'
import { Metadata } from 'next'

let pageTitle = 'BMI Calculator'

export const metadata: Metadata = {
  title: pageTitle + ' | Fukurou Space',
  description: 'Calculate your BMI.',
}

export default function BMICalculator() {
  return (
    <main className='space-y-8'>
      <BMIForm />

      <section className='space-y-6'>
        <div className='card'>
          <h3 className='subsection-title'>About This Calculator</h3>
          <p className='content-text'>
            An ideal body weight is everyone&apos;s dream nowadays. A healthy body consists not only of a good body proportion but also
            includes an ideal body weight. How about yours? Let&apos;s check it out using this BMI Calculator.
          </p>
        </div>

        <div className='card'>
          <h3 className='subsection-title'>What is BMI?</h3>
          <p className='content-text'>
            Body Mass Index (BMI) is a method to calculate your ideal body weight based on your body weight and body height. BMI can be
            distinguished between ages. To calculate your BMI, you can use this equation:
          </p>
          <div className='bg-jetblack/50 border border-primary/30 rounded-lg p-4 my-4 font-mono text-sm sm:text-base overflow-x-auto'>
            BMI = Body Weight (kg) / Body Height (m)²
          </div>
          <p className='text-xs text-neutral-400 italic'>
            * Body height is measured in meters
          </p>
        </div>

        <div className='card'>
          <h3 className='subsection-title'>How to Interpret Your Results</h3>
          <div className='space-y-3'>
            <div className='border-l-4 border-primary/60 pl-4 py-2'>
              <p className='font-semibold text-neutral-200'>BMI &lt; 18.5</p>
              <p className='text-neutral-400 text-sm'>Underweight - Consider consulting a healthcare provider</p>
            </div>
            <div className='border-l-4 border-primary pl-4 py-2'>
              <p className='font-semibold text-neutral-200'>18.5 - 24.9</p>
              <p className='text-neutral-400 text-sm'>Normal Weight - Maintain your healthy lifestyle</p>
            </div>
            <div className='border-l-4 border-yellow-500/60 pl-4 py-2'>
              <p className='font-semibold text-neutral-200'>25 - 29.9</p>
              <p className='text-neutral-400 text-sm'>Overweight - Consider increasing physical activity</p>
            </div>
            <div className='border-l-4 border-red-500/60 pl-4 py-2'>
              <p className='font-semibold text-neutral-200'>BMI ≥ 30</p>
              <p className='text-neutral-400 text-sm'>Obese - Seek professional medical advice</p>
            </div>
          </div>
        </div>

        <div className='card'>
          <h3 className='subsection-title'>Important Notes</h3>
          <ul className='space-y-2 text-neutral-300 text-sm sm:text-base'>
            <li className='flex gap-3'>
              <span className='text-primary flex-shrink-0'>•</span>
              <span>This BMI Calculator is not applicable for pregnant women and children</span>
            </li>
            <li className='flex gap-3'>
              <span className='text-primary flex-shrink-0'>•</span>
              <span>Athletes and muscular individuals may have higher BMIs that don't reflect body fat</span>
            </li>
            <li className='flex gap-3'>
              <span className='text-primary flex-shrink-0'>•</span>
              <span>Always consult with healthcare professionals for personalized advice</span>
            </li>
            <li className='flex gap-3'>
              <span className='text-primary flex-shrink-0'>•</span>
              <span>BMI is just one indicator of health, not the complete picture</span>
            </li>
          </ul>
        </div>
      </section>
    </main>
  )
}
