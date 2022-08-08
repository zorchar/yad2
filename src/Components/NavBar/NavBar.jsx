import React from 'react'
import { useLocation } from 'react-router-dom';
import MainNavBar from './MainNavBar/MainNavBar'
import SubNavBar from './SubNavBar/SubNavBar'

export default function NavBar() {
    const location = useLocation()

    return (
        <>
            <MainNavBar />
            {location.pathname.includes('/realestate') && <SubNavBar />}
        </>
    )
}
