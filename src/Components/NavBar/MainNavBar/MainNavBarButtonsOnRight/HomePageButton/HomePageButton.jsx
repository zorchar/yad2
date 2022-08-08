import React from 'react'
import Icon from '../../../IconedNavLink/Icon/Icon'
import { NavLink } from 'react-router-dom'

export default function HomePageButton({ src, alt }) {
    return (
        <NavLink to={'/'}>
            <Icon src={src} alt={alt} />
        </NavLink>
    )
}
