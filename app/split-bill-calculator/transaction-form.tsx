'use client'

import { useState } from 'react'
import InputRow from './input-row'
import { HiOutlinePlus } from 'react-icons/hi'

function numberWithCommas(amount: number) {
  if (amount % 1 === 0) {
    return amount.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')
  }
  return amount.toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ',')
}

export default function TransactionForm() {
  const [rows, setRows] = useState([{ product: '', quantity: 1, price: 0 }])
  const [serviceCharge, setServiceCharge] = useState('')
  const [deliveryCost, setDeliveryCost] = useState('')
  const [discount, setDiscount] = useState('')
  const [personCount, setPersonCount] = useState('2')

  const handleAddRow = () => {
    setRows([...rows, { product: '', quantity: 1, price: 0 }])
  }

  const handleChange = (index: number, field: string, value: string | number) => {
    const newRows = [...rows]
    newRows[index] = { ...newRows[index], [field]: value }
    setRows(newRows)
  }

  const handleDelete = (index: number) => {
    const newRows = rows.filter((_, i) => i !== index)
    setRows(newRows)
  }

  const handleNumberInputChange =
    (setter: React.Dispatch<React.SetStateAction<string>>) => (event: React.ChangeEvent<HTMLInputElement>) => {
      const rawValue = event.target.value
      const sanitizedValue = rawValue.replace(/,/g, '') // Remove commas for internal state
      setter(sanitizedValue) // Update the state with sanitized value
    }

  // Calculate subtotal for a given row
  const calculateSubtotal = (row: { quantity: number; price: number }) => {
    return row.quantity * row.price
  }

  // Calculate total subtotal for all rows
  const calculateTotalSubtotal = () => {
    return rows.reduce((acc, row) => acc + calculateSubtotal(row), 0)
  }

  // Calculate totals
  const calculateTotalFee = () => {
    const totalServiceCharge = Number(serviceCharge.replace(/,/g, '')) || 0
    const totalDeliveryCost = Number(deliveryCost.replace(/,/g, '')) || 0
    const totalDiscount = Number(discount.replace(/,/g, '')) || 0

    return {
      totalServiceCharge,
      totalDeliveryCost,
      totalDiscount,
    }
  }

  const totalFee = calculateTotalFee()

  const calculateGrandTotal = () => {
    const totalSubtotal = calculateTotalSubtotal()
    const totalFees = totalFee.totalDeliveryCost + totalFee.totalServiceCharge - totalFee.totalDiscount
    return totalSubtotal + totalFees
  }

  // Calculate After Split for each row
  const calculateAfterSplit = () => {
    return calculateGrandTotal() / Number(personCount)
  }

  return (
    <div>
      <div className='rounded border border-primary border-t-8 mt-12 px-6 py-6 shadow-md shadow-primary mx-auto md:w-3/4'>
        <h4 className='font-bold text-lg mb-4'>Transaction List</h4>
        <hr className='mb-4 border-primary/50' />
        {rows.map((row, index) => (
          <InputRow key={index} index={index} data={row} onChange={handleChange} onDelete={handleDelete} />
        ))}
        <button onClick={handleAddRow} className='bg-blue-500 text-white p-2 rounded mt-4 flex items-center gap-1'>
          <HiOutlinePlus /> Add Transaction
        </button>
        <hr className='my-4 border-primary/50' />
        <div className='flex justify-end items-end space-x-4'>
          <p className=''>Subtotal:</p>
          <p className='font-bold text-2xl'>{numberWithCommas(calculateTotalSubtotal())}</p>
        </div>
      </div>
      {/* Miscellaneous Section */}
      <div className='rounded border border-primary border-t-8 mt-8 px-6 py-6 shadow-md shadow-primary mx-auto md:w-3/4 space-y-4'>
        <h4 className='font-bold text-lg mb-4'>Miscellaneous</h4>
        <hr className='mb-4 border-primary/50' />
        <div className='flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-4'>
          <div className='flex flex-col w-full'>
            <label className='mb-1 text-sm font-medium'>Service Charge</label>
            <input
              type='text'
              value={numberWithCommas(Number(serviceCharge))}
              onChange={handleNumberInputChange(setServiceCharge)}
              placeholder='Enter service charge'
              className='rounded w-full p-4 border border-primary bg-transparent focus:outline-none'
              inputMode='numeric'
            />
          </div>
          <div className='flex flex-col w-full'>
            <label className='mb-1 text-sm font-medium'>Delivery Cost</label>
            <input
              type='text'
              value={numberWithCommas(Number(deliveryCost))}
              onChange={handleNumberInputChange(setDeliveryCost)}
              placeholder='Enter delivery cost'
              className='rounded w-full p-4 border border-primary bg-transparent focus:outline-none'
              inputMode='numeric'
            />
          </div>
          <div className='flex flex-col w-full'>
            <label className='mb-1 text-sm font-medium'>Discount (in number)</label>
            <input
              type='text'
              value={numberWithCommas(Number(discount))}
              onChange={handleNumberInputChange(setDiscount)}
              placeholder='Enter discount'
              className='rounded w-full p-4 border border-primary bg-transparent focus:outline-none'
              inputMode='numeric'
            />
          </div>
        </div>
        <hr className='my-4 border-primary/50' />
        <div className='flex justify-end items-end space-x-4'>
          <p className=''>Grand Total:</p>
          <p className='font-bold text-2xl'>{numberWithCommas(calculateGrandTotal())}</p>
        </div>
      </div>
      <div className='rounded border border-primary border-t-8 mt-8 px-6 py-6 shadow-md shadow-primary mx-auto md:w-3/4 space-y-4'>
        <h4 className='font-bold text-lg mb-4'>Result</h4>
        <hr className='mb-4 border-primary/50' />
        <div className='flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-4'>
          <div className='flex flex-col w-full'>
            <p>Number of persons</p>
            <input
              type='text'
              value={numberWithCommas(Number(personCount))}
              onChange={handleNumberInputChange(setPersonCount)}
              placeholder='Enter number of persons'
              className='rounded w-full p-4 border border-primary bg-transparent focus:outline-none'
              inputMode='numeric'
            />
          </div>
          <div className='flex flex-col w-full'>
            <p>Each person has to pay:</p>
            <p className='font-bold text-6xl'>{numberWithCommas(calculateAfterSplit())}</p>
          </div>
        </div>
      </div>
    </div>
  )
}
