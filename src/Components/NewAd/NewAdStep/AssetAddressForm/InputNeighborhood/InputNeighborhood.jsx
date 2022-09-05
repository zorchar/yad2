import React from 'react'
import LabelAndTextInput from '../../LabelAndTextInput/LabelAndTextInput'

export default function InputNeighborhood({ disabled, isInvalidityShown }) {
    return (
        <>
            <LabelAndTextInput isInvalidityShown={isInvalidityShown} disabled={disabled} name={'neighborhood'} label='שכונה' />
            <span>
                המידע הזה מגיע מגוף ממשלתי, ולא ניתן לשינוי
            </span>


        </>
    )
}
