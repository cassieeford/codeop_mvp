import react from 'react'

function PomPause (props) {

    return (
        <div>

            <div>
                <button {...props}
                style = {{
                    backgroundColor: 'transparent',
                    height: '70px',
                    border: 'none',
                    // textAlign: 'center',
                    color: '#B8860B',
                    margin: '0px 10px',
                    width: '70px',
                    border:'0px',
                    // display: 'inline-block',
                    // display: 'flex',
                    // justifyContent: 'space-evenly',
                    padding: '5px 10px',
                    cursor: 'pointer',
                    }}>

                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zM7 8a1 1 0 012 0v4a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v4a1 1 0 102 0V8a1 1 0 00-1-1z" clipRule="evenodd" />
                </svg>
                                
                </button>



            </div>
            
        </div>
    )
}
export default PomPause;