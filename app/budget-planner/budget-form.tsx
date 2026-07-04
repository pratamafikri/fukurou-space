'use client'

import React, { useState } from 'react'
import { MdAutoGraph } from 'react-icons/md'

export default function BudgetForm() {
  const [earning, setEarning] = useState('')

  function numberWithCommas(amount: number) {
    if (amount % 1 === 0) {
      return amount.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')
    }
    return amount.toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ',')
  }

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const rawValue = event.target.value
    const numericValue = rawValue.replace(/\D/g, '')
    setEarning(numericValue)
  }

  const getDisplayValue = () => {
    if (!earning) return ''
    return earning.replace(/\B(?=(\d{3})+(?!\d))/g, ',')
  }

  const numberEarning = parseFloat(earning) || 0
  const needs = numberEarning * 0.5
  const wants = numberEarning * 0.3
  const savings = numberEarning * 0.2

  return (
    <div className='card my-12 max-w-2xl mx-auto border-t-4 border-t-primary animate-fade-in'>
      <div className='flex items-center gap-3 mb-6'>
        <MdAutoGraph className='h-6 w-6 text-primary' />
        <h2 className='text-2xl font-bold'>The 50/30/20 Rule</h2>
      </div>
      
      <p className='text-neutral-300 mb-6'>
        Master your finances using the most effective budgeting method. Split your income into three categories:
      </p>

      <div className='bg-jetblack/50 border border-primary/20 rounded-lg p-4 mb-8 space-y-2 text-sm'>
        <div className='flex justify-between'>
          <span className='text-neutral-400'>50% →</span>
          <span className='text-primary font-semibold'>Needs (housing, food, utilities)</span>
        </div>
        <div className='flex justify-between'>
          <span className='text-neutral-400'>30% →</span>
          <span className='text-primary font-semibold'>Wants (entertainment, dining out)</span>
        </div>
        <div className='flex justify-between'>
          <span className='text-neutral-400'>20% →</span>
          <span className='text-primary font-semibold'>Savings (emergency fund, investments)</span>
        </div>
      </div>

      <div className='form-group'>
        <label htmlFor='income' className='form-label'>
          Monthly Income <span className='text-neutral-400'>(after tax)</span>
        </label>
        <input
          id='income'
          type='text'
          className='form-input text-lg'
          placeholder='Enter your monthly income'
          onChange={handleInputChange}
          value={getDisplayValue()}
        />
      </div>

      {earning && (
        <div className='grid grid-cols-1 sm:grid-cols-3 gap-4 mt-8 animate-slide-in-up'>
          {/* Needs */}
          <div className='bg-gradient-to-br from-blue-500/10 to-blue-500/5 border border-blue-500/30 rounded-lg p-6 text-center'>
            <p className='text-xs font-bold uppercase text-neutral-400 mb-2'>Needs</p>
            <p className='text-3xl font-bold text-blue-400 mb-1'>{numberWithCommas(needs)}</p>
            <p className='text-xs text-neutral-500'>50% of income</p>
          </div>

          {/* Wants */}
          <div className='bg-gradient-to-br from-purple-500/10 to-purple-500/5 border border-purple-500/30 rounded-lg p-6 text-center'>
            <p className='text-xs font-bold uppercase text-neutral-400 mb-2'>Wants</p>
            <p className='text-3xl font-bold text-purple-400 mb-1'>{numberWithCommas(wants)}</p>
            <p className='text-xs text-neutral-500'>30% of income</p>
          </div>

          {/* Savings */}
          <div className='bg-gradient-to-br from-green-500/10 to-green-500/5 border border-green-500/30 rounded-lg p-6 text-center'>
            <p className='text-xs font-bold uppercase text-neutral-400 mb-2'>Savings</p>
            <p className='text-3xl font-bold text-green-400 mb-1'>{numberWithCommas(savings)}</p>
            <p className='text-xs text-neutral-500'>20% of income</p>
          </div>
        </div>
      )}
    </div>
  )
}
