import { createContext, useReducer } from 'react'

export const WorkoutContext = createContext()

export const WorkoutsReducer = (state,action) =>{ 
    console.log("Action dispatched:", action); 
    switch(action.type){
        case 'SET_WORKOUT':
            return{
                workouts:action.payload
            }
        case 'CREATE_WORKOUT':
            return{
                workouts:[action.payload,...state.workouts]
            }
        case 'DELETE_WORKOUT':
            //console.log("Deleting workout:", action.payload);
            return {
                workouts: state.workouts.filter((w)=> w._id !== action.payload._id)
            }
        default:
            return state
    }
}

export const WorkoutContextProvider = ({children}) =>{
    const [state, dispatch] = useReducer(WorkoutsReducer,{
        workouts:null
    })

    return(
        <WorkoutContext.Provider value={{...state,dispatch}}>
            {children}
        </WorkoutContext.Provider>
    ) 
}