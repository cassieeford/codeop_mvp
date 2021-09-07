import react, {useState, useEffect, useRef, useContext} from 'react'
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import PomPlay from './PomPlay';
import PomPause from './PomPause';

//source
//https://www.youtube.com/watch?v=B1tjrnX160k

function PomTimer (props) {
    // const settingsInfo = useContext(SettingsContext)

    const [mode, setMode] = useState('work');
    const [isPaused, setIsPaused] = useState(true);
    const [secondsLeft, setSecondsLeft] = useState(0);
    const [instruction, setInstruction] = useState(props.exercise)

    const secondsLeftRef = useRef(secondsLeft);
    const isPausedRef = useRef(isPaused);
    const modeRef = useRef(mode);
    const instructionRef = useRef(instruction)

function ticker() {
    secondsLeftRef.current--;
    setSecondsLeft(secondsLeftRef.current)
    // console.log("secondsLeft", secondsLeft)
}


useEffect(() => {

    function switchMode() {
        const nextMode = modeRef.current === 'work' ? 'break' : 'work';
        const nextSeconds = nextMode === 'work' ? props.session : props.break;
        const nextInstruction = nextMode === 'work' ? props.exercise : 'take a break'
        
        setMode(nextMode);
        modeRef.current = nextMode
    
        setSecondsLeft(nextSeconds);
        secondsLeftRef.current= nextSeconds;

        setInstruction(nextInstruction)
        instructionRef.current = nextInstruction

    }

    secondsLeftRef.current = props.session
    setSecondsLeft(secondsLeftRef.current)

    const interval = setInterval(() => {
        if (isPausedRef.current) {
            return;
        } if (secondsLeftRef.current === 0) {
            return switchMode();
        }
        ticker()
        console.log("secondsLeft", secondsLeftRef.current)
        ;
    }, 1000);

    return () => clearInterval(interval);
},
secondsLeftRef
//might need something here?
);


const totalSeconds = mode === 'work' 
    ? props.session
    : props.break
const percentage = Math.round(secondsLeft/ totalSeconds * 100) 


const minutes = Math.floor(secondsLeft/ 60);
let seconds = secondsLeft % 60;
if (seconds <10) seconds = '0' + seconds


    return (
        <div>
            <h3>{instruction}</h3>

                    <div className="row d-flex justify-content-center">
                        
                         <div className = "d-flex justify-content-center"
                                style={{ 
                                width: '300px',  
                                height: '300px',
                                }}
                                >       
                            <CircularProgressbar 
                                style={{ 
                                // display: "inline-block", 
                                textAlign: "center",                   
                                        }}
                                value={percentage} 
                                text={minutes+':'+seconds}
                                styles= {
                                    buildStyles({
                                        pathColor: mode === 'work' ?`#B8860B`:'#BC8F8F',
                                        textColor: 'black',
                                        trailColor: '#F5DEB3',
                                        backgroundColor: '#3e98c7',
                                    })
                                }/>
                        </div>
                    </div>
                
                    <div className= 'buttons'>
                         <div className ="d-flex justify-content-center">
                        {/* <div className ="btn-group mr-2" role='group'> */}

                                    {isPaused 
                                        ? <PomPlay onClick = {() => {setIsPaused(false); isPausedRef.current = false}}/> 
                                        : <PomPause onClick = {() => {setIsPaused(true); isPausedRef.current = true}}/>}
                            

                        </div>

                        </div>
                   </div>
        // </div>
  
    )
}
export default PomTimer