DROP TABLE IF EXISTS exercises;
DROP TABLE IF EXISTS circuits;
DROP TABLE IF EXISTS workouts;



CREATE TABLE workouts (
    workoutID INT NOT NULL, 
    workoutName VARCHAR(40), 
    restBetweenCircuits VARCHAR(40), 
    PRIMARY KEY (workoutID)
);

INSERT INTO workouts (workoutID, workoutName, restBetweenCircuits)
    VALUES (0, 'my-first-workout',  '60'),
           (1, 'homeworkout-1', '120');

CREATE TABLE circuits (
    circuitID INT NOT NULL, 
    workoutID INT NOT NULL, 
    circuitName VARCHAR(40), 
    restTimeBetweenSets VARCHAR(40), 
    numberOfSets VARCHAR(40), 
    PRIMARY KEY (circuitID), 
    FOREIGN KEY (workoutID) REFERENCES workouts (workoutID)
);

INSERT INTO circuits (circuitID, workoutID, circuitName, restTimeBetweenSets, numberOfSets)
    VALUES (0, 0, 'A', '60', '4'),
           (1, 0, 'B', '30', '2'),
           (2, 1, 'A', '60', '4'),
           (3, 1, 'B', '60', '4');

CREATE TABLE exercises (
    id INT NOT NULL, 
    circuitID INT NOT NULL, 
    exerciseName VARCHAR(40), 
    timeOn VARCHAR(40), 
    timeOff VARCHAR(40), 
    PRIMARY KEY (id), 
    FOREIGN KEY (circuitID) REFERENCES circuits (circuitID)
);



INSERT INTO exercises (id, circuitID, exerciseName, timeOn, timeOff)
    VALUES (0, 0, 'jump squats', '30', '10'),
           (1, 0, 'burpees', '30', '10'),
           (2, 0, 'push ups', '30', '10'),
           (3, 1, 'plank hold', '60', '10'),
           (4, 1, 'superman hold', '60', '10'),
           (5, 2, 'dumbbell burpee/pushup', '30', '10'),
           (6, 2, 'dumbbell jumping lunges', '30', '10'),
           (7, 2, 'mountain climbers', '30', '10'),
           (8, 2, 'shoulder taps', '30', '10'),
           (9, 3, 'leg raises', '30', '10'),
           (10, 3, 'side plank - left', '30', '10'),
           (11, 3, 'side plank - right', '30', '10'),
           (12, 3, 'reverse crunches', '30', '10'),
           (13, 3, 'bicycles', '30', '10');










