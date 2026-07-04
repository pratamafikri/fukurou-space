'use client'

import { useState } from 'react'
import { HiMenu, HiX } from 'react-icons/hi'
import Link from 'next/link'
import { features, menus } from '../menu'
import { GiOwl } from 'react-icons/gi'

export default function MobileNav() {
  const [isOpen, setIsOpen] = useState(false)

  const toggleMenu = () => setIsOpen(!isOpen)
  const closeMenu = () => setIsOpen(false)

  return (
    <>
      {/* Hamburger Button */}
      <button
        onClick={toggleMenu}
        className='lg:hidden fixed top-1 right-4 z-40 p-2 rounded-lg hover:bg-primary/20 transition-colors duration-300'
        aria-label='Toggle menu'>
        {isOpen ? <HiX className='h-6 w-6' /> : <HiMenu className='h-6 w-6' />}
      </button>

      {/* Mobile Overlay */}
      {isOpen && (
        <div
          className='lg:hidden fixed inset-0 bg-black/50 z-30'
          onClick={closeMenu}
          aria-hidden='true'
        />
      )}

      {/* Mobile Navigation Sidebar */}
      <nav
        className={`fixed top-0 left-0 h-screen w-64 bg-jetblack border-r border-primary z-40 transform transition-transform duration-300 ease-in-out overflow-y-auto
        ${isOpen ? 'translate-x-0' : '-translate-x-full'}
        lg:hidden`}>
        {/* Header */}
        <div className='border-b border-primary py-6 px-4 sticky top-0 bg-jetblack'>
          <div className='flex items-center justify-center gap-2 mb-2'>
            <GiOwl className='h-8 w-8' />
            <h1 className='font-bold text-xl tracking-tight'>Fukurou Space</h1>
          </div>
          <p className='tracking-normal text-xs text-center text-neutral-400'>when boredom meets code</p>
        </div>

        {/* Navigation Links */}
        <div className='py-4 px-2'>
          <Link
            href={menus[0].route}
            onClick={closeMenu}
            className='flex items-center gap-3 px-4 py-3 rounded-lg font-semibold text-sm hover:bg-primary/20 transition-colors duration-300 mb-2'>
            {menus[0].icon}
            {menus[0].name}
          </Link>

          <div className='my-4 border-t border-primary/30' />

          {features.map((application, index) => (
            <Link
              key={index}
              href={application.route}
              onClick={closeMenu}
              className='flex items-center gap-3 px-4 py-3 rounded-lg font-semibold text-sm hover:bg-primary/20 transition-colors duration-300 mb-1'>
              {application.icon}
              {application.name}
            </Link>
          ))}
        </div>
      </nav>
    </>
  )
}
