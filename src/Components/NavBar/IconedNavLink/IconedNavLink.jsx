import React from 'react'
import { NavLink } from 'react-router-dom'
import Icon from './Icon/Icon'
import NavLinkText from './NavLinkText/NavLinkText'

const url = process.env.REACT_APP_URL
console.log(url);

export default function IconedNavLink({ isDisplayText = true, to, src, alt, text, children }) {
    return (
        <NavLink
            to={to || 'no-page'}
            className={({ isActive }) => "iconed-nav-link" + (isActive ? ' active-link' : "")}
        >
            {src && <Icon src={src} alt={alt} />}
            {isDisplayText && <NavLinkText text={text} />}
            {children}
        </NavLink>
    )
}
