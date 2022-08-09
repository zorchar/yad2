import React from 'react'
import IconedNavLink from '../../IconedNavLink/IconedNavLink'
import InitialsContainer from './InitialsContainer/InitialsContainer'
import NewAdLink from './NewAdLink/NewAdLink'

export default function MainNavBarButtonsOnLeft({ isScreenWidthLessThan1500px }) {

    return (
        <div className='side-wrapper'>

            <IconedNavLink to={'alert'} text={'התראות'} isDisplayText={!isScreenWidthLessThan1500px}>
                <i className="fa-solid fa-bell"></i>
            </IconedNavLink>

            <IconedNavLink to={'liked'} text={'מודעות שאהבתי'} isDisplayText={!isScreenWidthLessThan1500px}>
                <i className="fa-solid fa-heart"></i>
            </IconedNavLink>

            <IconedNavLink to={'me'} text={'zorchar'} isDisplayText={!isScreenWidthLessThan1500px}>
                <InitialsContainer text={'z'} />
            </IconedNavLink>

            <NewAdLink />
        </div>
    )
}
