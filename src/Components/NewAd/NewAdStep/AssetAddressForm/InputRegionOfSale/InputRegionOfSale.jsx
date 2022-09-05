import React from 'react'
import LabelAndTextInput from '../../LabelAndTextInput/LabelAndTextInput'

export default function InputRegionOfSale({ disabled, isInvalidityShown }) {
    return (
        <>
            <LabelAndTextInput isInvalidityShown={isInvalidityShown} disabled={disabled} name={'regionOfSale'} label='אזור מכירה' placeholder='אזור תל אביב יפו' />
            <span>
                המידע הזה מגיע מגוף ממשלתי, ולא ניתן לשינוי
            </span>
        </>
    )
}
