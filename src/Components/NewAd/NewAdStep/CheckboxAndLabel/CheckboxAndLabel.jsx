import React from 'react'
import { useContext } from 'react'
import { toggleInput } from '../../../../actions/newAdActions'
import { NewAdContext } from '../../../../context/NewAdContext'

export default function CheckboxAndLabel({ name, label }) {
    const { newAdDispatch } = useContext(NewAdContext)

    return (
        <div className='checkbox-and-label'>
            <input onChange={name ? () => newAdDispatch(toggleInput(name)) : null} name={name} type="checkbox" className='checkbox' />
            <label htmlFor={name}>{label}</label>
        </div>
    )
}
