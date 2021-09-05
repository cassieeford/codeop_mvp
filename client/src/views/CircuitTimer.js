import React from 'react'
import { useState, useEffect, useRef, element } from 'react';
import './CircuitTimer.css'
import CircuitSessions from './CircuitSessions'
import CircuitBreaks from './CircuitBreaks'

const CircuitTimer = (props) => {

  // key={props.id}
  // exercise={props.exercise}
  // session={props.session}
  // break={props.break}

    return (
        <div className = 'CircuitTimer'>
          <CircuitSessions 
              exercise={props.exercise}
              session={props.session}/>
          <CircuitBreaks
              exercise={props.exercise}
              break={props.break}/>
        </div>
    )

    
}

export default CircuitTimer;