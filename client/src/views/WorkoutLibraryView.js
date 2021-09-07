import React from "react";
import { Link } from 'react-router-dom';
import { selectColor } from "debug";

function WorkoutLibraryView(props) {
  // let workout = props.workout;
  // let circuits = workout.circuits;
  // let workout = props.workoutLibrary.find(w => w.workoutID === Number(id));

    return (

<div>
   <h2>Select Workout</h2>

<div className="row">
{
props.workoutLibrary.map((w) => (

   <div className="col mt-4" >
     
   <div className='justify-content-center'>
   
   <div className="card"  
   style={{width:"16rem", height:"360px", objectFit: "inline-block"}}
   key={w.workoutID}
   >
   <div className="overflow-auto" style = {{height: "300px", overflowY: "scroll", scrollbarColor: 'pink'}}>

         <div className = 'deleteWorkout'>
            <div   className= 'd-flex justify-content-end'
                     style = {{padding: 0, margin: 0,}}>
                     <button 
                        onClick={(e) => props.deleteWorkoutCb(w.workoutID)} 
                        type="button"
                        data-toggle="tooltip" 
                        data-placement="top" 
                        title="Delete Workout"
                        style = {{
                           backgroundColor: '#B8860B',
                           height: '40px',
                           border: 'none',
                           textAlign: 'center',
                           color: 'white',
                           margin: '15px 15px',
                           width: '40px',
                           boxShadow: '0 4px 8px 0 rgba(0, 0, 0, 0.2)',
                           fontWeight: '800',
                           cursor: 'pointer',
                           }}
                     >x</button>
               </div>
         </div>

          <div className= 'd-flex justify-content-center'>
            <svg 
               style={{position: "center", height:"40px", width:"40px"}}
               xmlns="http://www.w3.org/2000/svg" aria-hidden="true" role="img" width="1em" height="1em" preserveAspectRatio="xMidYMid meet" viewBox="0 0 48 48"><g fill="none"><path fill-rule="evenodd" clip-rule="evenodd" d="M40.805 12.98c-13.31-2.65-20.618-2.617-33.608 0a1 1 0 1 1-.395-1.96c13.25-2.67 20.826-2.703 34.393 0a1 1 0 0 1-.39 1.96z" fill="currentColor"/><path d="M10.085 6.973a1 1 0 0 0-1.081-.912l-1.993.17a1 1 0 0 0-.912 1.08l.825 9.716a1 1 0 0 0 1.081.912l1.993-.17a1 1 0 0 0 .912-1.08l-.825-9.716z" fill="currentColor"/><path d="M37.915 6.973a1 1 0 0 1 1.081-.912l1.993.17a1 1 0 0 1 .912 1.08l-.826 9.716a1 1 0 0 1-1.08.912l-1.993-.17a1 1 0 0 1-.912-1.08l.825-9.716z" fill="currentColor"/><path fill-rule="evenodd" clip-rule="evenodd" d="M24 20a2.5 2.5 0 1 0 0-5a2.5 2.5 0 0 0 0 5zm0 2a4.5 4.5 0 1 0 0-9a4.5 4.5 0 0 0 0 9z" fill="currentColor"/><path clip-rule="evenodd" d="M17 13a2 2 0 1 0-4 0c0 .971.04 4.339.506 7.5c.23 1.561.584 3.22 1.161 4.537c.469 1.07 1.458 2.736 3.333 2.942v3.324l-.326-.117l-.223-.08c-1.005-.36-2.026-.726-2.806-.923c-.378-.096-.951-.221-1.513-.171a2.405 2.405 0 0 0-1.314.516A2.222 2.222 0 0 0 11 32.263c0 .495.087 1.156.18 1.758c.097.643.227 1.374.351 2.071l.048.267c.11.61.212 1.181.29 1.668c.046.278.08.511.103.696c.083.665.11 1.279.62 1.789a2.002 2.002 0 0 0 3.235-.584l.002-.005c.178-.39.202-.833.24-1.258c.05-.53.113-1.324.175-2.137c.04-.53.082-1.072.118-1.563c1.111.398 2.41.858 3.69 1.218c1.274.358 2.671.66 3.948.66c1.277 0 2.674-.302 3.947-.66c1.285-.36 2.586-.822 3.699-1.22c.035.336.075.718.114 1.111c.113 1.134.016 2.436.316 3.542a2.005 2.005 0 0 0 3.664.507l.003-.005c.216-.362.297-.778.377-1.187c.101-.524.231-1.307.357-2.14c.242-1.59.523-3.697.523-4.528c0-.588-.23-1.257-.818-1.735a2.405 2.405 0 0 0-1.314-.516c-.562-.05-1.135.075-1.514.17c-.78.198-1.8.564-2.805.924l-.223.08l-.326.117V27.98c1.92-.194 2.995-1.762 3.541-2.975c.62-1.376.955-3.096 1.15-4.685c.35-2.83.315-5.813.302-6.96a36.693 36.693 0 0 1-.004-.36a2 2 0 1 0-4 0c0 .11.002.257.004.437c.012 1.204.04 3.868-.271 6.393c-.181 1.469-.458 2.712-.828 3.534c-.18.4-.316.57-.386.636h-10.87a3 3 0 0 1-.307-.568c-.361-.824-.654-2.062-.868-3.515C17.041 17.051 17 13.918 17 13z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/><path fill-rule="evenodd" clip-rule="evenodd" d="M29.629 28.571l.37.929l.372.929h-.002l-.003.002l-.01.003l-.028.011l-.1.038c-.086.03-.209.074-.365.125c-.312.1-.76.233-1.322.365c-1.12.264-2.698.527-4.541.527a20 20 0 0 1-4.542-.527c-.56-.131-1.009-.264-1.321-.365a11.293 11.293 0 0 1-.465-.163l-.03-.01l-.008-.004l-.003-.002h-.002L18 29.5l.372-.929l.015.006l.07.026c.065.024.165.059.298.102c.265.086.66.204 1.162.322c1.006.236 2.427.473 4.084.473a18 18 0 0 0 4.083-.473c.502-.119.897-.236 1.163-.322a8.97 8.97 0 0 0 .368-.128l.015-.006z" fill="currentColor"/></g>
            </svg>
         </div>

         <div className="card-body">
            <h6 className='d-flex justify-content-center'>
               <h5 className="card-title">{w.workoutName}</h5>
            </h6>
            <p className='text-center'>
            <p className="card-text">
                  <ul
                  style ={{
                     fontSize: '13px',
                     listStyle: 'none',
                     textAlign: 'left',
                     margin: "0 10px",
                     padding: "10px",
                     width: '14rem',
                  }}
                  > <h9 style ={{fontSize: '13px', fontWeight: '700'}}>Details:</h9>
                     {
                        w.circuits.map((c) => (
                           <li>Circuit {c.circuitName}
                           
                                 {c.exercises.map((e) => (
                                    <li 
                                    style ={{
                                    textAlign: 'left',
                                    marginLeft: "15px",
                                 }}>
                                    <svg
                                       style= {{display: 'inline-block', marginRight: '5px' }}
                                       xmlns="http://www.w3.org/2000/svg"  
                                       aria-hidden="true" 
                                       role="img" 
                                       width="1em" 
                                       height="1em" 
                                       preserveAspectRatio="xMidYMid meet" 
                                       viewBox="0 0 48 48">
                                          <g fill="none">
                                          <path d="M21.37 36c1.45-5.25 6.52-9 12.36-8.38c5.56.59 9.98 5.28 10.26 10.86c.07 1.47-.13 2.88-.56 4.19c-.26.8-1.04 1.33-1.89 1.33H11.758c-5.048 0-8.834-4.619-7.844-9.569L10 4h12l4 7l-8.57 6.13L15 14"/>
                                          <path d="M21.37 36c1.45-5.25 6.52-9 12.36-8.38c5.56.59 9.98 5.28 10.26 10.86c.07 1.47-.13 2.88-.56 4.19c-.26.8-1.04 1.33-1.89 1.33H11.758c-5.048 0-8.834-4.619-7.844-9.569L10 4h12l4 7l-8.57 6.13L15 14" 
                                          stroke="currentColor" 
                                          stroke-width="4" 
                                          stroke-miterlimit="2" 
                                          stroke-linecap="round" 
                                          stroke-linejoin="round"/>
                                          <path d="M17.44 17.13L22 34" 
                                          stroke="currentColor" 
                                          stroke-width="4" 
                                          stroke-miterlimit="2" 
                                          stroke-linecap="round" 
                                          stroke-linejoin="round"/>
                                          </g>
                                          </svg>
                                    {e.exerciseName}</li>
                                 ))}
                           </li>
                        ))
                     }
                  </ul>

            </p>
            </p>
         </div>
      
      </div>

         <div className = "card-footer">
            <div className= "position-sticky">
               <div className="d-flex justify-content-center">
                  <a href={'/workouts/'+w.workoutID} className="btn btn-primary"
                     style = {{
                        backgroundColor: '#B8860B',
                        height: '40px',
                        border: 'none',
                        textAlign: 'center',
                        color: 'white',
                        poisition: "sticky",
                        // marginBottom: '5px',
                        // paddingBottom: '5px',
                        width: '150px',
                        boxShadow: '0 4px 8px 0 rgba(0, 0, 0, 0.2)',
                        }}
                  >Go to Workout</a>
               </div>
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