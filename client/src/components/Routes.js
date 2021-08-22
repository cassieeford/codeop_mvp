import React from 'react';
import { Route, Switch } from 'react-router-dom';

import AboutView from '../views/AboutView';
import HomeView from '../views/HomeView';
import SingleWorkoutView from '../views/SingleWorkoutView';
import Error404View from '../views/Error404View';
import CreateWorkoutView from '../views/createworkout/CreateWorkoutView';
import WorkoutLibraryView from '../views/WorkoutLibraryView';
import PlayWorkout from '../views/PlayWorkout';




function Routes(props) {
    return (
        <Switch>
            {/* Home: Use 'exact' or else this route will match EVERYTHING */}
            <Route path="/" exact>
                <HomeView />
            </Route>
    
            {/* About */}
            <Route path="/about">
                <AboutView />
            </Route>
    
            {/* View Workout Library */}
            <Route path="/workouts" exact>
                <WorkoutLibraryView workoutLibrary={props.workoutLibrary} />
            </Route>
    
            {/* View Single Workout */}
            <Route path="/workouts/:id">
                <SingleWorkoutView workoutLibrary={props.workoutLibrary} />
            </Route>

              {/* Start workout timer for this workout*/}
              <Route path="/play-workout">
                <PlayWorkout  />
            </Route>

            {/* Create & Save a new workout */}
            <Route path="/create-workout">
                <CreateWorkoutView addWorkoutToLibraryCb = {workout => props.addWorkoutToLibraryCb(workout)} />
            </Route>

            {/* None of the routes matched: Error 404! */}
            <Error404View />
        </Switch>
    );
}

export default Routes;