import React, { useContext } from 'react'
import { changeInput } from '../../../../actions/newAdActions'
import { NewAdContext } from '../../../../context/NewAdContext'

export default function LabelAndSelectInput({ id, label, name, children, defaultValue, isInvalidityShown }) {
    const { newAdState, newAdDispatch } = useContext(NewAdContext)

    const onChangeHandle = (e) => {
        newAdDispatch(changeInput(name, e.target.value))
    }

    return (
        <>
            <label htmlFor={id}>{label}</label>
            <select
                style={(isInvalidityShown && { border: 'solid 1px #C00' }) || null}
                value={newAdState[name]?.value}
                onChange={onChangeHandle}
                name={name}
                id={id}
                defaultValue={defaultValue}
            >
                {children}
            </select>
        </>
    )
}
