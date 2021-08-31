import React from 'react';
import { NavLink } from 'react-router-dom';
import './Navbar.css';


function Navbar() {
    return (

        <nav class="navbar navbar-expand-lg navbar-dark"
        style={{backgroundColor: "#B8860B"}} 
        >
                <a class="navbar-brand" href="#">My Workouts</a>
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
                <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
                    <div class="navbar-nav">
                    <a class="nav-item nav-link active" href="/" >Home <span class="sr-only">(current)</span></a>
                    <a class="nav-item nav-link active" href="/about">About<span class="sr-only">(current)</span></a>
                    <a class="nav-item nav-link active" href="/workouts">Workout Library<span class="sr-only">(current)</span></a>
                    <a class="nav-item nav-link active" href="/create-workout">Create Workout<span class="sr-only">(current)</span></a>
                    </div>
                </div>
        </nav>

//         <nav className="navbar navbar-md navbar-dark" style={{ backgroundColor: 'black' }}>
           
//                         <NavLink to="/" exact>Home</NavLink>
//                         <NavLink to="/about">About</NavLink> 
//                         <NavLink to="/workouts">Workout Library</NavLink>
//                          <NavLink to="/create-workout">Create Workout</NavLink>
                
//                 <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
//                 <span className="navbar-toggler-icon"></span></button>
           
                    

// <div className="collapse navbar-collapse" id="navbarNav">


//                     <ul className="navbar-nav">
//                         <NavLink to="/" exact>Home</NavLink>
//                         <NavLink to="/about">About</NavLink> 
//                         <NavLink to="/workouts">Workout Library</NavLink>
//                          <NavLink to="/create-workout">Create Workout</NavLink>
                     
//                     </ul>
//                 </div>

          
        // </nav>


    );
}

export default Navbar;