'use client'

import { useEffect, useState } from 'react'

const DURATIONS = {
  pomodoro: 25 * 60,
  shortBreak: 5 * 60,
  longBreak: 15 * 60,
}

export default function Pomodoro() {
  const [mode, setMode] = useState<'pomodoro' | 'shortBreak' | 'longBreak'>('pomodoro');
  const [secondsLeft, setSecondsLeft] = useState(DURATIONS.pomodoro);
  const [isRunning, setIsRunning] = useState(false);
  const [pomodoroCount, setPomodoroCount] = useState(0);

  // Request notification permission once on mount
  useEffect(() => {
    if ('Notification' in window && Notification.permission !== 'granted') {
      Notification.requestPermission();
    }
  }, []);

  useEffect(() => {
    setSecondsLeft(DURATIONS[mode]);
  }, [mode]);

  useEffect(() => {
    let timer: NodeJS.Timeout;
    if (isRunning) {
      timer = setInterval(() => {
        setSecondsLeft((prev) => {
          if (prev <= 1) {
            clearInterval(timer);
            setIsRunning(false);

            // Trigger notification
            if ('Notification' in window && Notification.permission === 'granted') {
              new Notification('Time is up!', {
                body:
                  mode === 'pomodoro'
                    ? 'Take a short break ☕'
                    : 'Get back to work! 💼',
              });
            }

            // Auto switch mode, but wait for manual start
            if (mode === 'pomodoro') {
              const newCount = pomodoroCount + 1;
              setPomodoroCount(newCount);
              setMode(newCount % 4 === 0 ? 'longBreak' : 'shortBreak');
            } else {
              setMode('pomodoro');
            }

            return DURATIONS[mode];
          }
          return prev - 1;
        });
      }, 1000);
    }
    return () => clearInterval(timer);
  }, [isRunning, mode, pomodoroCount]);

  const formatTime = (seconds: number) => {
    const m = Math.floor(seconds / 60).toString().padStart(2, '0');
    const s = (seconds % 60).toString().padStart(2, '0');
    return `${m}:${s}`;
  };

  const handleStartPause = () => setIsRunning((prev) => !prev);
  const handleReset = () => {
    setIsRunning(false);
    setSecondsLeft(DURATIONS[mode]);
  };

  return (
    <div className='flex justify-center h-[85dvh]'>
      <div className='text-center'>
        <div className='flex justify-center gap-2 mb-6'>
          <button
            className={`px-5 py-2 rounded-full font-semibold transition-colors ${
              mode === 'pomodoro' ? 'bg-primary text-white' : 'border border-primary'
            }`}
            onClick={() => {
              setMode('pomodoro')
              setIsRunning(false)
            }}>
            Pomodoro
          </button>
          <button
            className={`px-5 py-2 rounded-full font-semibold transition-colors ${
              mode === 'shortBreak' ? 'bg-primary text-white' : 'border border-primary'
            }`}
            onClick={() => {
              setMode('shortBreak')
              setIsRunning(false)
            }}>
            Short Break
          </button>
          <button
            className={`px-5 py-2 rounded-full font-semibold transition-colors ${
              mode === 'longBreak' ? 'bg-primary text-white' : 'border border-primary'
            }`}
            onClick={() => {
              setMode('longBreak')
              setIsRunning(false)
            }}>
            Long Break
          </button>
        </div>
        <div className='text-9xl font-mono mb-6'>{formatTime(secondsLeft)}</div>
        {/* <div className='text-lg mb-4 capitalize'>{mode.replace(/([A-Z])/g, ' $1')}</div> */}
        <div className='flex justify-center gap-4'>
          <button
            onClick={handleStartPause}
            className='px-6 py-2 border border-primary text-white rounded-xl hover:bg-primary transition'>
            {isRunning ? 'Pause' : 'Start'}
          </button>
          <button
            onClick={handleReset}
            className='px-6 py-2 border border-gray-400 rounded-xl hover:bg-gray-100 hover:text-black transition'>
            Reset
          </button>
        </div>
      </div>
    </div>
  )
}
