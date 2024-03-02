import { MdArrowBack } from 'react-icons/md'
import BMIForm from './bmi-form'

export default function BMICalculator() {
  return (
    <main className='min-h-screen max-w-screen-lg mx-auto px-6 py-12'>
      <a className='inline-flex items-center font-semibold text-primary' href='/'>
        <MdArrowBack className='mr-1 ' /> Back to HomePage
      </a>
      <h1 className='font-bold text-4xl sm:text-5xl tracking-tight'>BMI Calculator</h1>

      <div className='mt-12'>
        <p className='text-justify mb-4'>
          An ideal body weight is everyone&apos;s dream nowadays. A healthy body consists not only of a good body
          proportion but also includes an ideal body weight. How about yours? Let&apos;s check it out using this BMI
          Calculator.
        </p>

        <BMIForm />

        <h3 className='font-bold text-lg mb-2'>What is BMI?</h3>
        <p className='text-justify mb-4'>
          Body Mass Index (BMI) is a method to calculate your ideal body weight based on your body weight and body
          height. BMI can be distinguished between ages. To calculate your BMI, you can use this equation:
          <br />
          <br />
          <code>BMI = Body Weight / Body Height * Body Height</code>
          <br />
          <i className='text-xs'>
            <sup>*</sup>Body Height in centimeters
          </i>
        </p>

        <h3 className='font-bold text-lg mb-2'>What is BMI Calculator?</h3>
        <p className='text-justify mb-2'>
          BMI Calculator is a tool to identify whether your body weight is ideal. Please note that this BMI Calculator
          is inapplicable for pregnant women and children because they have different BMI standards. Here are things
          that have to look after getting the BMI result:
        </p>
        <ul className='list-disc pl-4'>
          <li>Normal BMI is between 17-25</li>
          <li>If your BMI is more than 25, then you might be overweight.</li>
          <li>If your BMI is less than 17, then you might be underweight.</li>
          <li>
            If your BMI value is exceeds 27, it is better to get treatment immediately to prevent a decease from
            occuring
          </li>
        </ul>
      </div>
    </main>
  )
}
