
import React from 'react';
import DisplaySingleCircuitComponent from './DisplaySingleCircuitComponent';
import { Link, useParams } from 'react-router-dom';





function DisplayTextSingleWorkout(props) {
    let workout = props.workout;
    let circuits = workout.circuits;
    
    return (
        <div className="DisplayTextSingleWorkout" >
            <h1>{workout.workoutName}</h1>
            {  circuits.map((c)=> (
            <DisplaySingleCircuitComponent c={c} key={c.circuitID}/>)) } 

            {/* <h2>{workout.workoutName}</h2>
                {  circuits.map((c)=> {
                   <h2 key={c.name}>{c.name} </h2>
                     { return( c.exercises.map((e)=> {
                           return( <p key={e.id}>  {e.exerciseName} {' '} {e.timeOn} {':'} {e.timeOff}  </p>
                           
                           
                     )}))}
    }) }  */}

        <Link to="/play-workout/">Start Workout</Link>
              
    </div>

    );
}

export default DisplayTextSingleWorkout;