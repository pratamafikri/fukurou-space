import { Metadata } from 'next'
import BudgetForm from './budget-form'
import SimpleHeader from '../components/simple_header'

let pageTitle = '50/30/20 Budget Planner'

export const metadata: Metadata = {
  title: pageTitle + ' | Fukurou space',
  description: pageTitle,
}

export default function BudgetPlanner() {
  return (
    <main className='min-h-screen max-w-screen-lg mx-auto px-6 py-12'>
      <SimpleHeader title={pageTitle} />

      <div className='mt-12'>
        <BudgetForm />

        <p className='text-justify mb-4'>
          Making a budget can assist you in making certain choices and appreciating the peace of intellect. A
          point-by-point budget, even though it can be complex to oversee. The 50-30-20 run the show parts costs into
          fair three categories. It moreover offers proposals on how much cash to utilize for each. With some
          fundamental data, you&apos;ll get on the street to budgetary well-being.
        </p>
        <h3 className='font-bold text-lg mb-2'>50/30/20 Budget Calculator</h3>
        <p className='text-justify'>
          To begin, insert your monthly take-home income then it will be automatically calculated into suggested
          spending in three categories: 50% of net pay for needs, 30% for wants and 20% for savings and debt repayment.
        </p>

        <h3 className='font-bold text-2xl mt-4 mb-2'>What is 50/30/20 method?</h3>
        <p className='text-justify mb-4'>
          The 50-30-20 rule recommends putting 50% of your money toward needs, 30% toward wants, and 20% toward savings.
          The savings category also includes money you will need to realize your future goals. Let&apos;s take a closer
          look at each category.
        </p>

        <h4 className='font-bold text-lg mb-2'>Needs (50%)</h4>
        <p className='text-justify'>
          About half of your budget should go toward needs. These are expenses that must be met no matter what, such as:
        </p>
        <ul className='list-disc pl-4 mb-4'>
          <li className=''>Utility Bills</li>
          <li className=''>Rent or mortgage payments</li>
          <li className=''>Health care</li>
          <li className=''>Groceries</li>
        </ul>

        <h4 className='font-bold text-lg mb-2'>Wants (30%)</h4>
        <p className='text-justify'>
          You subscribe to a streaming service to watch your favorite show, not because you need the subscription to
          live. Wants are things you enjoy that you spend money on by choice, such as:
        </p>
        <ul className='list-disc pl-4 mb-4'>
          <li className=''>Subcriptions</li>
          <li className=''>Supplies for hobbies</li>
          <li className=''>Restaurant meals</li>
          <li className=''>Vacations</li>
        </ul>

        <h4 className='font-bold text-lg mb-2'>Savings (20%)</h4>
        <p className='text-justify'>
          The remaining 20% of your budget should go toward the future. You may put money in an emergency fund,
          contribute to a retirement account, or save toward a down payment on a home. Paying down debt beyond the
          minimum payment amount belongs in this category, too.
        </p>

        <p className='my-6'>
          Source:&nbsp;
          <a
            href='https://www.unfcu.org/financial-wellness/50-30-20-rule/'
            target='_blank'
            rel='noopener noreferrer'
            className='font-semibold text-primary'>
            Budgeting basics: The 50-30-20 rule
          </a>
        </p>
      </div>
    </main>
  )
}
