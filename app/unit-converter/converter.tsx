'use client'

import { useState } from 'react'

const units = {
  length: {
    meter: 1,
    kilometer: 0.001,
    centimeter: 100,
    millimeter: 1000,
    inch: 39.3701,
    foot: 3.28084,
    yard: 1.09361,
    mile: 0.000621371,
  },
  mass: {
    gram: 1,
    kilogram: 0.001,
    milligram: 1000,
    pound: 0.00220462,
    ounce: 0.035274,
  },
  time: {
    second: 1,
    minute: 1 / 60,
    hour: 1 / 3600,
    day: 1 / 86400,
  },
  temperature: {
    celsius: 'celsius',
    fahrenheit: 'fahrenheit',
    kelvin: 'kelvin',
  },
  area: {
    'square meter': 1,
    'square kilometer': 1e-6,
    'square mile': 3.861e-7,
    'square yard': 1.19599,
    'square foot': 10.7639,
    'square inch': 1550,
    hectare: 0.0001,
    acre: 0.000247105,
  },
  volume: {
    liter: 1,
    milliliter: 1000,
    'cubic meter': 0.001,
    'cubic inch': 61.0237,
    'cubic foot': 0.0353147,
    gallon: 0.264172,
    quart: 1.05669,
  },
  energy: {
    joule: 1,
    kilojoule: 0.001,
    calorie: 0.239006,
    kilocalorie: 0.000239006,
    'watt hour': 0.000278,
  },
  pressure: {
    pascal: 1,
    bar: 1e-5,
    atm: 9.869e-6,
    'pound per square inch': 0.000145038,
  },
  speed: {
    'meter per second': 1,
    'kilometer per hour': 3.6,
    'mile per hour': 2.23694,
    knot: 1.94384,
    'foot per second': 3.28084,
  },
  digital: {
    bit: 1,
    byte: 0.125,
    kilobyte: 0.00012207,
    megabyte: 1.1921e-7,
    gigabyte: 1.164e-10,
    terabyte: 1.1369e-13,
  },
}

const isTemperature = (category: string) => category === 'temperature'

function convert(category: string, value: number, from: string, to: string): number {
  if (isTemperature(category)) {
    // Handle temperature conversion manually
    if (from === to) return value
    if (from === 'celsius') {
      return to === 'fahrenheit' ? (value * 9) / 5 + 32 : value + 273.15
    }
    if (from === 'fahrenheit') {
      return to === 'celsius' ? ((value - 32) * 5) / 9 : ((value - 32) * 5) / 9 + 273.15
    }
    if (from === 'kelvin') {
      return to === 'celsius' ? value - 273.15 : ((value - 273.15) * 9) / 5 + 32
    }
  }

  const unitMap = units[category as keyof typeof units] as Record<string, number>
  return (value / unitMap[from]) * unitMap[to]
}

export default function Converter() {
  const [category, setCategory] = useState('length')
  const [inputUnit, setInputUnit] = useState('meter')
  const [outputUnit, setOutputUnit] = useState('kilometer')
  const [inputValue, setInputValue] = useState('')
  const [outputValue, setOutputValue] = useState('')

  const handleConvert = (val: string) => {
    const num = parseFloat(val)
    if (isNaN(num)) {
      setOutputValue('')
      return
    }
    const result = convert(category, num, inputUnit, outputUnit)
    setOutputValue(result.toString())
  }

  const handleCategoryChange = (cat: string) => {
    setCategory(cat)
    const unitKeys = Object.keys(units[cat as keyof typeof units])
    setInputUnit(unitKeys[0])
    setOutputUnit(unitKeys[1] || unitKeys[0])
    setInputValue('')
    setOutputValue('')
  }

  const currentUnits = Object.keys(units[category as keyof typeof units])

  return (
    <div className='card my-12 max-w-2xl mx-auto border-t-4 border-t-primary animate-fade-in'>
      <div className='form-group'>
        <label htmlFor='category' className='form-label'>
          Unit Category
        </label>
        <select id='category' value={category} onChange={(e) => handleCategoryChange(e.target.value)} className='form-input'>
          {Object.keys(units).map((cat) => (
            <option key={cat} value={cat} className='bg-jetblack'>
              {cat[0].toUpperCase() + cat.slice(1)}
            </option>
          ))}
        </select>
      </div>

      <div className='border-t border-primary/20 my-6' />

      {/* Input Section */}
      <div className='grid grid-cols-1 sm:grid-cols-2 gap-6 mb-8'>
        <div className='form-group'>
          <label htmlFor='inputUnit' className='form-label'>
            From Unit
          </label>
          <select id='inputUnit' value={inputUnit} onChange={(e) => setInputUnit(e.target.value)} className='form-input'>
            {currentUnits.map((unit) => (
              <option key={unit} value={unit} className='bg-jetblack'>
                {unit[0].toUpperCase() + unit.slice(1)}
              </option>
            ))}
          </select>
        </div>
        <div className='form-group'>
          <label htmlFor='inputValue' className='form-label'>
            Value
          </label>
          <input
            id='inputValue'
            type='text'
            placeholder='Enter value'
            value={inputValue}
            onChange={(e) => {
              setInputValue(e.target.value)
              handleConvert(e.target.value)
            }}
            className='form-input'
          />
        </div>
      </div>

      {/* Arrow or separator */}
      <div className='flex justify-center mb-8'>
        <div className='text-primary text-2xl'>⇄</div>
      </div>

      {/* Output Section */}
      <div className='grid grid-cols-1 sm:grid-cols-2 gap-6'>
        <div className='form-group'>
          <label htmlFor='outputUnit' className='form-label'>
            To Unit
          </label>
          <select
            id='outputUnit'
            value={outputUnit}
            onChange={(e) => {
              setOutputUnit(e.target.value)
              handleConvert(inputValue)
            }}
            className='form-input'>
            {currentUnits.map((unit) => (
              <option key={unit} value={unit} className='bg-jetblack'>
                {unit[0].toUpperCase() + unit.slice(1)}
              </option>
            ))}
          </select>
        </div>
        <div className='form-group'>
          <label htmlFor='outputValue' className='form-label'>
            Result
          </label>
          <input
            id='outputValue'
            type='text'
            placeholder='Result'
            value={outputValue}
            readOnly
            className='form-input bg-jetblack/50 cursor-default'
          />
        </div>
      </div>
    </div>
  )
}
