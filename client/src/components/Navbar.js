import React from 'react';
import { NavLink } from 'react-router-dom';
import './Navbar.css';


function Navbar() {
    return (
        <nav className="navbar navbar-md navbar-dark" style={{ backgroundColor: 'black' }}>
           
                        <NavLink to="/" exact>Home</NavLink>
                        <NavLink to="/about">About</NavLink> 
                        <NavLink to="/workouts">Workout Library</NavLink>
                         <NavLink to="/create-workout">Create Workout</NavLink>
                
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span></button>
           
                    

<div className="collapse navbar-collapse" id="navbarNav">


                    <ul className="navbar-nav">
                        <NavLink to="/" exact>Home</NavLink>
                        <NavLink to="/about">About</NavLink> 
                        <NavLink to="/workouts">Workout Library</NavLink>
                         <NavLink to="/create-workout">Create Workout</NavLink>
                     
                    </ul>
                </div>

          
        </nav>


    );
}

export default Navbar;