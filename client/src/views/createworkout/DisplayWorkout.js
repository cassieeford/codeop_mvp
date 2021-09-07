import React from "react";

function DisplayWorkout(props) {
  let circuits = props.circuits;
  

    return (

      <div className="workout"
      style = {{
        margin: '20px',
        padding: '10px',
        border: '1px solid #B8860B'
      }}>
      
        <h4> 3. Review Your Workout</h4>
      <div className="DisplayWorkout"
                 style = {{
                  fontSize: '16px',
                   border: '1px dotted grey',
                   margin: '10px',
                   padding: '10px'}}>
          <ul
                  style = {{
                    fontSize: '12px',
                    padding: '5px', 
                    listStyle: 'none',  
                      }} 
                      ><h6>
          {circuits.map(c=> 
          <li>
            <h5
            style = {{marginTop: '15px'}}>Circuit {c.circuitName}: </h5>
              {c.exercises.map(e=> 
              <li style = {{marginLeft: '10px'}}>{e.exerciseName} for {e.timeOn} seconds/ {e.timeOff} seconds rest</li>)}
              <li style = {{margin: '10px'}}>Number of Sets: {c.numberOfSets} / Rest Between Sets: {c.restTimeBetweenSets}</li>
              </li>)}
              </h6></ul>
      </div>
      </div>
    );
  }
  
  export default DisplayWorkout;