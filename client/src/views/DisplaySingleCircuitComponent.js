
import React, {useState} from 'react';
import './DisplaySingleCircuitComponent.css'
import Countdown from 'react-countdown';
import ReactDOM from 'react-dom';
import CircuitTimer from './CircuitTimer'

function DisplaySingleCircuitComponent(props) {


    return (

        
        <div className="DisplaySingleCircuitComponent" >
            <h2>CIRCUIT: {props.c.circuitName} </h2>
           <span id="exercises">

           {/* { props.c.exercises.map((e)=> (
             <p key={e.id}>  {e.exerciseName} {' '} {Number(e.timeOn)} {':'} {Number(e.timeOff)} </p>
             ))} */}


            { props.c.exercises.map((e)=> (
            <CircuitTimer
            key={e.id}
            exercise={e.exerciseName}
            session={e.timeOn}
            break={e.timeOff}
            /> 
            ))}
            
{/*             
            <CircuitSessions 
                        key={Id}
                        exercise={exercise}
                        circuit={sessionTime}/> 
            <CircuitSessions 
                        key={Id}
                        exercise={exercise}
                        circuit={breakTime}/>  */}
           

            </span>

            <span id="exerciseLength">

            {/* <p>{CircTime} seconds</p> */}
           {/* { props.c.exercises.map((e)=> (
             <p key={e.id}> {e.timeOn}{e.timeOff} </p>))} */}

             {/* <WorkoutTiming/> */}
            </span>
            

           <h3> {props.c.numberOfSets} {' Sets - '}
            {props.c.restTimeBetweenSets}{' seconds rest between sets'} </h3>
        </div>
        
    );
}

export default DisplaySingleCircuitComponent;

