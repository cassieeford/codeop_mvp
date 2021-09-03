import React from 'react';
import Pomodoro from './Clock/Pomodoro'

function HomeView() {
    return (
        <div className="HomeView">
            <h2>Home</h2>
            <p>Welcome!</p>
            <Pomodoro/>
        </div>
    );
}

export default HomeView;