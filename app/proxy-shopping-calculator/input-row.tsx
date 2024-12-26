// components/InputRow.tsx
import React from 'react'
import { RiDeleteBin6Fill } from 'react-icons/ri'

interface InputRowProps {
  index: number
  data: { name: string; product: string; quantity: number; price: number } // Keep price and quantity as numbers
  onChange: (index: number, field: string, value: string | number) => void
  onDelete: (index: number) => void
}

const numberWithCommas = (amount: number) => {
  return amount.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')
}

const InputRow: React.FC<InputRowProps> = ({ index, data, onChange, onDelete }) => {
  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>, field: 'quantity' | 'price') => {
    const rawValue = event.target.value
    const sanitizedValue = rawValue.replace(/,/g, '') // Remove commas for internal state

    // Convert to number and handle empty input
    const numericValue = sanitizedValue ? Number(sanitizedValue) : 0
    onChange(index, field, numericValue) // Update the state with numeric value
  }

  return (
    <div className='flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-4 mb-4'>
      <button
        onClick={() => onDelete(index)}
        className='bg-red-500 text-white p-3 rounded flex items-center justify-center gap-1 w-full mt-4 md:mt-0 md:w-auto order-6 md:order-1'>
        <RiDeleteBin6Fill />
      </button>
      <div className='flex flex-col w-full order-2'>
        <label className='mb-1 text-sm font-medium'>Name (Optional)</label>
        <input
          type='text'
          value={data.name}
          onChange={(e) => onChange(index, 'name', e.target.value)}
          placeholder='Enter name'
          className='rounded w-full p-4 border border-primary bg-transparent focus:outline-none'
        />
      </div>
      <div className='flex flex-col w-full order-3'>
        <label className='mb-1 text-sm font-medium'>Product</label>
        <input
          type='text'
          value={data.product}
          onChange={(e) => onChange(index, 'product', e.target.value)}
          placeholder='Enter product'
          className='rounded w-full p-4 border border-primary bg-transparent focus:outline-none'
        />
      </div>
      <div className='flex flex-col w-full order-4'>
        <label className='mb-1 text-sm font-medium'>Quantity</label>
        <input
          type='text' // Change to text to allow formatted input
          value={numberWithCommas(data.quantity)} // Format quantity with commas for display
          onChange={(e) => handleInputChange(e, 'quantity')} // Use the same handler for quantity
          placeholder='Enter quantity'
          className='rounded w-full p-4 border border-primary bg-transparent focus:outline-none'
        />
      </div>
      <div className='flex flex-col w-full order-5'>
        <label className='mb-1 text-sm font-medium'>Price</label>
        <input
          type='text' // Keep as text to allow formatted input
          value={numberWithCommas(data.price)} // Format price with commas for display
          onChange={(e) => handleInputChange(e, 'price')} // Use the same handler for price
          placeholder='Enter price'
          className='rounded w-full p-4 border border-primary bg-transparent focus:outline-none'
        />
      </div>
    </div>
  )
}

export default InputRow
