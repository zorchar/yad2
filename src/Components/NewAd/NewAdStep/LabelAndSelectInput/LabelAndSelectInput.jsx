import React, { useContext } from 'react'
import { changeInput } from '../../../../actions/newAdActions'
import { NewAdContext } from '../../../../context/NewAdContext'

export default function LabelAndSelectInput({ id, label, name, children }) {
    const { newAdState, newAdDispatch } = useContext(NewAdContext)

    return (
        <>
            <label htmlFor={id}>{label}</label>
            <select value={newAdState[name]} onChange={(e) => newAdDispatch(changeInput(name, e.target.value))} name={name} id={id}>
                {children}
            </select>
        </>
    )
}
