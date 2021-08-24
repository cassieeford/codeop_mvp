import React from "react";
import './WorkoutLibraryView.css';
import { Link } from 'react-router-dom';

function WorkoutLibraryView(props) {
  

    return (
      <div className="DisplayWorkoutLibrary">
          <h1> Workout Library </h1>
         
          {
                props.workoutLibrary.map((w) => (
                    <li key={w.workoutID}>
                        <Link to={'/workouts/'+w.workoutID}>{w.workoutName} </Link>
                    </li>
                ))
                }

  
      </div>
    );
  }
  
  export default WorkoutLibraryView;