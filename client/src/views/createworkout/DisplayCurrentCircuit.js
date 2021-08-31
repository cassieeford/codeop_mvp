import React from "react";
import './DisplayCurrentCircuit.css';

function DisplayCurrentCircuit(props) {
    let e = props.exercises;


    return (
      <div className="DisplayCurrentCircuit">
          <h5>Current circuit: {props.circuitNames[props.circuitNamesIX]}</h5>
          <ul >
            {e.map(x => <h6 key={x.id}>{x.exerciseName} {' '} for {x.timeOn} seconds / {x.timeOff} second rest<br></br></h6>)}
          </ul>
  
      </div>
    );
  }
  
  export default DisplayCurrentCircuit;