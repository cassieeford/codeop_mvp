var express = require("express");
var router = express.Router();
const db = require("../model/helper");

//helper function- get all workouts

async function sendAllWorkouts(res) {
  let response = await db("SELECT * FROM workouts;");
  let workouts = response.data;
  res.send(workouts);
}

async function getWorkout(id) {
  let results = await db(`SELECT * FROM workouts where workoutID = ${id}`);
  return results.data.length === 1 ? results.data[0] : null;
}

//used to turn arrays of numbers into strings for sql statements
function makeStr(arr) {
  let str = '(';
  for (let n in arr) {
      if (n < arr.length -1) {
          let s = String(arr[n]);
          s = s + ', ';
          str = str + s;
      } else {
          let s = String(arr[n]);
           s = s + ')';
          str = str + s;}
  }
  return str
  }

  function addExercisesToCircuits(circuitsArr, exercisesArr) {
    //circuits.forEach(c => c.exercises = []);
    for (let e in exercisesArr) {
        let circuitIDforthisExercise = exercisesArr[e].circuitID;
        //console.log(e.exerciseName, circuitIDforthisExercise)
        for (let c in circuitsArr) {
            if (circuitIDforthisExercise === circuitsArr[c].circuitID) {
                //console.log('c', c);
                //console.log('circuitsArr[c]', circuitsArr[c])
                circuitsArr[c].exercises.push(exercisesArr[e]); 
           
        }
    }
}
return circuitsArr;
}




// GET workouts list
router.get("/", async function(req, res, next) {
  sendAllWorkouts(res);

});

// GET one workout
router.get("/:id", async function(req, res, next) {
  //get id from url param
  let id = Number(req.params.id);
  //define sql string
  let sql = `
  SELECT * FROM workouts
  WHERE workoutID = ${id}
  `;
  try {
    //check if there is a workout by this id
    let existsWorkout = await getWorkout(id);
    if (existsWorkout) {
      let workout = await db(`SELECT * FROM workouts where workoutID = ${id}`);
      
      //get circuits in this workout
      let circuits = await db(`SELECT * FROM circuits where workoutID = ${id}`);
      
      //create an array with circuitID for each circuit
      let circuitIDsArr = circuits.data.map(n=> n.circuitID)
      //turn circuitIDsArr into a sql string e.g. [0,1] to '(0, 1)'
      let circuitIDsArrSql = makeStr(circuitIDsArr);
      //get exercises- select exercises where circuitID is in circuit ids
      let exercises = await db(`SELECT * FROM exercises where circuitID IN ${circuitIDsArrSql}`);
      //get the arrays of circuits and exercise objects 
      let circuitsArr = circuits.data;
      //needed for function
      circuitsArr.forEach(c => c.exercises = []);
      let exercisesArr = exercises.data;
      let resultCircuits = addExercisesToCircuits(circuitsArr, exercisesArr);
      let workoutdata = workout.data[0];
      workoutdata.circuits = resultCircuits;


      res.status(200);
      res.send(workoutdata); //workout
    } else {
      res.status(404).send({ error: "Workout not found" });
    }
  } catch (err) {
    res.status(500).send({ err: err.message });
  }
});

// INSERT a new workout into the DB
router.post("/", async function(req, res, next) {
  //get info from the request body
  
  let {workoutName, restBetweenCircuits, circuits} = req.body;
  let sql = `
  INSERT INTO workouts (workoutName, restBetweenCircuits)
      VALUES ('${workoutName}', '${restBetweenCircuits}');
  SELECT LAST_INSERT_ID();
`;
  

  //update db
  try {
    let result = await db(sql);
    let workoutId = result.data[0].insertId;
    console.log(req.body);
    //console.log('workoutID', workoutId);
    //console.log('circuits', circuits);
    res.status(201);
    sendAllWorkouts(res);
  } catch (err) {
    res.status(500).send({ error: err.message });
  }
});

// DELETE a workout from the DB
router.delete("/:id", async function(req, res, next) {
  //get id from url params
  let id = Number(req.params.id);
  //define sql string
  let sql = `
 DELETE FROM workouts
 WHERE workoutID = ${id}
 `;

 
  //update database
  try {
    let workout = await getWorkout(id);
    //let result = await db(`SELECT * FROM workouts WHERE workoutID = ${id}`);
    if (workout) {
      await db(sql);
      sendAllWorkouts(res);
    } else {
      res.status(404).send({ error: "Workout not found" });
    }
  } catch (err) {
    res.status(500).send({ error: err.message });
  }
});

module.exports = router;
