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


    let Session= props.session
    let Break = props.break

    //put into array  
    //useEffect

    const [timer, setTimer] = useState(Session)
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
        setTimer(Session)
      }

      const formatTime = () => {
            const getSeconds = `0${(timer % 60)}`.slice(-2)
            const minutes = `${Math.floor(timer / 60)}`
            const getMinutes = `0${minutes % 60}`.slice(-2)
            let clock = `${getMinutes} : ${getSeconds}`
            return clock
      }

        ///same clock for BREAKS

    // const [brTimer, setBrTimer] = useState(Break)
    // const [isBrActive, setIsBrActive] = useState(false)
    // const [isBrPaused, setIsBrPaused] = useState(false)
    // const countBrRef = useRef(null)


    // const handleBrStart = () => {
    //   //condition not working to stop timer once it reaches 0
    //     // console.log(Number(timer))//shows timer is the number 30 but does not reduce with the set Interval.
    //     setIsBrActive(true)
    //     setIsBrPaused(true)
    //     countBrRef.current = setInterval(() => {
    //       setBrTimer((brTimer) => brTimer - 1)
    //     }, 1000)
    //       }

    //   const handleBrPause = () => {
    //     clearInterval(countBrRef.current)
    //     setIsBrPaused(false)
    //   }
  
    //   const handleBrResume = () => {
    //     setIsBrPaused(true)
    //     countBrRef.current = setInterval(() => {
    //       setBrTimer((brTimer) => brTimer - 1)
    //     }, 1000)
    //   }
  
    //   const handleBrReset = () => {
    //     clearInterval(countBrRef.current)
    //     setIsBrActive(false)
    //     setIsBrPaused(false)
    //     setBrTimer(Break)
    //   }

    //   const formatBrTime = () => {
    //         const getBrSeconds = `0${(brTimer % 60)}`.slice(-2)
    //         const Brminutes = `${Math.floor(brTimer / 60)}`
    //         const getBrMinutes = `0${Brminutes % 60}`.slice(-2)
    //         let Brclock = `${getBrMinutes} : ${getBrSeconds}`
    //         return Brclock
    //   }



    return (
        <div className = 'CircuitTimer'>

                  <div className='stopwatch-card'>
                    <h3>{props.exercise}</h3>
                    <h5>Session</h5>
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

            
            {/* <h3>React Stopwatch {element}</h3>
              <div className = "break-timer">
                      <div className='stopwatch-card'>
                      <h3>{props.exercise}</h3>
                      <h5>Break</h5>
                          <p>   
                              {formatBrTime()}</p> 
                          <div className='buttons'>
                          {
                      !isBrActive && !isBrPaused
                          ? <button onClick={handleBrStart}>Start</button>
                          : (
                          isBrPaused ? <button onClick={handleBrPause}>Pause</button> :
                            <button onClick={handleBrResume}>Resume</button>
                          )
                          }
                    <button onClick={handleBrReset} disabled={!isBrActive}>Reset</button>

                          </div>
                      </div>
                  </div> */}
        </div>
    )

    
}

export default CircuitTimer;