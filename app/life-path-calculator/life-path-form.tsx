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
    <div className='space-y-6'>
      <div className='card max-w-md mx-auto border-t-4 border-t-primary'>
        <h2 className='text-2xl font-bold text-center mb-6'>Enter Your Birthdate</h2>

        {/* Custom Date Input */}
        <div className='flex items-center justify-center gap-2 sm:gap-3 mb-8 bg-jetblack/50 rounded-lg p-4 border border-primary/20'>
          <input
            autoFocus
            ref={dayRef}
            type='text'
            maxLength={2}
            placeholder='DD'
            className='w-14 sm:w-16 h-14 sm:h-16 text-center text-2xl font-bold bg-transparent focus:ring-transparent focus:ring-0 focus:outline-none border border-primary/30 rounded hover:border-primary transition-colors duration-300'
            onChange={(e) => handleInput(e, monthRef, 2)}
          />
          <span className='text-primary/60 text-2xl'>/</span>
          <input
            ref={monthRef}
            type='text'
            maxLength={2}
            placeholder='MM'
            className='w-14 sm:w-16 h-14 sm:h-16 text-center text-2xl font-bold bg-transparent focus:ring-transparent focus:ring-0 focus:outline-none border border-primary/30 rounded hover:border-primary transition-colors duration-300'
            onChange={(e) => handleInput(e, yearRef, 2)}
            onKeyDown={(e) => handleBackspace(e, dayRef)}
          />
          <span className='text-primary/60 text-2xl'>/</span>
          <input
            ref={yearRef}
            type='text'
            maxLength={4}
            placeholder='YYYY'
            className='w-20 sm:w-24 h-14 sm:h-16 text-center text-2xl font-bold bg-transparent focus:ring-transparent focus:ring-0 focus:outline-none border border-primary/30 rounded hover:border-primary transition-colors duration-300'
            onKeyDown={(e) => handleBackspace(e, monthRef)}
          />
        </div>

        {/* Error Message */}
        {error && (
          <div className='bg-red-500/10 border border-red-500/30 rounded-lg p-3 mb-4'>
            <p className='text-red-400 text-sm text-center'>{error}</p>
          </div>
        )}

        <button
          onClick={calculateLifePath}
          className='btn-primary w-full py-4 text-lg font-bold uppercase'>
          Calculate Life Path
        </button>
      </div>

      {/* Results */}
      {lifePathNumber !== 0 && (
        <div className='grid grid-cols-1 lg:grid-cols-[1fr_2fr] gap-6 animate-slide-in-up'>
          {/* Life Path Number */}
          <div className='card border-t-4 border-t-primary h-fit'>
            <p className='text-neutral-300 text-sm mb-2 text-center'>Your Life Path Number</p>
            <div className='bg-gradient-to-br from-primary/20 to-primary/5 border border-primary/30 rounded-xl p-8 text-center'>
              <span className='block font-bold text-7xl sm:text-8xl text-primary'>{lifePathNumber}</span>
            </div>
          </div>

          {/* Description */}
          <div className='card border-t-4 border-t-primary'>
            <h3 className='text-xl font-bold mb-4 text-primary'>Numerology Path {lifePathNumber}</h3>
            {description && <p className='text-neutral-300 leading-relaxed mb-6'>{description}</p>}
            
            {traits.length > 0 && (
              <div>
                <p className='font-bold text-lg mb-3 text-neutral-200'>Common Traits:</p>
                <ul className='grid grid-cols-2 gap-2'>
                  {traits.map((trait, index) => (
                    <li key={index} className='flex items-center gap-2 text-sm text-neutral-300'>
                      <span className='text-primary'>✓</span>
                      <span>{trait}</span>
                    </li>
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
