import { AuthContext } from "../context/authContext";
import {useContext} from 'react'

export const useAuthContext = () =>{
    const context = useContext(AuthContext)

    if(!context){
        throw Error('useauthContext must be used inside an authContextProvider')
    }

    return context
}
