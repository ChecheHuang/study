import React, { useState, useEffect } from 'react'
import { Button } from './components/ui/button'

const Clock: React.FC = () => {
  const [count, setCount] = useState<number>(30 * 60)
  const [running, setRunning] = useState<boolean>(false)
  const [timeUp, setTimeUp] = useState<boolean>(false)

  useEffect(() => {
    let timer: NodeJS.Timeout
    if (running) {
      timer = setInterval(() => {
        setCount((prevCount) => {
          if (prevCount > 0) {
            return prevCount - 1
          } else {
            setRunning(false)
            setTimeUp(true)
            return 0
          }
        })
      }, 1000)
    }
    return () => {
      clearInterval(timer)
    }
  }, [running])

  const handleStart = () => {
    setRunning(true)
  }

  const handleStop = () => {
    setRunning(false)
  }

  const minutes: number = Math.floor(count / 60)
  const seconds: number = count % 60

  return (
    <div className="flex flex-col items-center justify-center ">
      <div className="text-6xl font-bold">
        {timeUp
          ? "Time's up!"
          : `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`}
      </div>
      <div className="mt-4 space-x-2">
        <Button
          variant="secondary"
          disabled={running || timeUp}
          onClick={handleStart}
        >
          Start
        </Button>
        <Button disabled={!running || timeUp} onClick={handleStop}>
          Stop
        </Button>
      </div>
    </div>
  )
}

export default Clock
