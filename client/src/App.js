//import logo from './logo.svg';
import './App.css';
import { useHistory } from 'react-router-dom';
import React, {useState} from 'react';

import Navbar from './components/Navbar';
import Routes from './components/Routes';

import sampledata from "./sampledata";





function App() {
  const [workoutLibrary, setWorkoutLibrary] = useState(sampledata);

  const addWorkoutToLibrary = (newWorkout) => {
    console.log('addworkout to library');
    let newWorkoutLibrary = [...workoutLibrary, newWorkout];
    setWorkoutLibrary(workoutLibrary => newWorkoutLibrary);

  }

  

  return (
    <div className="App">
      <Navbar />
      <Routes 
      workoutLibrary={workoutLibrary}
      addWorkoutToLibraryCb = {workout => addWorkoutToLibrary(workout)}/> 
   
   

      


    </div>
  );
}

export default App;
