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
    let timer: ReturnType<typeof setInterval>;
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
              const nextMode = newCount % 4 === 0 ? 'longBreak' : 'shortBreak';
              setMode(nextMode);
              return DURATIONS[nextMode];
            } else {
              setMode('pomodoro');
              return DURATIONS.pomodoro;
            }
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
    <div className='card my-12 max-w-2xl mx-auto border-t-4 border-t-primary'>
      <div className='flex justify-center gap-2 mb-8 flex-wrap'>
        <button
          className={`px-4 sm:px-6 py-2 rounded-lg font-semibold transition-all duration-300 text-sm sm:text-base ${
            mode === 'pomodoro'
              ? 'bg-primary text-jetblack shadow-lg shadow-primary/50'
              : 'border border-primary/50 hover:border-primary hover:bg-primary/10'
          }`}
          onClick={() => {
            setMode('pomodoro')
            setIsRunning(false)
          }}>
          🍅 Pomodoro
        </button>
        <button
          className={`px-4 sm:px-6 py-2 rounded-lg font-semibold transition-all duration-300 text-sm sm:text-base ${
            mode === 'shortBreak'
              ? 'bg-primary text-jetblack shadow-lg shadow-primary/50'
              : 'border border-primary/50 hover:border-primary hover:bg-primary/10'
          }`}
          onClick={() => {
            setMode('shortBreak')
            setIsRunning(false)
          }}>
          ☕ Short Break
        </button>
        <button
          className={`px-4 sm:px-6 py-2 rounded-lg font-semibold transition-all duration-300 text-sm sm:text-base ${
            mode === 'longBreak'
              ? 'bg-primary text-jetblack shadow-lg shadow-primary/50'
              : 'border border-primary/50 hover:border-primary hover:bg-primary/10'
          }`}
          onClick={() => {
            setMode('longBreak')
            setIsRunning(false)
          }}>
          🌴 Long Break
        </button>
      </div>

      <div className='bg-gradient-to-br from-primary/20 to-primary/5 border border-primary/30 rounded-2xl py-16 sm:py-20 mb-8 text-center'>
        <p className='text-neutral-400 text-sm sm:text-base mb-4 capitalize'>
          {mode === 'pomodoro' ? 'Focus Time' : mode === 'shortBreak' ? 'Short Break' : 'Long Break'}
        </p>
        <div className='text-6xl sm:text-8xl font-mono font-bold text-primary mb-2'>
          {formatTime(secondsLeft)}
        </div>
        <p className='text-neutral-500 text-xs sm:text-sm'>
          Pomodoros completed: <span className='text-primary font-semibold'>{pomodoroCount}</span>
        </p>
      </div>

      <div className='flex justify-center gap-3 sm:gap-4'>
        <button
          onClick={handleStartPause}
          className='btn-primary px-8 py-3 sm:py-4 font-semibold text-base sm:text-lg flex-1 sm:flex-none'>
          {isRunning ? '⏸ Pause' : '▶ Start'}
        </button>
        <button
          onClick={handleReset}
          className='btn-secondary px-8 py-3 sm:py-4 font-semibold text-base sm:text-lg flex-1 sm:flex-none'>
          ↻ Reset
        </button>
      </div>
    </div>
  )
}
