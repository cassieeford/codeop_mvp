import React, {useState} from "react";
import './AddExercise.css';

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


<form className = "AddExercise" onSubmit={e => handleSubmit(e)}>
<h5>Add an Exercise</h5>

<div>
  <div className="form-row align-items-center">

    <div className="form-group col-md-4 col-form-label">
      <label for="exerciseName">Exercise Name</label>
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
    className="btn btn-primary">
      Add Exercise to My Circuit</button>
      </div>
      </div>
      
</form>





      // <div className="AddExercise">
          
      // <form onSubmit={e => handleSubmit(e)}>
      //   <span id="text-fields">
      //     <label>Enter exercise name</label>
      //     <input
      //       type="text"
      //       name="exerciseName"
      //       placeholder="e.g. 'jumping jacks'"
      //       value={exercise.exerciseName}
      //       onChange={e => handleChange(e)}
      //     />
          // <label>Enter duration time in seconds: </label>
          // <input
          //   type="text"
          //   name="timeOn"
          //   placeholder="e.g. '30'"
          //   value={exercise.timeOn}
          //   onChange={e => handleChange(e)}
          // />
      //     <label>Enter rest time in seconds: </label>
      //       <input
      //       type="text"
      //       name="timeOff"
      //       placeholder="e.g. '10'"
      //       value={exercise.timeOff}
      //       onChange={e => handleChange(e)}
      //     />
      //   </span>
      //   <button type="submit">Submit</button>

      //     </form>
  
      // </div>
    );
  }
  
  export default AddExercise;