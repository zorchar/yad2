import React from 'react'
import IconedNavLink from '../../IconedNavLink/IconedNavLink'

export default function SubNavBarButtonsOnRight() {
    return (
        <div className='side-wrapper'>
            <IconedNavLink to={'realestate/forsale'} text={'מכירה'} />
            <IconedNavLink to={'realestate/rent'} text={'השכרה'} />
            <IconedNavLink to={'realestate/roommates'} text={'דירות שותפים'} />
            <IconedNavLink to={'realestate/commercial'} text={'נדל"ן מסחרי'} />
        </div>
    )
}
