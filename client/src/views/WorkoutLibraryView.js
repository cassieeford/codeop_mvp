import React from "react";
import './WorkoutLibraryView.css';
import { Link } from 'react-router-dom';

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
   style={{width:"15rem", height:"20rem", objectFit: "cover"}}
   key={w.workoutID}
   >
   {/* <img className="card-img-top" src="" alt="" style={{width:"15rem", height:"8rem", justifyContent:"center"}}/> */}

<div className="card-body">
   <h6 className='d-flex justify-content-center'>
   <h6 className="card-title">{w.workoutName}</h6>
   </h6>
   <p className='text-center'>
   <p className="card-text">

        <h8>Duration:</h8> <br></br>
        <h8>Date Created:</h8>

       <ul> 1st Exercise in each circuit:
          {w.circuits[0] &&<li>Circuit {w.circuits[0].circuitName}: {w.circuits[0].exercises[0].exerciseName}</li>}
          {w.circuits[1] &&<li>Circuit {w.circuits[1].circuitName}: {w.circuits[1].exercises[0].exerciseName}</li>}
          {w.circuits[2] &&<li>Circuit {w.circuits[2].circuitName}: {w.circuits[2].exercises[0].exerciseName}</li>}
       </ul>

{/* wont work as a map? */}

       {/* <ul>
           {w.circuits[0].exercises[0].map((e)=> (
          <li>{e.exerciseName}</li>
           ))}
       </ul> */}
   </p>
   </p>
   <div className="d-flex justify-content-center">
   <a href={'/workouts/'+w.workoutID} className="btn btn-primary">Go to Workout</a>
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