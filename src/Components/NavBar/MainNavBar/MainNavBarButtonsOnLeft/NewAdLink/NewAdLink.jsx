import React from 'react'
import { NavLink } from 'react-router-dom'

export default function NewAdLink() {
    return (
        <NavLink className='new-ad-link' to={'new-ad'}>
            פרסום מודעה חדשה +
        </NavLink>
    )
}
