import React from 'react'
import LabelAndTextInput from '../../LabelAndTextInput/LabelAndTextInput'

export default function InputAddressNumber() {
    return (
        <>
            {/* <label htmlFor="address-number">מס' בית*</label>
            <div className='input-wrapper'>
                <input name='address-number' type="text" placeholder='הכנסת שם הרחוב' />
                <i className="fa-solid fa-xmark"></i>
            </div> */}
            <LabelAndTextInput name={'addressNumber'} label='מס בית*' />
        </>
    )
}
