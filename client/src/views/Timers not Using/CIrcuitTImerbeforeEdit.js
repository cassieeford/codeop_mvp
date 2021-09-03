import React from 'react'
import { useState, useEffect, useRef, element } from 'react';
import './CircuitTimer.css'

//timer understanding from here:
// /https://dev.to/abdulbasit313/how-to-develop-a-stopwatch-in-react-js-with-custom-hook-561b

const CircuitTimer = (props) => {

    // <TimerSession 
    // key={e.id}
    // exercise={e.exerciseName}
    // session={e.timeOn}
    // break={e.timeOff}
    // />
    const [timer, setTimer] = useState(0)
    const [isActive, setIsActive] = useState(false)
    const [isPaused, setIsPaused] = useState(false)
    //useRef accepts one argument as the initial value and returns a reference (current value)https://dmitripavlutin.com/react-useref-guide/
    const countRef = useRef(null)


  
    const handleStart = () => {
        setIsActive(true)
        setIsPaused(true)
        countRef.current = setInterval(() => {
          setTimer((timer) => timer + 1)
        }, 1000)
      }
  
      const handlePause = () => {
        clearInterval(countRef.current)
        setIsPaused(false)
      }
  
    const handleResume = () => {
        setIsPaused(true)
        countRef.current = setInterval(() => {
          setTimer((timer) => timer + 1)
        }, 1000)
      }
  
      const handleReset = () => {
        clearInterval(countRef.current)
        setIsActive(false)
        setIsPaused(false)
        setTimer(0)
      }

      const formatTime = () => {
        const getSeconds = `0${(timer % 60)}`.slice(-2)
        const minutes = `${Math.floor(timer / 60)}`
        const getMinutes = `0${minutes % 60}`.slice(-2)
        let clock = `${getMinutes} : ${getSeconds}`
        // return `${getMinutes} : ${getSeconds}`
        if (clock === '00 : 00') {
            console.log("clocked")
            setIsPaused(false)
        } else {
            return clock
        }
      }


    return (
        <div className = 'CircuitTimer'>
            
            <h3>React Stopwatch {element}</h3>
            <div className='stopwatch-card'>
                <p>{formatTime()}</p> {/* here we will show timer */}
                <div className='buttons'>
                
                
                {
            !isActive && !isPaused ?
              <button onClick={handleStart}>Start</button>
              : (
                isPaused ? <button onClick={handlePause}>Pause</button> :
                  <button onClick={handleResume}>Resume</button>
              )
          }
          <button onClick={handleReset} disabled={!isActive}>Reset</button>

                </div>
            </div>
    
        </div>
    )

    
}

export default CircuitTimer;