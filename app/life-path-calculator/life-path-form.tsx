'use client'

import { useState, useRef } from 'react'
import { lifePathDescriptions } from './lifePathDescriptions'
import './style.css'

export default function LifePathForm() {
  const [lifePathNumber, setLifePathNumber] = useState(0)
  const [description, setDescription] = useState<string | null>(null)
  const [traits, setTraits] = useState<string[]>([])
  const [error, setError] = useState<string | null>(null)

  const dayRef = useRef<HTMLInputElement>(null)
  const monthRef = useRef<HTMLInputElement>(null)
  const yearRef = useRef<HTMLInputElement>(null)

  const handleInput = (
    e: React.ChangeEvent<HTMLInputElement>,
    nextRef?: React.RefObject<HTMLInputElement>,
    maxLength?: number
  ) => {
    const value = e.target.value
    if (maxLength && value.length >= maxLength && nextRef?.current) {
      nextRef.current.focus()
    }
  }

  const handleBackspace = (e: React.KeyboardEvent<HTMLInputElement>, prevRef?: React.RefObject<HTMLInputElement>) => {
    const input = e.currentTarget
    if (e.key === 'Backspace' && input.selectionStart === 0 && prevRef?.current) {
      prevRef.current.focus()
    }
  }

  const reduce = (num: number): number => {
    let sum = 0
    const numStr = String(num)
    for (let i = 0; i < numStr.length; i++) {
      sum += parseInt(numStr[i], 10)
    }
    return sum > 9 && sum !== 11 && sum !== 22 && sum !== 33 ? reduce(sum) : sum
  }
  const isValidDate = (d: number, m: number, y: number): boolean => {
    const date = new Date(y, m - 1, d)
    return date.getFullYear() === y && date.getMonth() === m - 1 && date.getDate() === d
  }

  const calculateLifePath = () => {
    const day = dayRef.current?.value ?? ''
    const month = monthRef.current?.value ?? ''
    const year = yearRef.current?.value ?? ''

    if (!day || !month || !year || year.length < 4) {
      setLifePathNumber(0)
      setDescription(null)
      setTraits([])
      setError('Please enter a valid calendar date.')
      return
    }

    const dayNum = parseInt(day, 10)
    const monthNum = parseInt(month, 10)
    const yearNum = parseInt(year, 10)

    if (isNaN(dayNum) || isNaN(monthNum) || isNaN(yearNum) || !isValidDate(dayNum, monthNum, yearNum)) {
      setLifePathNumber(0)
      setDescription(null)
      setTraits([])
      setError('Please enter a valid calendar date.')
      return
    }

    setError(null) // clear previous errors

    const reducedDay = reduce(dayNum)
    const reducedMonth = reduce(monthNum)
    const reducedYear = reduce(yearNum)

    let initialSum = reducedDay + reducedMonth + reducedYear
    let finalLifePath = initialSum

    if (![11, 22, 33].includes(initialSum)) {
      finalLifePath = reduce(initialSum)
    }

    setLifePathNumber(finalLifePath)

    const lifePathData = lifePathDescriptions[String(finalLifePath) as unknown as keyof typeof lifePathDescriptions]
    if (lifePathData) {
      setDescription(lifePathData.description)
      setTraits(lifePathData.traits)
    } else {
      setDescription('Description not available.')
      setTraits([])
    }
  }

  return (
    <div>
      <div className='rounded border w-full md:w-4/12 mx-auto border-primary border-t-8 px-6 py-6 shadow-md shadow-primary mb-8'>
        <p className='text-center mb-4 text-base font-medium'>Insert your birthdate</p>

        {/* Custom Date Input */}
        <div className='flex items-center justify-center gap-2 mb-8'>
          <input
            autoFocus
            ref={dayRef}
            type='text'
            maxLength={2}
            placeholder='DD'
            className='w-12 h-12 text-center bg-transparent focus:ring-transparent focus:ring-0 focus:outline-none '
            onChange={(e) => handleInput(e, monthRef, 2)}
          />
          <span className='text-gray-500'>/</span>
          <input
            ref={monthRef}
            type='text'
            maxLength={2}
            placeholder='MM'
            className='w-12 h-12 text-center bg-transparent focus:ring-transparent focus:ring-0 focus:outline-none '
            onChange={(e) => handleInput(e, yearRef, 2)}
            onKeyDown={(e) => handleBackspace(e, dayRef)}
          />
          <span className='text-gray-500'>/</span>
          <input
            ref={yearRef}
            type='text'
            maxLength={4}
            placeholder='YYYY'
            className='w-16 h-12 text-center bg-transparent focus:ring-transparent focus:ring-0 focus:outline-none '
            onKeyDown={(e) => handleBackspace(e, monthRef)}
          />
        </div>

        {/* Error Message */}
        {error && <p className='text-red-600 text-sm text-center mb-2'>{error}</p>}

        <button
          onClick={calculateLifePath}
          className='block w-full bg-primary rounded p-2 border-primary border-2 shadow-md shadow-primary transition-all duration-200 hover:-translate-x-0.5 hover:-translate-y-0.5 mt-2 font-bold'>
          Calculate Your Life Path Number
        </button>
      </div>

      {lifePathNumber !== 0 && (
        <div className='grid lg:grid-cols-[30%_70%] lg:space-x-4 mx-auto mb-12 w-full'>
          <div className='rounded mb-4 border border-primary border-t-8 px-6 py-6 shadow-md shadow-primary h-fit w-full lg:w-auto'>
            <p className='text-center'>
              Your Life Path Number is:
              <span className='block font-bold text-8xl'>{lifePathNumber}</span>
            </p>
          </div>
          <div className='rounded border border-primary border-t-8 px-6 py-6 shadow-md shadow-primary w-full lg:w-auto'>
            <p className='font-bold text-justify'>Numerology No. {lifePathNumber} Explained:</p>
            {description && <p className='text-justify'>{description}</p>}
            {traits.length > 0 && (
              <div className='mt-4'>
                <p className='font-bold text-xl mb-2'>Common Traits:</p>
                <ul className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4'>
                  {/* Using Tailwind CSS for grid layout */}
                  {traits.map((trait, index) => (
                    <li key={index}>{trait}</li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  )
}
