'use client'

import { useState } from 'react'

export default function LifePathForm() {
  const [birthdate, setBirthdate] = useState('')
  const [lifePathNumber, setLifePathNumber] = useState(0)

  const calculateLifePath = () => {
    if (!birthdate) {
      setLifePathNumber(0)
      return
    }

    const [yearStr, monthStr, dayStr] = birthdate.split('-').map((s) => s.padStart(2, '0'))
    const month = parseInt(monthStr, 10)
    const day = parseInt(dayStr, 10)
    const year = parseInt(yearStr, 10)

    const reduce = (num: number): number => {
      let sum = 0
      const numStr = String(num)
      for (let i = 0; i < numStr.length; i++) {
        sum += parseInt(numStr[i], 10)
      }
      return sum > 9 && sum !== 11 && sum !== 22 && sum !== 33 ? reduce(sum) : sum
    }

    const reducedMonth = reduce(month)
    const reducedDay = reduce(day)
    const reducedYear = reduce(year)

    let initialSum = reducedMonth + reducedDay + reducedYear

    if (initialSum === 11 || initialSum === 22 || initialSum === 33) {
      setLifePathNumber(initialSum)
    } else {
      setLifePathNumber(reduce(initialSum))
    }
  }

  return (
    <div>
      <div className='grid grid-cols-2 space-x-4 w-8/12 mx-auto mt-12 mb-4'>
        <div className='rounded border border-primary border-t-8 px-6 py-6 shadow-md shadow-primary'>
          <p className='text-center mb-2 text-xl'>
            Insert your birthdate
          </p>
          <input
            type='date'
            id='birthdate'
            value={birthdate}
            onChange={(e) => setBirthdate(e.target.value)}
            className='block rounded border-primary bg-transparent border-2 p-2 w-full'
          />
          <button
            onClick={calculateLifePath}
            className='block w-full rounded p-2 border-primary border-2 shadow-md shadow-primary hover:bg-primary transition-all duration-200 hover:-translate-x-0.5 hover:-translate-y-0.5 mt-2 font-bold'>
            Calculate
          </button>
        </div>
        <div className='rounded border border-primary border-t-8 px-6 py-6 shadow-md shadow-primary'>
          {lifePathNumber !== 0 && (
            <p className='text-center'>
              Your Life Path Number is: <p className='block font-bold text-8xl'>{lifePathNumber}</p>
            </p>
          )}
        </div>
      </div>
      <div className='rounded border border-primary border-t-8 px-6 py-6 shadow-md shadow-primary w-8/12 mx-auto mb-12'>
        <p>Numerology No. {lifePathNumber} Explained:</p>
      </div>
    </div>
  )
}
