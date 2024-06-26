const express = require('express')
const {
    createWorkout,
    getSingleWorkout,
    getWorkouts,
    deleteWorkout,
    updateWorkout
} = require('../controllers/workoutController')

const requireAuth = require('../middleware/requireAuth')

const router = express.Router()

//require auth for all workout routes
router.use(requireAuth)

//GET all Workouts
router.get('/',getWorkouts)

//Get a single workout
router.get('/:id',getSingleWorkout)

//Post a new workout
router.post('/',createWorkout)

//DELETE the workout
router.delete('/:id',deleteWorkout)

//Update a workout
router.patch('/:id',updateWorkout)


module.exports = router