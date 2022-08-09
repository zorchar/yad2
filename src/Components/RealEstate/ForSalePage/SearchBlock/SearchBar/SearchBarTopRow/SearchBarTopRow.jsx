import React from 'react'
import IconedNavLink from '../../../../../NavBar/IconedNavLink/IconedNavLink'

export default function SearchBarTopRow() {
    return (
        <div className='search-bar__top-row'>
            <div className='top-row__headline'>
                איזה נכס למכירה תרצו לחפש?
            </div>
            <div className='get-alert-on-search-button'>
                <IconedNavLink text={'קבלו התראות במייל על החיפוש'} />
            </div>
        </div>
    )
}
