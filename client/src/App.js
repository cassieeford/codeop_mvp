//import logo from './logo.svg';
import './App.css';
import { useHistory } from 'react-router-dom';
import React, {useState, useEffect} from 'react';

import Navbar from './components/Navbar';
import Routes from './components/Routes';

import sampledata from "./sampledata";







function App() {
  const [workoutLibrary, setWorkoutLibrary] = useState([]); //sample data 

  // const addWorkoutToLibrary = (newWorkout) => {
  //   console.log('addworkout to library');
  //   let newWorkoutLibrary = [...workoutLibrary, newWorkout];
  //   setWorkoutLibrary(workoutLibrary => newWorkoutLibrary);

  // }


  useEffect(() => {
    
    getWorkouts();
    console.log(workoutLibrary);
  }, []);

  const getWorkouts = () => {
    fetch("/workouts")
      .then(response => response.json())
      .then(workouts => {
        setWorkoutLibrary(workouts);
      })
      .catch(error => {
        console.log(error);
      });
  };

  async function addNewWorkout(workout) {
    //set options for fetch request
    let options = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(workout)
    };

    try {
      //send http request
      let response = await fetch("/workouts", options);
      //if response is ok, update students state with response from database
      if (response.ok) {
        let workouts = await response.json();
        //update state
        setWorkoutLibrary(workouts);
      } else {
        console.log(`error: ${response.status} ${response.statusText}`);
      }
    } catch (err) {
      console.log(`Server error: ${err.message}`);
    }
  }

  async function deleteWorkout(id) {
    let options = {
      method: "DELETE"
    };

    try {
      let response = await fetch(`/workouts/${id}`, options);
      if (response.ok) {
        let workouts = await response.json();
        setWorkoutLibrary(workouts);
      } else {
        console.log(`error: ${response.status} ${response.statusText}`);
      }
    } catch (err) {
      console.log(`Server error: ${err.message}`);
    }
  }

  async function getWorkoutById(id) {


    try {
      let response = await fetch(`/workouts/${id}`);
      if (response.ok) {
        let workout = await response.json();
        // ?
      } else {
        console.log(`error: ${response.status} ${response.statusText}`);
      }
    } catch (err) {
      console.log(`Server error: ${err.message}`);
    }
  }

  

  return (
    <div className="App">
      <Navbar />
      <Routes 
      workoutLibrary={workoutLibrary}
      addWorkoutToLibraryCb = {workout => addNewWorkout(workout)}/>   
   
   

      


    </div>
  );
}

export default App;
