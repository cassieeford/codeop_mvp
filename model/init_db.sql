DROP TABLE IF EXISTS exercises;
DROP TABLE IF EXISTS circuits;
DROP TABLE IF EXISTS workouts;

CREATE TABLE workouts (
    workoutID INT NOT NULL AUTO_INCREMENT, 
    workoutName VARCHAR(40), 
    restBetweenCircuits VARCHAR(40), 
    PRIMARY KEY (workoutID)
);

INSERT INTO workouts (workoutName, restBetweenCircuits)
    VALUES ('my-first-workout',  '60');
           

CREATE TABLE circuits (
    circuitID INT NOT NULL, 
    workoutID INT NOT NULL, 
    circuitName VARCHAR(40), 
    restTimeBetweenSets VARCHAR(40), 
    numberOfSets VARCHAR(40), 
    PRIMARY KEY (circuitID), 
    FOREIGN KEY (workoutID) REFERENCES workouts (workoutID) ON DELETE CASCADE);

INSERT INTO circuits (circuitID, workoutID, circuitName, restTimeBetweenSets, numberOfSets)
    VALUES (0, LAST_INSERT_ID(), 'A', '60', '4'),
           (1, LAST_INSERT_ID(), 'B', '30', '2');

CREATE TABLE exercises (
    id INT NOT NULL, 
    circuitID INT NOT NULL, 
    exerciseName VARCHAR(40), 
    timeOn VARCHAR(40), 
    timeOff VARCHAR(40), 
    PRIMARY KEY (id), 
    FOREIGN KEY (circuitID) REFERENCES circuits (circuitID) ON DELETE CASCADE);
INSERT INTO exercises (id, circuitID, exerciseName, timeOn, timeOff)
    VALUES (0, 0, 'jump squats', '30', '10'),
           (1, 0, 'burpees', '30', '10'),
           (2, 0, 'push ups', '30', '10'),
           (3, 1, 'plank hold', '60', '10'),
           (4, 1, 'superman hold', '60', '10');