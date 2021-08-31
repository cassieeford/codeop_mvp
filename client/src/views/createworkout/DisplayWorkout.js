import React from "react";
import './DisplayWorkout.css';

function DisplayWorkout(props) {
  let circuits = props.circuits;
  

    return (

      <div className="workout">
        <h4> 3. Review Your Workout</h4>
      <div className="DisplayWorkout">
          

          <ul><h6>
          {circuits.map(c=> 
          <li>Circuit {c.circuitName}: 
              {c.exercises.map(e=> 
              <li>{e.exerciseName} for {e.timeOn} seconds/ {e.timeOff} seconds rest</li>)}
              </li>)}
              </h6></ul>
          {/* </ul>
        { circuits.map(c=> 
        <h6 key={c.circuitName}>{c.circuitName}
          {c.exercises.map(e => <p key={e.id}>
            {e.exerciseName} {' '} {e.timeOn} {':'} {e.timeOff}
          </p>)}
        
        </h6>) */}
         

        {/* } */}
             
          {/* <ul >
         
          </ul> */}

          {/* <h5>Current circuit: {props.circuitNames[props.circuitNamesIX]}</h5>
          <ul >
            {e.map(x => <h6 key={x.id}>{x.exerciseName} {' '} for {x.timeOn} seconds / {x.timeOff} second rest</h6>)}
          </ul>  */}

  
      </div>
      </div>
    );
  }
  
  export default DisplayWorkout;