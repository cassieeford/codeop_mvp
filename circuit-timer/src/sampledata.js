

export default [


{
  workoutID: 0,
  workoutName: "my first workout",
  restBetweenCircuits: "60",
  circuits: 
 [{name: "A", exercises: [
              {exerciseName: "jump squats", timeOn: "30", timeOff:"10", id:1},
              {exerciseName: "burpees", timeOn: "30", timeOff:"10", id:2},
              {exerciseName: "push ups", timeOn: "30", timeOff:"10", id:3},
              ],
    numberOfSets: "4", restTimeBetweenSets: "60", circuitID: 0},

  {name: "B", exercises: [
    {exerciseName: "plank hold", timeOn: "60", timeOff:"10", id:4},
    {exerciseName: "superman hold", timeOn: "30", timeOff:"10", id:5},
    ], 
    numberOfSets: "2", restTimeBetweenSets: "30", circuitID: 1}],
},
{
  workoutID: 1,
  workoutName: "homeworkout 1",
  restBetweenCircuits: "120",
  circuits: 
 [{name: "A", exercises: [
              {exerciseName: "dumbbell burpee/pushup", timeOn: "30", timeOff:"10", id:6},
              {exerciseName: "dumbbell jumping lunges", timeOn: "30", timeOff:"10", id:7},
              {exerciseName: "mountain climbers", timeOn: "30", timeOff:"10", id:8},
              {exerciseName: "shoulder taps", timeOn: "30", timeOff:"10", id:9}
              ],
    numberOfSets: "4", restTimeBetweenSets: "60", circuitID: 2},

  {name: "B", exercises: [
    {exerciseName: "leg raises", timeOn: "60", timeOff:"10", id:10},
    {exerciseName: "side plank", timeOn: "30", timeOff:"10", id:11},
    {exerciseName: "side plank", timeOn: "30", timeOff:"10", id:12},
    {exerciseName: "reverse crunches", timeOn: "30", timeOff:"10", id:13},
    {exerciseName: "bicycles", timeOn: "30", timeOff:"10", id:14}
    ], 
    numberOfSets: "4", restTimeBetweenSets: "60", circuitID: 3}],
}




];