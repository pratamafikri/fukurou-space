import Link from 'next/link'
import { MdArrowBack } from 'react-icons/md'
import TransactionForm from './transaction-form'

export default function NumerologyCalculator() {
  return (
    <main className='min-h-screen max-w-screen-xl mx-auto px-6 py-12'>
      <Link className='inline-flex items-center font-semibold text-primary' href='/'>
        <MdArrowBack className='mr-1 ' /> Back to HomePage
      </Link>
      <h1 className='font-bold text-5xl tracking-tight'>Split Bill Calculator</h1>

      <div className='mt-12'>
        <p className='text-justify'>
          Tired of awkward moments and endless debates when splitting bills with friends or family? Our Split Bill
          Calculator is here to save the day! Simply enter the total bill amount, add the number of people sharing the
          cost, and watch as our app instantly calculates each persons share. No more mental math or heated arguments!
        </p>

        <TransactionForm />
      </div>
    </main>
  )
}
