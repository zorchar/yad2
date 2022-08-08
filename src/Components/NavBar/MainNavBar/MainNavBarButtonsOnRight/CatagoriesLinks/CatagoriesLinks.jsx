import React from 'react'
import IconedNavLink from '../../../IconedNavLink/IconedNavLink'

export default function CatagoriesLinks() {
    return (
        <>
            <IconedNavLink text='נדל"ן' to={'realestate'} />
            {<IconedNavLink text='רכב' to={'vehicle'} /> /*under construction */}
            <IconedNavLink text='יד שנייה' to={'used'} />
            <IconedNavLink text='IL דרושים' to={'wanted'} />
            <IconedNavLink text='עסקים למכירה' to={'business-for-sale'} />
            <IconedNavLink text='חיות מחמד' to={'pets'} />
            <IconedNavLink text='בעלי מקצוע' to={'proffesions'} />
            <IconedNavLink text='...עוד' to={'more'} />
        </>
    )
}
