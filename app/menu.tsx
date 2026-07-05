import { TbHome, TbPercentage } from 'react-icons/tb'
import { GiTomato, GiWeightScale } from 'react-icons/gi'
import { IoCalendarNumber } from 'react-icons/io5'
import { RiExchangeBoxFill } from 'react-icons/ri'

const NAV_ICON_CLASS = 'h-8 w-8 group-hover:text-neutral-100'

export const menus = [
  {
    name: 'Home',
    route: '/',
    icon: <TbHome className={NAV_ICON_CLASS} />,
  },
];

export const features = [
  {
    name: '50/30/20 Budget Planner',
    route: '/budget-planner',
    icon: <TbPercentage className={NAV_ICON_CLASS} />,
  },
  {
    name: 'BMI Calculator',
    route: '/bmi-calculator',
    icon: <GiWeightScale className={NAV_ICON_CLASS} />,
  },
  {
    name: 'Life Path Calculator',
    route: '/life-path-calculator',
    icon: <IoCalendarNumber className={NAV_ICON_CLASS} />,
  },
  {
    name: 'Pomodoro Timer',
    route: '/pomodoro-timer',
    icon: <GiTomato className={NAV_ICON_CLASS} />,
  },
  {
    name: 'Unit Converter',
    route: '/unit-converter',
    icon: <RiExchangeBoxFill className={NAV_ICON_CLASS} />,
  },
].reverse()
