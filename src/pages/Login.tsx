import React, { useContext } from 'react'
import { AuthContext } from '../context/Auth'

export const Login = () => {
    const context = useContext(AuthContext)
    if(!context) {
        throw new Error('no context')
    }

    return (
        <div className='App-header'>
            <input type={'text'}/>
            <button onClick={() => context.setAuthenticated(true)}>Login</button>
        </div>
    )
}