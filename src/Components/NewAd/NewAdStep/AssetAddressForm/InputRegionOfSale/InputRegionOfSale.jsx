import React from 'react'
import LabelAndTextInput from '../../LabelAndTextInput/LabelAndTextInput'

export default function InputRegionOfSale() {
    return (
        <>
            {/* <label htmlFor="region-of-sale" id='region-of-sale-label'>אזור מכירה</label>
            <div className='input-wrapper'>
                <input name='region-of-sale' type="text" placeholder='אזור תל אביב יפו' />
                <i className="fa-solid fa-xmark"></i>
            </div>

            <span>
                המידע הזה מגיע מגוף ממשלתי, ולא ניתן לשינוי
            </span> */}
            <LabelAndTextInput name={'regionOfSale'} label='אזור מכירה' placeholder='אזור תל אביב יפו' />
            <span>
                המידע הזה מגיע מגוף ממשלתי, ולא ניתן לשינוי
            </span>

        </>
    )
}
