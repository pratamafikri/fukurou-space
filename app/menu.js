import { TbPercentage } from 'react-icons/tb'
import { GiTomato, GiWeightScale } from 'react-icons/gi'
import { IoCalendarNumber } from 'react-icons/io5'

export const applications = [
  {
    name: '50/30/20 Budget Planner',
    route: '/budget-planner',
    icon: <TbPercentage className='h-12 w-12 group-hover:text-neutral-100' />,
  },
  {
    name: 'BMI Calculator',
    route: '/bmi-calculator',
    icon: <GiWeightScale className='h-12 w-12 group-hover:text-neutral-100' />,
  },
  {
    name: 'Life Path Calculator',
    route: '/life-path-calculator',
    icon: <IoCalendarNumber className='h-12 w-12 group-hover:text-neutral-100' />,
  },
  {
    name: 'Pomodoro Timer',
    route: '/pomodoro-timer',
    icon: <GiTomato className='h-12 w-12 group-hover:text-neutral-100' />,
  },
]
