import React, {useState, useEffect} from 'react';
import { Link, useParams } from 'react-router-dom';
import Error404View from './Error404View';


const testArr = [30,10,30,10,30,120];
function PlayWorkout(props) {
    // let { id } = useParams();  // get user ID from URL
    // let workout = props.workoutLibrary.find(w => w.workoutID === Number(id));

    // //let workout = getWorkoutById(id);
    // const [featuredWorkout, setFeaturedWorkout] = useState(null)
    
    
    // async function getWorkoutById(id) {
    //     try {
    //       let response = await fetch(`/workouts/${id}/play-workout`);
    //       if (response.ok) {
    //         let workout = await response.json();
    //         setFeaturedWorkout(workout);
    //       } else {
    //         console.log(`error: ${response.status} ${response.statusText}`);
    //       }
    //     } catch (err) {
    //       console.log(`Server error: ${err.message}`);
    //     }
    //   }
    //   useEffect(() => {
    //     getWorkoutById(id);
        
    //   }, []);

    // // Return 404 if workout doesn't exist
    // if (!workout) {
    //     return <Error404View />;
    // } 
    // let circuits = workout.circuits;
   

    return (

        <div>

            <h1>Play Workout</h1>

            {/* <div className="PlayWorkout" >
            {testArr.map(e => <Timer e={e}/>)}
            </div> */}

            {/* <div><Pomodoro/></div> */}

        </div>

         
          
           

           )
           }

export default PlayWorkout;