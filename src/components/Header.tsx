import React from 'react'
import { Navbar } from './Navbar'
import { useAuth } from '../hooks/useAuth'

export const Header = () => {
    const isAuth = useAuth()
        return <Navbar isAuth={isAuth} />
}
