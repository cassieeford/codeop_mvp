import react from 'react'
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import PomPlay from './PomPlay';
import PomPause from './PomPause';
import DisplayCurrentCircuit from '../createworkout/DisplayCurrentCircuit';


function PomTimer (props) {

const red = '#CD5C5C';
const green = '#6B8E23';

    return (
        <div>
            <h1>Timer</h1>
                    <div style={{ width: 300, height: 300 }}>
                    <CircularProgressbar 
                        value={60} 
                        text={`${60}%`}
                        styles= {
                            buildStyles({
                                pathColor: `#B8860B`,
                                textColor: '#B8860B',
                                trailColor: '#F5DEB3',
                                backgroundColor: '#3e98c7',

                            })

                        }/>;
                    </div>
                
                <div 
                className= 'buttons' 
                // style={{ width: 300, height: 100 }}
                >

                    <div className ="btn-toolbar" role='toolbar'>
                        <div className ="btn-group mr-2" role='group'>
                            <span
                            // style = {{
                            //     justifyContent: 'space-evenly',
                            //     display: "inline-block",
                            // }}
                            >
    
                            <PomPlay/>

                            <PomPause/>

                            </span>
                        </div>

                    </div>
  

                    
                </div>
                </div>
  
    )
}
export default PomTimer