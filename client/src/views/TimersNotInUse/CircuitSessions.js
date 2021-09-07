import React from 'react'
import { useState, useEffect, useRef, element } from 'react';
import './CircuitTimer.css'

//timer understanding from here:
// /https://dev.to/abdulbasit313/how-to-develop-a-stopwatch-in-react-js-with-custom-hook-561b

const CircuitSessions = (props) => {


    const [timer, setTimer] = useState(props.session)
    const [isActive, setIsActive] = useState(false)
    const [isPaused, setIsPaused] = useState(false)
    //useRef accepts one argument as the initial value and returns a reference (current value)https://dmitripavlutin.com/react-useref-guide/
    const countRef = useRef(null)

  

    //must embed setInterval into functions so it renders in the Console when counting down. This allows us to stop the clock at the 0 value. 
    let saveCallback = useRef(tock);
    let intervalId = useRef();

      //call the callback that does the rendering. 
    function tick() {
      saveCallback.current()
    }

    //callback to decrease timer state. 
    function tock() {
      if (timer === 1) {
        clearInterval(intervalId.current);
      }
      console.log('tock', timer-1)
      //set timer to decrease by 1. Must console log before setTimer to check decrease as setTimer is async. 
      setTimer(timer-1)
    }

      //call after each render to re-save the tock() with current state. 
    useEffect(() => {
      saveCallback.current=tock;
    })

    
    const handleStart = () => {
        setIsActive(true)
        setIsPaused(true)
        intervalId.current = setInterval(tick,1000)
          }


      const handlePause = () => {
        clearInterval(countRef.current)
        setIsPaused(false)
      }
  
      const handleResume = () => {
        setIsPaused(true)
        intervalId.current = setInterval(tick,1000)
      }
  
      const handleReset = () => {
        clearInterval(intervalId.current)
        setIsActive(false)
        setIsPaused(false)
        setTimer(props.session)
      }

      const formatTime = () => {
            const getSeconds = `0${(timer % 60)}`.slice(-2)
            const minutes = `${Math.floor(timer / 60)}`
            const getMinutes = `0${minutes % 60}`.slice(-2)
            let clock = `${getMinutes} : ${getSeconds}`
            return clock
      }


    return (
        <div className = 'CircuitSessions'>

                  <div className='stopwatch-card'>
                    <h3>{props.exercise}</h3>
                    <h6>Session</h6>
                    <p> 
                        {formatTime()}</p> {/* here we will show timer */}
                    <div className='buttons'>
                    {
                !isActive && !isPaused
                    ? <button onClick={handleStart}>Start</button>
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

export default CircuitSessions;