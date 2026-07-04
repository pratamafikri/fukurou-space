'use client'

import { useState } from 'react'
import { FaMars, FaVenus } from 'react-icons/fa'

export default function BMIForm() {
  const [height, setHeight] = useState('')
  const [weight, setWeight] = useState('')
  const [gender, setGender] = useState('male')
  const [result, setResult] = useState('')

  const canCalculateBMI = weight !== '' && height !== ''

  function calculateBMI() {
    const intWeight = parseInt(weight)
    const intHeight = parseInt(height) / 100

    let bmi = intWeight / (intHeight * intHeight)

    console.log(intWeight, intHeight, bmi)

    setResult(bmi.toFixed(2))
  }

  function getCategory(bmiResult: string): { category: string; tip: string } {
    let bmi = parseFloat(bmiResult)
    let category: string
    let tip: string

    if (gender === 'male') {
      if (bmi < 18.5) {
        category = 'Underweight'
        tip = 'Prioritize nutrient-rich foods to fuel your body and consider strength training to build muscle mass.'
      } else if (bmi >= 18.5 && bmi < 25) {
        category = 'Normal weight'
        tip = 'Maintain a balanced diet and active lifestyle for overall health and wellbeing.'
      } else if (bmi >= 25 && bmi < 30) {
        category = 'Overweight'
        tip = 'Focus on portion control and regular exercise to achieve a healthy weight.'
      } else if (bmi >= 30) {
        category = 'Obese'
        tip = 'Seek professional support and implement gradual lifestyle changes for sustainable weight management.'
      } else {
        category = ''
        tip = ''
      }
    } else {
      // Female
      if (bmi < 18.5) {
        category = 'Underweight'
        tip = 'Prioritize nutrient-rich foods to fuel your body and consider strength training to build muscle mass.'
      } else if (bmi >= 18.5 && bmi < 24) {
        category = 'Normal weight'
        tip = 'Maintain a balanced diet and active lifestyle for overall health and wellbeing.'
      } else if (bmi >= 24 && bmi < 29) {
        category = 'Overweight'
        tip = 'Focus on portion control and regular exercise to achieve a healthy weight.'
      } else if (bmi >= 29) {
        category = 'Obese'
        tip = 'Seek professional support and implement gradual lifestyle changes for sustainable weight management.'
      } else {
        category = ''
        tip = ''
      }
    }

    return { category, tip }
  }

  function reset() {
    setGender('male')
    setHeight('')
    setWeight('')
    setResult('')
  }

  return (
    <div className='card my-12 max-w-2xl mx-auto border-t-4 border-t-primary'>
      {result === '' ? (
        <div className='space-y-6 animate-fade-in'>
          {/* Gender Selection */}
          <div>
            <p className='form-label'>Select Gender</p>
            <div className='grid grid-cols-2 gap-3 sm:gap-4'>
              <button
                onClick={() => setGender('male')}
                className={`p-4 rounded-lg border-2 transition-all duration-300 flex flex-col items-center gap-2 ${
                  gender === 'male'
                    ? 'border-primary bg-primary/20'
                    : 'border-primary/30 hover:border-primary/60'
                }`}>
                <FaMars className='h-6 w-6 sm:h-8 sm:w-8' />
                <span className='font-semibold text-sm'>Male</span>
              </button>
              <button
                onClick={() => setGender('female')}
                className={`p-4 rounded-lg border-2 transition-all duration-300 flex flex-col items-center gap-2 ${
                  gender === 'female'
                    ? 'border-primary bg-primary/20'
                    : 'border-primary/30 hover:border-primary/60'
                }`}>
                <FaVenus className='h-6 w-6 sm:h-8 sm:w-8' />
                <span className='font-semibold text-sm'>Female</span>
              </button>
            </div>
          </div>

          {/* Input Fields */}
          <div className='form-group'>
            <label htmlFor='height' className='form-label'>
              Body Height <span className='text-neutral-400'>(cm)</span>
            </label>
            <input
              id='height'
              autoFocus
              type='number'
              placeholder='Enter your body height'
              className='form-input'
              onChange={(e) => setHeight(e.target.value)}
              min={0}
              value={height}
              required
            />
          </div>

          <div className='form-group'>
            <label htmlFor='weight' className='form-label'>
              Body Weight <span className='text-neutral-400'>(kg)</span>
            </label>
            <input
              id='weight'
              type='number'
              placeholder='Enter your body weight'
              className='form-input'
              onChange={(e) => setWeight(e.target.value)}
              min={0}
              value={weight}
              required
            />
          </div>

          {/* Calculate Button */}
          <button
            onClick={() => calculateBMI()}
            disabled={!canCalculateBMI}
            className='btn-primary w-full py-4 text-lg font-bold uppercase'>
            Calculate BMI
          </button>
        </div>
      ) : (
        <div className='space-y-6 text-center animate-fade-in'>
          <h3 className='text-lg font-semibold text-neutral-300'>Your BMI Result</h3>
          
          <div className='space-y-2 py-8 border border-primary/30 rounded-lg bg-primary/10'>
            <p className='text-4xl sm:text-5xl font-bold text-primary'>{result}</p>
            <p className='text-xl sm:text-2xl font-semibold text-neutral-200'>
              {getCategory(result).category}
            </p>
          </div>

          <div className='bg-jetblack/50 border border-primary/20 rounded-lg p-4 text-left'>
            <p className='text-neutral-300 text-sm sm:text-base'>{getCategory(result).tip}</p>
          </div>

          <button
            onClick={() => reset()}
            className='btn-secondary w-full py-3 text-lg font-bold uppercase'>
            Calculate Again
          </button>
        </div>
      )}
    </div>
  )
}
