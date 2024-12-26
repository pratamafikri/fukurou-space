import Link from 'next/link'
import { MdArrowBack } from 'react-icons/md'
import TransactionForm from './transaction-form'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Proxy Shopping Calculator | Fukurou Space',
  description: 'Calculate your proxy shopping cost.',
}

export default function NumerologyCalculator() {
  return (
    <main className='min-h-screen max-w-screen-xl mx-auto px-6 py-12'>
      <Link className='inline-flex items-center font-semibold text-primary' href='/'>
        <MdArrowBack className='mr-1 ' /> Back to HomePage
      </Link>
      <h1 className='font-bold text-5xl tracking-tight'>Proxy Shopping Calculator</h1>

      <div className='mt-12'>
        <p className='text-justify'>
          Tired of guessing how much your proxy shopping will cost? Our app simplifies the process with a powerful cost
          calculator. Quickly estimate shipping costs, fees, and potential discounts.
        </p>

        <TransactionForm />
      </div>
    </main>
  )
}
