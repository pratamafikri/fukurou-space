'use client'

import React, { useEffect, useState } from 'react'

export default function BudgetForm() {
  const [earning, setEarning] = useState('')
  const [inputEarning, setInputEarning] = useState('')

  useEffect(() => {
    let numberEarning = parseFloat(earning)

    let needs = 0
    let wants = 0
    let savings = 0
    if (numberEarning) {
      needs = numberEarning * 0.5
      wants = numberEarning * 0.3
      savings = numberEarning * 0.2
    }
    const primaryText = document.getElementById('amount-primary')
    if (primaryText) primaryText.innerHTML = numberWithCommas(needs)
    const secondaryText = document.getElementById('amount-secondary')
    if (secondaryText) secondaryText.innerHTML = numberWithCommas(wants)
    const tertiaryText = document.getElementById('amount-tertiary')
    if (tertiaryText) tertiaryText.innerHTML = numberWithCommas(savings)
  }, [earning])

  function numberWithCommas(amount: number) {
    if (amount % 1 === 0) {
      return amount.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')
    }
    return amount.toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ',')
  }

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const rawValue = event.target.value
    const sanitizedValue = rawValue.replace(/,/g, '')
    setEarning(sanitizedValue)

    const numericValue = rawValue.replace(/\D/g, '') // Remove non-numeric characters
    const formattedValue = numericValue.replace(/\B(?=(\d{3})+(?!\d))/g, ',') // Add comma separators every three digits
    setInputEarning(formattedValue)
  }
  return (
    <div className='rounded border border-primary border-t-8 my-12 px-6 py-6 shadow-md shadow-primary mx-auto md:w-1/2'>
      <h4 className='font-bold text-lg mb-4'>The 50/30/20 Calculator</h4>
      <p className='mb-4'>Most common effective method to budgeting your money.</p>
      <hr className='mb-4 border-primary/50' />
      <div className=''>
        <p className='text-sm mb-4'>How much do you earn in a month (after tax)?</p>
        <div className='mb-4'>
          <input
            type='text'
            className='rounded w-full p-4 border border-primary bg-transparent focus:outline-none'
            placeholder='Enter amount'
            min='0'
            onInput={handleInputChange}
            value={inputEarning}
          />
        </div>
        <h4 className='font-bold mb-4'>Your results:</h4>
        <p className='font-bold uppercase text-xs'>Needs</p>
        <p id='amount-primary' className='text-2xl mb-4'></p>
        <p className='font-bold uppercase text-xs'>Wants</p>
        <p id='amount-secondary' className='text-2xl mb-4'></p>
        <p className='font-bold uppercase text-xs'>Savings</p>
        <p id='amount-tertiary' className='text-2xl'></p>
      </div>
    </div>
  )
}
