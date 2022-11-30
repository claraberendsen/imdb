import React from 'react'

export type AuthContextType = {
    authenticated: boolean
    setAuthenticated: (authenticated: boolean) => void
}

export const AuthContext = React.createContext<AuthContextType | null>(null);
