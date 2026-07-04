import { Metadata } from 'next'
import BudgetForm from './budget-form'

let pageTitle = '50/30/20 Budget Planner'

export const metadata: Metadata = {
  title: pageTitle + ' | Fukurou space',
  description: pageTitle,
}

export default function BudgetPlanner() {
  return (
    <main className='space-y-8'>
      <BudgetForm />

      <section className='space-y-6'>
        <div className='card'>
          <h3 className='subsection-title'>Introduction to Budgeting</h3>
          <p className='content-text'>
            Making a budget can assist you in making certain choices and appreciating the peace of mind. The 50-30-20 rule divides your
            income into three fair categories and offers guidance on how much cash to utilize for each. With some basic understanding,
            you&apos;ll get on the road to financial well-being.
          </p>
        </div>

        <div className='card'>
          <h3 className='subsection-title'>How to Use This Calculator</h3>
          <p className='content-text'>
            To begin, enter your monthly take-home income. The calculator will automatically compute your suggested spending in three
            categories: 50% of net pay for needs, 30% for wants, and 20% for savings and debt repayment.
          </p>
        </div>

        <div className='card'>
          <h3 className='subsection-title'>The 50/30/20 Method Explained</h3>
          <p className='content-text'>
            The 50-30-20 rule recommends allocating your income into three balanced categories. It&apos;s a simple yet effective strategy
            for achieving financial stability and building wealth over time.
          </p>
        </div>

        <div className='card'>
          <h4 className='font-bold text-lg mb-4 text-primary'>Needs (50%)</h4>
          <p className='content-text mb-4'>
            About half of your budget should go toward needs. These are expenses that must be met no matter what:
          </p>
          <ul className='space-y-2 text-neutral-300 text-sm sm:text-base'>
            <li className='flex gap-3'>
              <span className='text-blue-400 flex-shrink-0'>•</span>
              <span>Utility Bills</span>
            </li>
            <li className='flex gap-3'>
              <span className='text-blue-400 flex-shrink-0'>•</span>
              <span>Rent or mortgage payments</span>
            </li>
            <li className='flex gap-3'>
              <span className='text-blue-400 flex-shrink-0'>•</span>
              <span>Health care</span>
            </li>
            <li className='flex gap-3'>
              <span className='text-blue-400 flex-shrink-0'>•</span>
              <span>Groceries and food</span>
            </li>
            <li className='flex gap-3'>
              <span className='text-blue-400 flex-shrink-0'>•</span>
              <span>Transportation and insurance</span>
            </li>
          </ul>
        </div>

        <div className='card'>
          <h4 className='font-bold text-lg mb-4 text-purple-400'>Wants (30%)</h4>
          <p className='content-text mb-4'>
            Wants are things you enjoy that you spend money on by choice, not necessities for living. These should comprise about 30% of
            your budget:
          </p>
          <ul className='space-y-2 text-neutral-300 text-sm sm:text-base'>
            <li className='flex gap-3'>
              <span className='text-purple-400 flex-shrink-0'>•</span>
              <span>Streaming subscriptions</span>
            </li>
            <li className='flex gap-3'>
              <span className='text-purple-400 flex-shrink-0'>•</span>
              <span>Hobby supplies and equipment</span>
            </li>
            <li className='flex gap-3'>
              <span className='text-purple-400 flex-shrink-0'>•</span>
              <span>Restaurant meals and dining out</span>
            </li>
            <li className='flex gap-3'>
              <span className='text-purple-400 flex-shrink-0'>•</span>
              <span>Entertainment and events</span>
            </li>
            <li className='flex gap-3'>
              <span className='text-purple-400 flex-shrink-0'>•</span>
              <span>Vacations and travel</span>
            </li>
          </ul>
        </div>

        <div className='card'>
          <h4 className='font-bold text-lg mb-4 text-green-400'>Savings (20%)</h4>
          <p className='content-text mb-4'>
            The remaining 20% of your budget should go toward building your future. This includes emergency funds, retirement savings,
            debt repayment, and other financial goals:
          </p>
          <ul className='space-y-2 text-neutral-300 text-sm sm:text-base'>
            <li className='flex gap-3'>
              <span className='text-green-400 flex-shrink-0'>•</span>
              <span>Emergency fund (3-6 months of expenses)</span>
            </li>
            <li className='flex gap-3'>
              <span className='text-green-400 flex-shrink-0'>•</span>
              <span>Retirement account contributions</span>
            </li>
            <li className='flex gap-3'>
              <span className='text-green-400 flex-shrink-0'>•</span>
              <span>Down payment savings for major purchases</span>
            </li>
            <li className='flex gap-3'>
              <span className='text-green-400 flex-shrink-0'>•</span>
              <span>Extra debt payments beyond minimums</span>
            </li>
            <li className='flex gap-3'>
              <span className='text-green-400 flex-shrink-0'>•</span>
              <span>Investment and long-term goals</span>
            </li>
          </ul>
        </div>

        <div className='card bg-primary/10 border-primary'>
          <p className='text-neutral-300 text-sm'>
            <span className='font-semibold text-primary'>Learn more:</span>{' '}
            <a
              href='https://www.unfcu.org/financial-wellness/50-30-20-rule/'
              target='_blank'
              rel='noopener noreferrer'
              className='text-primary hover:underline transition-all duration-300'>
              Budgeting Basics: The 50-30-20 Rule
            </a>
          </p>
        </div>
      </section>
    </main>
  )
}
