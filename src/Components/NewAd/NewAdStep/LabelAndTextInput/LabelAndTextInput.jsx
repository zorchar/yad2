import React from 'react'
import { useRef } from 'react'
import { useContext } from 'react'
import { changeInput } from '../../../../actions/newAdActions'
import { NewAdContext } from '../../../../context/NewAdContext'

export default function LabelAndTextInput({ placeholder, name, label }) {
    const { newAdState, newAdDispatch } = useContext(NewAdContext)

    const inputRef = useRef(null)

    return (
        <>
            <label htmlFor={name}>{label}</label>
            <div className='input-wrapper'>
                <input ref={inputRef} onChange={(e) => newAdDispatch(changeInput(name, e.target.value))} name={name} type='text' placeholder={placeholder} />
                {newAdState[name] && <i className="fa-solid fa-xmark" onClick={() => {
                    newAdDispatch(changeInput(name, ''))
                    inputRef.current.value = ''
                }}></i>}
            </div>
        </>
    )
}
