import React, { useContext } from 'react'
import { useState } from 'react'
import { changeInput } from '../../../../../actions/newAdActions'
import { NewAdContext } from '../../../../../context/NewAdContext'

export default function NoneToThreePicker({ name, label, id }) {

    const { newAdState, newAdDispatch } = useContext(NewAdContext)

    const [activeButton, setActiveButton] = useState({ className: null })

    const onClickHandle = (e) => {
        if (e.target.className === 'picker-wrapper') return

        activeButton.className = ''
        setActiveButton(e.target)
        e.target.className = 'active'

        newAdDispatch(changeInput(name, e.target.innerHTML))
    }

    return (
        <>
            <label htmlFor={id}>{label}</label>
            <div onClick={onClickHandle} className='picker-wrapper'>
                <div className={newAdState[name] === 'ללא' ? 'active' : ''}>ללא</div>
                <div className={newAdState[name] === '1' ? 'active' : ''}>1</div>
                <div className={newAdState[name] === '2' ? 'active' : ''}>2</div>
                <div className={newAdState[name] === '3' ? 'active' : ''}>3</div>
            </div>
        </>
    )
}
