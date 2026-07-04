import { TbHome, TbPercentage } from 'react-icons/tb'
import { GiTomato, GiWeightScale } from 'react-icons/gi'
import { IoCalendarNumber } from 'react-icons/io5'
import { RiExchangeBoxFill } from 'react-icons/ri'

export const menus = [
  {
    name: 'Home',
    route: '/',
    icon: <TbHome className='h-8 w-8 group-hover:text-neutral-100' />,
  },
];

export const features = [
  {
    name: '50/30/20 Budget Planner',
    route: '/budget-planner',
    icon: <TbPercentage className='h-8 w-8 group-hover:text-neutral-100' />,
  },
  {
    name: 'BMI Calculator',
    route: '/bmi-calculator',
    icon: <GiWeightScale className='h-8 w-8 group-hover:text-neutral-100' />,
  },
  {
    name: 'Life Path Calculator',
    route: '/life-path-calculator',
    icon: <IoCalendarNumber className='h-8 w-8 group-hover:text-neutral-100' />,
  },
  {
    name: 'Pomodoro Timer',
    route: '/pomodoro-timer',
    icon: <GiTomato className='h-8 w-8 group-hover:text-neutral-100' />,
  },
  {
    name: 'Unit Converter',
    route: '/unit-converter',
    icon: <RiExchangeBoxFill className='h-8 w-8 group-hover:text-neutral-100' />,
  },
].reverse()
