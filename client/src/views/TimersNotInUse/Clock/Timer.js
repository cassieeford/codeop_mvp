import React, {useState, useEffect, Component} from "react"; 

class Timer extends React.Component {
    constructor() {
        super();

        this.state= {
           isSession: true,
           timerSecond: 0,
           intervalId: 0
        }

        this.playTimer = this.playTimer.bind(this);
        this.decreaseTimer= this.decreaseTimer.bind(this);
        this.stopTimer=this.stopTimer.bind(this);
        this.resetTimer=this.resetTimer.bind(this);
    }

        playTimer() {
            let intervalId = setInterval(this.decreaseTimer,1000);
            this.setState({
                intervalId: intervalId
            })
        }

        decreaseTimer(){
            switch (this.state.timerSecond) {
                case 0:
                    if(this.props.timerMinute === 0) {
                        if (this.state.isSesssion) {
                            this.setState({
                                isSession:false
                            });
                            this.props.toggleInterval(this.state.isSession);                        
                        } else {
                            this.setState({
                                isSession:true
                            });
                            this.props.toggleInterval(this.state.isSession)
                        }
                    } else {
                        this.props.updateTimerMinute()
                        this.setState({
                            timerSecond: 59     
                        }) 
                    }
                    break;
                    default:
                        this.setState((prevState) => {
                            return {
                                timerSecond: prevState.timerSecond-1
                            }
                        })
                        break;
            }}  

            
        stopTimer() {
            clearInterval(this.state.intervalId);
        }


        resetTimer() {
            this.stopTimer();
            this.props.resetTimer();
                this.setState({
                    timerSecond: 0,
                    isSession: true
                })

            }
        
            

render () {
    return (

        <div>
         <section>
            <section className ="timer-container">
                <h4>{this.state.isSession === true ? "Session" : "Break"}</h4>
                <span className="timer">{this.props.timerMinute}</span>
                <span className="timer">:</span>
                <span className="timer">
                    { this.state.timerSecond === 0 
                        ? "00" 
                        : this.state.timerSecond <10 
                        ? "0" + this.state.timerSecond
                        : this.state.timerSecond}
                </span>
            </section>
            <section className ='timer-actions'>
                    <button onClick={this.playTimer}>Play</button>
                    <button onClick={this.stopTimer}>Stop</button>
                    <button onClick={this.resetTimer}>Refresh</button>
            </section>
        </section>
        </div>
        
        
            )  }
}


  export default Timer;