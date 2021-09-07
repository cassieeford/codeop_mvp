import react, {useState, useContext} from 'react'
import PomTimer from './PomTimer'
// import PomSettings from './PomSettings'
// import SettingsContext from './SettingsContext'


function PomApp (props) {

    return (
        <div>
            
            <main>
  
                <PomTimer
                    key={props.id}
                    exercise={props.exercise}
                    session={props.session}
                    break={props.break}/>
            
            </main>

        </div>




    )
}
export default PomApp