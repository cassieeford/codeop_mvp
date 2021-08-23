var express = require("express");
var router = express.Router();
const db = require("../model/helper");

//helper function- get all students

async function sendAllWorkouts(res) {
  let response = await db("SELECT * FROM workouts;");
  let workouts = response.data;
  res.send(workouts);
}

async function getWorkout(id) {
  let results = await db(`SELECT * FROM workouts where workoutID = ${id}`);
  return results.data.length === 1 ? results.data[0] : null;
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
    let workout = await getWorkout(id);
    if (workout) {
      //return workout
      res.status(200);
      res.send(workout);
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
