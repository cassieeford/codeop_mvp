import React, {useState, useEffect} from 'react';
import { Link, useParams } from 'react-router-dom';
import Error404View from './Error404View';
import DisplayTextSingleWorkout from "./DisplayTextSingleWorkout"
import './SingleWorkoutView.css';

function SingleWorkoutView(props) {
    let { id } = useParams();  // get user ID from URL
    let workout = props.workoutLibrary.find(w => w.workoutID === Number(id));

    //let workout = getWorkoutById(id);
    const [featuredWorkout, setFeaturedWorkout] = useState(null)
    
    
    async function getWorkoutById(id) {
        try {
          let response = await fetch(`/workouts/${id}`);
          if (response.ok) {
            let workout = await response.json();
            setFeaturedWorkout(workout);
          } else {
            console.log(`error: ${response.status} ${response.statusText}`);
          }
        } catch (err) {
          console.log(`Server error: ${err.message}`);
        }
      }

      useEffect(() => {
    
        getWorkoutById(id);
        
      }, []);

    // Return 404 if workout doesn't exist
   
    if (!workout) {
        return <Error404View />;
    } 
    let circuits = workout.circuits;
   

    return (
        <div className="SingleWorkoutView">
        <span className="grid" >
        <DisplayTextSingleWorkout workout={workout} />   
        </span>
            <Link to="/workouts/">back</Link>
        </div>
    );
}

export default SingleWorkoutView;