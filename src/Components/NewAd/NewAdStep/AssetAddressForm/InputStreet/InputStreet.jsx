import React from 'react'
import LabelAndTextInput from '../../LabelAndTextInput/LabelAndTextInput'

export default function InputStreet({ disabled, isInvalidityShown }) {
    return (
        <>
            <LabelAndTextInput
                isInvalidityShown={isInvalidityShown}
                disabled={disabled}
                name={'street'}
                label='רחוב*'
                placeholder='הכנסת שם הרחוב' />

            <span>
                המידע הזה מגיע מגוף ממשלתי, אם הרחוב שלך לא מופיע, מומלץ לבחור רחוב קרוב אליך
            </span>

            <span className='orange'>
                לא מצאת את הרחוב?
            </span>

            {!disabled && isInvalidityShown && <span>יש לבחור רחוב מתוך הרשימה</span>}
        </>
    )
}
