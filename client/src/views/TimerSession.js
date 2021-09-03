import React from 'react'
import { useState, useEffect } from 'react';



const TimerSession = (props) => {

    // <TimerSession 
    // key={e.id}
    // exercise={e.exerciseName}
    // session={e.timeOn}
    // break={e.timeOff}
    // />

let Sessionmin= 0
let Sessionsec= props.session
let Breakmin = 0
let Breaksec = props.break

    const {initialMinute = Sessionmin,initialSeconds = Sessionsec} = props;
    const [minutes, setMinutes ] = useState(initialMinute);
    const [seconds, setSeconds ] =  useState(initialSeconds);

    const {breakMinute = Breakmin,breakSeconds = Breaksec} = props;
    const [brMinutes, setBrMinutes ] = useState(breakMinute);
    const [brSeconds, setBrSeconds ] =  useState(breakSeconds);

    const [isActive, setIsActive] = useState(false)

    let myInterval = 0
    let myBreak = 0

    useEffect(()=>{
    myInterval = setInterval(() => {
            if (seconds > 0) {
                setSeconds(seconds - 1);
            }
            if (seconds === 0) {
                if (minutes === 0) {
                    clearInterval(myInterval)
                } else {
                    setMinutes(minutes - 1);
                    setSeconds(59);
                }
            } 
        }, 1000)
        return ()=> {
            clearInterval(myInterval);
          };
    });

    useEffect(()=>{
        myBreak = setInterval(() => {
                if (brSeconds > 0) {
                    setBrSeconds(brSeconds - 1);
                }
                if (brSeconds === 0) {
                    if (brMinutes === 0) {
                        clearInterval(myBreak)
                    } else {
                        setBrMinutes(brMinutes - 1);
                        setBrSeconds(59);
                    }
                } 
            }, 1000)
            return ()=> {
                clearInterval(myBreak);
              };
        });

   
    // function handleStart() {
    //     setIsActive(true)
    //     setIsPaused(true)
    // }


    function stopTimer(event) {
         clearInterval(myInterval);
    }
            
    function stopBrTimer(event) {
        clearInterval(myBreak);
   }

    function startTimer(event) {
        
        setInterval(myInterval,1000);
        setSeconds(seconds - 1)
    }
    function startBrTimer(event) {
        setInterval(myBreak,1000);
        setSeconds(brSeconds - 1)
    }

    
    clearInterval(myBreak)

    return (
        <div className = 'TimerSession'>
        
            <h4>{props.exercise}</h4>
        
            <div className = 'sessionClock'>
            <h5>Session: {props.session}</h5>
                    {stopTimer}
                    { minutes === 0 && seconds === 0
                        ? null
                        : <h1> {minutes}:{seconds < 10 ?  `0${seconds}` : seconds}</h1> 
                    }

                <div className="form-row align-items-center">
                    <div className="col-form-label">
                    <button onClick= {startTimer}
                    type="button" 
                    className="btn btn-primary">
                    Start</button>

                    <button onClick= {stopTimer}
                    type="button" 
                    className="btn btn-primary">
                    Stop</button>
                    </div>
                </div>
        </div>

        {/* <div className = 'breakClock'>
        <h5>Break: {props.break}</h5>
                    { brMinutes === 0 && seconds === 0
                        ? null
                        : <h1> {brMinutes}:{brSeconds < 10 ?  `0${brSeconds}` : brSeconds}</h1> 
                    }

                <div className="form-row align-items-center">
                    <div className="col-form-label">
                    <button onClick= {stopBrTimer}
                    type="button" 
                    className="btn btn-primary">
                    Start</button>

                    <button onClick= {stopBrTimer}
                    type="button" 
                    className="btn btn-primary">
                    Stop</button>
                    </div>
                </div>
        </div> */}

        </div>
    )

    
}

export default TimerSession;