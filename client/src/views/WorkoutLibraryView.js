import React from "react";
import { Link } from 'react-router-dom';
import { selectColor } from "debug";

function WorkoutLibraryView(props) {
  // let workout = props.workout;
  // let circuits = workout.circuits;
  // let workout = props.workoutLibrary.find(w => w.workoutID === Number(id));

    return (

<div>
   <h4>Select your Workout</h4>

<div className="row">

{
props.workoutLibrary.map((w) => (
   
<div className="col" >
<div className='justify-content-center'>


   <div className="card mt-3"  
   style={{width:"15rem", height:"22rem", objectFit: "cover"}}
   key={w.workoutID}
   >
   {/* <img className="card-img-top" src="" alt="" style={{width:"15rem", height:"8rem", justifyContent:"center"}}/> */}
   
   <div className = 'deleteWorkout'>
  <div className= 'd-flex justify-content-end'
  style = {{padding: 0, margin: 0,}}>
   <button 
      onClick={(e) => props.deleteWorkoutCb(w.workoutID)} 
      type="button"
      data-toggle="tooltip" 
      data-placement="top" 
      title="Delete Workout"
       style = {{
         backgroundColor: '#B8860B',
         height: '40px',
         border: 'none',
         textAlign: 'center',
         color: 'white',
         margin: '10px 10px',
         width: '40px',
         boxShadow: '0 4px 8px 0 rgba(0, 0, 0, 0.2)',
         fontWeight: '800',
         cursor: 'pointer',
         
         
         }}
         >x</button>
   </div>
   </div>

<div className="card-body">
   <h6 className='d-flex justify-content-center'>
   <h6 className="card-title">{w.workoutName}</h6>
   </h6>
   <p className='text-center'>
   <p className="card-text">

        <h8>Duration:</h8> <br></br>
        <h8>Date Created:</h8>

       <ul
       style ={{
         fontSize: '13px',
         listStyle: 'none',
         textAlign: 'left'
       }}
       > 1st Exercise in each circuit:
          {w.circuits[0] &&<li>Circuit {w.circuits[0].circuitName}: {w.circuits[0].exercises[0].exerciseName}</li>}
          {w.circuits[1] &&<li>Circuit {w.circuits[1].circuitName}: {w.circuits[1].exercises[0].exerciseName}</li>}
          {w.circuits[2] &&<li>Circuit {w.circuits[2].circuitName}: {w.circuits[2].exercises[0].exerciseName}</li>}
       </ul>

   </p>
   </p>
   
   <div className="d-flex justify-content-center mb-5">
   <a href={'/workouts/'+w.workoutID} className="btn btn-primary"
       style = {{
         backgroundColor: '#B8860B',
         height: '40px',
         border: 'none',
         textAlign: 'center',
         color: 'white',
         margin: '0px 10px',
         width: '300px',
         boxShadow: '0 4px 8px 0 rgba(0, 0, 0, 0.2)',
         }}
   >Go to Workout</a>
   </div>
   </div>




</div>
</div>
</div>
))
}

</div>
  

</div>

     
    );
  }
  
  export default WorkoutLibraryView;