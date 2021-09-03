import React, {useState} from "react";
import AddExercise from "./AddExercise";
import './AddCircuit.css';
import DisplayCurrentCircuit from "./DisplayCurrentCircuit";

//used to automatically give circuit a name
const circuitNames = ['A', 'B', 'C', 'D', 'E', 'F', 'G'];

//holds data for circuit entered by user
let EmptyCircuitData = {
  numberOfSets: '',
  restTimeBetweenSets: ''
}


function AddCircuit(props) {
  const [exercises, setExercises] = useState([]);
  const [circuit, setCircuit] = useState(EmptyCircuitData);
  const [circuitID, setCircuitID] = useState(4);
  let [nextId, setNextId] = useState(14);
  let [circuitNamesIX, setCircuitNamesIX] = useState(0)
  
  //adds an exercise from AddExercise.js to exercises state
  const addExercise = (newExercise) => {
 
    newExercise.id = nextId; //create ID
    let newExercises = [...exercises, newExercise]; //add exercise to current circuit exercises

    //reset
    let newNextId = nextId + 1; //increment id
    setExercises(exercises => newExercises); //set the new circuit
    setNextId(nextId => newNextId); //set nextId

  }

  const handleSubmit = (e) => {
    console.log("add circuit handlesubmit")

    e.preventDefault();

    let newCircuit = {...circuit};

    newCircuit.circuitID = circuitID;
    newCircuit.circuitName = circuitNames[circuitNamesIX]; //add letter name to circuit e.g. 'A'
    newCircuit.exercises = exercises; //add exercises
    newCircuit.numberOfSets = circuit.numberOfSets; //add number of sets
    newCircuit.restTimeBetweenSets= circuit.restTimeBetweenSets; //add rest between sets
    
    
    console.log("addcircuit handlesubmit", newCircuit);
    props.addCircuitToWorkoutCb(newCircuit); //pass finished circuit to parent AddWorkout

    //reset
    setCircuit([]);
    setExercises([]);
    setCircuit(EmptyCircuitData)
    let newCircuitNamesIX = circuitNamesIX + 1;
    let newCircuitID = circuitID + 1
    setCircuitNamesIX(circuitNamesIX => newCircuitNamesIX);
    setCircuitID(circuitID => newCircuitID);
  }
  

  const handleChange = e => {
    //extract data
    let { name , value } = e.target;

    //set data //...circuit
    let newCircuitData = {...circuit};

    newCircuitData[name] = value;
    setCircuit(circuit => newCircuitData);
    
  };

    return (

      <div>
      <div className="AddCircuit">
      <h4> 1. Create a Circuit </h4>
      <span className="AddCircuitGrid">
      <AddExercise addExerciseCb={exercise => addExercise(exercise)}/>
      <DisplayCurrentCircuit 
        exercises={exercises}
        circuitNames={circuitNames}
        circuitNamesIX={circuitNamesIX}
        />
        </span>

        </div>

        <div className = 'circuitCreate'>

        <h4> 2. Create Sets for your Circuit  </h4>
<form
className="AddCircuitForm"
onSubmit={e => handleSubmit(e)}
>
  <div className="form-row">
  
  <div className="form-group col-md-6">
    <label for="numberOfSets">How many sets?</label>
    <input 
      type="text" 
      className="form-control" 
      id="numberOfSets" 
      name="numberOfSets"
      placeholder="e.g. '4' "
      value={circuit.numberOfSets}
      onChange={e => handleChange(e)}
      />
  </div>
  <div className="form-group col-md-6">
    <label for="restTimeBetweenSets">Rest between sets? (seconds)</label>
    <input 
      type="text" 
      className="form-control" 
      id="restTimeBetweenSets" 
      name="restTimeBetweenSets"
      placeholder="e.g. '60'"
      value={circuit.restTimeBetweenSets}
      onChange={e => handleChange(e)}
      />
  </div>
  
  </div>

      <h5>Finished Circuit?</h5>
  <button type="submit" className="btn btn-primary">Add Circuit to My Workout</button>

</form>

          
          </div>
          </div>
    );
  }
  
  export default AddCircuit;