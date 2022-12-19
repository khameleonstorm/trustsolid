import { useEffect } from 'react'
import { createContext, useReducer } from 'react'
import { Auth } from "../firebase/config"

export const AuthContext = createContext()

export const AuthReducer = (state, action) => {
    switch (action.type) {
        case 'LOGIN':
            return {...state, user: action.payload}
        case 'LOGOUT':
            return {...state, user: null}
        case 'AUTH_STATE_CHANGED':
            return {...state, user: action.payload, authIsReady: true}
        case 'HIDE_MENU':
            return {...state, hideMenu: action.payload}
        case 'SHOW_CHAT':
            return {...state, showChat: action.payload}
    
        default:
            return state
    }
}

export const AuthProvider = ({children}) => {
    const [state, dispatch] = useReducer(AuthReducer, {user: null, authIsReady: false, hideMenu: false, showChat: false})

    useEffect(() => {
        const unsub = Auth.onAuthStateChanged(user => {
            dispatch({type: "AUTH_STATE_CHANGED", payload: user})
            unsub()
        })
    }, [])


  return (
    <AuthContext.Provider value={{...state, dispatch}}>
        {children}
    </AuthContext.Provider>
  )
}
