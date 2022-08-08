import React from 'react'
import IconedNavLink from '../../IconedNavLink/IconedNavLink'

export default function SubNavBarButtonsOnLeft() {
    return (
        <div className='side-wrapper'>
            <IconedNavLink to={'realestate/1'} text={'יד2 ביטוח דירה'} />
            <IconedNavLink to={'realestate/2'} text={'כונס נכסים'} />
            <IconedNavLink to={'realestate/3'} text={'דורון - העוזר האישי'} />
            <IconedNavLink to={'realestate/4'} text={'יד1 דירות חדשות'} />
            <IconedNavLink to={'realestate/5'} text={'הערכת שווי נכס'} />
        </div>
    )
}
