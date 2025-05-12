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
    let bmi = parseInt(bmiResult)
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
    <div className='rounded border border-primary border-t-8 my-12 px-6 py-6 shadow-md shadow-primary mx-auto md:w-8/12'>
      <div className={`${result != '' ? 'hidden' : ''}`}>
        <div className='grid grid-cols-2 gap-4 w-5/6 md:w-4/5 lg:w-1/2 mx-auto mb-4'>
          <div
            className={`${
              gender == 'male' ? 'bg-primary' : ''
            } p-4 border border-b-4 border-primary rounded flex flex-col items-center hover:bg-primary hover:cursor-pointer transition duration-300`}
            onClick={() => setGender('male')}>
            <FaMars className='h-8 w-8 mb-2' />
            <span className='font-semibold'>Male</span>
          </div>
          <div
            className={`${
              gender == 'female' ? 'bg-primary' : ''
            } p-4 border border-b-4 border-primary rounded flex flex-col items-center hover:bg-primary hover:cursor-pointer transition duration-300`}
            onClick={() => setGender('female')}>
            <FaVenus className='h-8 w-8 mb-2' />
            <span className='font-semibold'>Female</span>
          </div>
        </div>
        <div className='flex flex-col gap-2'>
          <label htmlFor="">Body Height (cm)</label>
          <input
            type='number'
            placeholder='Enter your body height (cm)'
            className='rounded w-full p-4 border border-primary bg-transparent focus:outline-none'
            onChange={(e) => setHeight(e.target.value)}
            min={0}
            value={height}
            required
          />
          <label htmlFor="">Body Weight (kg)</label>
          <input
            type='number'
            placeholder='Enter your body weight (kg)'
            className='rounded w-full p-4 border border-primary bg-transparent focus:outline-none'
            onChange={(e) => setWeight(e.target.value)}
            min={0}
            value={weight}
            required
          />
        </div>
        <button
          className='disabled:bg-transparent disabled:border disabled:border-primary disabled:cursor-not-allowed rounded-full bg-primary uppercase py-2 px-10 font-semibold block mx-auto mt-12'
          onClick={() => calculateBMI()}
          disabled={!canCalculateBMI}>
          Calculate BMI
        </button>
      </div>
      <div className={`${result == '' ? 'hidden' : ''}`}>
        <h4 className='font-semibold text-center'>Your BMI result:</h4>
        <p className='mt-6 font-bold text-4xl text-center'>{result}</p>
        <p className='text-center mb-8 font-semibold'>{getCategory(result).category}</p>
        <p className='text-center mb-6'>{getCategory(result).tip}</p>

        <button
          className='rounded-full bg-primary uppercase py-2 px-10 font-semibold block mx-auto mt-12'
          onClick={() => reset()}>
          Back to calculator
        </button>
      </div>
    </div>
  )
}
