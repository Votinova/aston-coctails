import React from 'react'
import { NavbarMenu } from './Navbar/Navbar'
import { useAuth } from '../hooks/useAuth'

export const Header = () => {
    const isAuth = useAuth()
        return <NavbarMenu isAuth={isAuth} />
}
