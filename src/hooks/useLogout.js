import { useState, useEffect } from "react";
import useAuth from "./useAuth";
import { Auth } from "../firebase/config";
import { signOut } from "firebase/auth"
import { useNavigate } from "react-router-dom"
export const useLogout = () => {
    const [isCancelled, setIsCancelled] = useState(false)
    const [error, setError] = useState(null)
    const { dispatch } = useAuth()
    const navigate = useNavigate()

    // creating a logout function
    const logout = async () => {
        setError(null)

        try {
            // dispatching a logout function
            dispatch({ type: "LOGOUT" })
            navigate('/login')
            await signOut(Auth)


            if(!isCancelled){
                setError(null)
            }
        } catch (err) {
            if(!isCancelled){
                console.log(err.message)
                setError(err.message)
            }
        }
    }

    useEffect(() => {
        return () => setIsCancelled(true)
    }, [])

    return { error, logout }
    
}