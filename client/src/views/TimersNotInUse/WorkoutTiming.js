import React from 'react';
import ReactDOM from 'react-dom';
import Countdown from 'react-countdown';
import './WorkoutTiming.css'

function WorkoutTiming (props) {

return (
        ReactDOM.render(
        <Countdown
        date={Date.now() + 10000}
        />,
        document.getElementById('root')

))}
export default WorkoutTiming;