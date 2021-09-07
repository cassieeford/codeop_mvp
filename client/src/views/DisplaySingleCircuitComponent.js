
import React, {useState} from 'react';
import './DisplaySingleCircuitComponent.css'
// import Countdown from 'react-countdown';
// import ReactDOM from 'react-dom';
// import CircuitTimer from './CircuitTimer'
import PomApp from './PomPom/PomApp.js'

function DisplaySingleCircuitComponent(props) {


    return (

        
        <div className="DisplaySingleCircuitComponent" >
            <h2>CIRCUIT: {props.c.circuitName} </h2>
           <span id="exercises">


            { props.c.exercises.map((e)=> (
            <PomApp
                key={e.id}
                exercise={e.exerciseName}
                session={e.timeOn}
                break={e.timeOff}
                /> 
            ))}
            
       

            </span>

            

           <h3> {props.c.numberOfSets} {' Sets - '}
            {props.c.restTimeBetweenSets}{' seconds rest between sets'} </h3>
        </div>
        
    );
}

export default DisplaySingleCircuitComponent;

