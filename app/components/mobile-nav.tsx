'use client'

import { useState } from 'react'
import { HiMenu, HiX } from 'react-icons/hi'
import Link from 'next/link'
import { GiOwl } from 'react-icons/gi'
import NavLinks from './nav-links'

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
        className={`fixed top-0 left-0 h-screen w-64 bg-surface border-r border-primary/30 z-40 transform transition-transform duration-300 ease-in-out overflow-y-auto
        ${isOpen ? 'translate-x-0' : '-translate-x-full'}
        lg:hidden`}>
        {/* Header */}
        <div className='border-b border-primary/30 py-6 px-4 sticky top-0 bg-canvas'>
          <div className='owl-glow flex justify-center items-center mb-2'>
            <GiOwl className='h-8 w-8 text-primary' />
          </div>
          <h1 className='font-display text-xl text-center text-primary'>Fukurou Space</h1>
          <p className='tracking-normal text-xs text-center text-neutral-400 mt-1'>when boredom meets code</p>
        </div>

        {/* Navigation Links */}
        <div className='py-4 px-2'>
          <NavLinks onClick={closeMenu} />
        </div>
      </nav>
    </>
  )
}
