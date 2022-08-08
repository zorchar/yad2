import React from 'react'
import SubNavBarButtonsOnLeft from './SubNavBarButtonsOnLeft/SubNavBarButtonsOnLeft'
import SubNavBarButtonsOnRight from './SubNavBarButtonsOnRight/SubNavBarButtonsOnRight'

export default function SubNavBar() {
    return (
        <div className='sub-navbar'>
            <SubNavBarButtonsOnRight />
            <SubNavBarButtonsOnLeft />
        </div>
    )
}
