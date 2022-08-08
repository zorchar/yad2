import React, { useEffect, useState } from 'react'
import MainNavBarButtonsOnLeft from './MainNavBarButtonsOnLeft/MainNavBarButtonsOnLeft'
import MainNavBarButtonsOnRight from './MainNavBarButtonsOnRight/MainNavBarButtonsOnRight'

export default function MainNavBar() {
    const [isScreenWidthLessThan1500px, setIsScreenWidthLessThan1500px] = useState(null)
    const [isScreenWidthLessThan1260px, setIsScreenWidthLessThan1260px] = useState(null)

    const handleResize = () => {
        window.innerWidth < 1500 ? setIsScreenWidthLessThan1500px(true) : setIsScreenWidthLessThan1500px(false)
        window.innerWidth < 1260 ? setIsScreenWidthLessThan1260px(true) : setIsScreenWidthLessThan1260px(false)
    }

    useEffect(() => {
        handleResize()
        window.addEventListener('resize', handleResize)
        return () => {
            window.removeEventListener('resize', handleResize)
        }
    }, [])

    return (
        <div className='main-navbar'>
            <MainNavBarButtonsOnRight isScreenWidthLessThan1260px={isScreenWidthLessThan1260px} />
            <MainNavBarButtonsOnLeft isScreenWidthLessThan1500px={isScreenWidthLessThan1500px} />
        </div>
    )
}
