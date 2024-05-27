import {useEffect} from 'react'
import {useWorkoutContext} from '../hooks/useWorkoutContext'
import {useAuthContext} from '../hooks/useAuthContext'

//Components
import WorkoutDetails from '../components/workoutDetails'
import WorkoutForm from '../components/workoutForms'

const Home = () =>{
    const {workouts,dispatch} =useWorkoutContext()
    const {user} = useAuthContext()

    useEffect(() =>{
        const fetchWorkouts = async() =>{
            const response = await fetch('/api/workouts',{
                headers: {
                    'AuthoriZation' : `Bearer ${user.token}`
                }
            })
            const json = await response.json()

            if(response.ok){
                dispatch({type: 'SET_WORKOUT',payload:json})
            }
        }
        if(user){
            fetchWorkouts()
        }
    }, [dispatch,user])

    return(
        <div className="home">
            <div className='workouts'>
                {workouts && workouts.map((workout)=>(
                    <WorkoutDetails key={workout._id} workout={workout}/>
                ))}
            </div>
            <WorkoutForm/>
        </div>
    )
}

export default Home