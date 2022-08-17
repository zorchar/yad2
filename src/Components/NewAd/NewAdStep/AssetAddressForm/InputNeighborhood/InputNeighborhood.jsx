import React from 'react'
import LabelAndTextInput from '../../LabelAndTextInput/LabelAndTextInput'

export default function InputNeighborhood() {
    return (
        <>
            {/* <label htmlFor="neighborhood">שכונה</label>
            <div className='input-wrapper'>
                <input name='neighborhood' type="text" placeholder='' />
                <i className="fa-solid fa-xmark"></i>
            </div>

            <span>
                המידע הזה מגיע מגוף ממשלתי, ולא ניתן לשינוי
            </span> */}
            <LabelAndTextInput name={'neighborhood'} label='שכונה' />
            <span>
                המידע הזה מגיע מגוף ממשלתי, ולא ניתן לשינוי
            </span>


        </>
    )
}
