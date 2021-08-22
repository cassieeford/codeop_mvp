
import React from 'react';


function DisplaySingleCircuitComponent(props) {

    return (
        <div className="DisplaySingleCircuitComponent" >
            <h3>{props.c.circuitName} {' - ' } 
            {props.c.numberOfSets} {' Sets - '}
            {props.c.restTimeBetweenSets}{' Seconds Rest Between Sets'}</h3>
           
           { props.c.exercises.map((e)=> (
             <p key={e.id}>  {e.exerciseName} {' '} {e.timeOn} {':'} {e.timeOff} </p>))}
            
              
    </div>

    );
}

export default DisplaySingleCircuitComponent;

