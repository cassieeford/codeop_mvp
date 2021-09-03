import React, {useState, useEffect, Component} from "react"; 
import BreakInterval from './BreakInterval'
import SessionLength from './SessionLength'
import Timer from './Timer'
import './Pomodoro.css'

// https://www.youtube.com/watch?v=9EVmiQCfkuQ


class Pomodoro extends React.Component {
    constructor() {
        super();

        this.state= {
           breakLength: 5,
           sessionLength: 25, 
           timerMinute: 25,
        };

        this.onIncreaseBreakLength = this.onIncreaseBreakLength.bind(this);
        this.onDecreaseBreakLength = this.onDecreaseBreakLength.bind(this);
        this.onIncreaseSessionLength = this.onIncreaseSessionLength.bind(this);
        this.onDecreaseSessionLength = this.onDecreaseSessionLength.bind(this);
        this.onToggleInterval = this.onToggleInterval.bind(this);
        this.onUpdateTimerMinute= this.onUpdateTimerMinute.bind(this);
        this.onResetTimer=this.onResetTimer.bind(this);
    }

        onIncreaseBreakLength() {
            this.setState((prevState) => {
            return {
                breakLength: prevState.breakLength+1
            }  
            }) 
        }

        onDecreaseBreakLength() {
            this.setState((prevState) => {
            return {
                breakLength: prevState.breakLength-1
            }  
            })
        }

        onIncreaseSessionLength() {
            this.setState((prevState) => {
                return {
                    sessionLength: prevState.sessionLength+1,
                    timerMinute: prevState.sessionLength+1
                }  
        })
    }

        onDecreaseSessionLength() {
            this.setState((prevState) => {
            return {
                    sessionLength: prevState.sessionLength-1,
                    timerMinute: prevState.sessionLength-1
            }  
            })
        }

        onUpdateTimerMinute() {
            this.setState((prevState) => {
                return {
                    timerMinute: prevState.timerMinute-1
                }
            }) 
        }

        onToggleInterval(isSession) {
        if (isSession) {
            this.setState({
                timerMinute: this.state.sessionLength
            })
        } else {
            this.setState({
                timerMinute: this.state.breakLength
            })
        }
        
        }

        onResetTimer() {
            this.setState ({
                timerMinute: this.state.sessionLength
            })
        }


render () {
    return (
        <div> 
        <main>
            <h2>Circuit Timer</h2>
            <section className ="interval-length-container">
           
                <SessionLength 
                sessionLength={this.state.sessionLength}
                increaseSession={this.onIncreaseSessionLength}
                decreaseSession={this.onDecreaseSessionLength}
                />

                <BreakInterval 
                breakInterval ={this.state.breakLength}
                increaseBreak = {this.onIncreaseBreakLength}
                decreaseBreak = {this.onDecreaseBreakLength}
                />



            </section>

            <section>
            <Timer 
                timerMinute={this.state.timerMinute}
                breakLength={this.state.breakLength}
                updateTimerMinute={this.onUpdateTimerMinute}
                toggleInterval={this.onToggleInterval}
                resetTimer={this.onResetTimer}
            />
            </section>

            {/* <p>{this.props.circuits}</p> */}
            

        </main>
        </div>
        
        
            )  }
}

// ReactDOM.render(<Pomodoro circuit="Nathan" />, document.getElementById("root"));
  export default Pomodoro;