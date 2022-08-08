import React from 'react'
import BurgerButton from './BurgerButton/BurgerButton'
import CatagoriesLinks from './CatagoriesLinks/CatagoriesLinks'
import HomePageButton from './HomePageButton/HomePageButton'
import yad2Logo from '../../../../assets/icons/yad2Logo.png'

export default function MainNavBarButtonsOnRight({ isScreenWidthLessThan1260px }) {
    return (
        <div className='side-wrapper'>
            <HomePageButton src={yad2Logo} alt={'לוגו יד2'} />
            {isScreenWidthLessThan1260px && <BurgerButton />}
            {!isScreenWidthLessThan1260px && <CatagoriesLinks />}
        </div>
    )
}
