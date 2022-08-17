import React from 'react'
import LabelAndTextInput from '../../LabelAndTextInput/LabelAndTextInput'

export default function InputStreet() {
    return (
        <>
            {/* <label htmlFor="street">רחוב*</label>
            <div className='input-wrapper'>
                <input name='street' type="text" placeholder='הכנסת שם הרחוב' />
                <i className="fa-solid fa-xmark"></i>
            </div>

            <span>
                המידע הזה מגיע מגוף ממשלתי, אם הרחוב שלך לא מופיע, מומלץ לבחור רחוב קרוב אליך
            </span>

            <span className='orange'>
                לא מצאת את הרחוב?
            </span> */}

            <LabelAndTextInput name={'street'} label='רחוב*' placeholder='הכנסת שם הרחוב' />

            <span>
                המידע הזה מגיע מגוף ממשלתי, אם הרחוב שלך לא מופיע, מומלץ לבחור רחוב קרוב אליך
            </span>

            <span className='orange'>
                לא מצאת את הרחוב?
            </span>
        </>
    )
}
