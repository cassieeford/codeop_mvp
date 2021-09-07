import React, {useState} from "react";

const EmptyFormData = {
  exerciseName: "",
  timeOn: "",
  timeOff:""
};

//ADDS AN EXERCISE TO THE PARENT CIRCUIT (AddCircuit)
function AddExercise(props) {
  const [exercise, setExercise] = useState(EmptyFormData);
 

  const handleChange = e => {
    //extract data
    let { name, value } = e.target;

    //set data
    let newExercise = {...exercise};
    newExercise[name] = value;
    setExercise(exercise => newExercise);
  };

  const handleSubmit = e => {
    e.preventDefault();  
    props.addExerciseCb(exercise); //pass exercise up to parent- AddCircuit
    setExercise(EmptyFormData);
  };

    return (


<form 
  className = "AddExercise" 
  onSubmit={e => handleSubmit(e)}
  >
<h5>Add an Exercise</h5>

<div>
  <div className="form-row align-items-center">

    <div className="form-group col-md-4 col-form-label">
      <label for="exerciseName" 
      style = {{
        fontSize: '16px'
      }}>Exercise Name</label>
      <input 
        type="text"
        className="form-control" 
        id="exerciseName"
        name="exerciseName"
        placeholder="e.g. 'jumping jacks'"
        value={exercise.exerciseName}
        onChange={e => handleChange(e)}/>
    </div>

    <div className="form-group col-md-4 col-form-label">
      <label for="timeOn">Duration (seconds)</label>
      <input 
        type="text" 
        className="form-control" 
        id="timeOn"
        name="timeOn"
        placeholder="e.g. '30'"
        value={exercise.timeOn}
        onChange={e => handleChange(e)}
        />
    </div>

    <div className="form-group col-md-4 col-form-label">
      <label for="timeOff">Rest (seconds)</label>
      <input 
        type="text" 
        className="form-control" 
        id="timeOff"
        name="timeOff"
        placeholder="e.g. '10'"
        value={exercise.timeOff}
        onChange={e => handleChange(e)}
        />
    </div>

      </div>
      </div>
    <div className="form-row align-items-center">
      <div className="col-form-label">
  <button 
    type="submit" 
    className="btn btn-primary"
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
    >
      Add Exercise to My Circuit</button>
      </div>
      </div>
      
</form>

    );
  }
  
  export default AddExercise;