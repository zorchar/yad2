import React from 'react'
import LabelAndTextInput from '../../LabelAndTextInput/LabelAndTextInput'

export default function InputSettlement() {
    return (
        <>
            {/* <label htmlFor="settlement">ישוב*</label>
            <div className='input-wrapper'>
                <input name='settlement' type="text" />
                <i className="fa-solid fa-xmark"></i>
            </div> */}

            <LabelAndTextInput name={'settlement'} label='ישוב*' />
        </>
    )
}
