'use client'

import { useEffect, useState } from 'react'

export default function LiveClock() {
  const [time, setTime] = useState<Date | null>(null)

  useEffect(() => {
    setTime(new Date())
    const id = setInterval(() => {
      const now = new Date()
      setTime((prev) => {
        if (prev && prev.getSeconds() === now.getSeconds()) return prev
        return now
      })
    }, 200)
    return () => clearInterval(id)
  }, [])

  if (!time) return null

  const pad = (n: number) => n.toString().padStart(2, '0')
  const colon = time.getSeconds() % 2 === 0

  return (
    <div className='clock-glow font-mono text-5xl sm:text-7xl lg:text-8xl text-primary font-light tracking-[0.15em] leading-none'>
      {pad(time.getHours())}
      {colon ? ':' : ' '}
      {pad(time.getMinutes())}
      {colon ? ':' : ' '}
      {pad(time.getSeconds())}
    </div>
  )
}
