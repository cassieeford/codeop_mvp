import React, {useState} from "react";
import AddCircuit from "./AddCircuit";
import DisplayWorkout from "./DisplayWorkout"
import "./CreateWorkoutView.css"


const EmptyWorkoutData = {
  workoutName: "",
  restBetweenCircuits: ""
}


function CreateWorkoutView(props) {
  const [workout, setWorkout] = useState(EmptyWorkoutData);
  const [circuits, setCircuits] = useState([]);
  //const [workoutID, setWorkoutID] = useState(2);
  

  const addCircuitToWorkout = (newCircuit) => {
    console.log("addWorkout addCircuitToWorkout", newCircuit);
   
    
    let newCircuits = [...circuits, newCircuit];
    setCircuits(circuits => newCircuits);
    
  }

  const handleSubmit = (e) => {
    console.log("Add workout submit")
    e.preventDefault();
    

    let newWorkout = {...workout};

    //add new workout properties
    newWorkout.circuits = circuits;
    //newWorkout.workoutID = workoutID;
    newWorkout.workoutName = workout.workoutName;
    newWorkout.restBetweenCircuits = workout.restBetweenCircuits;
   
    //pass to parent
    props.addWorkoutToLibraryCb(newWorkout);

    //reset 
    //let nextWorkoutID = workoutID + 1;
    //setWorkoutID(workoutID => nextWorkoutID);
    setCircuits([]);
    setWorkout(EmptyWorkoutData);

  }

  const handleChange = e => {
    
    let { name , value } = e.target; //extract data
    let newWorkout = {...workout}; //make copy of the state
    newWorkout[name] = value; //update state
    setWorkout(workout => newWorkout); //set state
    
  };

    return (
      <div className="AddWorkout">
        <h4>Create Your Workout</h4>

        <AddCircuit addCircuitToWorkoutCb={newCircuit => addCircuitToWorkout(newCircuit)}/>
         
          <DisplayWorkout circuits={circuits}/>

          

          <form
          className="FinishedWorkout"
          onSubmit={e => handleSubmit(e)}
          >
            <h4>4. Finalise your Workout</h4>
            <div className="form-row">
            
            <div className="form-group col-form-label">
              <label for="restBetweenCircuits">Rest Time Between Circuits (seconds)?</label>
              <input 
                type="text" 
                className="form-control" 
                id="restBetweenCircuits" 
                name="restBetweenCircuits"
                placeholder="e.g. '60'"
                value={workout.restBetweenCircuits}
                onChange={e => handleChange(e)}
                />
            </div>
            <div className="form-group col-form-label">
              <label for="workoutName">Give Your Workout a Name</label>
              <input 
                type="text" 
                className="form-control" 
                id="workoutName" 
                name="workoutName"
                placeholder="Name this workout"
                value={workout.workoutName}
                onChange={e => handleChange(e)}
                />
            </div>
            
            </div>

                <h5>Finished Workout?</h5>
                <div className="form-row align-items-center">
                <div className="col-form-label">
            <button type="submit" className="btn btn-primary">Submit Workout</button>
                </div>
                </div>
          </form>



          {/* <form onSubmit={e => handleSubmit(e)}>
          <label> Enter rest time between circuits: </label>
          <input
            type="text"
            name="restBetweenCircuits"
            placeholder="Enter rest time between circuits"
            value={workout.restBetweenCircuits}
            onChange={e => handleChange(e)}
          />
          <label> Name this workout: </label>
          <input
            type="text"
            name="workoutName"
            placeholder="Name this workout"
            value={workout.workoutName}
            onChange={e => handleChange(e)}
          /> */}

{/*      
          <button type="submit"> Save Workout </button>
            </form> */}
          
          
      
  
      </div>
    );
  }
  
  export default CreateWorkoutView;