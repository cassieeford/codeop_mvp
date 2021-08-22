import React from 'react';
import { NavLink } from 'react-router-dom';
import './Navbar.css';


function Navbar() {
    return (
        <nav className="Navbar">
            <ul>
                <li><NavLink to="/" exact>Home</NavLink></li>
                <li><NavLink to="/about">About</NavLink></li>
                <li><NavLink to="/workouts">Workout Library</NavLink></li>
                <li><NavLink to="/create-workout">Create Workout</NavLink></li>
            </ul>
        </nav>
    );
}

export default Navbar;