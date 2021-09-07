import React from "react";

function DisplayCurrentCircuit(props) {
    let e = props.exercises;


    return (
      <div className="DisplayCurrentCircuit"
          style = {{
            border: '1px dotted grey',
            margin: '10px',
            padding: '10px',}}
      >
          <h5>Current circuit: {props.circuitNames[props.circuitNamesIX]}</h5>
          <ul            
          style = {{
             fontSize: '12px',
             padding: '5px',
             listStyle: 'none',
             marginLeft: '10px',
             }}  >
            {e.map(x => <h6 key={x.id}>{x.exerciseName} {' '} for {x.timeOn} seconds / {x.timeOff} second rest<br></br></h6>)}
          </ul>
  
      </div>
    );
  }
  
  export default DisplayCurrentCircuit;