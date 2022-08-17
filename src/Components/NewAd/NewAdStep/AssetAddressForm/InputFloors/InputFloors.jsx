import React from 'react'
import LabelAndTextInput from '../../LabelAndTextInput/LabelAndTextInput'

export default function InputFloors() {
    return (
        <div className='flex-row-align-end'>
            <div className='flex-column'>
                <LabelAndTextInput name='floor' placeholder='הכנסת מספר קומה' label='קומה*' />
            </div>
            <div className='flex-column'>
                <LabelAndTextInput name='floorsInBuilding' placeholder='הכנסת סה"כ קומות' label='סה"כ קומות בבניין*' />
            </div>
            <div className='flex-row-center'>
                <input name='is-on-stilts' type="checkbox" className='checkbox' />
                <label htmlFor="is-on-stilts">על עמודים</label>
            </div>
        </div>
    )
}
