import React from 'react';
import Timer from './Timer';

const testArr = [30,10,30,10,30,120];
function PlayWorkout(props) {
   
    return (
        <div className="PlayWorkout" >
            {testArr.map(e => <Timer e={e}/>)}
          </div>
           )
           }

export default PlayWorkout;