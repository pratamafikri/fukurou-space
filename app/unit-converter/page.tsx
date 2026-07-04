import { Metadata } from 'next'
import Converter from './converter'

let pageTitle = 'Unit Converter'

export const metadata: Metadata = {
  title: pageTitle + ' | Fukurou Space',
  description: 'Convert any metrics as you want.',
}

export default function UnitConverter() {
  return (
    <main className='space-y-8'>
      <Converter />

      <section className='space-y-6'>
        <div className='card'>
          <h3 className='subsection-title'>Quick Unit Conversions</h3>
          <p className='content-text'>
            Convert between different measurement systems with ease. Whether you need to convert temperatures, distances, weights, or volumes,
            this tool makes it simple and instantaneous.
          </p>
        </div>

        <div className='card'>
          <h3 className='subsection-title'>Supported Categories</h3>
          <ul className='grid grid-cols-1 sm:grid-cols-2 gap-3 text-neutral-300 text-sm sm:text-base'>
            <li className='flex gap-2'>
              <span className='text-primary flex-shrink-0'>•</span>
              <span>Temperature (°C, °F, K)</span>
            </li>
            <li className='flex gap-2'>
              <span className='text-primary flex-shrink-0'>•</span>
              <span>Length & Distance (m, ft, mi, km)</span>
            </li>
            <li className='flex gap-2'>
              <span className='text-primary flex-shrink-0'>•</span>
              <span>Weight & Mass (kg, lbs, oz, g)</span>
            </li>
            <li className='flex gap-2'>
              <span className='text-primary flex-shrink-0'>•</span>
              <span>Volume (L, ml, gal, cup)</span>
            </li>
          </ul>
        </div>
      </section>
    </main>
  )
}
